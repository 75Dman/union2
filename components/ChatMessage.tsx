import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Sender, type Message } from '../types';
import { BotIcon } from './icons';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === Sender.BOT;

  // Shared markdown components for tables, used for user messages
  const sharedMarkdownComponents = {
    table: ({ node, ...props }: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & { node?: unknown }) => 
      <div className="overflow-x-auto my-2"><table className="w-full text-sm text-left text-gray-300" {...props} /></div>,
    thead: ({ node, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & { node?: unknown }) => 
      <thead className="text-xs text-gray-200 uppercase bg-gray-600" {...props} />,
    tbody: ({ node, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & { node?: unknown }) => 
      <tbody {...props} />,
    tr: ({ node, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> & { node?: unknown }) => 
      <tr className="border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700" {...props} />,
    th: ({ node, ...props }: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> & { node?: unknown }) => 
      <th scope="col" className="px-4 py-2 border border-gray-500" {...props} />,
    td: ({ node, ...props }: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> & { node?: unknown }) => 
      <td className="px-4 py-2 border border-gray-500" {...props} />,
  };
  
  // Pre-process bot messages to add markdown for styling
  const formatBotMessage = (text: string): string => {
    return text
      // Article X: title -> # Article **X**: title
      .replace(/^(Article )(\d+)(:[^\r\n]+)/gim, '\n# $1**$2**$3\n')
      // Pay group X -> ## Pay group X
      .replace(/^(Pay group \d+)/gim, '\n## $1\n')
      // **SR CPS 1 ... -> ## SR CPS 1 ...
      .replace(/\*\*(SR CPS \d+ annual rates of pay \(in dollars\))\*\*/gm, '## $1')
      // I. Basic hourly ... -> ### I. Basic hourly ...
      .replace(/^(I+)\.\s(.*)/gm, '### $1. $2')
      // Trade names, e.g., ELE-2 Trades Helper -> * **ELE-2** Trades Helper
      .replace(/^([A-Z]{3}-\d{1,2})\s(.+)/gm, '* **$1** $2')
      // 1.01, 17.01 No employee... -> **1.01**, **17.01** No employee...
      .replace(/^(\d{1,2}\.\d{2})/gm, '**$1**')
      // indented i., ii., etc. -> nested list item
      .replace(/^\s+([ivxcl]+)\.\s/gim, '  * $&')
      // a., b., c. etc. -> list item
      .replace(/^([a-z])\.\s/gim, '* $&');
  };


  if (isBot) {
    const processedText = formatBotMessage(message.text);

    // Specific components for rendering all bot messages with the requested document style
    const articleMarkdownComponents = {
        h1: ({node, ...props}: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => <h1 className="text-3xl font-bold mb-4 text-black" {...props} />,
        h2: ({node, ...props}: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => <h2 className="text-2xl font-bold mt-6 mb-3 text-black" {...props} />,
        h3: ({node, ...props}: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-black" {...props} />,
        p: ({node, ...props}: React.HTMLAttributes<HTMLParagraphElement> & { node?: any }) => {
            const significantChildren = (node?.children || []).filter((child: any) => {
                if (child.type === 'text' && child.value.trim() === '') return false;
                return true;
            });

            const isClauseNumberOnly = significantChildren.length === 1 &&
                                       significantChildren[0].type === 'element' &&
                                       significantChildren[0].tagName === 'strong';

            const pClassName = isClauseNumberOnly
              ? "mb-1 text-black text-base leading-relaxed"
              : "mb-3 text-black text-base leading-relaxed";

            return <p className={pClassName} {...props} />;
        },
        strong: ({node, ...props}: React.HTMLAttributes<HTMLElement> & { node?: unknown }) => <strong className="font-bold text-black" {...props} />,
        ul: ({node, ...props}: React.HTMLAttributes<HTMLUListElement> & { node?: unknown }) => <ul className="list-none pl-8" {...props} />,
        li: ({node, ...props}: React.HTMLAttributes<HTMLLIElement> & { node?: unknown }) => <li className="mb-2 text-black text-base leading-relaxed" {...props} />,
        // Light-theme table styles
        table: ({ node, ...props }: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & { node?: unknown }) => 
          <div className="overflow-x-auto my-2"><table className="w-full text-sm text-left text-gray-700" {...props} /></div>,
        thead: ({ node, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & { node?: unknown }) => 
          <thead className="text-xs text-gray-800 uppercase bg-gray-200" {...props} />,
        tbody: ({ node, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & { node?: unknown }) => 
          <tbody {...props} />,
        tr: ({ node, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> & { node?: unknown }) => 
          <tr className="border-b border-gray-300 odd:bg-white even:bg-gray-100" {...props} />,
        th: ({ node, ...props }: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> & { node?: unknown }) => 
          <th scope="col" className="px-4 py-2 border border-gray-400" {...props} />,
        td: ({ node, ...props }: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> & { node?: unknown }) => 
          <td className="px-4 py-2 border border-gray-400" {...props} />,
    };

    return (
      <div className="flex items-start gap-4 p-4">
        <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white bg-gray-700">
          <BotIcon />
        </div>
        <div className="w-full max-w-xl rounded-md bg-white p-6 shadow-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={articleMarkdownComponents}>
            {processedText}
          </ReactMarkdown>
        </div>
      </div>
    );
  }

  // User message
  return (
    <div className="flex items-start gap-4 p-4 flex-row-reverse">
      <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white bg-blue-600">
        {'U'}
      </div>
      <div className="max-w-xl rounded-lg px-4 py-2 prose prose-invert prose-p:my-1 prose-headings:my-2 bg-blue-600 text-white">
         <ReactMarkdown remarkPlugins={[remarkGfm]} components={sharedMarkdownComponents}>
          {message.text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;