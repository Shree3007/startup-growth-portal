
import { Link } from "react-router-dom";
import { RocketIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RocketIcon className="h-5 w-5 text-launchpad-600" />
            <span className="text-lg font-bold text-launchpad-800">LaunchPad</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Helping startups pitch, connect, and grow
          </p>
          <div className="mt-4 flex gap-4">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-launchpad-600">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-launchpad-600">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-launchpad-600">
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="mb-3 text-sm font-semibold">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/pitches" className="text-muted-foreground hover:text-launchpad-600">
                Explore Pitches
              </Link>
            </li>
            <li>
              <Link to="/mentors" className="text-muted-foreground hover:text-launchpad-600">
                Find Mentors
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-muted-foreground hover:text-launchpad-600">
                Analytics Dashboard
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-muted-foreground hover:text-launchpad-600">
                Startup Resources
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-3 text-sm font-semibold">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-launchpad-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-muted-foreground hover:text-launchpad-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-muted-foreground hover:text-launchpad-600">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-launchpad-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-3 text-sm font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-launchpad-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-launchpad-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-muted-foreground hover:text-launchpad-600">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LaunchPad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
