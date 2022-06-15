import React, { useState, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  Chip,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { ContactsContext } from "../../context/ContactsProvider";
import { ChatsContext } from "../../context/ChatsProvider";

const NewChat = () => {
  const { contacts } = useContext(ContactsContext);
  const { chats, setChats } = useContext(ChatsContext);

  const theme = useTheme();
  const [participants, setParticipants] = useState([]);

  const [group, setGroup] = useState({
    name: "",
    members: [],
  });

  const handleSubmit = (e) => {
    // e.preventDefault();

    setChats((prevChats) => {
      return [...prevChats, group];
    });
  };

  const handleNameChange = (e) => {
    setGroup({
      ...group,
      name: e.target.value,
    });
  };

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setParticipants(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setGroup({
      ...group,
      members: typeof value === "string" ? value.split(",") : value,
    });
  };

  return (
    <div>
      <CardHeader title="Create Group" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Group"
                placeholder="Enter Group Name..."
                fullWidth
                required
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Participants</InputLabel>
              <Select
                multiple
                label="Participants"
                value={participants}
                onChange={handleSelect}
                renderValue={(selected) => (
                  <Box className="multi-container">
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                      width: 250,
                    },
                  },
                }}
              >
                {contacts.map((contact) => (
                  <MenuItem key={contact.name} value={contact.name}>
                    {contact.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} textAlign="end">
              <Button type="submit" variant="contained">
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </div>
  );
};

export default NewChat;
