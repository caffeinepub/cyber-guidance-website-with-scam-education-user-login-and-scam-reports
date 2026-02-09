import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import HomePage from './pages/HomePage';
import ScamGuidancePage from './pages/ScamGuidancePage';
import HelpHowToHelpPage from './pages/HelpHowToHelpPage';
import ScamReportsPage from './pages/ScamReportsPage';
import AuthPage from './pages/AuthPage';
import SiteLayout from './components/layout/SiteLayout';
import { Toaster } from '@/components/ui/sonner';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const guidanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/guidance',
  component: ScamGuidancePage,
});

const helpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/help',
  component: HelpHowToHelpPage,
});

const reportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reports',
  component: ScamReportsPage,
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: AuthPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  guidanceRoute,
  helpRoute,
  reportsRoute,
  authRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
