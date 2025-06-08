
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Printer, 
  Camera, 
  Shield,
  Clock,
  CheckCircle,
  Phone,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: 'Computer Repair & Maintenance',
      description: 'Comprehensive computer repair services for all brands and models',
      price: 'Starting at $79',
      features: [
        'Hardware diagnosis and repair',
        'Software troubleshooting',
        'Virus removal and cleanup',
        'Data recovery services',
        'Performance optimization',
        'Operating system installation'
      ],
      turnaround: '24-48 hours',
      warranty: '90 days',
      badge: 'Most Popular'
    },
    {
      icon: Printer,
      title: 'Printer Sales & Service',
      description: 'Complete printer solutions from sales to ongoing maintenance',
      price: 'Service from $49',
      features: [
        'Printer sales and consultation',
        'Installation and setup',
        'Repair and maintenance',
        'Ink and toner supply',
        'Network printer configuration',
        'Print quality optimization'
      ],
      turnaround: 'Same day',
      warranty: '60 days',
      badge: 'Fast Service'
    },
    {
      icon: Camera,
      title: 'CCTV Installation & Monitoring',
      description: 'Professional security camera systems for homes and businesses',
      price: 'Packages from $599',
      features: [
        'Security assessment consultation',
        'Camera system design',
        'Professional installation',
        'Remote monitoring setup',
        'Mobile app configuration',
        'Ongoing maintenance support'
      ],
      turnaround: '2-3 days',
      warranty: '2 years',
      badge: 'Professional'
    },
    {
      icon: Shield,
      title: 'Networking & Intercom',
      description: 'Complete networking solutions and intercom system installation',
      price: 'Starting at $199',
      features: [
        'Network design and setup',
        'WiFi optimization',
        'Intercom system installation',
        'Network security configuration',
        'Cable management',
        'Performance monitoring'
      ],
      turnaround: '1-2 days',
      warranty: '1 year',
      badge: 'Expert Setup'
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Certified Technicians',
      description: 'Our team consists of certified professionals with years of experience'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast and efficient service to minimize your downtime'
    },
    {
      icon: Shield,
      title: 'Warranty Included',
      description: 'All services come with comprehensive warranty coverage'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock support for critical business systems'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <Badge variant="secondary" className="w-fit mx-auto">
            Professional Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Expert Technology
            <span className="gradient-text block">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            From repairs to installations, our certified technicians provide 
            comprehensive technology services for homes and businesses
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="relative hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              {service.badge && (
                <Badge className="absolute -top-3 left-6 bg-accent z-10">
                  {service.badge}
                </Badge>
              )}
              
              <CardHeader className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-t">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Turnaround</div>
                    <div className="font-semibold">{service.turnaround}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Warranty</div>
                    <div className="font-semibold">{service.warranty}</div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1">
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality service with guaranteed satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-destructive to-orange-500 text-white border-0">
          <CardContent className="p-8 text-center">
            <div className="space-y-4 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold">Emergency Service Available</h3>
              <p className="text-lg opacity-90">
                Need urgent technical support? Our emergency service team is available 
                24/7 for critical business systems and urgent repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Emergency Line
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-destructive">
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Contact us today for a free consultation and quote for your technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/contact">Get Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <a href="tel:+15551234567">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
