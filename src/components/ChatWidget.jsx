import React, { useState, useEffect, useRef } from 'react';

// SVG Icons as components
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

const ChatInput = React.memo(({ onSend }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
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
    <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
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
        placeholder="Ihre Nachricht..."
        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

const EmailForm = React.memo(({ onSubmit, message }) => {
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
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Email senden
      </button>
    </form>
  );
});

const ChatWidget = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [lastUserMessage, setLastUserMessage] = useState('');
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0 && !isEmailSent) {
      setMessages([{
        text: "Bereit um das beste aus Ihrer IT herauszuholen?",
        sender: 'support',
        isAutoReply: false
      }]);
    }
  }, [isOpen, isEmailSent]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text) => {
    setMessages(prev => [...prev, { 
      text, 
      sender: 'user'
    }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Keine Zeit um auf eine Antwort zu warten? Senden Sie uns eine Email und wir kommen ehestmöglichst auf Ihr Anliegen zurück",
        sender: 'support',
        isAutoReply: true
      }]);
      setLastUserMessage(text);
      setShowEmailPrompt(true);
    }, 1000);
  };

  const handleEmailSubmit = async (data) => {
    console.log('Email message:', data);
    
    setMessages(prev => [...prev, {
      text: "Vielen Dank! Wir werden uns schnellstmöglich bei Ihnen melden.",
      sender: 'support',
      isAutoReply: true
    }]);
    setShowEmailPrompt(false);
    setIsEmailSent(true);
    
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Open chat"
      >
        <MessageIcon />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white relative"> 
            <img 
              src="michi.jpg" 
              alt="Support Agent" 
              className="w-full h-full object-cover" 
            />
            <div 
              className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"
              style={{ transform: 'translate(25%, 25%)' }}
            />
          </div>
          <span className="font-semibold">Michael</span>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 p-1 rounded"
            aria-label="Minimize chat"
          >
            <MinimizeIcon />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 p-1 rounded"
            aria-label="Close chat"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
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
                      {/* Head */}
                      <rect x="8" y="4" width="16" height="16" rx="2" />
                      {/* Eyes */}
                      <circle cx="12" cy="12" r="2" fill="white" />
                      <circle cx="20" cy="12" r="2" fill="white" />
                      {/* Antenna */}
                      <line x1="16" y1="4" x2="16" y2="2" />
                      <circle cx="16" cy="1" r="1" fill="white" />
                      {/* Neck */}
                      <line x1="16" y1="20" x2="16" y2="22" />
                      {/* Body */}
                      <rect x="10" y="22" width="12" height="8" rx="2" />
                      {/* Body pattern */}
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
        <ChatInput onSend={handleSendMessage} />
      ) : isEmailSent ? (
        <div className="border-t p-4 text-center text-gray-500">
          Danke für Ihre Nachricht. Bitte überprüfen Sie Ihre E-Mails für weitere Kommunikation.
        </div>
      ) : (
        <EmailForm onSubmit={handleEmailSubmit} message={lastUserMessage} />
      )}
    </div>
  );
};

export default ChatWidget;