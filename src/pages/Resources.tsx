
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileTextIcon, PlayIcon, BookOpenIcon, DownloadIcon, ExternalLinkIcon, BookmarkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for startup resources
const resourcesData = {
  guides: [
    {
      id: "1",
      title: "Crafting the Perfect Pitch Deck",
      description: "A comprehensive guide to creating a compelling pitch deck that captures investor attention.",
      category: "Pitching",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "2",
      title: "Financial Modeling for Early-Stage Startups",
      description: "Learn how to create realistic financial projections for your startup's fundraising efforts.",
      category: "Finance",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "3",
      title: "Finding Product-Market Fit",
      description: "Strategies and frameworks to validate your product and achieve product-market fit.",
      category: "Product",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "4",
      title: "Building a Minimum Viable Product (MVP)",
      description: "A step-by-step guide to building an MVP that validates your concept with minimal resources.",
      category: "Product",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ],
  templates: [
    {
      id: "1",
      title: "Seed Round Pitch Deck Template",
      description: "A professionally designed pitch deck template for seed-stage fundraising.",
      category: "Fundraising",
      format: "PowerPoint, Keynote, PDF",
      downloads: 1284
    },
    {
      id: "2",
      title: "Startup Financial Model",
      description: "Complete financial projection model for SaaS and subscription businesses.",
      category: "Finance",
      format: "Excel, Google Sheets",
      downloads: 957
    },
    {
      id: "3",
      title: "Investor Outreach Email Templates",
      description: "Effective email templates for cold outreach to potential investors.",
      category: "Fundraising",
      format: "Word, PDF",
      downloads: 832
    },
    {
      id: "4",
      title: "Competitive Analysis Framework",
      description: "Template for analyzing competitors and positioning your startup.",
      category: "Strategy",
      format: "Excel, PDF",
      downloads: 721
    }
  ],
  videos: [
    {
      id: "1",
      title: "How to Tell Your Startup Story",
      description: "Learn storytelling techniques to make your pitch memorable and compelling.",
      category: "Pitching",
      duration: "18:42",
      thumbnail: "https://images.unsplash.com/photo-1551847542-7e8a38970dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "2",
      title: "Mastering the VC Q&A",
      description: "Prepare for tough investor questions with this comprehensive guide.",
      category: "Fundraising",
      duration: "24:15",
      thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "3",
      title: "Building a Go-to-Market Strategy",
      description: "Develop an effective GTM strategy to launch and scale your product.",
      category: "Marketing",
      duration: "32:08",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "4",
      title: "Startup Legal Essentials",
      description: "Legal considerations every founder should know when starting up.",
      category: "Legal",
      duration: "27:35",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ]
};

const Resources = () => {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Startup Resources</h1>
        <p className="text-muted-foreground">
          Access guides, templates, and videos to help you build and grow your startup
        </p>
      </div>

      <Tabs defaultValue="guides" className="space-y-8">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <Button variant="outline" className="gap-2">
            <BookmarkIcon className="h-4 w-4" /> Saved Resources
          </Button>
        </div>

        <TabsContent value="guides" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourcesData.guides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={guide.image}
                    alt={guide.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-3 right-3 bg-white text-launchpad-600 hover:bg-white">
                    {guide.category}
                  </Badge>
                </div>
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-2">{guide.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-launchpad-600 hover:text-launchpad-700 hover:bg-transparent p-0">
                    Read Guide <ExternalLinkIcon className="ml-1 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline">View All Guides</Button>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourcesData.templates.map((template) => (
              <Card key={template.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <Badge variant="outline">{template.category}</Badge>
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                    </div>
                    <FileTextIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                  <p className="text-xs text-muted-foreground">Format: {template.format}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <span className="text-xs text-muted-foreground">{template.downloads} downloads</span>
                  <Button variant="outline" size="sm" className="gap-1">
                    <DownloadIcon className="h-3.5 w-3.5" /> Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline">View All Templates</Button>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourcesData.videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-3">
                      <PlayIcon className="h-6 w-6 text-launchpad-600" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-black/70 hover:bg-black/70">
                    {video.duration}
                  </Badge>
                </div>
                <CardHeader className="p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Badge variant="outline">{video.category}</Badge>
                  <Button variant="ghost" size="sm" className="text-launchpad-600 hover:text-launchpad-700 hover:bg-transparent p-0">
                    Watch Now <ExternalLinkIcon className="ml-1 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline">View All Videos</Button>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <Card className="p-8 text-center border-dashed">
            <div className="mx-auto mb-4">
              <BookOpenIcon className="h-12 w-12 text-muted-foreground/60" />
            </div>
            <h3 className="text-xl font-medium mb-2">Upcoming Events</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Attend virtual and in-person events to learn from successful founders and connect with investors
            </p>
            <Button className="bg-launchpad-600 hover:bg-launchpad-700">
              Explore Events
            </Button>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-16 bg-launchpad-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need Custom Guidance?</h2>
          <p className="text-muted-foreground mb-6">
            Connect with experienced mentors who can provide personalized feedback on your startup pitch and growth strategy
          </p>
          <Button className="bg-launchpad-600 hover:bg-launchpad-700">
            Request Mentor Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
