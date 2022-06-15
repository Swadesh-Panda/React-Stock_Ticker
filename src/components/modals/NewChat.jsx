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
  FormControl,
} from "@mui/material";
import { ContactsContext } from "../../context/ContactsProvider";
import { ChatsContext } from "../../context/ChatsProvider";

const NewChat = () => {
  const [createState, setCreateState] = useState(false);
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

  const handleSelect = (e) => {
    const {
      target: { value },
    } = e;

    setParticipants(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    setGroup({
      ...group,
      members: typeof value === "string" ? value.split(",") : value,
    });

    if (group.members !== []) setCreateState(true);
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
              <FormControl fullWidth>
                <InputLabel required>Participants</InputLabel>
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
                      <Box>
                        {contact.name}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} textAlign="end">
              <Button type="submit" variant="contained" disabled={!createState}>
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
