"use client";
import { Box, Chip, Grid2 } from "@mui/material";
import { useState } from "react";

interface Props {
  title: string;
  options: string[];
}

const Filters = ({ title, options }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  const handleClick = (index: number) => {
    console.log("clicked", index);
    setSelectedFilter(index);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <p className="mb-2 md:mb-4">{title}</p>
      <Grid2 container spacing={1} alignItems="center">
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
    </Box>
  );
};

export default Filters;
