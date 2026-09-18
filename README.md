# Realtime Cafe Point of Sale

A modern **Realtime Point of Sale (POS) system** for cafe and restaurant operations, built with Next.js, React, TypeScript, and Supabase.

This project was developed as a practical full-stack web application, covering the development process from frontend implementation and database integration to realtime data synchronization, payment processing, and deployment.

## Overview

**Realtime Cafe Point of Sale** is a web-based POS application designed to support cafe and restaurant operations.

The application integrates a modern React-based frontend with Supabase for database, authentication, storage, and realtime functionality. It also includes payment gateway integration and a dashboard for monitoring order activity.

The project focuses on applying modern web development concepts to a practical application rather than building isolated features or components.

## Features

- 🔐 Authentication and user management
- 🍽️ Menu management
- 🪑 Table management
- 🧾 Order management
- 📋 Order details and item management
- ⚡ Realtime data synchronization
- 📊 Order activity dashboard
- 💳 Payment gateway integration
- 🖼️ Image and file storage
- 🌙 Dark and light theme support
- 📱 Responsive user interface

## Tech Stack

### Core

- **Next.js 16** — React framework with App Router
- **React 19** — Frontend library
- **TypeScript** — Type-safe development

### UI & Styling

- **Tailwind CSS 4** — Utility-first CSS framework
- **shadcn/ui** — Reusable UI components
- **Radix UI** — Accessible UI primitives
- **Lucide React** — Icon library
- **next-themes** — Theme management
- **Sonner** — Toast notifications

### Data & State Management

- **TanStack React Query** — Server-state management and data fetching
- **Zustand** — Client-side state management
- **Recharts** — Data visualization

### Forms & Validation

- **React Hook Form** — Form management
- **Zod** — Schema validation
- **@hookform/resolvers** — Form validation integration

### Backend & Database

- **Supabase** — Backend platform
- **PostgreSQL** — Relational database
- **Supabase Realtime** — Realtime data synchronization
- **Supabase Auth** — Authentication
- **Supabase Storage** — File and image storage

### Payment & Deployment

- **Midtrans** — Payment gateway
- **Vercel** — Deployment platform

## Key Concepts

This project implements several modern web development concepts, including:

- Next.js App Router
- React Server Components
- React 19
- Server-side and client-side data fetching
- Server Actions
- Realtime data synchronization
- Authentication and authorization
- Form handling and schema validation
- PostgreSQL database integration
- Payment gateway integration
- Responsive UI development
- Production deployment

## Application Routes

The application contains several main sections:

| Route              | Description              |
| ------------------ | ------------------------ |
| `/login`           | User authentication      |
| `/admin`           | Administrative dashboard |
| `/admin/menu`      | Menu management          |
| `/admin/table`     | Table management         |
| `/admin/user`      | User management          |
| `/order`           | Order management         |
| `/order/[id]`      | Order details            |
| `/order/[id]/add`  | Add items to an order    |
| `/payment/success` | Successful payment flow  |
| `/payment/failed`  | Failed payment flow      |

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- A Supabase project
- A Midtrans account if payment functionality is required

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Create a local environment file based on the provided example:

```powershell
Copy-Item env.example .env.local
```

Configure the required environment variables in `.env.local`.
The environment configuration includes credentials and configuration for:

Supabase — Database, authentication, storage, and realtime services
Midtrans — Payment gateway integration

Note: Never commit .env.local or any file containing real API keys, secrets, or credentials to the repository.

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## Project Goals

The main goal of this project is to build a complete modern web application while gaining practical experience with the Next.js ecosystem.

The project combines frontend development, backend services, database management, authentication, realtime functionality, form validation, payment integration, and deployment into a single application.

This project also serves as a portfolio project demonstrating the implementation of a **full-stack realtime Point of Sale system** using modern web technologies.

## Project Status

This project is developed as a portfolio project and demonstrates the implementation of a modern **Realtime Cafe Point of Sale system** using Next.js, React, Supabase, and related technologies.
