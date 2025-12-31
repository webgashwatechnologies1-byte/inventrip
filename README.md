# Inventrip - Travel Booking Website

A complete React travel booking website built with Vite, React Router DOM, and Tailwind CSS.

## Features

- **Modern UI**: Clean, responsive design similar to Thrillophilia
- **Complete Routing**: All pages properly linked with React Router
- **Package Management**: Dynamic package listings for 8 destinations
- **Callback Form**: Popup form for requesting callbacks
- **Contact Integration**: Direct phone call links (tel:7832911551)
- **Responsive Design**: Works on all devices (mobile, tablet, desktop)

## Pages

### Main Pages
- `/` - Home page with featured destinations and packages
- `/about` - About Inventrip
- `/contact` - Contact information and callback form
- `/booking` - Booking page (supports transport type query params)
- `/disclaimer` - Disclaimer page
- `/privacy-policy` - Privacy Policy
- `/terms` - Terms & Conditions
- `/refund-policy` - Refund Policy
- `/vision-mission` - Vision & Mission
- `/testimonials` - Client Testimonials

### Destination Pages
- `/destinations/himachal` - 10 Himachal packages
- `/destinations/spiti` - 5 Spiti packages
- `/destinations/leh` - 5 Leh packages
- `/destinations/rajasthan` - 5 Rajasthan packages
- `/destinations/kashmir` - 5 Kashmir packages
- `/destinations/uttarakhand` - 5 Uttarakhand packages
- `/destinations/goa` - 5 Goa packages
- `/destinations/kerala` - 5 Kerala packages

### Package Detail Pages
- `/package/:slug` - Individual package detail pages

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with dropdowns
│   ├── Footer.jsx          # Footer with 4 columns
│   ├── PackageCard.jsx     # Package card component
│   └── CallbackForm.jsx    # Popup callback form
├── pages/
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── Contact.jsx         # Contact page
│   ├── Booking.jsx         # Booking page
│   ├── Destination.jsx     # Destination listing page
│   ├── PackageDetail.jsx   # Package detail page
│   └── ...                 # Other pages
├── data/
│   └── packages.js        # Package data and destinations
├── App.jsx                 # Main app with routing
└── main.jsx               # Entry point
```

## Features Details

### Navbar
- Logo: "Inventrip"
- Menu items: Home, Transport (dropdown), Destinations (dropdown), Contact Us
- Responsive design with mobile menu

### Footer
- 4 columns: About Inventrip, Useful Links, Destinations Grid, Social Icons
- Copyright notice

### Package Cards
- Image, title, price, duration, rating
- "Call Now" button (tel:7832911551)
- "Request Callback" button (opens popup form)

### Callback Form
- Fields: Full Name, Email, Phone, Travel Date, Traveller Count, Message
- Shows alert on submit: "Thank you! Inventrip expert will contact you shortly."

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool
- **React Router DOM 7** - Routing
- **Tailwind CSS 3** - Styling
- **PostCSS** - CSS processing

## Contact

- Phone: +91 7832911551
- Email: info@inventrip.com

## License

Private project for Inventrip.
