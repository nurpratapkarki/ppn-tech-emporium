
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'computers', label: 'Computers' },
    { value: 'printers', label: 'Printers' },
    { value: 'cctv', label: 'CCTV Systems' },
    { value: 'networking', label: 'Networking' },
    { value: 'accessories', label: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: 'Gaming Desktop PC - RTX 4070',
      category: 'computers',
      price: 1299,
      originalPrice: 1499,
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400',
      rating: 4.8,
      reviews: 124,
      badge: 'Best Seller',
      inStock: true
    },
    {
      id: 2,
      name: 'Professional Business Laptop',
      category: 'computers',
      price: 899,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400',
      rating: 4.6,
      reviews: 89,
      badge: 'New',
      inStock: true
    },
    {
      id: 3,
      name: 'All-in-One Color Printer',
      category: 'printers',
      price: 249,
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400',
      rating: 4.7,
      reviews: 67,
      badge: 'Popular',
      inStock: true
    },
    {
      id: 4,
      name: '4K Security Camera System',
      category: 'cctv',
      price: 599,
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400',
      rating: 4.9,
      reviews: 45,
      badge: 'Professional',
      inStock: true
    },
    {
      id: 5,
      name: 'Wireless Router - WiFi 6',
      category: 'networking',
      price: 199,
      image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400',
      rating: 4.5,
      reviews: 156,
      inStock: true
    },
    {
      id: 6,
      name: 'Mechanical Gaming Keyboard',
      category: 'accessories',
      price: 129,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
      rating: 4.8,
      reviews: 203,
      inStock: false
    },
    {
      id: 7,
      name: 'Ultra-wide Monitor 34"',
      category: 'accessories',
      price: 449,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
      rating: 4.7,
      reviews: 78,
      badge: 'Premium',
      inStock: true
    },
    {
      id: 8,
      name: 'Laser Printer - Monochrome',
      category: 'printers',
      price: 179,
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400',
      rating: 4.4,
      reviews: 92,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold">Our Products</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our comprehensive range of electronics and technology solutions
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full md:w-64"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredProducts.length} products found
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <Card key={product.id} className="group hover-lift animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent">
                    {product.badge}
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <div className="space-y-2">
                <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.rating}) • {product.reviews} reviews
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <Badge variant="secondary" className="text-xs">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>
                
                <Button 
                  className="w-full" 
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "secondary"}
                >
                  {product.inStock ? (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </>
                  ) : (
                    'Notify When Available'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
