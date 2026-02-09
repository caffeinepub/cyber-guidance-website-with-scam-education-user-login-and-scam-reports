import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle, Shield, Phone, FileText, Camera, Clock } from 'lucide-react';
import ResourcesSection from '../components/resources/ResourcesSection';

export default function HelpHowToHelpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What to Do If You've Been Scammed
          </h1>
          <p className="text-lg text-muted-foreground">
            Follow these steps immediately to minimize damage and report the incident
          </p>
        </div>

        <Card className="mb-8 border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Act Quickly - Time is Critical
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p>
              The faster you act, the better your chances of preventing further damage and recovering losses. 
              Follow the steps below in order.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Immediate Actions */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <CardTitle>Step 1: Secure Your Accounts (Immediately)</CardTitle>
                  <CardDescription>Take these actions within minutes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="change-passwords" className="mt-1" />
                  <label htmlFor="change-passwords" className="text-sm cursor-pointer">
                    <strong>Change all passwords</strong> for affected accounts and any accounts using the same password
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="enable-2fa" className="mt-1" />
                  <label htmlFor="enable-2fa" className="text-sm cursor-pointer">
                    <strong>Enable two-factor authentication</strong> on all important accounts
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="logout-devices" className="mt-1" />
                  <label htmlFor="logout-devices" className="text-sm cursor-pointer">
                    <strong>Log out of all devices</strong> from your account settings
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="check-permissions" className="mt-1" />
                  <label htmlFor="check-permissions" className="text-sm cursor-pointer">
                    <strong>Review app permissions</strong> and revoke access for suspicious apps
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Bank */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Step 2: Contact Your Bank (Within 1 Hour)</CardTitle>
                  <CardDescription>Report unauthorized transactions immediately</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="call-bank" className="mt-1" />
                  <label htmlFor="call-bank" className="text-sm cursor-pointer">
                    <strong>Call your bank's official helpline</strong> (use the number on your card or official website)
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="block-cards" className="mt-1" />
                  <label htmlFor="block-cards" className="text-sm cursor-pointer">
                    <strong>Block all affected cards</strong> and request new ones
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="dispute-transactions" className="mt-1" />
                  <label htmlFor="dispute-transactions" className="text-sm cursor-pointer">
                    <strong>Dispute unauthorized transactions</strong> and request a chargeback if applicable
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="freeze-account" className="mt-1" />
                  <label htmlFor="freeze-account" className="text-sm cursor-pointer">
                    <strong>Consider freezing your account</strong> temporarily if large amounts are at risk
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preserve Evidence */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Step 3: Preserve Evidence</CardTitle>
                  <CardDescription>Document everything for authorities</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="screenshot-messages" className="mt-1" />
                  <label htmlFor="screenshot-messages" className="text-sm cursor-pointer">
                    <strong>Take screenshots</strong> of all messages, emails, and websites involved
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="save-emails" className="mt-1" />
                  <label htmlFor="save-emails" className="text-sm cursor-pointer">
                    <strong>Save original emails</strong> (don't just screenshot - save the actual email)
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="note-details" className="mt-1" />
                  <label htmlFor="note-details" className="text-sm cursor-pointer">
                    <strong>Write down all details:</strong> phone numbers, URLs, transaction IDs, dates, and times
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="save-transactions" className="mt-1" />
                  <label htmlFor="save-transactions" className="text-sm cursor-pointer">
                    <strong>Download transaction history</strong> from your bank and payment apps
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="record-calls" className="mt-1" />
                  <label htmlFor="record-calls" className="text-sm cursor-pointer">
                    <strong>Note call details</strong> if you spoke with scammers (time, duration, what was said)
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Report to Authorities */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Step 4: Report to Authorities (Within 24 Hours)</CardTitle>
                  <CardDescription>File official complaints for investigation</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="cybercrime-portal" className="mt-1" />
                  <label htmlFor="cybercrime-portal" className="text-sm cursor-pointer">
                    <strong>File a complaint</strong> with your local cybercrime reporting portal
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="police-report" className="mt-1" />
                  <label htmlFor="police-report" className="text-sm cursor-pointer">
                    <strong>File an FIR</strong> at your local police station with all evidence
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="bank-complaint" className="mt-1" />
                  <label htmlFor="bank-complaint" className="text-sm cursor-pointer">
                    <strong>Submit written complaint</strong> to your bank's fraud department
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="report-platform" className="mt-1" />
                  <label htmlFor="report-platform" className="text-sm cursor-pointer">
                    <strong>Report to the platform</strong> where the scam occurred (social media, marketplace, etc.)
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monitor and Follow Up */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Step 5: Monitor and Follow Up</CardTitle>
                  <CardDescription>Stay vigilant in the coming weeks</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="monitor-accounts" className="mt-1" />
                  <label htmlFor="monitor-accounts" className="text-sm cursor-pointer">
                    <strong>Monitor all accounts daily</strong> for suspicious activity
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="check-credit" className="mt-1" />
                  <label htmlFor="check-credit" className="text-sm cursor-pointer">
                    <strong>Check your credit report</strong> for unauthorized accounts or loans
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="follow-up" className="mt-1" />
                  <label htmlFor="follow-up" className="text-sm cursor-pointer">
                    <strong>Follow up on complaints</strong> regularly with authorities and your bank
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="alert-contacts" className="mt-1" />
                  <label htmlFor="alert-contacts" className="text-sm cursor-pointer">
                    <strong>Warn your contacts</strong> if the scammer may have accessed your contact list
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resources Section */}
        <div className="mt-12">
          <ResourcesSection />
        </div>

        {/* How to Help Others */}
        <Card className="mt-8 bg-muted/30">
          <CardHeader>
            <CardTitle>How to Help Someone Who's Been Scammed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Stay Calm and Supportive</h4>
              <p className="text-muted-foreground">
                Victims often feel embarrassed or ashamed. Reassure them that scams can happen to anyone and focus on solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Help Them Act Quickly</h4>
              <p className="text-muted-foreground">
                Guide them through the steps above, starting with securing accounts and contacting their bank immediately.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Assist with Documentation</h4>
              <p className="text-muted-foreground">
                Help them collect evidence, take screenshots, and organize information for authorities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Accompany Them to Report</h4>
              <p className="text-muted-foreground">
                Offer to go with them to the police station or help them file online complaints.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Educate and Prevent</h4>
              <p className="text-muted-foreground">
                Share resources from this site to help them recognize and avoid future scams.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
