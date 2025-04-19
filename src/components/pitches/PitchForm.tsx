import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PitchForm = () => {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState("");
  const [fundingRound, setFundingRound] = useState("");
  const [fundingAmount, setFundingAmount] = useState<number>(0);
  const [fundingYear, setFundingYear] = useState<number>(2024);
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [pitchDeckLink, setPitchDeckLink] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!userId) {
      alert("User not authenticated.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("companyName", companyName);
      formData.append("category", category);
      formData.append("fundingRound", fundingRound);
      formData.append("fundingAmount", String(fundingAmount));
      formData.append("fundingYear", String(fundingYear));
      formData.append("shortDescription", shortDescription);
      formData.append("longDescription", longDescription);
      formData.append("coverImage", coverImage);
      formData.append("userId", userId);
      formData.append("pitchDeckLink", pitchDeckLink);


      const response = await axios.post("http://localhost:5000/api/pitch", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Pitch submitted:", response.data);
      alert("Pitch submitted successfully!");

      // Optionally reset form here
      setTitle("");
      setCompanyName("");
      setCategory("");
      setFundingRound("");
      setFundingAmount(0);
      setFundingYear(2024);
      setShortDescription("");
      setLongDescription("");
      setCoverImage("");
      setPitchDeckLink("");
    } catch (error) {
      console.error("Error submitting pitch:", error);
      alert("Error submitting pitch. Check console for details.");
    }
  };

  return (
    <Card className="max-w-3xl mx-auto mt-10 shadow-2xl p-4">
      <CardHeader>
        <CardTitle>Submit Your Startup Pitch</CardTitle>
        <CardDescription>
          Fill out the form to showcase your startup.
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-6">
        <div>
          <Label htmlFor="title">Pitch Title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={(value) => setCategory(value)} value={category}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
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

        <div>
          <Label htmlFor="category">Funding Round</Label>
          <Select onValueChange={(value) => setFundingRound(value)} value={fundingRound}>
            <SelectTrigger>
              <SelectValue placeholder="Select Funding Round" />
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

        {/* <div>
          <Label htmlFor="fundingRound">Funding Round</Label>
          <Input id="fundingRound" value={fundingRound} onChange={(e) => setFundingRound(e.target.value)} />
        </div> */}

        <div>
          <Label htmlFor="fundingAmount">Funding Amount (in $)</Label>
          <Input
            id="fundingAmount"
            type="number"
            value={fundingAmount}
            onChange={(e) => setFundingAmount(parseFloat(e.target.value))}
          />
        </div>

        <div>
          <Label htmlFor="fundingYear">Funding Year</Label>
          <Input
            id="fundingYear"
            type="number"
            value={fundingYear}
            onChange={(e) => setFundingYear(parseInt(e.target.value))}
          />
        </div>

        <div>
          <Label htmlFor="shortDescription">Short Description</Label>
          <Textarea id="shortDescription" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
        </div>

        <div>
          <Label htmlFor="longDescription">Long Description</Label>
          <Textarea id="longDescription" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} />
        </div>

        <div>
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input id="coverImage" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
        </div>

        <div>
          <Label htmlFor="coverImage">Pitch Deck</Label>
          <Input id="pitchdeck" value={pitchDeckLink} onChange={(e) => setPitchDeckLink(e.target.value)} placeholder="Add the google drive link of your Pitch Deck" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit} className="bg-blue-600 text-white hover:bg-blue-700">
          Submit Pitch
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PitchForm;
