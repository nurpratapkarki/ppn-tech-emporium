
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  Clock, 
  Star,
  Target,
  Heart,
  Shield
} from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '1000+' },
    { icon: Clock, label: 'Years Experience', value: '15+' },
    { icon: Award, label: 'Certifications', value: '25+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: '15+ years in IT services and electronics retail'
    },
    {
      name: 'Sarah Johnson',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      bio: 'Expert in networking and security systems'
    },
    {
      name: 'Mike Chen',
      role: 'Senior Technician',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Specialized in computer repair and data recovery'
    },
    {
      name: 'Lisa Davis',
      role: 'Customer Service Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Ensuring exceptional customer experience'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every product we sell and every service we provide'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do, driving our decisions and innovations'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through honest communication and reliable service'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="secondary" className="w-fit">
              About PPN Computers
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Your Trusted Technology
              <span className="gradient-text block">Partner Since 2010</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              For over a decade, PPN Computers has been serving the community with 
              quality electronics and professional technical services. We've grown from 
              a small local shop to a trusted technology partner for hundreds of 
              satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Get In Touch</Button>
              <Button variant="outline" size="lg">Our Services</Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600" 
              alt="Our team at work"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">How We Started</h3>
              <p className="text-muted-foreground">
                PPN Computers was founded in 2010 with a simple mission: to provide 
                quality technology products and services to our local community. What 
                started as a small computer repair shop has evolved into a comprehensive 
                technology solutions provider.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Where We're Going</h3>
              <p className="text-muted-foreground">
                Today, we continue to expand our services while maintaining our 
                commitment to personal service and technical excellence. We're constantly 
                updating our skills and inventory to meet the evolving needs of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The experts behind our exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={member.name} className="text-center hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Certifications & Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We maintain industry certifications and partnerships to ensure the highest quality service
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-lg font-semibold">CompTIA Certified</div>
                <div className="text-sm text-muted-foreground">A+ Certification</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">Microsoft Partner</div>
                <div className="text-sm text-muted-foreground">Authorized Reseller</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">Cisco Certified</div>
                <div className="text-sm text-muted-foreground">Network Specialist</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">HP Authorized</div>
                <div className="text-sm text-muted-foreground">Service Provider</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Experience the PPN Difference?
            </h2>
            <p className="text-xl opacity-90">
              Join hundreds of satisfied customers who trust us with their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/contact">Contact Us Today</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <a href="/services">View Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
