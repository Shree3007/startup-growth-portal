
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { HeartIcon, MessageCircleIcon, ShareIcon, BookmarkIcon, PlayIcon, ThumbsUpIcon, UserIcon, BarChart4Icon, ExternalLinkIcon, FileTextIcon, PresentationIcon, EyeIcon } from "lucide-react";

// Mock data for a single pitch
const pitchData = {
  id: "1",
  title: "EcoCart - Sustainable Shopping Assistant",
  company: "EcoCart Technologies",
  description: "A browser extension that helps shoppers find eco-friendly alternatives to everyday products while they shop online. EcoCart analyzes the product being viewed and suggests more sustainable options based on manufacturing practices, carbon footprint, and ethical sourcing.",
  longDescription: "EcoCart is revolutionizing how consumers make environmentally conscious purchasing decisions. Our browser extension seamlessly integrates with popular e-commerce platforms to provide real-time recommendations for sustainable alternatives to products being viewed. By analyzing factors such as carbon footprint, manufacturing practices, packaging waste, and ethical sourcing, we empower shoppers to make choices aligned with their environmental values without sacrificing quality or convenience.\n\nOur proprietary sustainability scoring algorithm weighs multiple factors to provide a comprehensive view of a product's environmental impact. We've partnered with over 50 eco-conscious brands to ensure our recommendations meet rigorous sustainability standards. Future development includes a mobile app for in-store shopping assistance and integration with loyalty programs to incentivize sustainable choices.",
  category: "Sustainability",
  funding: "Pre-seed",
  fundingAmount: "$250,000",
  foundedDate: "2023",
  location: "San Francisco, CA",
  teamSize: "5 employees",
  website: "https://ecocart.example.com",
  pitchDeck: "/ecocart-pitch-deck.pdf",
  views: 1243,
  likes: 89,
  comments: 32,
  shares: 17,
  coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  founder: {
    name: "Alex Rivera",
    title: "CEO & Co-founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Former sustainability consultant with 5 years experience in environmental impact assessment"
  },
  team: [
    {
      name: "Jamie Chen",
      title: "CTO",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Taylor Morgan",
      title: "Head of Partnerships",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg"
    }
  ],
  pitchVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  feedback: [
    {
      id: "f1",
      user: {
        name: "Michael Scott",
        role: "Mentor",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg"
      },
      comment: "I love the concept. Have you considered partnerships with major e-commerce platforms directly to expand your reach?",
      date: "2 days ago",
      isVerified: true
    },
    {
      id: "f2",
      user: {
        name: "Jessica Wong",
        role: "Angel Investor",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg"
      },
      comment: "Impressive traction for pre-seed. I'd like to see more details about your user acquisition strategy and how you're planning to monetize.",
      date: "1 week ago",
      isVerified: true
    }
  ]
};

const PitchDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // In a real app, we would fetch the pitch data based on the ID
  // For now, we'll use our mock data
  const pitch = pitchData;

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleComment = () => {
    if (comment.trim()) {
      // In a real app, we would send this to an API
      console.log("Submitting comment:", comment);
      setComment("");
      alert("Your feedback has been submitted!");
    }
  };

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-card">
            {pitch.pitchVideo ? (
              <iframe
                src={pitch.pitchVideo}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex items-center justify-center h-full bg-muted">
                <div className="text-center">
                  <PlayIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground/60" />
                  <p className="text-muted-foreground">Pitch video coming soon</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{pitch.title}</h1>
              <p className="text-muted-foreground">{pitch.company}</p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={isLiked ? "default" : "outline"} 
                size="sm"
                className={isLiked ? "bg-launchpad-600 hover:bg-launchpad-700" : ""}
                onClick={handleLike}
              >
                <HeartIcon className="h-4 w-4 mr-2" />
                {isLiked ? "Liked" : "Like"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleBookmark}>
                <BookmarkIcon className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <ShareIcon className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Badge className="bg-launchpad-100 text-launchpad-800 hover:bg-launchpad-200">
              {pitch.category}
            </Badge>
            <Badge variant="outline">{pitch.funding}</Badge>
            <Badge variant="outline">{pitch.location}</Badge>
            <Badge variant="outline">{pitch.teamSize}</Badge>
          </div>

          <Tabs defaultValue="pitch">
            <TabsList>
              <TabsTrigger value="pitch">Pitch Overview</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="feedback">Mentor Feedback</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>
            <TabsContent value="pitch" className="space-y-6 py-4">
              <div>
                <h2 className="text-xl font-bold mb-3">About the Startup</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {pitch.longDescription || pitch.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Founded</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{pitch.foundedDate}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Funding Raised</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{pitch.fundingAmount}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="team" className="py-4">
              <h2 className="text-xl font-bold mb-6">Meet the Team</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={pitch.founder.avatar} alt={pitch.founder.name} />
                    <AvatarFallback>{pitch.founder.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{pitch.founder.name}</h3>
                    <p className="text-muted-foreground">{pitch.founder.title}</p>
                    <p className="mt-2">{pitch.founder.bio}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {pitch.team.map((member, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="feedback" className="py-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Mentor Feedback</h2>
                <Badge className="bg-launchpad-100 text-launchpad-800">
                  {pitch.feedback.length} Comments
                </Badge>
              </div>
              
              <div className="space-y-6 mb-8">
                {pitch.feedback.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b">
                    <Avatar>
                      <AvatarImage src={item.user.avatar} alt={item.user.name} />
                      <AvatarFallback>{item.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{item.user.name}</span>
                        {item.isVerified && (
                          <Badge variant="outline" className="text-xs py-0 h-5">
                            {item.user.role}
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{item.date}</p>
                      <p>{item.comment}</p>
                      <div className="flex gap-4 mt-3">
                        <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                          <ThumbsUpIcon className="h-3 w-3" /> Helpful
                        </button>
                        <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Add Your Feedback</h3>
                <Textarea 
                  placeholder="Share your thoughts or ask questions about this pitch..." 
                  className="min-h-[120px]"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button onClick={handleComment} className="bg-launchpad-600 hover:bg-launchpad-700">
                  Submit Feedback
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="materials" className="py-4">
              <h2 className="text-xl font-bold mb-6">Pitch Materials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <PresentationIcon className="h-8 w-8 text-launchpad-600" />
                    <div>
                      <CardTitle className="text-lg">Pitch Deck</CardTitle>
                      <CardDescription>PDF • 12 slides</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">
                      Complete presentation with business model, market analysis, and roadmap.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" size="sm">
                      <FileTextIcon className="h-4 w-4 mr-2" /> View Deck
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <ExternalLinkIcon className="h-8 w-8 text-launchpad-600" />
                    <div>
                      <CardTitle className="text-lg">Website</CardTitle>
                      <CardDescription>{pitch.website}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">
                      Visit the company website for product demos and detailed information.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" size="sm">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" /> Visit Website
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Statistics</CardTitle>
              <CardDescription>How viewers are interacting with this pitch</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5 text-muted-foreground" />
                  <span>Views</span>
                </div>
                <span className="font-semibold">{pitch.views}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <HeartIcon className="h-5 w-5 text-muted-foreground" />
                  <span>Likes</span>
                </div>
                <span className="font-semibold">{pitch.likes}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
                  <span>Comments</span>
                </div>
                <span className="font-semibold">{pitch.comments}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ShareIcon className="h-5 w-5 text-muted-foreground" />
                  <span>Shares</span>
                </div>
                <span className="font-semibold">{pitch.shares}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <BarChart4Icon className="h-4 w-4 mr-2" />
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Request Connection</CardTitle>
              <CardDescription>Interested in this startup?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-launchpad-600 hover:bg-launchpad-700">
                <UserIcon className="h-4 w-4 mr-2" />
                Connect with Founder
              </Button>
              <Button variant="outline" className="w-full">
                <MessageCircleIcon className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Similar Startups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-muted"></div>
                <div>
                  <h4 className="font-medium text-sm">GreenShop</h4>
                  <p className="text-xs text-muted-foreground">Sustainability</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-muted"></div>
                <div>
                  <h4 className="font-medium text-sm">EthicalFind</h4>
                  <p className="text-xs text-muted-foreground">E-commerce</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-muted"></div>
                <div>
                  <h4 className="font-medium text-sm">Carbonly</h4>
                  <p className="text-xs text-muted-foreground">Climate Tech</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full">
                View More Similar Startups
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PitchDetail;
