
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StarIcon, MessageCircleIcon, BriefcaseIcon } from "lucide-react";

interface MentorCardProps {
  mentor: {
    id: string;
    name: string;
    role: string;
    company: string;
    expertise: string[];
    bio: string;
    avatar: string;
    rating: number;
    reviewCount: number;
  };
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={mentor.avatar} alt={mentor.name} />
            <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{mentor.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center">
              <BriefcaseIcon className="h-3.5 w-3.5 mr-1" />
              {mentor.role} at {mentor.company}
            </p>
            <div className="flex items-center mt-1 text-sm">
              <StarIcon className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
              <span className="font-medium">{mentor.rating}</span>
              <span className="text-muted-foreground ml-1">({mentor.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise.map((skill, i) => (
            <Badge key={i} variant="secondary">{skill}</Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{mentor.bio}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-end gap-2">
        <Button variant="outline" size="sm">View Profile</Button>
        <Button className="bg-launchpad-600 hover:bg-launchpad-700" size="sm">
          <MessageCircleIcon className="h-4 w-4 mr-2" /> Request Feedback
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MentorCard;
