"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InnovationPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/innovation-lab');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Innovation at Horizon Flare</h1>
        <p className="text-muted-foreground mb-4">Redirecting you to our Innovation Lab page...</p>
        <p className="text-sm">If you are not redirected automatically, <a href="/innovation-lab" className="text-primary hover:underline">click here</a>.</p>
      </div>
    </div>
  );
}
