import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Users, FileText } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="h-4 w-4" />
                Cyber Safety Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Stay Safe from Cyber Scams
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learn about common cyber scams, protect yourself from fraud, and help others stay safe online. 
                A comprehensive resource for understanding and preventing digital threats.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/guidance">
                  <Button size="lg" className="font-semibold">
                    Learn About Scams
                  </Button>
                </Link>
                <Link to="/reports">
                  <Button size="lg" variant="outline" className="font-semibold">
                    View Reports
                  </Button>
                </Link>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <strong>Important:</strong> Never share your OTP, PIN, or passwords with anyone, including on this site.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hero-cyber-guidance.dim_1600x900.png"
                alt="Cyber security illustration"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Help You Stay Safe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive resources to educate, protect, and empower you against cyber threats
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Scam Education</CardTitle>
              <CardDescription>
                Learn about phishing, investment fraud, identity theft, and other common scams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/guidance">
                <Button variant="ghost" className="w-full">
                  Explore Scams →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Help & Support</CardTitle>
              <CardDescription>
                Step-by-step guidance on what to do if you've been scammed and how to help others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/help">
                <Button variant="ghost" className="w-full">
                  Get Help →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Community Reports</CardTitle>
              <CardDescription>
                Share your experience and learn from others' scam reports to stay informed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/reports">
                <Button variant="ghost" className="w-full">
                  View Reports →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety Reminder Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Remember: Your Safety First</h3>
            <p className="text-muted-foreground">
              This platform is for educational purposes only. We never ask for sensitive information like 
              passwords, OTPs, PINs, or banking credentials. If you've been scammed, contact your bank 
              immediately and report to your local cybercrime authorities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
