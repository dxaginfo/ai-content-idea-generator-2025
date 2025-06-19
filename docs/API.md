# API Documentation

## Base URL

```
http://localhost:5000/api
```

## Authentication

### Register User

```
POST /auth/register
```

**Request Body**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response**

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Login User

```
POST /auth/login
```

**Request Body**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response**

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Get Current User

```
GET /auth/me
```

**Headers**

```
Authorization: Bearer jwt_token_here
```

**Response**

```json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "subscription": "free"
}
```

## Content Ideas

### Generate Ideas

```
POST /ideas/generate
```

**Headers**

```
Authorization: Bearer jwt_token_here
```

**Request Body**

```json
{
  "contentType": "blog",
  "industry": "technology",
  "audience": "developers",
  "count": 5
}
```

**Response**

```json
{
  "ideas": [
    {
      "title": "10 Essential JavaScript Libraries for 2025",
      "description": "A comprehensive guide to the most useful JavaScript libraries that every developer should know about in 2025.",
      "contentType": "blog",
      "keywords": ["javascript", "web development", "libraries", "programming"]
    },
    // More idea objects...
  ]
}
```

### Save Idea

```
POST /ideas
```

**Headers**

```
Authorization: Bearer jwt_token_here
```

**Request Body**

```json
{
  "title": "10 Essential JavaScript Libraries for 2025",
  "description": "A comprehensive guide to the most useful JavaScript libraries that every developer should know about in 2025.",
  "contentType": "blog",
  "keywords": ["javascript", "web development", "libraries", "programming"],
  "category": "Programming"
}
```

**Response**

```json
{
  "id": "idea_id",
  "title": "10 Essential JavaScript Libraries for 2025",
  "description": "A comprehensive guide to the most useful JavaScript libraries that every developer should know about in 2025.",
  "contentType": "blog",
  "keywords": ["javascript", "web development", "libraries", "programming"],
  "category": "Programming",
  "savedToCalendar": false,
  "createdAt": "2025-06-19T01:08:46.399Z"
}
```

### Get User's Ideas

```
GET /ideas
```

**Headers**

```
Authorization: Bearer jwt_token_here
```

**Response**

```json
{
  "ideas": [
    {
      "id": "idea_id",
      "title": "10 Essential JavaScript Libraries for 2025",
      "description": "A comprehensive guide to the most useful JavaScript libraries that every developer should know about in 2025.",
      "contentType": "blog",
      "keywords": ["javascript", "web development", "libraries", "programming"],
      "category": "Programming",
      "savedToCalendar": false,
      "createdAt": "2025-06-19T01:08:46.399Z"
    },
    // More idea objects...
  ]
}
```

## Content Calendar

### Create Calendar Event

```
POST /calendar
```

**Headers**

```
Authorization: Bearer jwt_token_here
```

**Request Body**

```json
{
  "name": "My Content Calendar",
  "events": [
    {
      "ideaId": "idea_id",
      "title": "10 Essential JavaScript Libraries for 2025",
      "contentType": "blog",
      "scheduledDate": "2025-07-15T10:00:00.000Z",
      "status": "planned"
    }
  ]
}
```

**Response**

```json
{
  "id": "calendar_id",
  "userId": "user_id",
  "name": "My Content Calendar",
  "events": [
    {
      "id": "event_id",
      "ideaId": "idea_id",
      "title": "10 Essential JavaScript Libraries for 2025",
      "contentType": "blog",
      "scheduledDate": "2025-07-15T10:00:00.000Z",
      "status": "planned"
    }
  ],
  "createdAt": "2025-06-19T01:08:46.399Z",
  "updatedAt": "2025-06-19T01:08:46.399Z"
}
```

This documentation covers the main API endpoints for the AI Content Idea Generator. Additional endpoints for updating and deleting resources follow similar patterns.
