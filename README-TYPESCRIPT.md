# FinPath Mobile - TypeScript React App

A mobile-first React TypeScript application for financial guidance for U.S. newcomers.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **CSS** - Styling (no HTML except index.html)

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
  components/
    Home.tsx              # Main dashboard
    BankComparison.tsx    # Bank selection feature
    SafeSpending.tsx      # Credit spending calculator
    CriticalAlerts.tsx    # Deadlines and alerts
    MoneyTransfer.tsx     # Transfer service comparison
    TaxInfo.tsx          # Tax information
    BottomNav.tsx        # Navigation component
  types/
    index.ts             # TypeScript type definitions
  App.tsx                # Main app router
  index.tsx              # Entry point
  App.css                # Global styles
  index.css              # Base styles
```

## Features

### High Priority Features:
1. **Bank Comparison** - Compare and select eligible bank options
2. **Safe Spending Calculator** - Calculate safe credit card spending limits
3. **Critical Alerts** - View upcoming deadlines and important reminders
4. **Money Transfer** - Compare safest and cost-effective money transfer services
5. **Tax Information** - Get tax filing information based on visa type

## TypeScript

All components are written in TypeScript with proper type definitions:
- Type-safe props and state
- Interface definitions in `src/types/index.ts`
- Full type checking enabled

## Mobile-First Design

- Bottom navigation bar
- Touch-friendly interface
- Responsive layout
- Mobile-optimized spacing

