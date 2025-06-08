import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, Star, ShoppingCart, Check, X, Phone } from 'lucide-react';
import { toast } from 'sonner';

const productData = {
  1: {
    id: 1,
    name: 'Gaming Desktop PC - RTX 4070',
    category: 'computers',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller',
    inStock: true,
    description: 'High-performance gaming desktop featuring the latest RTX 4070 graphics card, Intel Core i7 processor, 32GB DDR4 RAM, and 1TB NVMe SSD for lightning-fast gaming and productivity.',
    features: [
      'Intel Core i7-13700K Processor',
      'NVIDIA RTX 4070 Graphics Card',
      '32GB DDR4 3200MHz RAM',
      '1TB NVMe SSD Storage',
      'MSI Z790 Gaming Motherboard',
      '750W 80+ Gold PSU',
      'RGB Liquid Cooling System',
      'Tempered Glass Side Panel'
    ],
    specifications: {
      'Processor': 'Intel Core i7-13700K',
      'Graphics': 'NVIDIA RTX 4070 8GB',
      'Memory': '32GB DDR4',
      'Storage': '1TB NVMe SSD',
      'Motherboard': 'MSI Z790 Gaming',
      'PSU': '750W 80+ Gold',
      'Case': 'Mid-Tower RGB',
      'Warranty': '2 Years'
    }
  },
  2: {
    id: 2,
    name: 'Professional Business Laptop',
    category: 'computers',
    price: 899,
    originalPrice: undefined, // Making this explicitly optional
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800',
    rating: 4.6,
    reviews: 89,
    badge: 'New',
    inStock: true,
    description: 'Professional laptop designed for business productivity with long battery life, premium build quality, and enterprise-grade security features.',
    features: [
      'Intel Core i5-13500H Processor',
      '16GB DDR4 RAM',
      '512GB NVMe SSD',
      '14" Full HD IPS Display',
      'Intel Iris Xe Graphics',
      'Fingerprint Scanner',
      'TPM 2.0 Security Chip',
      '10-hour Battery Life'
    ],
    specifications: {
      'Processor': 'Intel Core i5-13500H',
      'Memory': '16GB DDR4',
      'Storage': '512GB NVMe SSD',
      'Display': '14" Full HD IPS',
      'Graphics': 'Intel Iris Xe',
      'Weight': '1.4kg',
      'Battery': 'Up to 10 hours',
      'Warranty': '1 Year'
    }
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { user } = useAuth();
  
  // Convert string id to number and safely access product data
  const productId = Number(id);
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/products">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Please login to add items to cart');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: 'product'
    });
    
    toast.success('Product added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 md:h-[500px] object-cover"
            />
            {product.badge && (
              <Badge className="absolute top-4 left-4 bg-accent">
                {product.badge}
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="destructive" className="absolute top-4 right-4">
                Out of Stock
              </Badge>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-muted-foreground text-sm md:text-base">
                ({product.rating}) • {product.reviews} reviews
              </span>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                ${product.price}
              </div>
              {product.originalPrice && (
                <div className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </div>
              )}
              {product.originalPrice && (
                <Badge variant="secondary">
                  Save ${product.originalPrice - product.price}
                </Badge>
              )}
            </div>

            <p className="text-muted-foreground mb-6 text-sm md:text-base">{product.description}</p>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {!product.inStock ? 'Out of Stock' : user ? 'Add to Cart' : 'Login to Purchase'}
            </Button>
            
            <Button variant="outline" size="lg" className="w-full">
              <Phone className="w-5 h-5 mr-2" />
              Call for Support
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="font-medium text-sm md:text-base">{key}</span>
                  <span className="text-muted-foreground text-sm md:text-base">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
