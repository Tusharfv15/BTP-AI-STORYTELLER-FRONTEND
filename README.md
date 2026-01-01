# AI Story Teller - Frontend (React + Vite)

A modern, interactive React application for children's educational storytelling with AI-powered story generation, reading practice, and personalized feedback.

## 🚀 Features

- **📖 AI Story Generation**: Create personalized stories based on user preferences
- **🎨 Beautiful UI**: Modern, responsive design with Tailwind CSS
- **🎙️ Audio Recording**: Record story readings for analysis
- **📊 Progress Tracking**: Monitor reading improvement over time
- **✨ Interactive Feedback**: Get detailed feedback on reading performance
- **🌙 Dark Mode Support**: Built-in theme switching
- **📱 Responsive Design**: Works seamlessly on all devices

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Routing**: React Router v6
- **Icons**: Lucide React
- **HTTP Client**: Fetch API
- **Notifications**: Sonner
- **Animations**: Tailwind CSS Animate

## 📋 Prerequisites

- Node.js 16+
- npm or yarn
- Backend API running (see backend README)

## 🔧 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ai-story-teller-frontend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_BACKEND_URL=http://localhost:8000
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
ai-story-teller-frontend/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images, fonts, etc.
│   ├── components/             # Reusable components
│   │   ├── ui/                 # UI components (buttons, cards, etc.)
│   │   │   ├── auth/           # Authentication components
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── SignUpForm.jsx
│   │   │   └── button.jsx
│   │   ├── Navbar.jsx
│   │   ├── StoryCard.jsx
│   │   ├── FeedbackCard.jsx
│   │   └── ReadingFeedback.jsx
│   ├── context/                # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── UserContext.jsx
│   ├── pages/                  # Page components
│   │   ├── DashboardPage.jsx
│   │   ├── ReadStoryPage.jsx
│   │   ├── ReadFullStoryPage.jsx
│   │   ├── AssignmentPage.jsx
│   │   ├── FeedbackPage.jsx
│   │   └── FinalFeedback.jsx
│   ├── lib/                    # Utility functions
│   │   └── utils.js
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── .env                        # Environment variables
├── components.json             # Shadcn UI config
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
├── package.json
└── README.md
```

## 🎯 Key Features

### User Authentication
- Secure signup and login
- Cookie-based session management
- Protected routes

### Story Dashboard
- View all created stories
- Create new AI-generated stories
- Customizable story parameters:
  - Title and description
  - Number of pages (1-20)
  - Child's age (5-15)
  - Image inclusion option

### Reading Experience
- Page-by-page story navigation
- Progress tracking
- Beautiful typography and layout
- Image support

### Assignment System
- 5 comprehension questions per story
- Timed responses
- Immediate feedback
- Detailed explanations

### Audio Recording
- Record story readings
- Real-time audio capture
- Upload to backend for analysis

### Feedback & Analytics
- Reading accuracy scores
- Punctuation analysis
- Word-by-word comparison
- Improvement suggestions
- Visual difference highlighting

## 🎨 UI Components

Built with Radix UI primitives and styled with Tailwind CSS:

- **Button**: Multiple variants (default, destructive, outline, ghost)
- **Card**: Content containers with header/footer
- **Dialog**: Modal dialogs
- **Toast**: Notification system (Sonner)
- **Loader**: Loading states

## 🔌 API Integration

The frontend communicates with the backend via REST API:

### Authentication Endpoints
```javascript
POST /api/user/signup
POST /api/user/login
POST /api/user/logout
GET /api/user/me
```

### Story Endpoints
```javascript
POST /api/story/create
GET /api/story/getStory/:sid
GET /api/story/stories/:uid
GET /api/story/getQuestions/:sid
POST /api/story/feedback/:sid
GET /api/story/getFeedback/:sid
```

### Audio Endpoints
```javascript
POST /upload/:sid
POST /process-audio/:aid
GET /audio/finalFeedback/:aid
```

## 🎨 Styling Guide

### Tailwind CSS Classes
The project uses Tailwind CSS with custom configuration:

```javascript
// Example component styling
<div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen p-8">
  <h1 className="text-3xl font-bold text-gray-800">Story Dashboard</h1>
</div>
```

### Custom Theme
Defined in `tailwind.config.js`:
- Custom colors
- Extended animations
- Custom border radius
- Typography settings

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Security Features

- HTTP-only cookies for authentication
- CORS-enabled requests
- Input validation
- XSS protection via React

## 🐛 Troubleshooting

### Backend Connection Issues
```bash
# Check if backend is running
curl http://localhost:8000/docs

# Verify .env file
cat .env
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Vite Dev Server Issues
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy dist/ folder to Netlify
```

### Environment Variables for Production
Make sure to set `VITE_BACKEND_URL` to your production backend URL.

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Routing
- `vite` - Build tool

### UI & Styling
- `tailwindcss` - Utility-first CSS
- `@radix-ui/*` - Headless UI components
- `lucide-react` - Icon library
- `next-themes` - Theme management
- `sonner` - Toast notifications

### Utilities
- `clsx` - Conditional classnames
- `tailwind-merge` - Merge Tailwind classes
- `class-variance-authority` - Component variants
- `diff` - Text difference highlighting

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Scripts

```json
{
  "dev": "vite",                    // Start dev server
  "build": "vite build",            // Build for production
  "preview": "vite preview",        // Preview production build
  "lint": "eslint ."                // Run ESLint
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for blazing fast builds

## 📧 Contact

For questions or support, please open an issue on GitHub.
