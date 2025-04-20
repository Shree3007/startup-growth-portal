import { useEffect, useState } from "react";
import { getMentorRequests } from "@/api/getMentorRequests";
import useAuthStore from "@/store/useAuthStore";
import axios from "axios";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const MentorRequestBoardTabs = () => {
  const { token } = useAuthStore();
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getMentorRequests(token);
        setRequests(data);
      } catch (error) {
        console.error("Failed to fetch mentor requests:", error);
      }
    };

    fetchRequests();
  }, [token]);

  const handleDecision = async (requestId, action) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/decision/${requestId}`,
        { action },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;
      console.log("Success:", result);

      setRequests((prev) =>
        prev.map((req) =>
          req._id === requestId ? { ...req, status: result.status } : req
        )
      );
    } catch (error) {
      console.error("Error updating request status:", error);
    }
  };

  const renderRequests = (status) => {
    const filtered = requests.filter((req) => req.status === status);

    if (filtered.length === 0) {
      return <p className="text-muted-foreground">No {status} requests.</p>;
    }

    return filtered.map((req) => {
      const pitch = req.pitchId;
      const user = req.userId;

      return (
        <Card key={req._id} className="mb-4 hover:shadow-md transition-shadow">
          <CardHeader className="flex justify-between items-center">
            <div
              onClick={() => navigate(`/pitches/${pitch?._id}`)}
              className="hover:underline text-blue-600 cursor-pointer"
            >
              <CardTitle>{pitch?.title || "Untitled Pitch"}</CardTitle>
            </div>
            {status === "pending" && (
              <div className="space-x-2">
                <button
                  onClick={() => handleDecision(req._id, "approved")}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDecision(req._id, "rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <p>
              <strong>From:</strong> {user?.name || "Unknown"}
            </p>
            <p>
              <strong>Requested At:</strong>{" "}
              {new Date(req.requestedAt).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Mentor Feedback Requests</h1>
      <Tabs defaultValue="pending">
        <TabsList className="mb-4">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {renderRequests("pending")}
        </TabsContent>
        <TabsContent value="approved" className="space-y-4">
          {renderRequests("approved")}
        </TabsContent>
        <TabsContent value="rejected" className="space-y-4">
          {renderRequests("rejected")}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentorRequestBoardTabs;
