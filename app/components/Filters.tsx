import { Box, Chip, Grid2 } from "@mui/material";

interface Props {
  title: string;
  options: string[];
}

const Filters = ({ title, options }: Props) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <p className="mb-2 md:mb-4">{title}</p>
      <Grid2 container spacing={1} alignItems="center">
        {options.map((option, index) => (
          <Chip
            variant="outlined"
            key={index}
            label={option}
            onClick={handleClick}
          ></Chip>
        ))}
      </Grid2>
    </Box>
  );
};

export default Filters;
