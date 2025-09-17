import { Sender, type Message } from './types';

export const INITIAL_BOT_MESSAGE_SRE: Message = {
    id: 'initial-message-sre',
    sender: Sender.BOT,
    text: "Hello! I am an AI assistant with expertise in the Ship Repair (East) (SR (E)) collective agreement. Please ask me any questions you have about this document.",
};

export const INITIAL_BOT_MESSAGE_SRC: Message = {
    id: 'initial-message-src',
    sender: Sender.BOT,
    text: "Hello! I am an AI assistant with expertise in the Ship Repair (Chargehands, East Coast) (SR (C)) collective agreement. Please ask me any questions you have about this document.",
};
