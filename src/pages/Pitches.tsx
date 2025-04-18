
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon, FilterIcon, ArrowUpRightIcon, HeartIcon, MessageCircleIcon, EyeIcon, RocketIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock data for startup pitches
const pitchesData = [
  {
    id: "1",
    title: "EcoCart - Sustainable Shopping Assistant",
    company: "EcoCart Technologies",
    description: "A browser extension that helps shoppers find eco-friendly alternatives to everyday products.",
    category: "Sustainability",
    funding: "Pre-seed",
    views: 1243,
    likes: 89,
    comments: 32,
    coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "2",
    title: "MindfulAI - Mental Health Companion",
    company: "Mindful Technologies",
    description: "AI-powered mental health companion that provides personalized support through daily check-ins.",
    category: "Health Tech",
    funding: "Seed",
    views: 2564,
    likes: 215,
    comments: 47,
    coverImage: "https://images.unsplash.com/photo-1593697972672-b1c1278224cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "3",
    title: "DeepWork - Focus Time Tracker",
    company: "Productivity Labs",
    description: "Helping knowledge workers track and optimize their deep work sessions for maximum productivity.",
    category: "Productivity",
    funding: "Bootstrapped",
    views: 987,
    likes: 64,
    comments: 18,
    coverImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "4",
    title: "SupplyAI - Supply Chain Optimization",
    company: "Supply Chain Technologies",
    description: "Using AI to predict disruptions and optimize global supply chains for small and medium businesses.",
    category: "Enterprise",
    funding: "Series A",
    views: 3210,
    likes: 168,
    comments: 53,
    coverImage: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "5",
    title: "CryptoTax - Cryptocurrency Tax Assistant",
    company: "Blockchain Solutions",
    description: "Automated cryptocurrency tax reporting and optimization for traders and investors.",
    category: "FinTech",
    funding: "Seed",
    views: 1876,
    likes: 109,
    comments: 27,
    coverImage: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "6",
    title: "RemoteTeams - Virtual Team Building",
    company: "Remote Work Solutions",
    description: "Platform for virtual team building activities and culture development for remote teams.",
    category: "HR Tech",
    funding: "Pre-seed",
    views: 1543,
    likes: 78,
    comments: 23,
    coverImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const Pitches = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter pitches based on search query and selected filter
  const filteredPitches = pitchesData.filter((pitch) => {
    const matchesSearch = 
      pitch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pitch.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pitch.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    return matchesSearch && pitch.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Explore Startup Pitches</h1>
        <p className="text-muted-foreground">
          Discover innovative startups and connect with founders building the future
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search pitches by name, description, or company..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex gap-2 whitespace-nowrap">
            <FilterIcon className="h-4 w-4" /> Filter
          </Button>
          <Button className="bg-launchpad-600 hover:bg-launchpad-700 whitespace-nowrap">
            Submit Your Pitch
          </Button>
        </div>
      </div>

      <Tabs defaultValue="trending" className="mb-8">
        <TabsList>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="newest">Newest</TabsTrigger>
          <TabsTrigger value="funded">Recently Funded</TabsTrigger>
          <TabsTrigger value="mentored">Mentor Picks</TabsTrigger>
        </TabsList>
        <TabsContent value="trending" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPitches.map((pitch) => (
              <Card key={pitch.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={pitch.coverImage} 
                    alt={pitch.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-white text-launchpad-600 hover:bg-launchpad-50">
                    {pitch.category}
                  </Badge>
                </div>
                <CardHeader className="p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-semibold hover:text-launchpad-600 transition-colors">
                        <Link to={`/pitches/${pitch.id}`}>{pitch.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-sm">{pitch.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{pitch.funding}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">{pitch.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between text-xs text-muted-foreground">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <EyeIcon className="h-3.5 w-3.5" />
                      <span>{pitch.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HeartIcon className="h-3.5 w-3.5" />
                      <span>{pitch.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircleIcon className="h-3.5 w-3.5" />
                      <span>{pitch.comments}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/pitches/${pitch.id}`}
                    className="flex items-center gap-1 text-launchpad-600 hover:text-launchpad-700 font-medium"
                  >
                    View Pitch <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="newest">
          <div className="rounded-md border border-dashed p-12 text-center">
            <RocketIcon className="h-8 w-8 mx-auto mb-4 text-muted-foreground/80" />
            <h3 className="text-xl font-medium mb-2">Explore Newest Startups</h3>
            <p className="text-muted-foreground">
              Discover the latest startups joining our platform
            </p>
          </div>
        </TabsContent>
        <TabsContent value="funded">
          <div className="rounded-md border border-dashed p-12 text-center">
            <RocketIcon className="h-8 w-8 mx-auto mb-4 text-muted-foreground/80" />
            <h3 className="text-xl font-medium mb-2">Recently Funded Startups</h3>
            <p className="text-muted-foreground">
              Startups that have recently secured funding
            </p>
          </div>
        </TabsContent>
        <TabsContent value="mentored">
          <div className="rounded-md border border-dashed p-12 text-center">
            <RocketIcon className="h-8 w-8 mx-auto mb-4 text-muted-foreground/80" />
            <h3 className="text-xl font-medium mb-2">Mentor Recommended</h3>
            <p className="text-muted-foreground">
              Startups picked by our experienced mentors
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Pitches;
