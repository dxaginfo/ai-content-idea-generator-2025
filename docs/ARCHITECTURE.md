# Architecture Documentation

## System Overview

The AI Content Idea Generator is a web application built with a React frontend and Node.js backend. It uses MongoDB for data storage and integrates with OpenAI API for content idea generation.

## Architecture Diagram

```
┌────────────────┐       ┌────────────────┐       ┌────────────────┐
│                │       │                │       │                │
│  React Client  │◄─────►│   Node.js API  │◄─────►│    MongoDB     │
│                │       │                │       │                │
└────────────────┘       └───────┬────────┘       └────────────────┘
                                  │
                                  ▼
                         ┌────────────────┐
                         │                │
                         │   OpenAI API   │
                         │                │
                         └────────────────┘
```

## Frontend Architecture

The frontend is built with React.js and follows a component-based architecture:

- **Pages**: Top-level components representing entire screens
- **Components**: Reusable UI elements
- **Services**: API client services for interacting with backend
- **Store**: Redux store for global state management
  - Auth state
  - Content idea state
  - Calendar state

## Backend Architecture

The backend follows a layered architecture:

- **Routes**: Define API endpoints
- **Controllers**: Handle request/response logic
- **Services**: Implement business logic
- **Models**: Define database schemas
- **Middleware**: Handle cross-cutting concerns

## Data Model

### User
- id: ObjectId
- name: String
- email: String
- password: String (hashed)
- subscription: String (free, premium, enterprise)
- preferences: Object
  - contentTypes: Array
  - industries: Array
  - audiences: Array
- createdAt: Date
- updatedAt: Date

### ContentIdea
- id: ObjectId
- userId: ObjectId (ref: User)
- title: String
- description: String
- contentType: String (blog, video, social)
- keywords: Array
- category: String
- savedToCalendar: Boolean
- createdAt: Date

### ContentCalendar
- id: ObjectId
- userId: ObjectId (ref: User)
- name: String
- events: Array
  - ideaId: ObjectId (ref: ContentIdea)
  - title: String
  - description: String
  - contentType: String
  - scheduledDate: Date
  - status: String
- createdAt: Date
- updatedAt: Date

## Authentication Flow

1. User registers or logs in
2. Server validates credentials
3. Server generates JWT token
4. Client stores token in localStorage
5. Client includes token in Authorization header for subsequent requests
6. Server validates token for protected routes

## Content Generation Flow

1. User specifies content parameters (type, industry, audience)
2. Client sends request to server
3. Server calls OpenAI API with prompt based on parameters
4. OpenAI returns generated content ideas
5. Server processes and returns ideas to client
6. Client displays ideas to user
7. User can save ideas to their account

## Deployment Architecture

- Frontend: Vercel
- Backend: Heroku
- Database: MongoDB Atlas
- CI/CD: GitHub Actions

This architecture provides a scalable and maintainable foundation for the AI Content Idea Generator application.
