import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="Login">
      <CardHeader title="Log in" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Enter Id"
                placeholder="Enter your id..."
                fullWidth
                required
              />
            </Grid>
            <Grid item textAlign="end" xs={12}>
              <Button type="submit" variant="contained">
                Log in
              </Button>
              <Button type="submit" variant="contained" className="primary">
                Create a new id
              </Button>
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                placeholder="Enter First Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                placeholder="Enter Last Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                label="Phone Number"
                placeholder="Enter Phone no."
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter email address"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Type your message here..."
                fullWidth
                required
              />
            </Grid>
            <Grid item textAlign="center" xs={12}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
