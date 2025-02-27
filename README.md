# Financial Dashboard Application

## Project Overview

This is a financial dashboard application built using React.js. The application provides an overview of financial activities, including card details, recent transactions, statistics, and user settings. The UI is designed to be fully responsive and aligns with the provided Figma design.

## Features

### **Dashboard Page**

- **My Cards Section**
  - Displays multiple cards with balance, cardholder name, and partially masked card number.
  - Includes a "See All" button for navigating to a full list of cards.
- **Recent Transactions**
  - Lists recent transactions with icons, descriptions, dates, and amounts.
- **Weekly Activity Chart**
  - A bar chart displaying daily deposit and withdrawal activities for the week.
- **Expense Statistics**
  - A pie chart showing a breakdown of expenses by category.
- **Quick Transfer**
  - Lists frequent transfer contacts with profile pictures, names, and roles.
  - Provides an input field for transfer amount and a "Send" button (UI Only).
- **Balance History Chart**
  - A line chart representing balance trends over the past few months.

### **Settings Page**

- **Tabs**: "Edit Profile," "Preference," and "Security."
- **Edit Profile Section**
  - Allows editing fields such as Name, Username, Email, Password, Date of Birth, Address, City, Postal Code, and Country.
  - Provides a profile picture upload/edit feature.
  - Includes a "Save" button to apply changes.

## Technical Stack

- **Frontend Framework**: React.js
- **State Management**: Redux / Context API
- **Styling**: TailwindCSS / Styled-components
- **Charting Library**: Chart.js / D3.js
- **Routing**: React Router
- **Mock API**: JSON placeholder or a similar solution
- **Version Control**: Git

## Code Structure

```
/src
  ├── assets
  ├── components
  │   ├── Dashboard
  │   ├── ProfileSettingsForm
  ├── config
  │   ├── store.ts
  ├── constant
  │   ├── dashboardActivity.ts
  │   ├── userSchema.ts
  ├── context
  │   ├── SidebarContext.tsx
  │   ├── ThemeContext.tsx
  ├── hooks
  │   ├── useUserProfile.ts
  ├── layout
  │   ├── AppHeader.tsx
  │   ├── AppLayout.tsx
  │   ├── AppSidebar.tsx
  ├── loader
  │   ├── Loader.css
  │   ├── Loader.tsx
  ├── pages
  │   ├── Dashboard.tsx
  ├── App.tsx
  ├── index.tsx
```

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>=16.x)
- npm or yarn
- Git

### Installation Steps

1. Clone the repository:
  
   git clone <repository_url>
   cd financial-dashboard
   
2. Install dependencies:
   
   npm install 
   
3. Start the development server:
   
   npm run dev
  
4. Open the app in the browser at:
   
  http://localhost:5175/
   