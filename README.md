# ⚽ Soccer Flashcards Quiz

<div align="center">

**An interactive, React-based flashcard quiz application to test your Premier League football knowledge!**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

## 📖 About The Project

The **Soccer Flashcards Quiz** is an engaging, interactive web application designed to help football fans test and improve their knowledge of Premier League players and statistics. Built with modern web technologies, this quiz app features a sleek UI with smooth animations, instant feedback, and an intuitive user experience.

Users can test their knowledge by answering questions about top scorers, fastest players, best defenders, and more. The app provides immediate visual feedback with color-coded responses (green for correct, red for incorrect) and allows users to flip cards to reveal answers.

### 🎯 Project Goals

- Create an engaging learning tool for football enthusiasts
- Implement React state management fundamentals
- Build a responsive, mobile-friendly interface
- Provide instant visual feedback to enhance user experience

---

## ✨ Features

### Core Functionality
- **🎴 Interactive Flashcards**: Click to flip and reveal answers with smooth transitions
- **✍️ Answer Input System**: Type your guess before revealing the answer
- **🎨 Color-Coded Feedback**: Instant visual feedback with green (correct) and red (incorrect) indicators
- **🔄 Smart Answer Checking**: Case-insensitive matching that ignores extra spaces
- **🚀 Sequential Navigation**: Move forward and backward through questions with Previous/Next buttons
- **♻️ Restart Functionality**: Start over at any time to retake the quiz
- **📊 Progress Tracking**: Visual counter showing current card position (e.g., "Card 3 of 5")

### User Experience
- **💫 Smooth Animations**: Cards lift on hover with elegant shadow effects
- **🎨 Modern Gradient Design**: Beautiful purple gradient cards with professional styling
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **⌨️ Keyboard Support**: Press Enter to submit answers quickly
- **🔒 Input Locking**: Input box becomes disabled after submission to prevent changes

---

## 🛠️ Tech Stack

### Frontend
- **[React 18](https://react.dev/)** - Modern UI library with hooks for state management
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool for lightning-fast development
- **CSS3** - Custom styling with Flexbox layouts and CSS transitions

### Development Tools
- **ESLint** - Code quality and consistency
- **npm** - Package management

### Key React Concepts Used
- `useState` hooks for state management
- Component props for data flow
- Conditional rendering
- Event handlers
- Controlled components (form inputs)

---

## 🏗️ How It Was Built

### Architecture

The application follows a component-based architecture with clear separation of concerns:

```
src/
├── App.jsx           # Main application logic and state management
├── App.css           # Global styles and animations
├── components/
│   └── Card.jsx      # Reusable flashcard component
└── main.jsx          # React app entry point
```

### State Management

The app uses React's `useState` hook to manage five key pieces of state:

1. **`quizStarted`** - Boolean to control quiz visibility
2. **`currentCardIndex`** - Tracks which question is displayed (0-4)
3. **`isFlipped`** - Controls card flip animation
4. **`userGuess`** - Stores the user's typed answer
5. **`hasGuessed`** - Boolean to track if user has submitted
6. **`isCorrect`** - Boolean to determine visual feedback color

### Key Implementation Details

**Answer Checking Logic:**
```javascript
const checkAnswer = (guess, correctAnswer) => {
  const cleanGuess = guess.toLowerCase().trim();
  const cleanAnswer = correctAnswer.toLowerCase().trim();
  return cleanGuess === cleanAnswer;
};
```

**Dynamic Styling:**
- Conditional CSS classes for correct/incorrect states
- Disabled input after submission to prevent answer changes
- Smooth transitions using CSS `transition` property

**Navigation System:**
- Previous button disabled on first card
- Next button disabled on last card
- All state resets when navigating to preserve quiz integrity

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BrandonnGonzalez/Soccer-Flashcards-Quiz.git
   cd Soccer-Flashcards-Quiz/flash-cards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

---

## 🎮 How to Use

1. **Start the Quiz** - Click the "Start Quiz" button on the home screen
2. **Read the Question** - Each card displays a question about Premier League football
3. **Enter Your Guess** - Type your answer in the input box
4. **Submit** - Click "Submit" or press Enter
5. **See Results** - The input box turns green ✅ (correct) or red ❌ (incorrect)
6. **Reveal Answer** - The card automatically flips to show the correct answer
7. **Navigate** - Use "Previous" and "Next" buttons to move between questions
8. **Restart Anytime** - Click "Start Over" when you reach the last question

---

## 🎨 Design Choices

### Color Palette
- **Primary Purple**: `#667eea` to `#764ba2` (gradient)
- **Accent Blue**: `#646cff`
- **Success Green**: `#22c55e`
- **Error Red**: `#ef4444`
- **White**: `#ffffff` (text on cards)

### Typography
- Clear hierarchy with larger headings on cards
- Centered text for better focus
- Responsive font sizes for mobile devices

### User Feedback
- **Hover Effects**: Cards lift slightly with enhanced shadows
- **Color Coding**: Immediate visual feedback on answer submission
- **Disabled States**: Grayed-out buttons when actions are unavailable
- **Smooth Transitions**: All state changes are animated for polish

---

## 🔮 Future Enhancements

Potential features for future versions:

- [ ] Score tracking and final results screen
- [ ] Timer for each question
- [ ] Difficulty levels (Easy, Medium, Hard)
- [ ] More question categories (Champions League, World Cup, etc.)
- [ ] User authentication and progress saving
- [ ] Leaderboard system
- [ ] Shuffle questions for variety
- [ ] Add images of players to cards
- [ ] Sound effects for correct/incorrect answers
- [ ] Dark mode toggle

---

## 📸 Screenshots

### Home Screen
Clean, welcoming interface with quiz details and start button.

### Quiz Interface
Interactive flashcard with input box and navigation controls.

### Answer Feedback
Green/red color coding provides instant visual feedback.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

**Brandon Gonzalez®**

Built with ❤️ for football fans and React learners everywhere.

---

## 🙏 Acknowledgments

- Inspired by traditional flashcard study methods
- Built as part of CodePath coursework
- Premier League for the endless entertainment and statistics

---

<div align="center">

**⚽ May your football knowledge be as sharp as your code! ⚽**

</div>
