import { Outlet } from '@tanstack/react-router';
import TopNav from '../navigation/TopNav';
import { Heart } from 'lucide-react';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              © 2026. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
            <p className="mt-2 text-xs">
              This is an educational resource. For official cybercrime reporting, contact your local authorities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
