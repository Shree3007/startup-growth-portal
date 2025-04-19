
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  MessageSquare,
  Calendar,
  Clock,
  TrendingUp,
} from "lucide-react";

const MentorDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Dr. Maya</h1>
          <p className="text-muted-foreground">Here's an overview of your mentoring activity</p>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Pitches</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 new this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Feedback Given</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">
              +8 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Mentored</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5</div>
            <p className="text-xs text-muted-foreground">
              +5 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">
              +2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="min-w-[64px] rounded bg-muted px-3 py-2 text-center">
                    <div className="text-sm font-medium">Apr</div>
                    <div className="text-2xl font-bold">{20 + i}</div>
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium">Pitch Review: TechStart Solutions</p>
                    <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Provided feedback on 'AI-Driven Marketing Platform' pitch",
                "Scheduled mentoring session with StartupX team",
                "Updated availability for next week",
                "Completed quarterly mentor survey"
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="min-w-[24px]">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">{activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MentorDashboard;
