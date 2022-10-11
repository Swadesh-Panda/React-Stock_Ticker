import { Card, Grid } from "@mui/material";
import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { UserContext } from "../context/UserProvider";
import ChatUI from "./chats/ChatUI";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <Card className="card-container Dashboard">
      <Grid container height="100%" >
        <Grid item sm={4} lg={3}>
          <Sidebar />
        </Grid>

        <Grid item sm={8} lg={9}>
        Your ID : {user.uuid}
          <ChatUI />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Dashboard;
