import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Camera, Phone, Globe, AlertTriangle } from 'lucide-react';

export default function ResourcesSection() {
  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle>Resources & Evidence Collection</CardTitle>
            <CardDescription>Important information for reporting and recovery</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="evidence">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                What Evidence to Collect
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Screenshots:</strong> All messages, emails, websites, and pop-ups</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Transaction IDs:</strong> Bank transfers, UPI payments, card transactions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Communication logs:</strong> Phone numbers, email addresses, chat logs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>URLs:</strong> Websites, payment pages, or phishing links</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Account details:</strong> Scammer's bank account, UPI ID, or wallet address</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Timestamps:</strong> Exact dates and times of all interactions</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="bank-contact">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                How to Contact Your Bank Safely
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Use Official Channels Only:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Call the number on the back of your card</li>
                    <li>• Use the number from your bank's official website</li>
                    <li>• Visit your bank branch in person</li>
                    <li>• Use your bank's official mobile app</li>
                  </ul>
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <p className="font-semibold text-destructive mb-1 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Never Trust:
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Numbers from emails or text messages</li>
                    <li>• Numbers provided by callers claiming to be from your bank</li>
                    <li>• Links in emails or SMS messages</li>
                    <li>• Social media messages</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="reporting">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Finding Official Reporting Channels
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Cybercrime Helpline: 1930</span>
                  </div>
                  <p>
                    For immediate assistance with cybercrime and financial fraud, call the helpline <strong>1930</strong>. 
                    This is the official number for reporting cybercrimes and getting guidance from authorities.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">How to Find Official Channels:</p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <strong>Cybercrime Portal:</strong> Search for your country or region's official cybercrime reporting website 
                      (look for .gov or official government domains)
                    </li>
                    <li>
                      <strong>Local Police:</strong> Visit your nearest police station in person to file an FIR (First Information Report)
                    </li>
                    <li>
                      <strong>Bank Fraud Department:</strong> Contact through official channels listed on your bank's website
                    </li>
                    <li>
                      <strong>Consumer Protection:</strong> Look for official consumer protection agencies in your region
                    </li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Verification Tips:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Always verify website URLs (look for official .gov domains)</li>
                    <li>• Cross-check phone numbers on multiple official sources</li>
                    <li>• Be wary of websites that ask for payment to file complaints</li>
                    <li>• Official government services are typically free</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
