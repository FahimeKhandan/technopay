"use client";
import {
  Box,
  Chip,
  FormControl,
  Grid2,
  MenuItem,
  Select
} from "@mui/material";
import { useState } from "react";

interface Props {
  title: string;
  options: string[];
}

const Filters = ({ title, options }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<number>(0);

  const handleClick = (index: number) => {
    console.log(index);
    setSelectedFilter(index);
  };

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
          onChange={({ target }) =>
            handleClick(parseInt(target.value.toString()))
          }
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={index}>
              {option}
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
              className={index === selectedFilter ? "selected" : ""}
              key={index}
              label={option}
              onClick={() => handleClick(index)}
            ></Chip>
          ))}
        </Grid2>
      </FormControl>
    </Box>
  );
};

export default Filters;
