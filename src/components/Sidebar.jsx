import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Tabs, Tab, Box, Card, Button, Modal, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Chats from "./Chats";
import Contacts from "./Contacts";
import NewContact from "./modals/NewContact";
import NewChat from "./modals/NewChat";
import HighlightOffRounded from "@mui/icons-material/HighlightOffRounded";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const Sidebar = () => {
  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const [openModal, setModalState] = useState(false);

  const handleTabChange = (e, newTab) => {
    setTab(newTab);
  };
  const handleChangeIndex = (index) => {
    setTab(index);
  };

  const handleModal_Open = () => {
    setModalState(true);
  };
  const handleModal_Close = () => {
    setModalState(false);
  };

  return (
    <Card className="card-container Sidebar">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <AppBar position="static" className="primary">
          <Tabs
            value={tab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="Chats" {...TabProps(0)} />
            <Tab label="Contacts" {...TabProps(1)} />
          </Tabs>
        </AppBar>
      </Box>
      <SwipeableViews
        className="tab-panel"
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={tab}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={tab} index={0}>
          <Chats />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Contacts />
        </TabPanel>
      </SwipeableViews>

      <Button
        className="add-button primary"
        onClick={handleModal_Open}
        variant="contained"
      >
        <AddIcon fontSize="large" />
      </Button>

      <Modal
        className="modal"
        closeAfterTransition
        open={openModal}
        onClose={handleModal_Close}
      >
        <Card className="card-container" variant="outlined" sx={{ width: 200 }}>
          {tab ? <NewContact /> : <NewChat />}
          <IconButton className="modal-close"   onClick={handleModal_Close}>
            <HighlightOffRounded />
          </IconButton>
        </Card>
      </Modal>
    </Card>
  );
};

export default Sidebar;
