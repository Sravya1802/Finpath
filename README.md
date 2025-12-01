# FinPath - Low-Fidelity Interactive Prototype

A user-friendly financial guidance platform designed specifically for U.S. newcomers (F-1 students, H-1B workers, and refugees).

## Overview

This is a low-fidelity, interactive prototype built with static HTML, CSS, and JavaScript. No build tools or frameworks required - simply open the files in a web browser.

## Features

- **Home Screen**: Welcome message, visa selection, and FAQ section
- **Visa Dashboard**: Visa-specific financial rules, news, and information
- **Sign Up Page**: User registration with personalized data collection
- **User Dashboard**: Interactive tabs for Credit Building, Tax Filing, and Money Transfer
- **Chatbot**: Context-aware assistant for real-time guidance
- **Interactive Elements**: Clickable cards, expandable FAQs, checklists, and calculators

## File Structure

```
/
├── index.html              # Home screen (welcome + FAQ)
├── visa-selection.html     # Visa type selection screen
├── visa-dashboard.html     # Simplified visa-specific information
├── signup.html             # User registration
├── dashboard.html          # Personalized user dashboard
├── styles/
│   └── main.css           # Shared styling
├── scripts/
│   ├── navigation.js      # Page navigation and localStorage
│   ├── tabs.js            # Tab switching functionality
│   └── chatbot.js         # Chatbot interaction logic
└── README.md              # This file
```

## User Flow

1. **Home Screen** → Welcome message and FAQ
2. **Visa Selection** → Choose your visa type (F-1, H-1B, or Refugee)
3. **Visa Dashboard** → View simplified visa-specific financial information
4. **Sign Up** → Fill out registration form to personalize your experience
5. **User Dashboard** → Access interactive guides for credit building, tax filing, and money transfers

## Getting Started

1. **Open the prototype**: Simply open `index.html` in any modern web browser
2. **Navigate**: Follow the flow from Home → Visa Selection → Visa Dashboard → Sign Up → Dashboard
3. **Interact**: 
   - Select a visa type on the visa selection screen
   - Expand FAQ items by clicking on them
   - Fill out the signup form
   - Switch between tabs on the dashboard
   - Use the chatbot for questions

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Key Interactions

### Home Screen
- Click visa cards to select your visa type
- Click FAQ questions to expand/collapse answers
- Click "Next" to proceed to visa dashboard

### Visa Dashboard
- View visa-specific financial information
- Click "Sign Up / Sign In" to register

### Sign Up Page
- Fill out the registration form
- Expand bank account section (optional)
- Submit to proceed to dashboard

### User Dashboard
- Switch between tabs: Credit Building, Tax Filing, Money Transfer
- Use interactive checklists
- Try the embedded calculators
- Get personalized content based on your visa type

### Chatbot
- Click the floating chat button on any screen
- Ask questions about visas, credit, taxes, money transfers, etc.
- Get context-aware responses

## Design Notes

- **Colors**: Soft, welcoming palette (light blue, cream, soft green)
- **Typography**: Clean, readable system fonts
- **Layout**: Responsive design that works on desktop and mobile
- **Interactivity**: Hover effects, click animations, and visual feedback

## Data Storage

User selections and data are stored in browser localStorage:
- Selected visa type
- User registration information
- Form preferences

## Testing

This prototype is designed for formative assessment and usability testing:
- Test navigation flow
- Evaluate clarity of information
- Assess user understanding
- Gather feedback on design and functionality

## Notes for Testing

- All screens are functional and interactive
- Data persists across page navigation (localStorage)
- Chatbot provides helpful responses to common questions
- Calculators provide estimates (not exact calculations)
- Content is tailored based on visa type selection

## Future Enhancements

Potential additions for higher-fidelity versions:
- Backend integration for data persistence
- Real-time exchange rates for currency converter
- More sophisticated chatbot with AI integration
- User authentication system
- Progress tracking and personalized recommendations
- Additional financial tools and calculators

---

**Note**: This is a low-fidelity prototype for testing and demonstration purposes. All financial information should be verified with official sources and professional advisors.

