import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ContactsContext } from "../context/ContactsProvider";

const ContactList = () => {
  const { contacts } = useContext(ContactsContext);

  return (
    <List className="List">
      {contacts.map((contact) => (
        <div key={contact.phone}>
          <ListItem className="list-item">
            <ListItemAvatar>
              <Avatar alt={contact.name} src="/static/images/avatar/" />
            </ListItemAvatar>
            <ListItemText
              primary={contact.name}
              secondary={<Typography>+91 {contact.phone}</Typography>}
            />
          </ListItem>
          <Divider variant="inset" />
        </div>
      ))}
    </List>
  );
};

export default ContactList;
