import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from './button';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hi, how can I help you today?',
    isBot: true,
    timestamp: new Date(),
  },
];

const quickActions = [
  'Start Account Opening',
  'Learn About Services',
  'Schedule Consultation',
  'Get Pricing Info',
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or schedule a consultation.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    sendMessage(action);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center text-white pulse-glow"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Fullscreen Chatbot Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center justify-between p-6 border-b border-border/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Bot className="text-white" size={20} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">FutureTech Assistant</h2>
                    <p className="text-sm text-muted-foreground">Always here to help</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-destructive/10 hover:text-destructive"
                >
                  <X size={24} />
                </Button>
              </motion.div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-lg ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isBot 
                          ? 'bg-gradient-primary text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {message.isBot ? <Bot size={16} /> : <User size={16} />}
                      </div>
                      <div className={`px-4 py-2 rounded-2xl ${
                        message.isBot
                          ? 'bg-muted text-foreground'
                          : 'bg-gradient-primary text-white'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Quick Actions (only show initially) */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <p className="text-sm text-muted-foreground text-center">Quick actions:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {quickActions.map((action) => (
                        <Button
                          key={action}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickAction(action)}
                          className="text-left justify-start hover:bg-primary/5 hover:text-primary hover:border-primary/30"
                        >
                          {action}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 border-t border-border/50"
              >
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && inputValue.trim() && sendMessage(inputValue)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  />
                  <Button
                    onClick={() => inputValue.trim() && sendMessage(inputValue)}
                    disabled={!inputValue.trim()}
                    className="btn-glow"
                    size="icon"
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};