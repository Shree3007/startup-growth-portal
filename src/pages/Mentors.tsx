
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon, FilterIcon, SlidersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MentorCard from "@/components/mentors/MentorCard";

// Mock data for mentors
const mentorsData = [
  {
    id: "1",
    name: "Dr. Maya Williams",
    role: "Startup Advisor",
    company: "TechStars",
    expertise: ["SaaS", "Growth Strategy", "Fundraising"],
    bio: "Former VP of Product at Google, now advising early-stage startups. Helped 20+ companies secure seed funding.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.9,
    reviewCount: 47
  },
  {
    id: "2",
    name: "James Chen",
    role: "Angel Investor",
    company: "BlueVentures",
    expertise: ["E-commerce", "FinTech", "Product Market Fit"],
    bio: "Serial entrepreneur with 3 successful exits. Passionate about helping first-time founders avoid common pitfalls.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.7,
    reviewCount: 36
  },
  {
    id: "3",
    name: "Sarah Johnson",
    role: "Venture Partner",
    company: "Foundation Capital",
    expertise: ["Healthcare", "AI", "Scaling"],
    bio: "Specializing in Series A investments for AI and healthcare startups. Former founder of MedTech startup.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.8,
    reviewCount: 42
  },
  {
    id: "4",
    name: "Robert Garcia",
    role: "Executive Coach",
    company: "Founder Institute",
    expertise: ["Leadership", "Team Building", "Pitching"],
    bio: "Certified executive coach with expertise in startup leadership development and pitch refinement.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4.6,
    reviewCount: 28
  },
  {
    id: "5",
    name: "Priya Patel",
    role: "Marketing Advisor",
    company: "GrowthLabs",
    expertise: ["Digital Marketing", "Brand Strategy", "Customer Acquisition"],
    bio: "Former CMO at multiple startups. Specializes in helping technical founders develop effective marketing strategies.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4.8,
    reviewCount: 33
  },
  {
    id: "6",
    name: "Michael Okonjo",
    role: "Tech Advisor",
    company: "DevScale",
    expertise: ["Technical Architecture", "Scaling", "CTO Coaching"],
    bio: "Former CTO of a unicorn startup. Helps founders make smart technical decisions early to avoid scaling issues later.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4.9,
    reviewCount: 41
  }
];

// List of expertise areas for filtering
const expertiseAreas = [
  "SaaS", "Growth Strategy", "Fundraising", "E-commerce", "FinTech", 
  "Product Market Fit", "Healthcare", "AI", "Scaling", "Leadership", 
  "Team Building", "Pitching", "Digital Marketing", "Brand Strategy", 
  "Customer Acquisition", "Technical Architecture", "CTO Coaching"
];

const Mentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  // Filter mentors based on search query and selected expertise
  const filteredMentors = mentorsData.filter((mentor) => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedExpertise.length === 0) return matchesSearch;
    
    return matchesSearch && mentor.expertise.some(exp => 
      selectedExpertise.includes(exp)
    );
  });

  const toggleExpertise = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      setSelectedExpertise(selectedExpertise.filter(e => e !== expertise));
    } else {
      setSelectedExpertise([...selectedExpertise, expertise]);
    }
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Find a Mentor</h1>
        <p className="text-muted-foreground">
          Connect with experienced mentors who can provide valuable feedback on your startup pitch
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search mentors by name, expertise, or industry..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex gap-2 whitespace-nowrap">
            <FilterIcon className="h-4 w-4" /> Filters
          </Button>
          <Button className="bg-launchpad-600 hover:bg-launchpad-700 whitespace-nowrap">
            Request Feedback
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="lg:w-64 space-y-6">
          <div>
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <SlidersIcon className="h-4 w-4" />
              Filter by Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {expertiseAreas.map((expertise) => (
                <Badge 
                  key={expertise}
                  variant={selectedExpertise.includes(expertise) ? "default" : "outline"}
                  className={`cursor-pointer ${selectedExpertise.includes(expertise) ? "bg-launchpad-600 hover:bg-launchpad-700" : ""}`}
                  onClick={() => toggleExpertise(expertise)}
                >
                  {expertise}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Mentor Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="investors" className="mr-2" />
                <label htmlFor="investors" className="text-sm">Investors</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="advisors" className="mr-2" />
                <label htmlFor="advisors" className="text-sm">Startup Advisors</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="entrepreneurs" className="mr-2" />
                <label htmlFor="entrepreneurs" className="text-sm">Entrepreneurs</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="coaches" className="mr-2" />
                <label htmlFor="coaches" className="text-sm">Executive Coaches</label>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Availability</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="available-now" className="mr-2" />
                <label htmlFor="available-now" className="text-sm">Available Now</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="this-week" className="mr-2" />
                <label htmlFor="this-week" className="text-sm">Available This Week</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="next-week" className="mr-2" />
                <label htmlFor="next-week" className="text-sm">Available Next Week</label>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Rating</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="4.5plus" className="mr-2" />
                <label htmlFor="4.5plus" className="text-sm">4.5+ Stars</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="4plus" className="mr-2" />
                <label htmlFor="4plus" className="text-sm">4+ Stars</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="any-rating" className="mr-2" />
                <label htmlFor="any-rating" className="text-sm">Any Rating</label>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">
            Reset Filters
          </Button>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Mentors</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMentors.map((mentor) => (
                  <MentorCard key={mentor.id} mentor={mentor} />
                ))}
              </div>
              
              {filteredMentors.length === 0 && (
                <div className="text-center py-12 border rounded-md border-dashed">
                  <h3 className="text-lg font-medium mb-2">No mentors found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find mentors
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="trending" className="mt-0">
              <div className="text-center py-12 border rounded-md border-dashed">
                <h3 className="text-lg font-medium mb-2">Trending Mentors</h3>
                <p className="text-muted-foreground">
                  Discover mentors who are currently in high demand
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="recommended" className="mt-0">
              <div className="text-center py-12 border rounded-md border-dashed">
                <h3 className="text-lg font-medium mb-2">Recommended For You</h3>
                <p className="text-muted-foreground">
                  Mentors matched to your startup's industry and stage
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-0">
              <div className="text-center py-12 border rounded-md border-dashed">
                <h3 className="text-lg font-medium mb-2">New Mentors</h3>
                <p className="text-muted-foreground">
                  Recently joined mentors ready to provide feedback
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
