
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Printer, 
  Camera, 
  Settings, 
  Shield, 
  Truck,
  Star,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Gaming Desktop PC',
      price: '$1,299',
      originalPrice: '$1,499',
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400',
      badge: 'Best Seller',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Professional Laptop',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400',
      badge: 'New',
      rating: 4.6
    },
    {
      id: 3,
      name: 'All-in-One Printer',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400',
      badge: 'Popular',
      rating: 4.7
    }
  ];

  const services = [
    {
      icon: Settings,
      title: 'Computer Repair',
      description: 'Expert diagnosis and repair for all computer issues',
      features: ['Hardware repair', 'Software troubleshooting', 'Data recovery']
    },
    {
      icon: Printer,
      title: 'Printer Services',
      description: 'Sales, repair, and maintenance of all printer types',
      features: ['Printer sales', 'Repair & maintenance', 'Ink & toner supply']
    },
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'Professional security camera installation and setup',
      features: ['Camera installation', 'System configuration', '24/7 monitoring setup']
    },
    {
      icon: Shield,
      title: 'Networking Solutions',
      description: 'Complete networking and intercom system solutions',
      features: ['Network setup', 'Intercom systems', 'WiFi optimization']
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Trusted Since 2010
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Your Complete
                  <span className="gradient-text block">Tech Solution</span>
                  Partner
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  From cutting-edge electronics to professional repair services, 
                  we've got all your technology needs covered.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="tech-gradient">
                  <Link to="/products">
                    Shop Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl transform rotate-6" />
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600" 
                alt="Technology workspace"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our top-selling electronics with unbeatable quality and prices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className="group hover-lift border-0 shadow-lg animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent">
                    {product.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.rating})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Professional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert technical services to keep your technology running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="text-center hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose PPN Computers?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best technology solutions and services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Warranty & Support</h3>
            <p className="text-muted-foreground">
              All products and services come with comprehensive warranty and ongoing support
            </p>
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Quick delivery and installation services to get you up and running fast
            </p>
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Expert Team</h3>
            <p className="text-muted-foreground">
              Certified technicians with years of experience in electronics and IT
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Upgrade Your Technology?
            </h2>
            <p className="text-xl opacity-90">
              Get in touch with us today for personalized recommendations and expert advice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
