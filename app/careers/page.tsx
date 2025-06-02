"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Metadata needs to be in a separate file for client components
// We'll handle SEO with standard meta tags

export default function CareersPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/contact');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Careers at Horizon Flare</h1>
        <p className="text-muted-foreground mb-4">Redirecting you to our contact page where you can inquire about job opportunities.</p>
        <p className="text-sm">If you are not redirected automatically, <a href="/contact" className="text-primary hover:underline">click here</a>.</p>
      </div>
    </div>
  );
}
