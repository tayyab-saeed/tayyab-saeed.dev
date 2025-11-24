# Project Screenshots

This directory contains screenshots for project showcase carousels.

## Directory Structure

Organize screenshots by project slug:

```
screenshots/
├── profolio/
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
├── triangle-wallet/
│   ├── screenshot-1.png
│   └── screenshot-2.png
└── airwatch/
    ├── screenshot-1.png
    └── screenshot-2.png
```

## Image Guidelines

- **Supported formats**: PNG, JPG, JPEG, WebP
- **Aspect ratios**: Both portrait and landscape are supported
- **Recommended dimensions**: 
  - Landscape: 1920x1080 or 1280x720
  - Portrait: 1080x1920 or 750x1334
- **File size**: Keep under 2MB per image for optimal performance

## Usage

Add screenshot paths to your project in `data/projects.ts`:

```typescript
{
  title: 'My Project',
  // ... other fields
  screenshots: [
    '/screenshots/my-project/screenshot-1.png',
    '/screenshots/my-project/screenshot-2.png',
    '/screenshots/my-project/screenshot-3.png',
  ]
}
```

The carousel will automatically display these images with:
- Autoplay (3.5s delay)
- Pause on hover
- Navigation arrows
- Loop functionality

