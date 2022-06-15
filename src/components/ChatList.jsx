import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const ChatList = () => {
  return (
    <List className="List">
      <ListItem className="list-item">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Ali Connors"
          secondary={<Typography>Brunch this weekend?</Typography>}
        />
      </ListItem>
      <Divider variant="inset" />
    </List>
  );
};

export default ChatList;
