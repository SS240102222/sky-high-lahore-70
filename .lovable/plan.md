
# Performance Optimization Plan for Monal Lahore Website

## Current State Analysis

The website has several performance bottlenecks:

1. **All images load immediately** - 8 large JPG files are imported at the top of components and load on initial page render, even sections far below the fold
2. **Google Fonts block rendering** - Montserrat and Inter are loaded via a render-blocking @import in CSS
3. **All components load synchronously** - No code splitting; the entire page bundle loads upfront
4. **Google Maps iframe loads immediately** - The Location component embeds a heavy iframe
5. **No image optimization** - Images use native `<img>` tags without lazy loading or srcset

---

## Optimization Strategy

### 1. Lazy Load Below-the-Fold Components

Use React.lazy() and Suspense to defer loading components not visible on initial page load:

```text
+----------------------------------+
|  Header  (keep eager)            |
+----------------------------------+
|  Hero    (keep eager - LCP)      |
+----------------------------------+
|  About     <-- lazy load         |
|  Gallery   <-- lazy load         |
|  Menu      <-- lazy load         |
|  Experience <-- lazy load        |
|  Reviews   <-- lazy load         |
|  Reservations <-- lazy load      |
|  Location  <-- lazy load         |
|  Footer    <-- lazy load         |
+----------------------------------+
```

**Files to modify:** `src/pages/Index.tsx`

### 2. Optimize Font Loading

Move fonts from CSS `@import` to HTML `<link>` with preload hints and font-display: swap:

- Add `<link rel="preload">` for critical fonts
- Add `<link rel="stylesheet">` with display=swap
- Remove the blocking `@import` from index.css

**Files to modify:** `index.html`, `src/index.css`

### 3. Add Native Lazy Loading to Images

Add `loading="lazy"` attribute to all images except the hero (which is the Largest Contentful Paint element):

- Hero image: `loading="eager"` (or default)
- All other images: `loading="lazy"`

**Files to modify:** 
- `src/components/About.tsx` - indoor hall image
- `src/components/Gallery.tsx` - 4 gallery images
- `src/components/Menu.tsx` - 4 food images
- `src/components/Experience.tsx` - live music image

### 4. Lazy Load Google Maps Iframe

Replace the always-loaded iframe with an intersection observer approach - only load the map when the user scrolls near the Location section.

**Files to modify:** `src/components/Location.tsx`

### 5. Add Image Decoding Hints

Add `decoding="async"` to all images to allow the browser to decode images off the main thread.

**Files to modify:** All components with images

---

## Technical Implementation Details

### Index.tsx Changes
```typescript
// Use React.lazy for below-fold components
const About = lazy(() => import('@/components/About'));
const Gallery = lazy(() => import('@/components/Gallery'));
// ... etc

// Wrap in Suspense with minimal fallback
<Suspense fallback={<div className="min-h-screen" />}>
  <About />
</Suspense>
```

### Font Loading in index.html
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" media="print" onload="this.media='all'" />
```

### Image Lazy Loading Pattern
```jsx
<img
  src={image}
  alt="Description"
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover"
/>
```

### Lazy Map Component Pattern
```typescript
// Only render iframe when in viewport
const [isVisible, setIsVisible] = useState(false);
const mapRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    { rootMargin: '200px' }
  );
  if (mapRef.current) observer.observe(mapRef.current);
  return () => observer.disconnect();
}, []);
```

---

## Summary of Changes

| File | Change |
|------|--------|
| `index.html` | Add font preloading with non-blocking stylesheet, reduce font weights |
| `src/index.css` | Remove blocking @import for Google Fonts |
| `src/pages/Index.tsx` | Add React.lazy() and Suspense for below-fold components |
| `src/components/Hero.tsx` | Add `decoding="async"` to hero image |
| `src/components/About.tsx` | Add `loading="lazy"` and `decoding="async"` |
| `src/components/Gallery.tsx` | Add `loading="lazy"` and `decoding="async"` |
| `src/components/Menu.tsx` | Add `loading="lazy"` and `decoding="async"` |
| `src/components/Experience.tsx` | Add `loading="lazy"` and `decoding="async"` |
| `src/components/Location.tsx` | Lazy load Google Maps iframe using Intersection Observer |

---

## Expected Performance Improvements

- **Faster First Contentful Paint (FCP)**: Non-blocking fonts load progressively
- **Reduced Initial Bundle**: Lazy components only load when scrolled into view
- **Lower Bandwidth on Initial Load**: Images below fold don't load until needed
- **Improved Time to Interactive (TTI)**: Less JavaScript to parse upfront
- **Better Core Web Vitals**: LCP preserved, CLS minimized with fallback placeholders

All changes maintain full functionality - components and images load seamlessly as users scroll.
