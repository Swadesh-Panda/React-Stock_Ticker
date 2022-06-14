import { Card, Grid } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <Card className="card-container Dashboard">
      <Grid container  sx={{height: '100%'}}>
        <Grid item sm={4} lg={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Dashboard;
