"use client";
import { Box, Chip, FormControl, Grid2, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  options: { label: string; amount: number }[];
  onFilterChange: (value: number) => void;
}

const Filters = ({ title, options, onFilterChange }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<number>(
    options[0].amount
  );

  const handleClick = (value: number) => {
    setSelectedFilter(value);
    onFilterChange(value);
  };

  useEffect(() => {
    onFilterChange(options[0].amount);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginBottom={5}
      width="100%"
    >
      <p className="mb-2 md:mb-4">{title}</p>
      <FormControl dir="rtl" fullWidth sx={{ display: { md: "none" } }}>
        <Select
          dir="rtl"
          value={selectedFilter}
          onChange={({ target }) => handleClick(target.value as number)}
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.amount}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ display: { xs: "none", md: "block" } }}>
        <Grid2
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          {options.map((option, index) => (
            <Chip
              variant="outlined"
              className={option.amount === selectedFilter ? "selected" : ""}
              key={index}
              label={option.label}
              onClick={() => handleClick(option.amount)}
            ></Chip>
          ))}
        </Grid2>
      </FormControl>
    </Box>
  );
};

export default Filters;
