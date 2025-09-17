/// <reference types="vite/client" />
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, type Chat } from '@google/genai';
import { Sender, type Message } from './types';
import { INITIAL_BOT_MESSAGE_SRE, INITIAL_BOT_MESSAGE_SRC } from './constants';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import TypingIndicator from './components/TypingIndicator';
import AgreementModal from './components/AgreementModal';
import { documentText as documentTextSRE } from './documentContext';
import { documentTextChargehands as documentTextSRC } from './documentContextChargehands';

type AgreementType = 'sre' | 'src';

const App: React.FC = () => {
  const [activeAgreement, setActiveAgreement] = useState<AgreementType>('sre');
  const [messages, setMessages] = useState<Record<AgreementType, Message[]>>({
    sre: [INITIAL_BOT_MESSAGE_SRE],
    src: [INITIAL_BOT_MESSAGE_SRC],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', text: '' });
  const chatInstanceSrE = useRef<Chat | null>(null);
  const chatInstanceSrC = useRef<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const initializeChat = useCallback(async () => {
    try {
      if (!import.meta.env.VITE_API_KEY) {
        console.error("VITE_API_KEY environment variable not set.");
        const errorMsgSre: Message = {
          id: 'error-api-key-sre',
          sender: Sender.BOT,
          text: "I'm sorry, but I can't connect right now. The API key is missing. Please make sure it's configured correctly.",
        };
        const errorMsgSrc: Message = {
          id: 'error-api-key-src',
          sender: Sender.BOT,
          text: "I'm sorry, but I can't connect right now. The API key is missing. Please make sure it's configured correctly.",
        };
        setMessages(prev => ({ sre: [...prev.sre, errorMsgSre], src: [...prev.src, errorMsgSrc] }));
        return;
      }

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

      const systemInstructionSRE = `You are a helpful AI assistant knowledgeable about the collective agreement for the Ship Repair (East) (SR (E)) group. Your task is to answer questions based *only* on the text of the agreement provided below.

When a user asks about the pay rate for a specific job classification, you MUST respond by displaying the full pay table for that classification's pay group. You MUST also list all job classifications that fall within that same pay group. The specific classification the user asked about MUST be included in this list and formatted in bold (for example, using markdown like **EME-10 Marine Mechanic Tech.**). Clearly state the Pay Group number.

If the user's question cannot be answered from the provided text, you must state that the information is not available in the agreement. Do not use any external knowledge or make assumptions.

Here is the full text of the agreement:
---
${documentTextSRE}
---
`;

      const systemInstructionSRC = `You are a helpful AI assistant knowledgeable about the collective agreement for the Ship Repair (All Chargehand and Production Supervisor Employees Located on the East Coast) (SR (C)) group. Your task is to answer questions based *only* on the text of the agreement provided below.

When a user asks about the pay rate for a specific job classification, you MUST respond by displaying the full pay table for that classification's pay group. You MUST also list all job classifications that fall within that same pay group. The specific classification the user asked about MUST be included in this list and formatted in bold (for example, using markdown like **SR CPS 1**). Clearly state the Pay Group number.

If the user's question cannot be answered from the provided text, you must state that the information is not available in the agreement. Do not use any external knowledge or make assumptions.

Here is the full text of the agreement:
---
${documentTextSRC}
---
`;

      chatInstanceSrE.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction: systemInstructionSRE },
      });

      chatInstanceSrC.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction: systemInstructionSRC },
      });

    } catch (error) {
      console.error("Failed to initialize Gemini AI:", error);
      const errorMsg: Message = {
        id: 'error-init',
        sender: Sender.BOT,
        text: "I'm having trouble initializing. Please check the console for errors.",
      };
      setMessages(prev => ({ sre: [...prev.sre, errorMsg], src: [...prev.src, errorMsg] }));
    }
  }, []);

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading, activeAgreement]);

  const handleSendMessage = useCallback(async (text: string) => {
    const chatInstance = activeAgreement === 'sre' ? chatInstanceSrE.current : chatInstanceSrC.current;

    if (!chatInstance) {
      console.error(`Chat for ${activeAgreement} not initialized.`);
      return;
    }

    setIsLoading(true);

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: Sender.USER,
    };
    
    setMessages(prev => ({
        ...prev,
        [activeAgreement]: [...prev[activeAgreement], userMessage]
    }));

    try {
      const stream = await chatInstance.sendMessageStream({ message: text });
      
      const botMessageId = `bot-${Date.now()}`;
      let fullResponse = '';
      let botMessageAdded = false;

      for await (const chunk of stream) {
        if (!botMessageAdded) {
            const botMessage: Message = { id: botMessageId, text: '', sender: Sender.BOT };
            setMessages(prev => ({
                ...prev,
                [activeAgreement]: [...prev[activeAgreement], botMessage]
            }));
            botMessageAdded = true;
        }

        fullResponse += chunk.text;
        setMessages(prev => {
            const currentMessages = prev[activeAgreement];
            return {
                ...prev,
                [activeAgreement]: currentMessages.map(msg =>
                    msg.id === botMessageId ? { ...msg, text: fullResponse } : msg
                )
            };
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorText = error instanceof Error ? error.message : "An unknown error occurred.";
      const errorMsg: Message = {
          id: `bot-error-${Date.now()}`,
          text: `Sorry, something went wrong: ${errorText}`,
          sender: Sender.BOT,
      };
      setMessages(prev => ({
          ...prev,
          [activeAgreement]: [...prev[activeAgreement], errorMsg]
      }));
    } finally {
      setIsLoading(false);
    }
  }, [activeAgreement]);

  const handleViewFullAgreement = useCallback((agreementType: AgreementType) => {
    const documentText = agreementType === 'sre' ? documentTextSRE : documentTextSRC;
    const title = agreementType === 'sre' 
      ? 'Ship Repair (East) Collective Agreement' 
      : 'Chargehands (East Coast) Collective Agreement';
    
    setModalContent({ title, text: documentText });
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const currentMessages = messages[activeAgreement];

  const renderTabs = () => (
    <div className="border-b border-gray-700 bg-gray-800">
      <div className="flex">
        <button
          onClick={() => setActiveAgreement('sre')}
          aria-selected={activeAgreement === 'sre'}
          className={`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${
            activeAgreement === 'sre'
              ? 'bg-gray-900 text-white border-b-2 border-blue-500'
              : 'text-gray-400 hover:bg-gray-700'
          }`}
        >
          Ship Repair (East)
        </button>
        <button
          onClick={() => setActiveAgreement('src')}
          aria-selected={activeAgreement === 'src'}
          className={`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${
            activeAgreement === 'src'
              ? 'bg-gray-900 text-white border-b-2 border-blue-500'
              : 'text-gray-400 hover:bg-gray-700'
          }`}
        >
          Chargehands (East Coast)
        </button>
      </div>
      <div className="flex">
        <div className="w-1/2 p-2">
          <button
            onClick={() => handleViewFullAgreement('sre')}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="View full Ship Repair (East) agreement"
          >
            View Full Agreement
          </button>
        </div>
        <div className="w-1/2 p-2">
          <button
            onClick={() => handleViewFullAgreement('src')}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="View full Chargehands (East Coast) agreement"
          >
            View Full Agreement
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white max-w-4xl mx-auto border-x border-gray-700">
        <header className="p-4 border-b border-gray-700 shadow-md bg-gray-800">
            <h1 className="text-2xl font-bold text-center">Union Agreement Chat Bot</h1>
        </header>
        {renderTabs()}
        <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {currentMessages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && <TypingIndicator />}
        </div>
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        <AgreementModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={modalContent.title}
          content={modalContent.text}
        />
    </div>
  );
};

export default App;
