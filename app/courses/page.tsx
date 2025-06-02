import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function CoursesPage() {  
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Cybersecurity Training Courses</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Horizon Flare offers comprehensive cybersecurity training and educational programs to help
          individuals and organizations build their security skills.
        </p>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Ethical Hacking Certification</h2>
            <p className="mb-4">Learn the tools and techniques used by hackers to secure your systems against threats.</p>
            <Link href="/services/training">
              <Button size="lg">View Course Details</Button>
            </Link>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Secure Coding Practices</h2>
            <p className="mb-4">Learn how to write secure code and protect applications from common vulnerabilities.</p>
            <Link href="/services/training">
              <Button size="lg">View Course Details</Button>
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/services/training" className="text-primary hover:underline">
            View all training programs →
          </Link>
        </div>
      </div>
    </div>
  );
}
