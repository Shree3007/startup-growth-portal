// src/api/getMentorRequests.js

import axios from "axios";

export const getMentorRequests = async (token) => {
  const res = await axios.get("http://localhost:5000/api/all-requests", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
