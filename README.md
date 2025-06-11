# URL Shortener Frontend

A modern, responsive frontend application for a URL shortening service built with React and Vite.

## Features

- User authentication (Sign up and Login)
- Dashboard for managing shortened URLs
- Modern UI with Tailwind CSS
- State management with Redux Toolkit
- Data fetching with React Query
- Type-safe routing with TanStack Router

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack React Query
- **Routing**: TanStack Router
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend-shorturl
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── api/          # API integration
├── assets/       # Static assets
├── components/   # Reusable components
├── pages/        # Page components
├── routing/      # Route configuration
├── store/        # Redux store setup
└── utils/        # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
