# HiddenPak API

Backend API for **HiddenPak** — Pakistan's Hidden Gems Travel Platform. Built with Express.js, TypeScript, and MongoDB.

## 🚀 Features

- **RESTful API** with full CRUD operations for all resources
- **JWT Authentication** for admin-protected endpoints
- **Swagger/OpenAPI Documentation** with interactive UI
- **MongoDB** with Mongoose ODM
- **TypeScript** for type safety
- **CORS** enabled
- **Seed script** for populating sample data

## 📋 Prerequisites

- Node.js 18+
- MongoDB 6+
- npm or bun

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/OwaisAhmaad/hiddenpak_main-api.git
cd hiddenpak_main-api

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your configuration

# Seed the database
npm run seed

# Start development server
npm run dev
```

## ⚙️ Environment Variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/hiddenpak` |
| `JWT_SECRET` | Secret key for JWT tokens | (required) |

## 📚 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/auth/login` | Login with email/password | ❌ |

### Places
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/places` | Get all places | ❌ |
| GET | `/api/places/:id` | Get single place | ❌ |
| POST | `/api/places` | Create place | ✅ |
| PUT | `/api/places/:id` | Update place | ✅ |
| DELETE | `/api/places/:id` | Delete place | ✅ |

### Blogs
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/blogs` | Get all blogs | ❌ |
| GET | `/api/blogs/:id` | Get single blog | ❌ |
| POST | `/api/blogs` | Create blog | ✅ |
| PUT | `/api/blogs/:id` | Update blog | ✅ |
| DELETE | `/api/blogs/:id` | Delete blog | ✅ |

### Gallery
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/gallery` | Get all gallery images | ❌ |
| GET | `/api/gallery/:id` | Get single gallery image | ❌ |
| POST | `/api/gallery` | Create gallery image | ✅ |
| DELETE | `/api/gallery/:id` | Delete gallery image | ✅ |

### Testimonials
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/testimonials` | Get all testimonials | ❌ |
| GET | `/api/testimonials/:id` | Get single testimonial | ❌ |
| POST | `/api/testimonials` | Create testimonial | ✅ |
| DELETE | `/api/testimonials/:id` | Delete testimonial | ✅ |

### Contact
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/contact` | Submit contact message | ❌ |
| GET | `/api/contact` | Get all messages | ✅ |
| PATCH | `/api/contact/:id` | Mark message as read | ✅ |
| DELETE | `/api/contact/:id` | Delete message | ✅ |

### Settings
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/settings` | Get site settings | ❌ |
| PUT | `/api/settings` | Update settings | ✅ |

### Analytics
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/analytics` | Get analytics summary | ✅ |
| POST | `/api/analytics/event` | Track analytics event | ❌ |

### Other
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/health` | Health check | ❌ |

## 📖 Swagger Documentation

Once the server is running, visit:

```
http://localhost:5000/api-docs
```

This provides an interactive Swagger UI where you can explore and test all API endpoints.

## 🔐 Authentication

Protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

To obtain a token, send a POST request to `/api/auth/login` with valid admin credentials.

## 🛠️ Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with auto-reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run production build |
| `npm run seed` | Seed database with sample data |

## 📁 Project Structure

```
src/
├── config/
│   └── database.ts       # MongoDB connection
├── dtos/
│   └── index.ts          # Swagger DTO schemas
├── middleware/
│   ├── auth.ts           # JWT authentication
│   └── validate.ts       # Input validation
├── models/
│   ├── Admin.ts
│   ├── Place.ts
│   ├── Blog.ts
│   ├── GalleryImage.ts
│   ├── Testimonial.ts
│   ├── SiteSetting.ts
│   ├── AnalyticsEvent.ts
│   └── ContactMessage.ts
├── routes/
│   ├── auth.ts
│   ├── places.ts
│   ├── blogs.ts
│   ├── gallery.ts
│   ├── testimonials.ts
│   ├── contact.ts
│   ├── settings.ts
│   └── analytics.ts
├── swagger.ts            # Swagger configuration
└── index.ts              # Entry point
```

## 📝 License

MIT
