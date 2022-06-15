import {
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import React from "react";

const NewChat = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <CardHeader title="Create Chat" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Participant"
                placeholder="Enter Contact no."
                fullWidth
                required
                // onChange={handleIdChange}
                // value={user.id}
              />
            </Grid>
            <Grid item xs={12} textAlign="end">
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </div>
  );
};

export default NewChat;
