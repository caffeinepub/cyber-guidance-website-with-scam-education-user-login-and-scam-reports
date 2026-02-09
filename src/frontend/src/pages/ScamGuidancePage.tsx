import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Mail, DollarSign, Phone, CreditCard, Briefcase, Heart, UserX } from 'lucide-react';

const scamTypes = [
  {
    id: 'phishing',
    icon: Mail,
    title: 'Phishing Attacks',
    severity: 'high',
    description: 'Fraudulent emails, messages, or websites designed to steal your personal information.',
    details: [
      'Fake emails appearing to be from banks, government agencies, or trusted companies',
      'Links to fake websites that look legitimate but steal your credentials',
      'Urgent messages claiming your account will be closed or suspended',
      'Requests for personal information, passwords, or OTPs',
    ],
    prevention: [
      'Always verify sender email addresses carefully',
      'Never click suspicious links - type URLs directly into your browser',
      'Check for HTTPS and valid security certificates',
      'Enable two-factor authentication on all accounts',
    ],
  },
  {
    id: 'otp-upi',
    icon: Phone,
    title: 'OTP & UPI Fraud',
    severity: 'critical',
    description: 'Scammers trick you into sharing OTPs or making UPI payments under false pretenses.',
    details: [
      'Fake customer service calls asking for OTPs to "verify" your account',
      'Messages claiming you won a prize and need to pay a small fee via UPI',
      'Requests to install remote access apps to "fix" issues',
      'Fake refund processes that require you to enter OTPs',
    ],
    prevention: [
      'NEVER share OTPs with anyone - banks never ask for them',
      'Verify caller identity by calling official numbers yourself',
      'Be suspicious of unsolicited prize or refund notifications',
      'Never install apps suggested by unknown callers',
    ],
  },
  {
    id: 'fake-support',
    icon: Phone,
    title: 'Fake Customer Care',
    severity: 'high',
    description: 'Scammers impersonate customer service representatives to gain access to your accounts.',
    details: [
      'Fake tech support claiming your device has viruses',
      'Impersonators of bank customer care asking for account details',
      'Fraudulent calls about suspicious transactions requiring immediate action',
      'Requests for remote access to your computer or phone',
    ],
    prevention: [
      'Always call official customer service numbers from the company website',
      'Never give remote access to your devices',
      'Legitimate companies never ask for passwords or PINs',
      'Hang up and call back using verified contact information',
    ],
  },
  {
    id: 'card-skimming',
    icon: CreditCard,
    title: 'Card Skimming & Cloning',
    severity: 'high',
    description: 'Physical or digital theft of your card information to make unauthorized transactions.',
    details: [
      'Skimming devices installed on ATMs or payment terminals',
      'Fake payment pages that capture card details',
      'Waiters or cashiers copying card information',
      'Compromised point-of-sale systems',
    ],
    prevention: [
      'Check ATMs for suspicious devices before use',
      'Cover the keypad when entering your PIN',
      'Use contactless or mobile payments when possible',
      'Monitor your statements regularly for unauthorized charges',
      'Set up transaction alerts on your cards',
    ],
  },
  {
    id: 'investment',
    icon: DollarSign,
    title: 'Investment & Crypto Scams',
    severity: 'critical',
    description: 'Fraudulent investment schemes promising unrealistic returns or guaranteed profits.',
    details: [
      'Ponzi schemes offering guaranteed high returns',
      'Fake cryptocurrency platforms or ICOs',
      'Pump-and-dump stock schemes',
      'Unregistered investment advisors or platforms',
    ],
    prevention: [
      'Research investments thoroughly before committing funds',
      'Be skeptical of guaranteed returns or "get rich quick" promises',
      'Verify investment platforms are properly registered',
      'Never invest based solely on social media recommendations',
      'Consult licensed financial advisors',
    ],
  },
  {
    id: 'job-loan',
    icon: Briefcase,
    title: 'Job & Loan Scams',
    severity: 'medium',
    description: 'Fake job offers or loan approvals designed to extract money or personal information.',
    details: [
      'Job offers requiring upfront payment for training or equipment',
      'Fake loan approval messages asking for processing fees',
      'Work-from-home schemes with unrealistic earnings',
      'Requests for bank details before job confirmation',
    ],
    prevention: [
      'Legitimate employers never ask for payment upfront',
      'Research companies thoroughly before applying',
      'Be wary of jobs with vague descriptions or unrealistic pay',
      'Never pay fees for loan processing before approval',
      'Verify job offers through official company channels',
    ],
  },
  {
    id: 'romance',
    icon: Heart,
    title: 'Romance Scams',
    severity: 'medium',
    description: 'Scammers create fake romantic relationships to manipulate victims into sending money.',
    details: [
      'Fake profiles on dating sites or social media',
      'Quick declarations of love and commitment',
      'Requests for money for emergencies, travel, or medical expenses',
      'Avoidance of video calls or in-person meetings',
    ],
    prevention: [
      'Be cautious of people who quickly profess strong feelings',
      'Never send money to someone you haven\'t met in person',
      'Do reverse image searches on profile photos',
      'Be suspicious if they always have excuses not to meet',
    ],
  },
  {
    id: 'identity-theft',
    icon: UserX,
    title: 'Identity Theft',
    severity: 'critical',
    description: 'Criminals steal your personal information to commit fraud or other crimes in your name.',
    details: [
      'Stolen documents used to open accounts or take loans',
      'Data breaches exposing personal information',
      'Phishing attacks collecting identity documents',
      'Social engineering to gather personal details',
    ],
    prevention: [
      'Protect your Aadhaar, PAN, and other ID documents',
      'Use strong, unique passwords for all accounts',
      'Monitor your credit report regularly',
      'Be careful about what personal information you share online',
      'Shred sensitive documents before disposal',
    ],
  },
];

const severityColors = {
  critical: 'destructive',
  high: 'default',
  medium: 'secondary',
} as const;

export default function ScamGuidancePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cyber Scam Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn about common scams and how to protect yourself from cyber fraud
          </p>
        </div>

        <Card className="mb-8 border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Critical Safety Reminder
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Never share:</strong> OTPs, passwords, PINs, CVV numbers, or full card details</p>
            <p><strong>Banks never ask for:</strong> Your password, OTP, or remote access to your device</p>
            <p><strong>If in doubt:</strong> Hang up and call the official number yourself</p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {scamTypes.map((scam) => {
            const Icon = scam.icon;
            return (
              <Card key={scam.id} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle>{scam.title}</CardTitle>
                          <Badge variant={severityColors[scam.severity]}>
                            {scam.severity}
                          </Badge>
                        </div>
                        <CardDescription>{scam.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details">
                      <AccordionTrigger>How It Works</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {scam.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-primary">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="prevention">
                      <AccordionTrigger>How to Protect Yourself</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {scam.prevention.map((tip, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-primary">✓</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 bg-muted/30">
          <CardHeader>
            <CardTitle>Need More Help?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              If you've been a victim of a scam, visit our{' '}
              <a href="/help" className="text-primary hover:underline font-medium">
                How to Help
              </a>{' '}
              page for step-by-step guidance on what to do next.
            </p>
            <p>
              You can also browse{' '}
              <a href="/reports" className="text-primary hover:underline font-medium">
                Community Reports
              </a>{' '}
              to learn from others' experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
