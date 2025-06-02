import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Careers at Horizon Flare</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Join our team of cybersecurity experts, innovators, and tech enthusiasts. We're always looking for talented
          individuals passionate about making a difference in the digital security landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Security Consultant</h2>
            <p className="mb-4">Help organizations identify and address security vulnerabilities in their systems.</p>
            <Link href="/contact">
              <Button variant="outline">Apply Now</Button>
            </Link>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Software Developer</h2>
            <p className="mb-4">Build innovative solutions with a focus on security and performance.</p>
            <Link href="/contact">
              <Button variant="outline">Apply Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-muted p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why Work With Us?</h2>
          <ul className="text-left space-y-2">
            <li>✓ Work on cutting-edge cybersecurity projects</li>
            <li>✓ Continuous learning and professional development</li>
            <li>✓ Collaborative and innovative work environment</li>
            <li>✓ Opportunities to make a real impact in digital security</li>
          </ul>
        </div>
        
        <div>
          <Link href="/contact">
            <Button size="lg">Contact Us About Opportunities</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
