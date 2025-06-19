# AI Content Idea Generator

An AI-powered web application that helps content creators generate ideas for blog posts, videos, and social media content with trending analysis and keyword optimization.

## Project Overview

The AI Content Idea Generator is designed to solve the problem of content creators struggling with "creator's block" by leveraging artificial intelligence to suggest relevant, trending, and engaging content ideas tailored to their niche and audience.

### Key Features

- **AI-Powered Idea Generation**: Get unique content ideas for blogs, videos, and social media
- **Topic Research**: Analyze trending topics and popular content in your niche
- **Keyword Optimization**: Optimize your content ideas for better SEO performance
- **Content Calendar Planning**: Plan and organize your content strategy efficiently
- **Personalized Recommendations**: Receive ideas tailored to your audience and past performance

## Tech Stack

### Frontend
- React.js with TypeScript
- Material-UI for component design
- Redux for state management
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB for database
- OpenAI API for AI-powered content generation
- JWT for authentication

### DevOps
- GitHub Actions for CI/CD
- Vercel for frontend hosting
- Heroku for backend hosting
- MongoDB Atlas for database hosting

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or Atlas)
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/ai-content-idea-generator-2025.git
cd ai-content-idea-generator-2025
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# Backend .env file
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI and OpenAI API key

# Frontend .env file
cp client/.env.example client/.env
# Edit client/.env with your API endpoint
```

4. Start development servers
```bash
# Start backend server
cd server
npm run dev

# Start frontend server
cd ../client
npm start
```

## Project Structure

```
ai-content-idea-generator-2025/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service calls
│   │   ├── store/          # Redux store configuration
│   │   └── utils/          # Utility functions
│   └── package.json        # Frontend dependencies
├── server/                 # Backend Node.js application
│   ├── controllers/        # Request handlers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   └── package.json        # Backend dependencies
└── README.md               # Project documentation
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Content Idea Endpoints
- `POST /api/ideas/generate` - Generate new content ideas
- `GET /api/ideas` - Get user's saved ideas
- `PUT /api/ideas/:id` - Update a saved idea
- `DELETE /api/ideas/:id` - Delete a saved idea

### Content Calendar Endpoints
- `POST /api/calendar` - Create content calendar event
- `GET /api/calendar` - Get user's calendar
- `PUT /api/calendar/:id` - Update calendar event
- `DELETE /api/calendar/:id` - Delete calendar event

## Roadmap

- **Phase 1**: Core idea generation functionality
- **Phase 2**: Topic research and keyword optimization
- **Phase 3**: Content calendar and scheduling
- **Phase 4**: Analytics and performance tracking
- **Phase 5**: Team collaboration features

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, please open an issue on GitHub or contact the repository owner.