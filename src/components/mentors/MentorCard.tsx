import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  StarIcon,
  MessageCircleIcon,
  BriefcaseIcon,
  XIcon,
} from "lucide-react";
import { getAuth } from "firebase/auth";
import axios from "axios";

interface MentorCardProps {
  mentor: {
    _id: string;
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
  const [userId, setUserId] = useState<string | null>(null);
  const [pitches, setPitches] = useState<{ title: string; _id: string }[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleRequestFeedback = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/user-pitches", {
        userId,
      });

      if (response.status === 200) {
        setPitches(response.data);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error fetching pitches:", error);
      alert("Failed to fetch pitches. Please try again.");
    }
  };

  const handlePitchSelect = async (pitchId: string) => {
    if (!userId) {
      alert("You must be logged in to request feedback.");
      return;
    }

    try {
      // Close modal first for better UX
      setShowModal(false);

      const response = await axios.post("http://localhost:5000/api/review-request", {
        pitchId,
        mentorId: mentor._id,
        userId,
      });

      if (response.status === 200) {
        setTimeout(() => {
          alert("✅ Feedback request sent successfully!");
        }, 200); // slight delay for smooth closing
      }

      if(response.status === 409){
        setTimeout(() => {
          alert("Review request already submitted");
        }, 200); 
      }
    } catch (error) {
      console.error("Error sending feedback request:", error);
      alert("Failed to send feedback request. Please try again.");
    }
  };

  return (
    <div className="relative">
      {/* Main Card */}
      <div className={`${showModal ? "blur-sm pointer-events-none" : ""}`}>
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
                  <span className="text-muted-foreground ml-1">
                    ({mentor.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pb-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {mentor.expertise.map((skill, i) => (
                <Badge key={i} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{mentor.bio}</p>
          </CardContent>

          <CardFooter className="border-t pt-4 flex justify-end gap-2">
            <Button variant="outline" size="sm">
              View Profile
            </Button>
            <Button
              className="bg-launchpad-600 hover:bg-launchpad-700"
              size="sm"
              onClick={handleRequestFeedback}
            >
              <MessageCircleIcon className="h-4 w-4 mr-2" />
              Request Feedback
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] max-h-[80vh] overflow-y-auto relative z-50">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              <XIcon className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4">Your Pitches</h2>
            {pitches.length > 0 ? (
              <ul className="space-y-2">
                {pitches.map((pitch) => (
                  <li
                    key={pitch._id}
                    className="text-sm border rounded p-2 hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={() => handlePitchSelect(pitch._id)}
                  >
                    {pitch.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No pitches found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorCard;
