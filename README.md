````markdown
# Portfolio

This is a modern personal portfolio built with Vite, React, TypeScript, Framer Motion, and Tailwind CSS. It showcases all my personal knowledge and ongoing career with a beautiful, responsive design.

## 🎨 Features

- ⚡️ **Lightning Fast** - Built with Vite for optimal performance
- 🎬 **Beautiful Animations** - Smooth transitions using Framer Motion
- 🌍 **Bilingual** - Full English/Spanish translation support
- 🌙 **Dark/Light Mode** - Theme toggle with persistent preferences
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎯 **TypeScript** - Type-safe development
- 🧭 **Sticky Navigation** - Smart navigation with scroll-activated background and active section highlighting
- � **Scroll Progress** - Visual scroll progress indicator
- �💼 **Projects Showcase** - Interactive project cards with detailed modals
- 🛠️ **Tech Stack Display** - Animated technology showcase
- 📥 **Quick Actions** - Collapsible floating buttons for resume download and email
- 🎨 **Modern UI** - Built with Tailwind CSS and custom design system

## 🚀 Tech Stack

### Core

- **Vite** - Lightning fast build tool
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library

### Architecture

- **Context API** - State management for theme and language
- **Modular Components** - Clean, reusable component structure
- **Custom Hooks** - Reusable logic with React hooks
- **Service Layer** - i18n service for translations

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation/     # Sticky navigation with smart background
│   ├── Header/         # Header with title and subtitle
│   ├── About/          # About section
│   ├── Skills/         # Skills grid with animations
│   ├── Projects/       # Project cards and modals
│   ├── TechStack/      # Animated technology stack
│   ├── Footer/         # Footer component
│   ├── ThemeToggle/    # Dark/Light mode toggle (now in Navigation)
│   └── FloatingActions/ # Collapsible floating action buttons
├── contexts/           # React contexts
│   ├── ThemeContext.tsx     # Theme management
│   └── LanguageContext.tsx  # Language management
├── services/           # Business logic
│   ├── i18n.ts        # Internationalization service
│   └── translations.ts # Translation definitions
├── data/              # Static data
│   ├── projects.ts    # Project information
│   └── technologies.ts # Technology stack data
├── types/             # TypeScript types
│   ├── translations.ts # Translation types
│   └── project.ts     # Project types
└── utils/             # Utility functions
```

## 🧭 Navigation Features

### Sticky Navigation Bar

- **Smart Background**: Applies background blur and shadow on scroll
- **Active Section Highlighting**: Automatically highlights current section
- **Smooth Scrolling**: Animated scroll to sections with proper offset
- **Scroll Progress**: Visual indicator showing page progress
- **Mobile Menu**: Slide-out navigation for mobile devices

### Navigation Controls

- **Language Toggle**: Switch between English and Spanish (moved to navbar)
- **Theme Toggle**: Dark/Light mode toggle (moved to navbar)
- **Logo**: Click to scroll to top
- **Section Links**: Direct navigation to any page section

## 🌐 Internationalization (i18n)

The portfolio supports both English and Spanish with a simple toggle button. Translations are managed through:

- **Service Layer**: Singleton service for translation management
- **Context API**: Global state for current language
- **Local Storage**: Persistent language preference
- **Navigation**: Includes navigation menu translations

## 🎨 Theming

Custom theme system with:

- Light and dark mode support
- CSS custom properties for colors
- Tailwind CSS integration
- Persistent theme preference in localStorage
- Smooth transitions between themes

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🎯 Key Components

### Navigation

- **Sticky Behavior**: Fixed position with scroll-triggered styling
- **Active Section Detection**: Automatically highlights current section
- **Smooth Scrolling**: Animated navigation between sections
- **Mobile Responsive**: Slide-out menu for smaller screens
- **Progress Indicator**: Visual scroll progress bar
- **Integrated Controls**: Theme and language toggles in navbar

### Floating Actions (Enhanced)

- **Collapsible Design**: Click to expand/collapse action buttons
- **Resume Download**: One-click resume download
- **Email Contact**: Quick contact via email
- **Animated Expansion**: Smooth reveal animations with staggered timing
- **Tooltips**: Helpful tooltips on hover
- **Click to Close**: Actions close the menu automatically

### Projects Section

- Grid layout with project cards
- Click to view detailed project information
- Full project briefs with technologies used
- Links to live demos and GitHub repositories
- Smooth modal animations

### Technology Stack

- Animated technology cards
- Organized by category (Frontend, Backend, Tools, Database)
- Interactive hover effects
- Icon-based visual representation

## 🔧 Customization

### Adding Sections to Navigation

Edit the `menuItems` array in `src/components/Navigation/Navigation.tsx`:

```typescript
const menuItems = [
  { id: 'section-id', label: t.navigation.sectionLabel },
  // Add your sections here
];
```

Remember to add corresponding translations in `src/services/translations.ts`:

```typescript
navigation: {
  sectionLabel: 'Section Name',
  // Add your translations here
}
```

### Adding Projects

Edit `src/data/projects.ts` to add your own projects:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Short description',
  fullBrief: 'Detailed project description',
  technologies: ['React', 'TypeScript', ...],
  projectUrl: 'https://...',
  githubUrl: 'https://github.com/...'
}
```

### Adding Technologies

Edit `src/data/technologies.ts` to customize your tech stack:

```typescript
{
  name: 'Technology Name',
  category: 'frontend' | 'backend' | 'tools' | 'database',
  icon: '🎨'
}
```

### Translations

Add or modify translations in `src/services/translations.ts` for both English and Spanish.

## 🎛️ User Experience Features

### Smart Navigation

- **Section Anchoring**: Each section has a unique ID for direct linking
- **Scroll Offset**: Proper spacing to account for sticky navigation
- **Active State**: Visual indication of current section
- **Mobile Menu**: Touch-friendly slide-out menu

### Responsive Interactions

- **Hover Effects**: Subtle animations on interactive elements
- **Click Feedback**: Visual feedback for all clickable items
- **Smooth Transitions**: Consistent animation timing throughout
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📝 Best Practices

- ✅ Modular component structure
- ✅ TypeScript for type safety
- ✅ Responsive design with mobile-first approach
- ✅ Accessible UI with ARIA labels and keyboard navigation
- ✅ Performance optimized with Vite
- ✅ Clean code with ESLint
- ✅ Semantic HTML with proper section anchors
- ✅ SEO-friendly structure
- ✅ Smooth scrolling and proper navigation offsets
- ✅ Mobile-optimized navigation

## 📄 License

This project is open source and available under the MIT License.
````
