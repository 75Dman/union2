
import React from 'react';
import { BotIcon } from './icons';

const TypingIndicator = () => (
    <div className="flex items-center space-x-4 p-4">
        <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                <BotIcon />
            </div>
        </div>
        <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
    </div>
);

export default TypingIndicator;
