import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  HeartIcon,
  MessageCircleIcon,
  ShareIcon,
  BookmarkIcon,
  PlayIcon,
  ThumbsUpIcon,
  UserIcon,
  BarChart4Icon,
  ExternalLinkIcon,
  FileTextIcon,
  PresentationIcon,
  EyeIcon,
} from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import useAuthStore from "@/store/useAuthStore";

const PitchDetail = () => {

  const { token } = useAuthStore();
  const { id } = useParams();
  const [pitch, setPitch] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchPitch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getpitches"
        );
        const selectedPitch = response.data.find((p) => p._id === id);
        setPitch(selectedPitch);
      } catch (error) {
        console.error("Failed to fetch pitch:", error);
      }
    };
    fetchPitch();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("Please log in to submit a comment.");
      return;
    }

    const userId = user.uid;
    const name = user.displayName || "Anonymous";

    try {
      setSubmitting(true);
      await axios.patch("http://localhost:5000/api/pitches/comment", {
        id,
        userId,
        name,
        commentText,
      });

      alert("Comment submitted!");
      setCommentText("");
      await handleComment(); // <-- Re-fetch comments from backend

    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleComment = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/comments/${id}`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  if (!pitch) return <p>Loading...</p>;

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
                  <p className="text-muted-foreground">
                    Pitch video coming soon
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{pitch.title}</h1>
              <p className="text-muted-foreground">{pitch.companyName}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={isLiked ? "default" : "outline"}
                size="sm"
                className={
                  isLiked ? "bg-launchpad-600 hover:bg-launchpad-700" : ""
                }
                onClick={handleLike}
              >
                <HeartIcon className="h-4 w-4 mr-2" />
                {isLiked ? "Liked" : "Like"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleBookmark}>
                <BookmarkIcon
                  className={`h-4 w-4 mr-2 ${
                    isBookmarked ? "fill-current" : ""
                  }`}
                />
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
            <Badge variant="outline">{pitch.fundingRound}</Badge>
          </div>

          <Tabs defaultValue="pitch">
            <TabsList>
              <TabsTrigger value="pitch">Pitch Overview</TabsTrigger>
              <TabsTrigger onClick={handleComment} value="comments">
                Comments
              </TabsTrigger>
              <TabsTrigger value="feedback">Mentor Feedback</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>
            <TabsContent value="pitch" className="space-y-6 py-4">
              <div>
                <h2 className="text-xl font-bold mb-3">About the Startup</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {pitch.longDescription || pitch.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Founded
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{pitch.fundingYear}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Funding Raised
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">${pitch.fundingAmount}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="comments" className="py-4">
              <h2 className="text-xl font-bold mb-4">User Comments</h2>


              { token ? (
                ""
              ) : (
                <div className="p-4 border rounded shadow mb-4">
                <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
                <form onSubmit={handleSubmit}>
                  <textarea
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Write your comment here..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Comment"}
                  </button>
                </form>
              </div>
                  
                )}



              {comments.length === 0 ? (
                <p className="text-muted-foreground">No comments yet.</p>
              ) : (
                comments.map((comment, index) => (
                  <Card key={index} className="mb-4">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar>
                        <AvatarFallback>
                          {comment.name?.[0] || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-md">
                          {comment.name}
                        </CardTitle>
                        <CardDescription>
                          {new Date(comment.commentedAt).toLocaleString()}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{comment.commentText}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="feedback" className="py-4"></TabsContent>
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
                      Complete presentation with business model, market
                      analysis, and roadmap.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to={pitch.pitchDeckLink}>
                      <Button variant="outline" className="w-full" size="sm">
                        <FileTextIcon className="h-4 w-4 mr-2" /> View Deck
                      </Button>
                    </Link>
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
                      Visit the company website for product demos and detailed
                      information.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" size="sm">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" /> Visit
                      Website
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
              <CardDescription>
                How viewers are interacting with this pitch
              </CardDescription>
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
                  <p className="text-xs text-muted-foreground">
                    Sustainability
                  </p>
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
