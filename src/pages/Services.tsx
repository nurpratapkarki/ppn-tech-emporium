
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ArrowRight, Clock, MapPin } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Computer Repair & Diagnostics',
    category: 'repair',
    price: 89,
    thumbnail_url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500',
    rating: 4.9,
    rating_count: 156,
    badge: 'Most Popular',
    duration_minutes: 240,
    location: 'In-store or On-site',
    short_description: 'Professional computer repair and diagnostic services for all types of issues.'
  },
  {
    id: 2,
    name: 'CCTV Installation & Setup',
    category: 'installation',
    price: 299,
    thumbnail_url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500',
    rating: 4.8,
    rating_count: 98,
    badge: 'Professional',
    duration_minutes: 360,
    location: 'On-site only',
    short_description: 'Complete CCTV security system installation and configuration.'
  },
  {
    id: 3,
    name: 'Printer Sales & Repair',
    category: 'repair',
    price: 49,
    thumbnail_url: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500',
    rating: 4.7,
    rating_count: 124,
    badge: 'Quick Service',
    duration_minutes: 120,
    location: 'In-store or On-site',
    short_description: 'Professional printer repair services and sales of new printers.'
  },
  {
    id: 4,
    name: 'Networking & Intercom Setup',
    category: 'installation',
    price: 199,
    thumbnail_url: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=500',
    rating: 4.6,
    rating_count: 87,
    badge: 'Enterprise',
    duration_minutes: 300,
    location: 'On-site only',
    short_description: 'Complete networking and intercom system installation.'
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional technology services to keep your business running smoothly. 
          From repairs to installations, we've got you covered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={service.thumbnail_url} 
                alt={service.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {service.badge && (
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                  {service.badge}
                </Badge>
              )}
            </div>
            
            <CardHeader className="pb-3">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {service.name}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({service.rating}) • {service.rating_count} reviews
                </span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {service.short_description}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{Math.floor(service.duration_minutes / 60)}-{Math.ceil(service.duration_minutes / 60)} hours</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{service.location}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="text-xl font-bold text-primary">
                  Starting at ${service.price}
                </div>
              </div>
              
              <Link to={`/services/${service.id}`} className="block">
                <Button className="w-full group">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see exactly what you need? We offer custom technology solutions 
            tailored to your specific requirements.
          </p>
          <Button size="lg" className="mx-auto">
            Contact Us for Custom Quote
          </Button>
        </Card>
      </div>
    </div>
  );
}
