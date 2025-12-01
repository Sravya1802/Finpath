// FinPath Chatbot Script
// Provides interactive guidance with context-aware responses

const chatbotResponses = {
    // General greetings
    'hello': 'Hello! I\'m here to help you with financial guidance for U.S. newcomers. What would you like to know?',
    'hi': 'Hi! How can I assist you with your financial questions today?',
    'help': 'I can help you with questions about visas (F-1, H-1B, Refugee), credit building, tax filing, money transfers, and more. What do you need?',
    
    // Visa-specific questions
    'f-1': 'F-1 students can work on-campus part-time and may be eligible for OPT after graduation. You\'ll need an SSN for employment. Would you like to know more about credit building or tax filing as an F-1 student?',
    'h-1b': 'H-1B workers are eligible for most financial services. You can build credit, open bank accounts, and file taxes as a resident alien. Need help with any specific area?',
    'refugee': 'Refugees have access to financial services and can build credit history. There are special programs and resources available. What specific information do you need?',
    
    // Credit building
    'credit': 'To build credit in the U.S., start with a secured credit card, become an authorized user, or get a credit-builder loan. Pay bills on time and keep credit utilization low. Would you like a step-by-step checklist?',
    'credit card': 'For newcomers, secured credit cards are the best starting point. You deposit money that serves as your credit limit. After 6-12 months of on-time payments, you may qualify for an unsecured card.',
    'credit score': 'Your credit score ranges from 300-850. A score above 670 is considered good. It\'s based on payment history, credit utilization, length of credit history, and types of credit.',
    
    // Tax filing
    'tax': 'F-1 students typically file Form 1040NR or 1040NR-EZ if they have U.S. income. You may be exempt from FICA taxes. H-1B workers file as resident aliens. Need help with specific forms?',
    'tax filing': 'File your taxes by April 15th. You\'ll need your W-2 (if employed), 1099 forms, and ITIN or SSN. Consider using free tax software or consulting a tax professional familiar with non-resident tax rules.',
    'itin': 'An ITIN (Individual Taxpayer Identification Number) is for those who need to file taxes but aren\'t eligible for an SSN. Apply using Form W-7 with your tax return.',
    
    // Money transfers
    'transfer': 'For international money transfers, compare options like Wise (formerly TransferWise), Remitly, or traditional banks. Consider fees, exchange rates, and transfer speed. What countries are you transferring between?',
    'money transfer': 'Best options for international transfers: Wise (low fees, good rates), Remitly (fast, reliable), or your bank (convenient but may have higher fees). Always compare exchange rates before sending.',
    'send money': 'To send money internationally, you\'ll need the recipient\'s bank details or mobile wallet info. Compare fees (usually 1-3% of amount) and exchange rates. Some services offer first transfer free.',
    
    // Banking
    'bank account': 'To open a bank account, you\'ll need: passport, visa, proof of address, and sometimes an SSN or ITIN. Many banks offer student accounts with no monthly fees. Need help finding a bank?',
    'banking': 'Choose a bank that offers: no monthly fees (student accounts), online banking, ATM access, and good customer service. Consider both traditional banks and online banks like Chime or Ally.',
    
    // General financial
    'ssn': 'An SSN (Social Security Number) is required for employment and credit building. Apply at your local Social Security office with your passport, visa, I-94, and employment authorization if needed.',
    'budget': 'Create a budget by tracking income and expenses. Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings. Many free apps can help track your spending.',
    'savings': 'Start an emergency fund with 3-6 months of expenses. Consider high-yield savings accounts. Set up automatic transfers to make saving easier.',
    
    // Default response
    'default': 'I can help with questions about visas, credit building, tax filing, money transfers, banking, and more. Try asking about: "credit building", "tax filing", "money transfer", or "F-1 visa".'
};

// Get current page context
function getPageContext() {
    const path = window.location.pathname;
    if (path.includes('visa-dashboard')) {
        return localStorage.getItem('selectedVisa') || 'general';
    }
    if (path.includes('dashboard')) {
        return 'user-dashboard';
    }
    return 'home';
}

// Find matching response
function getChatbotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase().trim();
    const context = getPageContext();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(chatbotResponses)) {
        if (lowerMessage.includes(key) && key !== 'default') {
            // Add context-specific information
            if (context === 'F-1' && (key === 'f-1' || key === 'credit' || key === 'tax')) {
                return response + ' As an F-1 student, you have specific considerations.';
            }
            if (context === 'H-1B' && (key === 'h-1b' || key === 'credit' || key === 'tax')) {
                return response + ' As an H-1B worker, you\'re treated as a resident alien for tax purposes.';
            }
            return response;
        }
    }
    
    // Return default response
    return chatbotResponses.default;
}

// Initialize chatbot
function initChatbot() {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotPanel = document.getElementById('chatbot-panel');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    if (!chatbotButton || !chatbotPanel) return;
    
    // Toggle chatbot panel
    chatbotButton.addEventListener('click', function() {
        chatbotPanel.classList.toggle('active');
        if (chatbotPanel.classList.contains('active')) {
            chatbotInput.focus();
            // Add welcome message if empty
            if (chatbotMessages.children.length === 0) {
                addBotMessage('Hello! I\'m your FinPath assistant. How can I help you today?');
            }
        }
    });
    
    // Close chatbot
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotPanel.classList.remove('active');
        });
    }
    
    // Send message function
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        addUserMessage(message);
        chatbotInput.value = '';
        
        // Simulate thinking delay
        setTimeout(() => {
            const response = getChatbotResponse(message);
            addBotMessage(response);
        }, 500);
    }
    
    // Send button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }
    
    // Enter key to send
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Add user message to chat
function addUserMessage(message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chatbot-message user';
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Add bot message to chat
function addBotMessage(message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chatbot-message bot';
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initChatbot);

