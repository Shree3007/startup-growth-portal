
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadIcon, CheckCircleIcon, FileTextIcon } from "lucide-react";

const PitchForm = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Submit Your Startup Pitch</CardTitle>
        <CardDescription>
          Share your vision with investors, mentors, and the startup community
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="pitch-title">Pitch Title</Label>
          <Input id="pitch-title" placeholder="e.g., EcoCart - Sustainable Shopping Assistant" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company-name">Company Name</Label>
          <Input id="company-name" placeholder="e.g., EcoCart Technologies" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sustainability">Sustainability</SelectItem>
                <SelectItem value="fintech">FinTech</SelectItem>
                <SelectItem value="healthtech">Health Tech</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="consumer">Consumer</SelectItem>
                <SelectItem value="productivity">Productivity</SelectItem>
                <SelectItem value="ai">Artificial Intelligence</SelectItem>
                <SelectItem value="marketplace">Marketplace</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="stage">Funding Stage</Label>
            <Select>
              <SelectTrigger id="stage">
                <SelectValue placeholder="Select funding stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idea">Idea Stage</SelectItem>
                <SelectItem value="mvp">MVP</SelectItem>
                <SelectItem value="pre-seed">Pre-seed</SelectItem>
                <SelectItem value="seed">Seed</SelectItem>
                <SelectItem value="series-a">Series A</SelectItem>
                <SelectItem value="series-b">Series B+</SelectItem>
                <SelectItem value="bootstrapped">Bootstrapped</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="short-description">Short Description (50-150 characters)</Label>
          <Textarea 
            id="short-description" 
            placeholder="A brief one-liner that describes your startup"
            className="resize-none h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pitch-description">Detailed Description</Label>
          <Textarea 
            id="pitch-description" 
            placeholder="Describe your startup, the problem you're solving, your solution, target market, and business model"
            className="min-h-[150px]"
          />
        </div>

        <div className="space-y-4">
          <Label>Pitch Video</Label>
          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <UploadIcon className="h-10 w-10 text-muted-foreground mb-4" />
            <h3 className="font-medium mb-1">Upload your pitch video</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upload a 2-3 minute video explaining your startup (MP4, MOV, or provide a YouTube/Vimeo link)
            </p>
            <div className="flex gap-4">
              <Button variant="outline">Upload Video</Button>
              <Button variant="outline">Add Link</Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Pitch Deck</Label>
          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <FileTextIcon className="h-10 w-10 text-muted-foreground mb-4" />
            <h3 className="font-medium mb-1">Upload your pitch deck</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upload your pitch deck in PDF format (max 20 slides recommended)
            </p>
            <Button variant="outline">Upload Deck</Button>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-muted/30">
          <div className="flex items-start gap-3">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Get feedback from mentors</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Your pitch will be visible to our network of startup mentors who can provide valuable feedback
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <Button variant="outline">Save as Draft</Button>
        <Button className="bg-launchpad-600 hover:bg-launchpad-700">Submit Pitch</Button>
      </CardFooter>
    </Card>
  );
};

export default PitchForm;
