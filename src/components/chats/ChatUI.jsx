import { SendRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ChatUI = () => {
  return (
    <Stack minHeight="100%" padding="20px" justifyContent="space-between">
      <Stack gap="20px">
        <Stack direction="row" gap="10px" alignItems='center' >
          <Avatar src="/logo.png" alt="Alice" />
          <Card
            variant="outlined"
            sx={{ borderRadius: "20px", padding: "12px", minWidth: "200px", backgroundColor: "#b2dfdb"}}
          >
            <Typography textAlign="left">Recursively calling messages to create a conversation.</Typography>
          </Card>
        </Stack>
        <Stack direction="row" gap="10px" alignItems='center'>
          <Avatar src="/logo.png" alt="Josh" />
          <Card
            variant="outlined"
            sx={{ borderRadius: "20px", padding: "12px", minWidth: "200px", backgroundColor: "#bbdefb" }}
          >
            <Typography textAlign="left">Test Content, message.</Typography>
          </Card>
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" paddingY="10px">
        <OutlinedInput
          autoFocus
          fullWidth
          placeholder="Type your mssg..."
          sx={{ borderRadius: "50px", height: "50px" }}
        />
        <Button className="add-button primary" variant="contained">
          <SendRounded />
        </Button>
      </Stack>
    </Stack>
  );
};

export default ChatUI;
