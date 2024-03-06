import axios from "axios";

export const privateAxios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imdpb3JnaUBnbWFpbC5jb20iLCJpZCI6IjE0ZjhlNzM5LTg0YTktNDBhMC05Y2NkLTQ5MTkwMzU5OTkyNCIsImZpcnN0X25hbWUiOiJnaW9yZ2kiLCJsYXN0X25hbWUiOiJnaW9yZ2FkemUiLCJwaG9uZV9udW1iZXIiOiI1NTUxMTEzMzMiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MDk3NTE4NjIsImV4cCI6MTcwOTc1NTQ2Mn0.OTGtzeZY490EtHqyhc46CrAmtx2ZRUFSYWjefnu2QhQ",
  },
});

export const setPrivateAccessToken = (token: string) => {
  privateAxios.defaults.headers.common["Authorization"] = "Bearer ${token}";
};
