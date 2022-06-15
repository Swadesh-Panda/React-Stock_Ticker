import {
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import React from "react";

const NewContact = () => {
  return (
    <div>
      <CardHeader title="Create Contact" />
      <CardContent>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Enter Contact"
                placeholder="Enter Contact no."
                fullWidth
                required
                // onChange={handleChange}
                // value={}
              />
            </Grid>
            <Grid item xs={12} textAlign='end'>
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

export default NewContact;
