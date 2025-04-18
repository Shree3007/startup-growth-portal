
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart4Icon, 
  TrendingUpIcon, 
  EyeIcon, 
  UsersIcon, 
  HeartIcon, 
  MessageCircleIcon, 
  BarChart2Icon, 
  PieChartIcon, 
  LineChartIcon, 
  CalendarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  RocketIcon,
  BriefcaseIcon,
  GlobeIcon,
  MousePointerIcon,
  AlertCircleIcon
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const pitchStats = {
  views: 2842,
  viewsChange: 12.5,
  uniqueVisitors: 1253,
  uniqueVisitorsChange: 8.3,
  engagementRate: 3.7,
  engagementRateChange: -1.2,
  avgTimeOnPage: "2:47",
  avgTimeOnPageChange: 5.8,
  mentorFeedback: 12,
  mentorFeedbackChange: 20,
  connections: 8,
  connectionsChange: 33.3
};

const topTrafficSources = [
  { source: "Direct", value: 45 },
  { source: "LinkedIn", value: 28 },
  { source: "Twitter", value: 15 },
  { source: "Email", value: 8 },
  { source: "Other", value: 4 }
];

const recentVisitors = [
  {
    name: "Sarah Johnson",
    role: "Angel Investor",
    company: "SJ Capital",
    date: "Today, 10:23 AM",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mark Andersen",
    role: "VC Partner",
    company: "Sequoia Capital",
    date: "Yesterday, 4:12 PM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Raj Patel",
    role: "Startup Advisor",
    company: "TechStars",
    date: "Yesterday, 11:45 AM",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg"
  },
  {
    name: "Lisa Wong",
    role: "Corporate Innovation",
    company: "Microsoft",
    date: "2 days ago, 9:30 AM",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const userPitches = [
  {
    id: "1",
    title: "EcoCart - Sustainable Shopping Assistant",
    views: 1243,
    feedback: 8,
    likes: 89,
    lastUpdated: "2 days ago",
    coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "2",
    title: "RoboChef - AI Cooking Assistant",
    views: 864,
    feedback: 5,
    likes: 42,
    lastUpdated: "1 week ago",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const engagementChart = {
  dates: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5", "Feb 12"],
  views: [15, 22, 28, 42, 38, 54, 68],
  engagement: [5, 8, 12, 16, 14, 22, 34]
};

const Dashboard = () => {
  const [selectedPitch, setSelectedPitch] = useState(userPitches[0]);

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Startup Dashboard</h1>
        <p className="text-muted-foreground">
          Track engagement metrics and optimize your startup pitch
        </p>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pitches">My Pitches</TabsTrigger>
          <TabsTrigger value="feedback">Mentor Feedback</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <EyeIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pitchStats.views}</div>
                <div className={`text-xs flex items-center mt-1 ${pitchStats.viewsChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {pitchStats.viewsChange >= 0 ? <ArrowUpIcon className="h-3 w-3 mr-1" /> : <ArrowDownIcon className="h-3 w-3 mr-1" />}
                  {Math.abs(pitchStats.viewsChange)}% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
                <UsersIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pitchStats.uniqueVisitors}</div>
                <div className={`text-xs flex items-center mt-1 ${pitchStats.uniqueVisitorsChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {pitchStats.uniqueVisitorsChange >= 0 ? <ArrowUpIcon className="h-3 w-3 mr-1" /> : <ArrowDownIcon className="h-3 w-3 mr-1" />}
                  {Math.abs(pitchStats.uniqueVisitorsChange)}% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Mentor Feedback</CardTitle>
                <MessageCircleIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pitchStats.mentorFeedback}</div>
                <div className={`text-xs flex items-center mt-1 ${pitchStats.mentorFeedbackChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {pitchStats.mentorFeedbackChange >= 0 ? <ArrowUpIcon className="h-3 w-3 mr-1" /> : <ArrowDownIcon className="h-3 w-3 mr-1" />}
                  {Math.abs(pitchStats.mentorFeedbackChange)}% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Connections</CardTitle>
                <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pitchStats.connections}</div>
                <div className={`text-xs flex items-center mt-1 ${pitchStats.connectionsChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {pitchStats.connectionsChange >= 0 ? <ArrowUpIcon className="h-3 w-3 mr-1" /> : <ArrowDownIcon className="h-3 w-3 mr-1" />}
                  {Math.abs(pitchStats.connectionsChange)}% from last month
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>View and engagement metrics over time</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px] w-full flex items-center justify-center border-b pb-4">
                  {/* In a real app, use Recharts or similar library */}
                  <LineChartIcon className="h-24 w-24 text-muted-foreground/60" />
                </div>
                <div className="pt-4 flex justify-between text-xs text-muted-foreground">
                  {engagementChart.dates.map((date, i) => (
                    <div key={i}>{date}</div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-launchpad-500"></div>
                  <span className="text-xs text-muted-foreground">Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-launchpad-300"></div>
                  <span className="text-xs text-muted-foreground">Engagement</span>
                </div>
              </CardFooter>
            </Card>
            
            <div className="col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors are coming from</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topTrafficSources.map((source, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{source.source}</span>
                        <span className="font-medium">{source.value}%</span>
                      </div>
                      <Progress value={source.value} className="h-2" />
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full text-xs justify-start px-0 text-muted-foreground">
                    <GlobeIcon className="h-3.5 w-3.5 mr-1" /> View all traffic sources
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pitch Improvement Tips</CardTitle>
                  <CardDescription>Ways to optimize your pitch performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3 pb-3 border-b">
                    <AlertCircleIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Add a product demo video</h4>
                      <p className="text-xs text-muted-foreground">Pitches with demos get 2x more engagement</p>
                    </div>
                  </div>
                  <div className="flex gap-3 pb-3 border-b">
                    <AlertCircleIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Respond to mentor comments</h4>
                      <p className="text-xs text-muted-foreground">4 comments need your response</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AlertCircleIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Update your pitch deck</h4>
                      <p className="text-xs text-muted-foreground">Last updated 3 weeks ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Visitors</CardTitle>
              <CardDescription>People who have viewed your pitch recently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentVisitors.map((visitor, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={visitor.avatar} alt={visitor.name} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <h4 className="font-medium">{visitor.name}</h4>
                        <p className="text-xs text-muted-foreground">{visitor.role} at {visitor.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground">{visitor.date}</span>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full text-muted-foreground">
                View All Visitors
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="pitches" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userPitches.map((pitch) => (
              <Card key={pitch.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={pitch.coverImage} 
                    alt={pitch.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <h3 className="font-bold text-white">{pitch.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="text-center p-2 rounded-md bg-muted">
                      <div className="text-2xl font-bold">{pitch.views}</div>
                      <div className="text-xs text-muted-foreground">Views</div>
                    </div>
                    <div className="text-center p-2 rounded-md bg-muted">
                      <div className="text-2xl font-bold">{pitch.feedback}</div>
                      <div className="text-xs text-muted-foreground">Feedback</div>
                    </div>
                    <div className="text-center p-2 rounded-md bg-muted">
                      <div className="text-2xl font-bold">{pitch.likes}</div>
                      <div className="text-xs text-muted-foreground">Likes</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0">
                  <div className="text-xs text-muted-foreground">
                    Last updated: {pitch.lastUpdated}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Link to={`/pitches/${pitch.id}`}>View</Link>
                    </Button>
                    <Button size="sm" className="bg-launchpad-600 hover:bg-launchpad-700">
                      Edit
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
            
            <Card className="flex flex-col justify-center items-center text-center p-8 border-dashed">
              <RocketIcon className="h-12 w-12 text-muted-foreground/60 mb-4" />
              <h3 className="text-lg font-medium mb-2">Add a New Pitch</h3>
              <p className="text-muted-foreground mb-6">
                Create a new pitch to showcase your startup
              </p>
              <Button className="bg-launchpad-600 hover:bg-launchpad-700">
                Create New Pitch
              </Button>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="feedback" className="space-y-8">
          <Card className="rounded-md p-12 text-center border-dashed">
            <MessageCircleIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground/60" />
            <h3 className="text-xl font-medium mb-2">Mentor Feedback</h3>
            <p className="text-muted-foreground mb-6">
              Track and respond to all mentor feedback for your pitches
            </p>
            <Button className="bg-launchpad-600 hover:bg-launchpad-700">
              View All Feedback
            </Button>
          </Card>
        </TabsContent>
        
        <TabsContent value="connections" className="space-y-8">
          <Card className="rounded-md p-12 text-center border-dashed">
            <UsersIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground/60" />
            <h3 className="text-xl font-medium mb-2">Network Connections</h3>
            <p className="text-muted-foreground mb-6">
              Manage connections with investors, mentors, and other founders
            </p>
            <Button className="bg-launchpad-600 hover:bg-launchpad-700">
              View All Connections
            </Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
