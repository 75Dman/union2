import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

// Duplicated from ChatMessage.tsx for styling consistency.
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

const AgreementModal: React.FC<AgreementModalProps> = ({ isOpen, onClose, title, content }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const processedContent = formatBotMessage(content);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="agreement-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-300 sticky top-0 bg-white z-10">
          <h2 id="agreement-modal-title" className="text-xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-3xl leading-none font-bold p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Close"
          >
            &times;
          </button>
        </header>
        <main className="overflow-y-auto p-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={articleMarkdownComponents}>
            {processedContent}
          </ReactMarkdown>
        </main>
        <footer className="p-4 border-t border-gray-300 sticky bottom-0 bg-white">
          <button
            onClick={onClose}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AgreementModal;
