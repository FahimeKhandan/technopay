"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { ReactNode } from "react";
import LoanRequestTabPanel from "./LoanRequestTabPanel";
import OnlineLoanRequest from "./OnlineLoanRequest";

interface Tabs {
  label: string;
  index: number;
  children: ReactNode;
}

const otherProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const tabs: Tabs[] = [
  {
    label: "درخواست وام آنلاین",
    index: 0,
    children: <OnlineLoanRequest />,
  },
  {
    label: "درخواست وام حضوری",
    index: 1,
    children: <div>درخواست وام حضوری</div>,
  },
];

const LoanRequestWrapper = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          centered
          // textColor="secondary"
          // indicatorColor="secondary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.index} label={tab.label} {...otherProps(tab.index)} />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab) => (
        <LoanRequestTabPanel key={tab.index} value={value} index={tab.index}>
          {tab.children}
        </LoanRequestTabPanel>
      ))}
    </Box>
  );
};

export default LoanRequestWrapper;
