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
                <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Never:</strong> Call numbers from emails, SMS, or search results. 
                      Scammers create fake customer service numbers.
                    </span>
                  </p>
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
                <p>
                  Cybercrime reporting procedures vary by country and region. To find the correct 
                  authorities for your location:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>
                    • <strong>Search for:</strong> "cybercrime reporting [your country]" or 
                    "report online fraud [your country]"
                  </li>
                  <li>
                    • <strong>Look for:</strong> Official government websites (.gov domains) or 
                    law enforcement portals
                  </li>
                  <li>
                    • <strong>Contact:</strong> Your local police station for guidance on filing 
                    cybercrime complaints
                  </li>
                  <li>
                    • <strong>Check:</strong> Your bank's website for fraud reporting procedures 
                    specific to your region
                  </li>
                </ul>
                <div className="p-3 bg-muted/50 rounded-lg border border-border mt-3">
                  <p className="text-xs">
                    <strong>Note:</strong> This website is an educational resource and not affiliated 
                    with any law enforcement agency. Always report crimes to official authorities in 
                    your jurisdiction.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
