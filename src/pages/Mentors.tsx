import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon, FilterIcon, SlidersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MentorCard from "@/components/mentors/MentorCard";
import axios from "axios";

const expertiseAreas = [
  "SaaS", "Growth Strategy", "Fundraising", "E-commerce", "FinTech", 
  "Product Market Fit", "Healthcare", "AI", "Scaling", "Leadership", 
  "Team Building", "Pitching", "Digital Marketing", "Brand Strategy", 
  "Customer Acquisition", "Technical Architecture", "CTO Coaching"
];

const Mentors = () => {
  const [mentorsData, setMentorsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/mentors"); // update port if needed
        setMentorsData(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  const filteredMentors = mentorsData.filter((mentor: any) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedExpertise.length === 0) return matchesSearch;

    return matchesSearch && mentor.expertise.some((exp: string) =>
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
        {/* Filters */}
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
        </div>

        {/* Mentors List */}
        <div className="flex-1">
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Mentors</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMentors.map((mentor: any) => (
                  <MentorCard key={mentor._id} mentor={mentor} />
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
