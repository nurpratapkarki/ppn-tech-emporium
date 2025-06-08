
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Headphones
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ppncomputers.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Tech Street, Digital City, DC 12345',
      description: 'Visit our store location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Sat: 9:00 AM - 6:00 PM',
      description: 'Closed on Sundays'
    }
  ];

  const services = [
    'Computer Repair',
    'Printer Service',
    'CCTV Installation',
    'Networking Setup',
    'General Inquiry',
    'Emergency Service'
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <Badge variant="secondary" className="w-fit mx-auto">
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Contact
            <span className="gradient-text block">PPN Computers</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to solve your technology challenges? We're here to help with 
            expert advice and professional service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Needed</label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(' ', '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      placeholder="Describe your needs or ask us a question..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-sm">{info.content}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card className="animate-slide-in-right" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <CardTitle className="text-xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full justify-start" variant="outline">
                  <a href="tel:+15551234567">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <a href="mailto:info@ppncomputers.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <a href="sms:+15551234567">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Text Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Service */}
            <Card className="bg-destructive text-white border-0 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Emergency Service</h3>
                  <p className="text-sm opacity-90">24/7 support for critical issues</p>
                </div>
                <Button asChild variant="secondary">
                  <a href="tel:+15551234567">Call Emergency Line</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Visit Our Store</h2>
            <p className="text-xl text-muted-foreground">
              Come see our products in person and meet our team
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="bg-muted h-64 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Store Location</h3>
                <p className="text-muted-foreground">123 Tech Street, Digital City, DC 12345</p>
                <Button variant="outline" size="sm">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What are your response times?</h3>
              <p className="text-muted-foreground">
                We typically respond to emails within 2-4 hours during business hours. 
                Phone calls are answered immediately during our operating hours.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Do you offer on-site service?</h3>
              <p className="text-muted-foreground">
                Yes! We provide on-site service for businesses and complex installations. 
                Contact us to discuss your specific needs and scheduling.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept cash, credit cards, debit cards, and bank transfers. 
                Business accounts can be set up for invoicing.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Do you provide warranties?</h3>
              <p className="text-muted-foreground">
                All our products come with manufacturer warranties, and our services 
                include our own warranty ranging from 30 days to 2 years.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
