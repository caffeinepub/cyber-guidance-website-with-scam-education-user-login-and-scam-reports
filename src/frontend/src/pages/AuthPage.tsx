import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, LogIn, LogOut, CheckCircle } from 'lucide-react';
import { useGetCallerUserProfile } from '../hooks/useUserProfile';
import ProfileSetupDialog from '../components/auth/ProfileSetupDialog';

export default function AuthPage() {
  const { identity, login, clear, loginStatus } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
    } else {
      try {
        await login();
      } catch (error: any) {
        console.error('Login error:', error);
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {isAuthenticated ? 'Account' : 'Login'}
          </h1>
          <p className="text-muted-foreground">
            {isAuthenticated
              ? 'Manage your account and submissions'
              : 'Sign in to submit scam reports and help the community'}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {isAuthenticated ? 'You are logged in' : 'Secure Authentication'}
            </CardTitle>
            <CardDescription>
              {isAuthenticated
                ? 'Your account is active and secure'
                : 'We use Internet Identity for secure, privacy-preserving authentication'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isAuthenticated && userProfile && (
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-medium">Logged in as:</span>
                </div>
                <p className="text-lg font-semibold">{userProfile.name}</p>
                <p className="text-xs text-muted-foreground break-all">
                  Principal: {identity?.getPrincipal().toString()}
                </p>
              </div>
            )}

            <Button
              onClick={handleAuth}
              disabled={isLoggingIn}
              className="w-full"
              size="lg"
              variant={isAuthenticated ? 'outline' : 'default'}
            >
              {isLoggingIn ? (
                'Logging in...'
              ) : isAuthenticated ? (
                <>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4 mr-2" />
                  Login with Internet Identity
                </>
              )}
            </Button>

            {!isAuthenticated && (
              <div className="text-xs text-muted-foreground space-y-2 pt-4 border-t">
                <p className="font-medium">What is Internet Identity?</p>
                <p>
                  Internet Identity is a secure, privacy-preserving authentication system. 
                  You don't need to share personal information or create passwords.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {isAuthenticated && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Your Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Reports submitted</span>
                <span className="font-medium">View in Reports page</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Account created</span>
                <span className="font-medium">Active</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {showProfileSetup && <ProfileSetupDialog />}
    </div>
  );
}
