import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

// SVG Icons components remain the same
const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const MinimizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const ChatInput = React.memo(({ onSend, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
    
    // Handle iOS keyboard events
    const handleFocus = () => {
      setIsKeyboardVisible(true);
      // Delay to ensure DOM is ready
      setTimeout(() => {
        inputRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };
    
    const handleBlur = () => {
      setIsKeyboardVisible(false);
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    }

    return () => {
      if (input) {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue('');
      inputRef.current?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-2 sm:p-4 flex gap-2 sticky bottom-0 bg-white">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        placeholder={placeholder}
        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        aria-label="Send message"
      >
        <SendIcon />
      </button>
    </form>
  );
});

const EmailForm = React.memo(({ onSubmit, message, sendEmailText }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onSubmit({ email, message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-base"
      >
        {sendEmailText}
      </button>
    </form>
  );
});

const ChatWidget = () => {
  const { translations, language } = useLanguage();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [lastUserMessage, setLastUserMessage] = useState('');
  const messageEndRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (translations && isOpen) {
      setMessages(prevMessages => {
        const newMessages = [...prevMessages];
        if (newMessages.length === 0) {
          newMessages.push({
            text: translations.chat.ready,
            sender: 'support',
            isAutoReply: false,
            messageId: 'welcome'
          });
        } else if (newMessages[0].messageId === 'welcome') {
          newMessages[0] = {
            text: translations.chat.ready,
            sender: 'support',
            isAutoReply: false,
            messageId: 'welcome'
          };
        }
        return newMessages;
      });

      setMessages(prevMessages => {
        return prevMessages.map(msg => {
          if (msg.isAutoReply) {
            return {
              ...msg,
              text: translations.chat.waitResponse
            };
          }
          return msg;
        });
      });
    }
  }, [translations, language, isOpen]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text) => {
    setMessages(prev => [...prev, { 
      text, 
      sender: 'user',
      messageId: 'user-' + Date.now()
    }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: translations.chat.waitResponse,
        sender: 'support',
        isAutoReply: true,
        messageId: 'auto-reply-' + Date.now()
      }]);
      setLastUserMessage(text);
      setShowEmailPrompt(true);
    }, 1000);
  };

  const handleEmailSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error('Failed to send message');
      }

      setMessages(prev => [...prev, {
        text: translations.chat.thankYou,
        sender: 'support',
        messageId: 'thank-you-' + Date.now()
      }]);
      setShowEmailPrompt(false);
      setIsEmailSent(true);

      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => {
          setMessages([]);
          setShowEmailPrompt(false);
          setIsEmailSent(false);
        }, 500);
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        text: translations.chat.error,
        sender: 'support',
        messageId: 'error-' + Date.now()
      }]);
    }
  };

  if (!translations) return null;

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50 md:bottom-8 md:right-8"
        aria-label="Open chat"
      >
        <MessageIcon />
      </button>
    );
  }

  const chatWindowClasses = isMobile
    ? "fixed inset-x-0 bottom-0 bg-white z-50 flex flex-col h-[85vh] rounded-t-xl shadow-xl"
    : "fixed bottom-4 right-4 w-96 max-h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 z-50";

  return (
    <div className={chatWindowClasses}>
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white relative"> 
            <img 
              src="michi.jpg" 
              alt="Support Agent" 
              className="w-full h-full object-cover" 
            />
            <div 
              className="absolute bottom-0 right-0 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500 border-2 border-white"
              style={{ transform: 'translate(25%, 25%)' }}
            />
          </div>
          <span className="font-semibold">Michael</span>
        </div>
        <div className="space-x-2">
          {!isMobile && (
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded"
              aria-label="Minimize chat"
            >
              <MinimizeIcon />
            </button>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 p-1 rounded"
            aria-label="Close chat"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className={`${isMobile ? 'flex-1' : 'h-96'} overflow-y-auto p-4 space-y-4 pb-16`}>
        {messages.map((message) => (
          <div
            key={message.messageId}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'support' && (
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                {message.isAutoReply ? (
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                    <svg 
                      viewBox="0 0 32 32"
                      className="w-6 h-6"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="8" y="4" width="16" height="16" rx="2" />
                      <circle cx="12" cy="12" r="2" fill="white" />
                      <circle cx="20" cy="12" r="2" fill="white" />
                      <line x1="16" y1="4" x2="16" y2="2" />
                      <circle cx="16" cy="1" r="1" fill="white" />
                      <line x1="16" y1="20" x2="16" y2="22" />
                      <rect x="10" y="22" width="12" height="8" rx="2" />
                      <line x1="13" y1="25" x2="19" y2="25" />
                      <line x1="13" y1="27" x2="19" y2="27" />
                    </svg>
                  </div>
                ) : (
                  <img
                    src="michi.jpg"
                    alt="Support Agent"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            )}
            <div
              className={`max-w-[75%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      {!showEmailPrompt && !isEmailSent ? (
        <ChatInput 
          onSend={handleSendMessage} 
          placeholder={translations.chat.placeholder}
        />
      ) : isEmailSent ? (
        <div className="border-t p-4 text-center text-gray-500">
          {translations.chat.thankYou}
        </div>
      ) : (
        <EmailForm 
          onSubmit={handleEmailSubmit} 
          message={lastUserMessage} 
          sendEmailText={translations.chat.sendEmail}
        />
      )}
    </div>
  );
};

export default ChatWidget;