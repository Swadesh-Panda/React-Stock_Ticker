import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Card } from "@mui/material";
import Chats from "./Chats";
import Contacts from "./Contacts";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
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
  const [tab, setTab] = useState(0);

  const handleTabChange = (e, newTab) => {
    setTab(newTab);
  };

  return (
    <Card className="card-container Sidebar">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Chats" {...TabProps(0)} />
          <Tab label="Contacts" {...TabProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <Chats />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Contacts />
      </TabPanel>
    </Card>
  );
};

export default Sidebar;
