
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BarChart4Icon, MessageCircleIcon, UserIcon, LightbulbIcon, TrendingUpIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-launchpad-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-launchpad-900">
                  Launch Your Startup to New Heights
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A platform for early-stage startups to showcase pitches, get expert feedback, and track engagement.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-launchpad-600 hover:bg-launchpad-700" size="lg">
                  <Link to="/pitches" className="flex items-center gap-1">
                    Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/mentors">Find Mentors</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border bg-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-launchpad-100 to-blue-100 opacity-50"></div>
                <div className="relative p-6 flex flex-col justify-center items-center h-full">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <LightbulbIcon className="h-8 w-8 text-launchpad-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Startup Pitch Portal</h3>
                  <p className="text-sm text-center text-muted-foreground">
                    Present your idea, get feedback, and connect with investors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Platform Features
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to take your startup to the next level
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-launchpad-100">
                <LightbulbIcon className="h-8 w-8 text-launchpad-600" />
              </div>
              <h3 className="text-xl font-bold">Showcase Pitches</h3>
              <p className="text-center text-muted-foreground">
                Create compelling pitch decks and videos to present your startup to the world.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-launchpad-100">
                <MessageCircleIcon className="h-8 w-8 text-launchpad-600" />
              </div>
              <h3 className="text-xl font-bold">Mentor Feedback</h3>
              <p className="text-center text-muted-foreground">
                Get actionable feedback from industry experts and seasoned entrepreneurs.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-launchpad-100">
                <BarChart4Icon className="h-8 w-8 text-launchpad-600" />
              </div>
              <h3 className="text-xl font-bold">Track Engagement</h3>
              <p className="text-center text-muted-foreground">
                Monitor viewer interactions and measure the effectiveness of your pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-launchpad-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Success Stories
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how startups are finding success through our platform
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-launchpad-100 p-2">
                  <UserIcon className="h-6 w-6 text-launchpad-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">CEO, TechSolutions</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "LaunchPad helped us refine our pitch and connect with mentors who understood our industry. We secured $2M in seed funding within 3 months of joining the platform."
              </p>
              <div className="flex items-center gap-1">
                <TrendingUpIcon className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">Raised $2M seed round</span>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 border rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-launchpad-100 p-2">
                  <UserIcon className="h-6 w-6 text-launchpad-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">Founder, GreenLife</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The analytics dashboard provided valuable insights about how investors were engaging with our pitch. This data helped us iterate and improve until we found the right message."
              </p>
              <div className="flex items-center gap-1">
                <TrendingUpIcon className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">5X increase in investor interest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-launchpad-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Launch Your Startup?
              </h2>
              <p className="max-w-[900px] text-launchpad-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of founders who are pitching, connecting, and growing with LaunchPad
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button className="bg-white text-launchpad-800 hover:bg-launchpad-50" size="lg">
                <Link to="/pitches" className="flex items-center gap-1">
                  Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-launchpad-700" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
