import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PublicIcon from "@mui/icons-material/Public";
import Accordion from "./accordion";
import Covidinlaos from "./Covid-in-laos";
import Covidintheworld from "./Covid-in-the-world";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className=" bg-white shadow-2xl "
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <div className=" bg-gray-300 shadow-2xl ">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <div className=" flex-1" />
            <Tab
              icon={<AccessibleForwardIcon />}
              label="patient information"
              {...a11yProps(0)}
              sx={{ width: "1000px" }}
            />

            <Tab
              icon={<EditLocationAltIcon />}
              label="covid-19 in laos"
              {...a11yProps(1)}
              sx={{ width: 1000 }}
            />

            <Tab
              icon={<PublicIcon />}
              label="covid-19 in the world"
              {...a11yProps(2)}
              sx={{ width: 1000 }}
            />
            <div className="flex-1" />
          </Tabs>
        </Box>
      </div>
      <TabPanel value={value} index={1}>
        <Accordion />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Covidinlaos />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Covidintheworld/> 
      </TabPanel>
    </Container>
  );
}
