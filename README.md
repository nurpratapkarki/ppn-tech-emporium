
# PPN Computers - E-commerce Website

A modern, responsive e-commerce website for PPN Computers built with React, TypeScript, and Tailwind CSS. Features include product catalog, service listings, shopping cart, customer authentication, and dark mode support.

## 🚀 Features

### Frontend Features
- **Multi-page website** with responsive design
- **Dark/Light mode** toggle with system preference detection
- **Product catalog** with filtering, search, and detailed product pages
- **Service listings** with detailed service pages
- **Shopping cart** functionality using localStorage
- **Customer authentication** system (login/register)
- **Responsive design** optimized for all devices
- **Modern UI** with smooth animations and transitions

### Authentication & Cart
- **Local authentication** system with localStorage persistence
- **Protected cart functionality** - login required for ordering
- **Guest browsing** - full website access without login
- **Persistent cart** across browser sessions
- **User-friendly notifications** with toast messages

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Context API
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Data Fetching**: TanStack Query (React Query)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Git

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd ppn-computers

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🔧 Django Backend Integration

This frontend is designed to integrate with a Django REST API backend. Here's the integration plan:

### Backend Requirements

#### 1. Authentication Endpoints
```python
# Django URLs needed
POST /api/auth/register/     # User registration
POST /api/auth/login/        # User login  
POST /api/auth/logout/       # User logout
GET  /api/auth/user/         # Get current user info
POST /api/auth/refresh/      # Refresh JWT token
```

#### 2. Product Management
```python
GET    /api/products/              # List all products
GET    /api/products/{id}/         # Get product details
POST   /api/products/              # Create product (admin)
PUT    /api/products/{id}/         # Update product (admin)
DELETE /api/products/{id}/         # Delete product (admin)
GET    /api/products/categories/   # List categories
```

#### 3. Service Management
```python
GET    /api/services/              # List all services
GET    /api/services/{id}/         # Get service details
POST   /api/services/              # Create service (admin)
PUT    /api/services/{id}/         # Update service (admin)
DELETE /api/services/{id}/         # Delete service (admin)
```

#### 4. Order & Cart Management
```python
GET    /api/cart/                  # Get user's cart
POST   /api/cart/add/              # Add item to cart
PUT    /api/cart/update/{id}/      # Update cart item
DELETE /api/cart/remove/{id}/      # Remove from cart
POST   /api/orders/                # Create order from cart
GET    /api/orders/                # List user's orders
GET    /api/orders/{id}/           # Get order details
```

### Django Models Structure

```python
# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True)
    address = models.TextField(blank=True)

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)

class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    original_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')
    in_stock = models.BooleanField(default=True)
    features = models.JSONField(default=list)
    specifications = models.JSONField(default=dict)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    review_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

class Service(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(upload_to='services/')
    features = models.JSONField(default=list)
    includes = models.JSONField(default=list)
    duration = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    warranty = models.CharField(max_length=100)
    available = models.BooleanField(default=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    review_count = models.IntegerField(default=0)

class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, null=True, blank=True)
    quantity = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, null=True, blank=True)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
```

### Frontend Configuration for Django

Update the following files to connect to Django:

#### 1. Environment Variables
Create `.env` file:
```bash
VITE_API_BASE_URL=http://localhost:8000/api
VITE_MEDIA_BASE_URL=http://localhost:8000/media
```

#### 2. API Client Setup
```typescript
// src/lib/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const apiClient = {
  // Authentication
  login: (email: string, password: string) => 
    fetch(`${API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }),
  
  register: (name: string, email: string, password: string) =>
    fetch(`${API_BASE_URL}/auth/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    }),

  // Products
  getProducts: () => fetch(`${API_BASE_URL}/products/`),
  getProduct: (id: string) => fetch(`${API_BASE_URL}/products/${id}/`),

  // Services  
  getServices: () => fetch(`${API_BASE_URL}/services/`),
  getService: (id: string) => fetch(`${API_BASE_URL}/services/${id}/`),

  // Cart & Orders
  getCart: (token: string) => 
    fetch(`${API_BASE_URL}/cart/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }),
  
  addToCart: (token: string, item: any) =>
    fetch(`${API_BASE_URL}/cart/add/`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(item),
    }),

  createOrder: (token: string) =>
    fetch(`${API_BASE_URL}/orders/`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    }),
};
```

### Django Setup Commands

```bash
# Install required packages
pip install django djangorestframework django-cors-headers pillow djangorestframework-simplejwt

# Django settings.py additions
INSTALLED_APPS = [
    'rest_framework',
    'corsheaders',
    'rest_framework_simplejwt',
    # your apps
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # other middleware
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Vite dev server
    "http://127.0.0.1:5173",
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
```

## 🌐 Current Frontend Features

### Pages
- **Home** (`/`) - Landing page with hero section and featured content
- **Products** (`/products`) - Product catalog with filtering and search
- **Product Detail** (`/products/:id`) - Detailed product information
- **Services** (`/services`) - Service listings
- **Service Detail** (`/services/:id`) - Detailed service information  
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information

### Components
- **Header** - Navigation with cart, auth, and theme toggle
- **Footer** - Links and company information
- **Cart Drawer** - Shopping cart with item management
- **Login Dialog** - Authentication modal with login/register tabs
- **Theme Toggle** - Dark/light mode switcher

### Context Providers
- **AuthContext** - User authentication state management
- **CartContext** - Shopping cart state management
- **ThemeContext** - Theme preference management

## 🔒 Authentication Flow

1. **Guest Access**: Users can browse products and services without login
2. **Login Required**: Adding to cart or ordering requires authentication
3. **Registration**: New users can create accounts
4. **Persistent Sessions**: User sessions persist across browser refreshes
5. **Logout**: Clean logout with session cleanup

## 🛒 Cart Management

1. **Local Storage**: Cart data persists locally until Django integration
2. **Add/Remove Items**: Full cart management functionality
3. **Quantity Updates**: Modify item quantities
4. **Cart Total**: Real-time total calculation
5. **Checkout Flow**: Prepared for Django backend integration

## 🎨 Design System

The project uses a comprehensive design system with:
- **CSS Custom Properties** for theming
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built components
- **Consistent spacing** and typography
- **Responsive breakpoints**
- **Animation utilities**

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts** with CSS Grid and Flexbox
- **Touch-friendly** interface elements
- **Optimized images** and assets

## 🚀 Deployment

### Frontend Deployment
- Deploy on Vercel, Netlify, or similar platforms
- Build command: `npm run build`
- Output directory: `dist`

### Full-Stack Deployment
- Frontend: Static hosting (Vercel/Netlify)
- Backend: Django on Heroku/DigitalOcean/AWS
- Database: PostgreSQL recommended
- Media Storage: AWS S3/Cloudinary

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: support@ppncomputers.com
- Phone: +1 (555) 123-4567
- Website: https://ppncomputers.com

---

**Note**: This frontend is ready for Django backend integration. The current implementation uses localStorage for cart and mock authentication. Replace these with actual Django API calls when the backend is ready.
