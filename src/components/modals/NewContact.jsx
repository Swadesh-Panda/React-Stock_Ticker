import React, { useContext, useState } from "react";
import {
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { ContactsContext } from "../../context/ContactsProvider";

const NewContact = () => {
  const { contacts, setContacts } = useContext(ContactsContext);

  const [contact, setContact] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    // e.preventDefault();

    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  const handleNameChange = (e) => {
    setContact({
      ...contact,
      name: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setContact({
      ...contact,
      phone: e.target.value,
    });
  };

  return (
    <div>
      <CardHeader title="Create Contact" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                placeholder="enter name..."
                fullWidth
                required
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contact No."
                type="number"
                placeholder="enter phone no."
                fullWidth
                required
                onChange={handlePhoneChange}
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

export default NewContact;
