
# Automotive SaaS Platform

A comprehensive automotive service management platform built with React.js and Node.js.

## Features

- **Multi-Role Authentication**: Customer, Technician, Service Advisor, Admin, Super Admin
- **Customer Portal**: Vehicle management, appointment scheduling, service history
- **Technician Portal**: Job assignments, work orders, schedule management
- **Service Advisor Portal**: Customer interaction, estimates, technician assignments
- **Admin Portal**: User management, reporting, system configuration
- **Super Admin Portal**: Multi-tenant management, system oversight

## Tech Stack

### Frontend
- React.js 18
- React Router v6
- Axios for API calls
- CSS3 for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Helmet for security
- CORS for cross-origin requests

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)

### Installation

1. Install all dependencies:
```bash
npm run install-all
```

2. Set up environment variables:
   - Copy `.env` and update with your values
   - Ensure MongoDB is running

3. Start the development server:
```bash
npm run dev
```

This will start both the client (port 3000) and server (port 5000) concurrently.

### Project Structure

```
/automotive-saas-platform
├── client/                       # React.js SPA
│   ├── public/
│   ├── src/
│   │   ├── portals/              # Role-based portals
│   │   │   ├── Customer/
│   │   │   ├── Technician/
│   │   │   ├── ServiceAdvisor/
│   │   │   ├── Admin/
│   │   │   └── SuperAdmin/
│   │   ├── components/           # Reusable components
│   │   ├── pages/               # Page components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── services/            # API service functions
│   │   └── App.js
│
├── server/                      # Node.js + Express
│   ├── routes/                  # API route handlers
│   ├── controllers/             # Business logic
│   ├── models/                  # MongoDB models
│   ├── services/                # Service layer
│   ├── config/                  # Configuration files
│   ├── middleware/              # Custom middleware
│   └── index.js                 # Server entry point
│
├── .env                        # Environment variables
└── package.json               # Root package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Customer Routes
- `GET /api/customers/profile` - Get customer profile
- `PUT /api/customers/profile` - Update customer profile
- `GET /api/customers/vehicles` - Get customer vehicles
- `POST /api/customers/vehicles` - Add new vehicle

### Additional routes for Technicians, Service Advisors, Admin, and Super Admin are being implemented.

## Deployment

The application is configured for deployment on Replit with automatic scaling and port forwarding.

## Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- Helmet.js for security headers
- Rate limiting for API protection
- Role-based access control

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
