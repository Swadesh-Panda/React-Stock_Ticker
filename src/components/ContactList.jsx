import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ContactsContext } from "../context/ContactsProvider";

const ContactList = () => {
  const { contacts } = useContext(ContactsContext);
  const [Item, setItem] = useState();

  const handleListItemClick = (event, index) => {
    setItem(index);
  };

  return (
    <List className="List">
      {contacts.map((contact) => (
        <div key={contact.phone}>
          <ListItemButton
            className="list-item"
            selected={Item === contact.phone}
            onClick={(event) => handleListItemClick(event, contact.phone)}
          >
            <ListItemAvatar>
              <Avatar alt={contact.name} src="/static/images/avatar/" />
            </ListItemAvatar>
            <ListItemText
              primary={contact.name}
              secondary={<Typography>+91 {contact.phone}</Typography>}
            />
          </ListItemButton>
          <Divider variant="inset" />
        </div>
      ))}
    </List>
  );
};

export default ContactList;
