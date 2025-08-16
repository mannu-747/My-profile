# Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Manoj Kumar, a Software Engineer specializing in backend development. The application showcases professional experience, skills, projects, certifications, and provides a contact form for potential opportunities. The site features a clean, professional design with dark/light theme support and smooth scrolling animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using **React 18** with **TypeScript** in a single-page application (SPA) architecture. The application uses **Vite** as the build tool for fast development and optimized production builds.

**Component Structure:**
- Modular component architecture with clear separation of concerns
- Section-based layout (Hero, About, Skills, Projects, Experience, Certifications, Contact)
- Reusable UI components built with **Radix UI** primitives
- **shadcn/ui** component library for consistent design system

**Styling & Design:**
- **Tailwind CSS** for utility-first styling
- Custom CSS variables for theme consistency
- Responsive design with mobile-first approach
- Dark/light theme switching with persistent user preference
- Custom animations and scroll-based reveal effects

**State Management:**
- **React Query (TanStack Query)** for server state management
- React Context for theme management
- Local component state for form handling

**Routing:**
- **Wouter** for lightweight client-side routing
- Single page with smooth scrolling navigation between sections

### Backend Architecture

The backend follows a **Node.js/Express** architecture with TypeScript support.

**API Design:**
- RESTful API endpoints for contact form submission
- File serving for resume downloads
- Express middleware for request logging and error handling

**Request Processing:**
- JSON request body parsing
- URL-encoded form data support
- CORS handling for frontend-backend communication
- Custom middleware for request timing and logging

**Development Setup:**
- **Vite** integration for development mode with HMR
- Static file serving for production builds
- Environment-based configuration

### Data Storage Solutions

**Database Configuration:**
- **Drizzle ORM** with PostgreSQL dialect configured
- **Neon Database** serverless PostgreSQL for cloud deployment
- Database migrations managed through Drizzle Kit

**Schema Design:**
- User table with UUID primary keys
- Username/password authentication structure ready
- Extensible schema for future user management features

**Storage Abstraction:**
- Interface-based storage layer for flexibility
- In-memory storage implementation for development
- Easy migration path to full database implementation

### External Dependencies

**UI Framework:**
- **Radix UI** - Accessible, unstyled UI primitives
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library
- **class-variance-authority** - Utility for component variants

**Forms & Validation:**
- **React Hook Form** with **Hookform Resolvers**
- **Zod** for runtime type validation and schema validation
- Form state management with validation feedback

**Styling:**
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** with Autoprefixer for browser compatibility
- **clsx** and **tailwind-merge** for conditional styling

**Data Fetching:**
- **TanStack React Query** - Server state management
- Custom API client with error handling
- Optimistic updates and caching strategies

**Database & ORM:**
- **Drizzle ORM** - Type-safe database toolkit
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- **connect-pg-simple** - PostgreSQL session store

**Development Tools:**
- **Vite** - Fast build tool and dev server
- **esbuild** - Fast bundler for production
- **tsx** - TypeScript execution for development
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error reporting

**Date Handling:**
- **date-fns** - Modern date utility library

**UI Enhancements:**
- **embla-carousel-react** - Carousel/slider components
- **cmdk** - Command palette component