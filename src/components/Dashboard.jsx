import { Card, Grid } from "@mui/material";
import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { UserContext } from "../context/UserProvider";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <Card className="card-container Dashboard">
      <Grid container sx={{ height: "100%" }}>
        <Grid item sm={4} lg={3}>
          <Sidebar />
        </Grid>

        <Grid item>Your ID : {user.id}</Grid>
      </Grid>
    </Card>
  );
};

export default Dashboard;
