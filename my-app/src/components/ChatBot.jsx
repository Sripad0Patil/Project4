import { useState, useEffect } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import '../styles/ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Q&A database with translations
  const qaDatabase = {
    en: {
      greeting: {
        patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
        response: 'Hello! Welcome to our banking app. How can I assist you today?'
      },
      appInfo: {
        patterns: ['what is this app', 'what can i do', 'app features', 'bank features', 'what is bank'],
        response: 'This is a modern banking application that allows you to open accounts, manage documents, and track your application status. You can perform various banking operations securely from your device.'
      },
      account: {
        patterns: ['open account', 'new account', 'opening account', 'how to open account'],
        response: 'You can start opening a new account directly through this app. Just follow the steps shown in the "Open Account" section.'
      },
      documents: {
        patterns: ['required documents', 'documents', 'what documents', 'needed documents'],
        response: 'This app will guide you to upload your Aadhar, PAN, photo, and address proof as part of the process.'
      },
      status: {
        patterns: ['application status', 'status', 'check status', 'track application'],
        response: 'You can check the status of your application anytime under the "Track Status" section in this app.'
      },
      updates: {
        patterns: ['document updates', 'update documents', 'change documents', 'modify documents', 'change address proof'],
        response: 'You can update your documents anytime within the app from the "Update Documents" section.'
      },
      security: {
        patterns: ['security information', 'security', 'safety', 'protect account'],
        response: 'This app uses encrypted channels. Your data stays safe. Never share your credentials with anyone, even inside the chat.'
      },
      support: {
        patterns: ['getting help or support', 'help', 'support', 'customer service'],
        response: 'You can chat with this assistant anytime. Type your question below, and I\'ll help you right here.'
      },
      branch: {
        patterns: ['go to branch', 'visit branch', 'need to go branch', 'branch visit', 'physical branch'],
        response: 'No, you don\'t need to go to the branch. All processes are fully online within this app.'
      },
      default: "I'm sorry, I couldn't understand your query. Please try rephrasing or contact our customer support for assistance."
    },
    hi: {
      greeting: {
        patterns: ['नमस्ते', 'हैलो', 'हाय', 'शुभ प्रभात', 'शुभ दोपहर', 'शुभ संध्या'],
        response: 'नमस्ते! हमारे बैंकिंग ऐप में आपका स्वागत है। मैं आपकी कैसे मदद कर सकता/सकती हूं?'
      },
      appInfo: {
        patterns: ['यह ऐप क्या है', 'मैं क्या कर सकता हूं', 'ऐप की विशेषताएं', 'बैंक की विशेषताएं', 'बैंक क्या है'],
        response: 'यह एक आधुनिक बैंकिंग एप्लिकेशन है जो आपको खाता खोलने, दस्तावेज़ प्रबंधित करने और आवेदन की स्थिति ट्रैक करने की सुविधा देता है। आप अपने डिवाइस से सुरक्षित रूप से विभिन्न बैंकिंग कार्य कर सकते हैं।'
      },
      account: {
        patterns: ['खाता खोलें', 'नया खाता', 'खाता खोलना', 'खाता कैसे खोलें'],
        response: 'आप इस ऐप के माध्यम से सीधे खाता खोलना शुरू कर सकते हैं। बस "खाता खोलें" अनुभाग में दिए गए चरणों का पालन करें।'
      },
      documents: {
        patterns: ['आवश्यक दस्तावेज', 'दस्तावेज', 'क्या दस्तावेज', 'जरूरी दस्तावेज'],
        response: 'यह ऐप आपको आधार, पैन, फोटो और पता प्रमाण अपलोड करने के लिए मार्गदर्शन करेगा।'
      },
      status: {
        patterns: ['आवेदन की स्थिति', 'स्थिति', 'स्थिति जांचें', 'आवेदन ट्रैक'],
        response: 'आप इस ऐप में "स्थिति ट्रैक करें" अनुभाग में जाकर कभी भी अपने आवेदन की स्थिति देख सकते हैं।'
      },
      updates: {
        patterns: ['दस्तावेज अपडेट', 'दस्तावेज बदलें', 'दस्तावेज संशोधित करें', 'पता प्रमाण बदलें'],
        response: 'आप ऐप के "दस्तावेज़ अपडेट करें" अनुभाग से कभी भी अपने दस्तावेज़ अपडेट कर सकते हैं।'
      },
      security: {
        patterns: ['सुरक्षा जानकारी', 'सुरक्षा', 'सुरक्षित', 'खाता सुरक्षा'],
        response: 'यह ऐप एन्क्रिप्टेड चैनल का उपयोग करता है। आपका डेटा सुरक्षित है। अपने विवरण किसी के साथ साझा न करें, यहां तक कि चैट में भी नहीं।'
      },
      support: {
        patterns: ['सहायता या समर्थन प्राप्त करना', 'सहायता', 'समर्थन', 'ग्राहक सेवा'],
        response: 'आप किसी भी समय इस सहायक से चैट कर सकते हैं। नीचे अपना प्रश्न टाइप करें, मैं यहीं आपकी मदद करूंगा।'
      },
      branch: {
        patterns: ['शाखा जाना', 'शाखा में जाना', 'शाखा जाना पड़ेगा', 'शाखा भ्रमण', 'फिजिकल शाखा'],
        response: 'नहीं, आपको शाखा जाने की आवश्यकता नहीं है। इस ऐप के अंदर सभी प्रक्रियाएं पूरी तरह ऑनलाइन हैं।'
      },
      default: "मुझे खेद है, मैं आपके प्रश्न को समझ नहीं पाया/पाई। कृपया इसे दोबारा लिखें या हमारे ग्राहक सहायता से संपर्क करें।"
    },
    kn: {
      greeting: {
        patterns: ['ನಮಸ್ಕಾರ', 'ಹಲೋ', 'ಹಾಯ್', 'ಶುಭೋದಯ', 'ಶುಭ ಮಧ್ಯಾಹ್ನ', 'ಶುಭ ಸಂಜೆ'],
        response: 'ನಮಸ್ಕಾರ! ನಮ್ಮ ಬ್ಯಾಂಕಿಂಗ್ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಸುಸ್ವಾಗತ. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?'
      },
      appInfo: {
        patterns: ['ಈ ಅಪ್ಲಿಕೇಶನ್ ಏನು', 'ನಾನು ಏನು ಮಾಡಬಹುದು', 'ಅಪ್ಲಿಕೇಶನ್ ವೈಶಿಷ್ಟ್ಯಗಳು', 'ಬ್ಯಾಂಕ್ ವೈಶಿಷ್ಟ್ಯಗಳು', 'ಬ್ಯಾಂಕ್ ಏನು'],
        response: 'ಇದು ಆಧುನಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಅಪ್ಲಿಕೇಶನ್ ಆಗಿದೆ. ಇದು ಖಾತೆ ತೆರೆಯುವುದು, ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು ಮತ್ತು ಅರ್ಜಿಯ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವ ಸಾಮರ್ಥ್ಯವನ್ನು ನಿಮಗೆ ನೀಡುತ್ತದೆ. ನಿಮ್ಮ ಸಾಧನದಿಂದ ಸುರಕ್ಷಿತವಾಗಿ ವಿವಿಧ ಬ್ಯಾಂಕಿಂಗ್ ಕಾರ್ಯಗಳನ್ನು ನೀವು ಮಾಡಬಹುದು.'
      },
      account: {
        patterns: ['ಖಾತೆ ತೆರೆಯಿರಿ', 'ಹೊಸ ಖಾತೆ', 'ಖಾತೆ ತೆರೆಯುವುದು', 'ಖಾತೆ ಹೇಗೆ ತೆರೆಯುವುದು'],
        response: 'ನೀವು ಈ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿಯೇ ಖಾತೆ ತೆರೆಯುವ ಪ್ರಕ್ರಿಯೆ ಪ್ರಾರಂಭಿಸಬಹುದು. "ಖಾತೆ ತೆರೆಯಿರಿ" ವಿಭಾಗದ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ.'
      },
      documents: {
        patterns: ['ಅಗತ್ಯವಿರುವ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳು', 'ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳು', 'ಯಾವ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳು', 'ಬೇಕಾದ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳು'],
        response: 'ಈ ಅಪ್ಲಿಕೇಶನ್ ನಿಮಗೆ ಆಧಾರ್, ಪ್ಯಾನ್, ಫೋಟೋ ಮತ್ತು ವಿಳಾಸದ ಪ್ರೂಫ್ ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಪ್ರಕ್ರಿಯೆಯನ್ನು ತೋರಿಸುತ್ತದೆ.'
      },
      status: {
        patterns: ['ಅರ್ಜಿ ಸ್ಥಿತಿ', 'ಸ್ಥಿತಿ', 'ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ', 'ಅರ್ಜಿ ಟ್ರ್ಯಾಕ್'],
        response: 'ಈ ಅಪ್ಲಿಕೇಶನ್‌ನ "ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ" ವಿಭಾಗದಲ್ಲಿ ನೀವು ಯಾವಾಗ ಬೇಕಾದರೂ ನಿಮ್ಮ ಅರ್ಜಿಯ ಸ್ಥಿತಿಯನ್ನು ನೋಡಬಹುದು.'
      },
      updates: {
        patterns: ['ಡಾಕ್ಯುಮೆಂಟ್ ಅಪ್ಡೇಟ್‌ಗಳು', 'ಡಾಕ್ಯುಮೆಂಟ್ ಬದಲಾಯಿಸಿ', 'ಡಾಕ್ಯುಮೆಂಟ್ ಮಾರ್ಪಡಿಸಿ', 'ವಿಳಾಸದ ಪ್ರೂಫ್ ಬದಲಾಯಿಸಿ'],
        response: 'ನೀವು ಈ ಅಪ್ಲಿಕೇಶನ್‌ನ "ಡಾಕ್ಯುಮೆಂಟ್ ಅಪ್‌ಡೇಟ್" ವಿಭಾಗದಲ್ಲಿ ಯಾವಾಗ ಬೇಕಾದರೂ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳನ್ನು ಅಪ್‌ಡೇಟ್ ಮಾಡಬಹುದು.'
      },
      security: {
        patterns: ['ಭದ್ರತಾ ಮಾಹಿತಿ', 'ಭದ್ರತೆ', 'ಸುರಕ್ಷಿತ', 'ಖಾತೆ ರಕ್ಷಣೆ'],
        response: 'ಈ ಅಪ್ಲಿಕೇಶನ್ ಎನ್‌ಕ್ರಿಪ್ಟೆಡ್ ಚಾನೆಲ್‌ಗಳನ್ನು ಬಳಸುತ್ತದೆ. ನಿಮ್ಮ ಡೇಟಾ ಸುರಕ್ಷಿತವಾಗಿದೆ. ನಿಮ್ಮ ಲಾಗಿನ್ ವಿವರಗಳನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ—even ಚಾಟ್‌ನಲ್ಲಿಯೂ ಅಲ್ಲ.'
      },
      support: {
        patterns: ['ಸಹಾಯ ಅಥವಾ ಬೆಂಬಲ ಪಡೆಯುವುದು', 'ಸಹಾಯ', 'ಬೆಂಬಲ', 'ಗ್ರಾಹಕ ಸೇವೆ'],
        response: 'ನೀವು ಯಾವಾಗ ಬೇಕಾದರೂ ಈ ಸಹಾಯಕನೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಬಹುದು. ಕೆಳಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ—ನಾನು ಇಲ್ಲಿ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.'
      },
      branch: {
        patterns: ['ಶಾಖೆಗೆ ಹೋಗಬೇಕಾ', 'ಶಾಖೆಗೆ ಹೋಗುವುದು', 'ಶಾಖೆ ಭೇಟಿ', 'ಫಿಜಿಕಲ್ ಶಾಖೆ'],
        response: 'ಇಲ್ಲ, ನೀವು ಶಾಖೆಗೆ ಹೋಗಬೇಕಾಗಿಲ್ಲ. ಈ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿಯೇ ಎಲ್ಲ ಪ್ರಕ್ರಿಯೆಗಳೂ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಇರುತ್ತವೆ.'
      },
      default: "ಕ್ಷಮಿಸಿ, ನಾನು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ನಮ್ಮ ಗ್ರಾಹಕ ಬೆಂಬಲವನ್ನು ಸಂಪರ್ಕಿಸಿ."
    }
  };

  useEffect(() => {
    // Add initial greeting when chat is opened
    if (isOpen && messages.length === 0) {
      const greeting = {
        text: currentLanguage === 'en' ? 
          'Hello! Welcome to our banking app. How can I assist you today?' :
          currentLanguage === 'hi' ?
          'नमस्ते! हमारे बैंकिंग ऐप में आपका स्वागत है। मैं आपकी कैसे मदद कर सकता/सकती हूं?' :
          'ನಮಸ್ಕಾರ! ನಮ್ಮ ಬ್ಯಾಂಕಿಂಗ್ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಸುಸ್ವಾಗತ. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([greeting]);
    }
  }, [isOpen, currentLanguage]);

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    const currentQADB = qaDatabase[currentLanguage];

    for (const category in currentQADB) {
      if (category !== 'default' && currentQADB[category].patterns.some(pattern => 
        lowerMessage.includes(pattern.toLowerCase())
      )) {
        return currentQADB[category].response;
      }
    }
    return currentQADB.default;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Get bot response
    setTimeout(() => {
      const botResponse = {
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    const systemMessage = {
      text: lang === 'en' ? 
        'Language changed to English' : 
        lang === 'hi' ? 
        'भाषा हिंदी में बदली गई' : 
        'ಭಾಷೆ ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ',
      sender: 'system',
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, systemMessage]);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle fade-in"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      {isOpen && (
        <div className="chatbot-window fade-in">
          <div className="chatbot-header">
            <h3>Bank Assist</h3>
            <div className="language-selector">
              <button 
                className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </button>
              <button 
                className={`lang-btn ${currentLanguage === 'hi' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('hi')}
              >
                हिं
              </button>
              <button 
                className={`lang-btn ${currentLanguage === 'kn' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('kn')}
              >
                ಕ
              </button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender} fade-in`}
              >
                <div className="message-content">
                  {message.text}
                </div>
                <div className="message-timestamp">
                  {message.timestamp}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={currentLanguage === 'en' ? 
                "Type your message..." : 
                currentLanguage === 'hi' ? 
                "अपना संदेश लिखें..." : 
                "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ..."}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 