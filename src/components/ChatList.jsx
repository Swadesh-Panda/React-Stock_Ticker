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
import { ChatsContext } from "../context/ChatsProvider";

const ChatList = () => {
  const { chats } = useContext(ChatsContext);
  const [Item, setItem] = useState();

  const handleListItemClick = (event, index) => {
    setItem(index);
  };

  return (
    <List className="List">
      {chats.map((chat) => (
        <div key={chat.name}>
          <ListItemButton
            className="list-item"
            selected={Item === chat.name}
            onClick={(event) => handleListItemClick(event, chat.name)}
          >
            <ListItemAvatar>
              <Avatar alt={chat.name} src="/static/images/avatar/" />
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              secondary={<Typography>Hello World!</Typography>}
            />
          </ListItemButton>
          <Divider variant="inset" />
        </div>
      ))}
    </List>
  );
};

export default ChatList;
