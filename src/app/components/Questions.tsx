'use client'
import React, { useState } from "react";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}
const FAQSection: React.FC = () =>{
   const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: "001",
      number: "001",
      question: "Why you should choose Artisans?",
      answer: "Acercamos a sus trayectorias de exilio abre nuevas narrativas sobre sus memorias y aprendizajes vitales. Relatos que ponen en valor el otro lado de la historia menos visible de estos creadores y que nos hace preguntarnos."
    },
    {
      id: "002", 
      number: "002",
      question: "How Artisans work for you?",
      answer: "Acercamos a sus trayectorias de exilio abre nuevas narrativas sobre sus memorias y aprendizajes vitales. Relatos que ponen en valor el otro lado de la historia menos visible de estos creadores y que nos hace preguntarnos."
    },
    {
      id: "003",
      number: "003", 
      question: "Why spongebob warnanya kuning?",
      answer: "Acercamos a sus trayectorias de exilio abre nuevas narrativas sobre sus memorias y aprendizajes vitales. Relatos que ponen en valor el otro lado de la historia menos visible de estos creadores y que nos hace preguntarnos."
    }
  ];

  const toggleExpanded = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };
  return (
    <section className="questions-section" id="questions-section">
      <div className="questions-content">
        <div className="space-y-4">
        {faqData.map((item) => (
          <div 
            key={item.id}
            className={`transition-all duration-300 ease-in-out ${
              expandedItem === item.id ? 'bg-white shadow-md' : 'bg-transparent'
            } rounded-lg overflow-hidden`}
          >
            <button
              onClick={() => toggleExpanded(item.id)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white hover:shadow-sm transition-all duration-200"
              aria-expanded={expandedItem === item.id ? "true" : "false"}
              aria-controls={`faq-content-${item.id}`}
              aria-label={`Toggle ${item.question}`}
            >
              <div className="flex items-start gap-6 flex-1">
                <span className="text-2xl font-light text-gray-400 min-w-[60px]">
                  {item.number}
                </span>
                <h3 className="text-xl font-medium text-gray-900 leading-tight">
                  {item.question}
                </h3>
              </div>
              
              <div className={`flex-shrink-0 ml-4 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-400 ease-out ${
                expandedItem === item.id ? 'rotate-45 bg-gray-900 border-gray-900' : 'hover:border-gray-400'
              }`}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                  className={`transition-colors duration-300 ${
                    expandedItem === item.id ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  <path 
                    d="M8 3V13M3 8H13" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>

            <div
              id={`faq-content-${item.id}`}
              className={`grid transition-all duration-500 ease-out overflow-hidden ${
                expandedItem === item.id 
                  ? 'grid-rows-[1fr] opacity-100' 
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="min-h-0">
                <div className="px-6 pb-6 pt-0">
                  <div className="ml-[84px]"> {/* Align with question text */}
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
