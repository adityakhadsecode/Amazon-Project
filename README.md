# Amazon E-commerce Clone

A full-featured e-commerce web application that replicates the core functionality of Amazon's shopping experience. Built with vanilla JavaScript, HTML5, and CSS3, this project demonstrates modern frontend development practices and e-commerce user flows.

## 🚀 Features

### Core Shopping Experience
- **Product Catalog**: Browse through 40+ products with detailed information including images, ratings, and pricing
- **Shopping Cart**: Add/remove items with persistent storage using localStorage
- **Dynamic Cart Updates**: Real-time cart quantity updates across all pages
- **Product Ratings**: Visual star ratings with customer review counts
- **Quantity Selection**: Choose quantities from 1-10 for each product

### Checkout & Order Management
- **Secure Checkout**: Review orders with comprehensive order summary
- **Delivery Options**: Multiple shipping choices with dynamic pricing
- **Order History**: View past orders with detailed order information
- **Package Tracking**: Track package delivery status with progress indicators
- **Buy Again**: Quick reorder functionality for previous purchases

### User Interface
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Modern UI/UX**: Clean, intuitive interface inspired by Amazon's design
- **Navigation**: Seamless navigation between product browsing, cart, and order management
- **Visual Feedback**: Loading states, success confirmations, and interactive elements

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Module System**: ES6 Modules for organized code structure
- **Date Handling**: Day.js library for date manipulation
- **Storage**: Browser localStorage for cart persistence
- **Styling**: Custom CSS with responsive design principles
- **Icons**: Custom icon set for consistent visual experience

## 📁 Project Structure

```
Amazon Project/
├── amazon.html              # Main product listing page
├── checkout.html            # Shopping cart and checkout
├── orders.html              # Order history page
├── tracking.html            # Package tracking page
├── data/
│   ├── cart.js             # Cart management and localStorage
│   ├── products.js         # Product catalog data
│   └── deliveryOptions.js  # Shipping options configuration
├── scripts/
│   ├── amazon.js           # Product listing functionality
│   ├── checkout.js         # Checkout and cart management
│   └── utils/
│       ├── money.js        # Currency formatting utilities
│       └── day.js          # Date utility library
├── styles/
│   ├── shared/             # Global styles and components
│   │   ├── general.css     # Base styles and typography
│   │   └── amazon-header.css # Header navigation styles
│   └── pages/              # Page-specific stylesheets
│       ├── amazon.css      # Product listing styles
│       ├── checkout/       # Checkout page styles
│       ├── orders.css      # Order history styles
│       └── tracking.css    # Package tracking styles
├── images/
│   ├── products/           # Product images and variations
│   ├── icons/              # UI icons and graphics
│   └── ratings/            # Star rating images
└── backend/
    └── products.json       # Product data backup
```

## 🎯 Key Functionality

### Cart Management
- **Add to Cart**: One-click product addition with quantity selection
- **Cart Persistence**: Items remain in cart across browser sessions
- **Dynamic Updates**: Real-time quantity and total calculations
- **Remove Items**: Easy item removal with immediate UI updates

### Order Processing
- **Order Summary**: Detailed breakdown of items, shipping, and taxes
- **Delivery Scheduling**: Multiple shipping options with date calculations
- **Order Tracking**: Visual progress tracking for shipped items
- **Order History**: Complete order management and reorder capabilities

### Product Features
- **Product Variations**: Support for product variants and options
- **Rating System**: 5-star rating system with customer review counts
- **Price Display**: Consistent currency formatting across all pages
- **Image Gallery**: High-quality product images with responsive loading

## 🚀 Getting Started

### Prerequisites
- Modern web browser with ES6+ support
- Local web server (optional but recommended)

### Installation
1. Clone or download the project files
2. Open `amazon.html` in your web browser
3. For development, serve files through a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Usage
1. **Browse Products**: Start at `amazon.html` to view the product catalog
2. **Add to Cart**: Click "Add to Cart" buttons to add items
3. **Review Cart**: Navigate to checkout page to review and modify cart
4. **Manage Orders**: Use the orders page to view order history
5. **Track Packages**: Access tracking information for shipped items

## 🔧 Technical Implementation

### Module Architecture
The application uses ES6 modules for clean separation of concerns:
- `cart.js`: Handles cart state management and localStorage operations
- `products.js`: Contains product catalog data and search functionality
- `deliveryOptions.js`: Manages shipping options and delivery calculations

### State Management
- **Cart State**: Centralized cart management with automatic persistence
- **Product Data**: Static product catalog with support for dynamic loading
- **Delivery Options**: Configurable shipping options with real-time calculations

### Responsive Design
- **Mobile-First**: Optimized for mobile devices with progressive enhancement
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts
- **Touch-Friendly**: Large touch targets and intuitive mobile interactions

## 🎨 Design System

### Color Palette
- Primary: Amazon Orange (#FF9900)
- Secondary: Dark Blue (#232F3E)
- Background: Light Gray (#F3F3F3)
- Text: Dark Gray (#333333)

### Typography
- Font Family: Roboto (Google Fonts)
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)
- Responsive font sizes with mobile optimization

### Component Library
- **Buttons**: Primary and secondary button styles
- **Cards**: Product cards with consistent spacing and shadows
- **Forms**: Input fields with focus states and validation
- **Navigation**: Header with responsive navigation elements

## 🔮 Future Enhancements

- **User Authentication**: Login and user account management
- **Payment Integration**: Secure payment processing
- **Product Search**: Advanced search and filtering capabilities
- **Reviews System**: Customer review and rating submission
- **Recommendations**: AI-powered product recommendations
- **Wishlist**: Save items for later purchase
- **Multi-language**: Internationalization support

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

This project is a demonstration of e-commerce web development principles. Contributions and improvements are welcome!

## 📄 License

This project is for educational purposes and demonstrates e-commerce web development concepts.

---

**Note**: This is a frontend-only implementation for educational purposes. No actual payment processing or backend services are included.
