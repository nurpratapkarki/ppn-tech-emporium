
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, Star, ShoppingCart, Check, Clock, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const serviceData = {
  1: {
    id: 1,
    name: 'Computer Repair & Diagnostics',
    category: 'repair',
    price: 89,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800',
    rating: 4.9,
    reviews: 156,
    badge: 'Most Popular',
    available: true,
    description: 'Professional computer repair and diagnostic services for desktops and laptops. Our certified technicians can fix hardware and software issues quickly and efficiently.',
    features: [
      'Complete hardware diagnostics',
      'Software troubleshooting',
      'Virus and malware removal',
      'Operating system repair',
      'Data recovery services',
      'Hardware component replacement',
      'Performance optimization',
      'Free initial consultation'
    ],
    includes: [
      'Initial diagnosis (normally $25)',
      'Detailed repair report',
      '30-day warranty on repairs',
      'Data backup during repair',
      'Remote support follow-up'
    ],
    duration: '2-4 hours',
    location: 'In-store or On-site',
    warranty: '30 days'
  },
  2: {
    id: 2,
    name: 'CCTV Installation & Setup',
    category: 'installation',
    price: 299,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800',
    rating: 4.8,
    reviews: 98,
    badge: 'Professional',
    available: true,
    description: 'Complete CCTV security system installation and configuration for homes and businesses. Includes camera setup, DVR configuration, and mobile app access.',
    features: [
      'Site survey and consultation',
      'Professional camera installation',
      'DVR/NVR setup and configuration',
      'Network configuration',
      'Mobile app setup',
      'User training session',
      'System testing and optimization',
      '24/7 technical support'
    ],
    includes: [
      'Free site survey and consultation',
      'Professional installation (up to 4 cameras)',
      'Basic DVR/NVR configuration',
      'Mobile app setup and training',
      'System documentation',
      '6-month warranty on installation'
    ],
    duration: '4-6 hours',
    location: 'On-site only',
    warranty: '6 months'
  },
  3: {
    id: 3,
    name: 'Printer Sales & Repair',
    category: 'repair',
    price: 49,
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800',
    rating: 4.7,
    reviews: 124,
    badge: 'Quick Service',
    available: true,
    description: 'Professional printer repair services and sales of new printers. We handle all major brands and types including inkjet, laser, and multifunction printers.',
    features: [
      'All brand printer repair',
      'New printer sales',
      'Ink and toner replacement',
      'Print head cleaning',
      'Driver installation',
      'Network printer setup',
      'Maintenance contracts',
      'Same-day service available'
    ],
    includes: [
      'Free diagnostic check',
      'Cleaning and calibration',
      '90-day repair warranty',
      'Setup and testing',
      'Basic user training'
    ],
    duration: '1-2 hours',
    location: 'In-store or On-site',
    warranty: '90 days'
  },
  4: {
    id: 4,
    name: 'Networking & Intercom Setup',
    category: 'installation',
    price: 199,
    image: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800',
    rating: 4.6,
    reviews: 87,
    badge: 'Enterprise',
    available: true,
    description: 'Complete networking and intercom system installation for homes and businesses. Includes WiFi setup, network security, and intercom configuration.',
    features: [
      'Network infrastructure setup',
      'WiFi optimization',
      'Intercom system installation',
      'Network security configuration',
      'Cable management',
      'Access point installation',
      'Remote monitoring setup',
      'Performance testing'
    ],
    includes: [
      'Network assessment',
      'Professional installation',
      'Security configuration',
      'User documentation',
      '6-month support',
      'Performance optimization'
    ],
    duration: '3-5 hours',
    location: 'On-site only',
    warranty: '1 year'
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { user } = useAuth();
  
  // Convert string id to number and safely access service data
  const serviceId = Number(id);
  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
        <Link to="/services">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  const handleBookService = () => {
    if (!user) {
      toast.error('Please login to book services');
      return;
    }

    addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      image: service.image,
      type: 'service'
    });
    
    toast.success('Service added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Services
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Service Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-96 object-cover"
            />
            {service.badge && (
              <Badge className="absolute top-4 left-4 bg-accent">
                {service.badge}
              </Badge>
            )}
          </div>
        </div>

        {/* Service Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{service.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-muted-foreground text-sm md:text-base">
                ({service.rating}) • {service.reviews} reviews
              </span>
            </div>
            
            <div className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Starting at ${service.price}
            </div>

            <p className="text-muted-foreground mb-6 text-sm md:text-base">{service.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm md:text-base">Duration</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{service.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm md:text-base">Location</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{service.location}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm md:text-base">Warranty</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{service.warranty}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full"
              onClick={handleBookService}
              disabled={!service.available}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {user ? 'Book Service' : 'Login to Book Service'}
            </Button>
            
            <Button variant="outline" size="lg" className="w-full">
              <Phone className="w-5 h-5 mr-2" />
              Call for Custom Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Service Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
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
            <CardTitle>What's Included</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
