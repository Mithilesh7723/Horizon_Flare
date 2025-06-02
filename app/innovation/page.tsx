import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function InnovationPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Innovation at Horizon Flare</h1>
        <p className="text-xl text-muted-foreground mb-6">
          We're building the future of technology with innovative solutions that address real-world problems.
        </p>
        
        <div className="mb-8 p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Innovation Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">AI Security</h3>
              <p>Developing tools to secure AI systems against emerging threats.</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">IoT Security</h3>
              <p>Creating frameworks for secure Internet of Things deployments.</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Cloud Infrastructure</h3>
              <p>Building secure, scalable cloud solutions for modern businesses.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Innovation Lab</h2>
          <p className="mb-4">Our Innovation Lab is where we prototype, test, and refine cutting-edge solutions.</p>
          <Link href="/innovation-lab">
            <Button size="lg">Visit Our Innovation Lab</Button>
          </Link>
        </div>
        
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Partner With Us</h2>
          <p className="mb-4">Have a challenging problem that needs an innovative solution? Let's collaborate!</p>
          <Link href="/contact">
            <Button variant="outline">Contact Our Innovation Team</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
