import { useState } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useUserProfile';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { AlertTriangle, LogIn } from 'lucide-react';
import ScamReportForm from '../components/scam-reports/ScamReportForm';
import ScamReportList from '../components/scam-reports/ScamReportList';
import ScamTypeFilter from '../components/scam-reports/ScamTypeFilter';
import ProfileSetupDialog from '../components/auth/ProfileSetupDialog';
import { ScamType } from '../backend';

export default function ScamReportsPage() {
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const [selectedType, setSelectedType] = useState<ScamType | 'all'>('all');

  const isAuthenticated = !!identity;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Scam Reports
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn from others' experiences and share your own to help the community stay safe
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Submit Report Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Submit a Report</CardTitle>
                <CardDescription>
                  Share your scam experience to help others
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isAuthenticated ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        You must be logged in to submit a scam report
                      </p>
                    </div>
                    <Link to="/auth">
                      <Button className="w-full" size="lg">
                        <LogIn className="h-4 w-4 mr-2" />
                        Login to Submit Report
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <ScamReportForm />
                )}
              </CardContent>
            </Card>
          </div>

          {/* Reports List Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filter Reports</CardTitle>
                <CardDescription>
                  View all reports or filter by scam type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScamTypeFilter selectedType={selectedType} onTypeChange={setSelectedType} />
              </CardContent>
            </Card>

            <ScamReportList selectedType={selectedType} />
          </div>
        </div>
      </div>

      {showProfileSetup && <ProfileSetupDialog />}
    </div>
  );
}
