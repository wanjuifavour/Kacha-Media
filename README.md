# Kacha Media - Africa's Authentic Storyteller

A modern, responsive website for Kacha Media, a creative agency specializing in African brand storytelling through digital media production and marketing strategy.

## 🌟 Overview

Kacha Media is a full-service creative agency that revolutionizes African brand storytelling by merging cutting-edge technology with authentic narratives. The website showcases their dual-wing approach: **Creative Wing** for storytelling & production, and **Marketing Wing** for strategy & growth.

## ✨ Features

### 🎨 **Modern Design & UX**
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Automatic system theme detection with manual toggle
- **Smooth Animations**: GSAP-powered animations and micro-interactions
- **Glass Morphism**: Modern UI effects with backdrop blur and transparency
- **Interactive Components**: Pixelated image reveal, hover effects, and smooth transitions

### 🏗️ **Architecture & Performance**
- **Next.js 15**: Latest App Router with server-side rendering
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **Component Library**: Comprehensive UI components built with Radix UI
- **Optimized Images**: Next.js Image optimization and lazy loading

### 📱 **Pages & Sections**
- **Homepage**: Hero section, services overview, statistics, and call-to-action
- **About**: Company vision, mission, values, and team information
- **Services**: Detailed service offerings for both Creative and Marketing wings
- **Portfolio**: Showcase of completed projects and case studies
- **Team**: Team member profiles and organizational structure
- **Contact**: Contact information, office locations, and contact form
- **Booking**: Consultation booking system with service selection

### 🎯 **Key Components**
- **NavigationHeader**: Reusable navigation component across all pages
- **PixelatedImageReveal**: Interactive image component with GSAP animations
- **ThemeProvider**: Dark/light theme management with system detection
- **Form Components**: Comprehensive form system with validation
- **Card System**: Flexible card components for content presentation

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Tailwind CSS Animate** - Animation utilities

### **Animation & Interactions**
- **GSAP 3.13.0** - Professional animation library
- **Framer Motion** - React animation library
- **Custom Animations** - Tailwind keyframes and CSS animations

### **Forms & Validation**
- **React Hook Form 7.54.1** - Performant forms
- **Zod 3.24.1** - TypeScript-first schema validation
- **Hookform Resolvers 3.9.1** - Form validation resolvers

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kacha-media
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
kacha-media/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── booking/           # Booking page
│   │   ├── contact/           # Contact page
│   │   ├── portfolio/         # Portfolio page
│   │   ├── services/          # Services page
│   │   ├── team/              # Team page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── navigation-header.tsx
│   │   │   ├── pixelated-image-reveal.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...            # Other UI components
│   │   └── theme-provider.tsx # Theme management
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Amber/Orange gradient (#f59e0b to #f97316)
- **Secondary**: Stone grays (#78716c to #1c1917)
- **Accent**: Custom semantic colors for success, warning, info
- **Dark Mode**: Automatic theme switching with system preference

### **Typography**
- **Primary Font**: Inter (system fallbacks)
- **Monospace**: Fira Code, JetBrains Mono
- **Responsive**: Fluid typography scaling

### **Components**
- **Cards**: Elevated with hover effects and glass morphism
- **Buttons**: Multiple variants with consistent styling
- **Forms**: Accessible form components with validation
- **Navigation**: Sticky header with smooth scrolling

## 🌐 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Environment variables can be set in Vercel dashboard

### **Other Platforms**
- **Netlify**: Compatible with Next.js static export
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🔧 Configuration

### **Environment Variables**
Create a `.env.local` file for local development:
```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### **Tailwind Configuration**
The project uses a custom Tailwind configuration with:
- Extended color palette
- Custom animations and keyframes
- Glass morphism utilities
- Responsive design utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Kacha Media.

## 📞 Contact

- **Website**: [kacha-media.com](https://kachamedia.com)
- **Email**: [contact@kacha-media.com](mailto:contact@kacha-media.com)
- **Location**: Africa

---

**Built for Kacha Media Team by ZeroWan Labs**