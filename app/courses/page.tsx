"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CoursesPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/training');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
        <p className="text-muted-foreground">Please wait while we redirect you to our training services page.</p>
      </div>
    </div>
  );
}
