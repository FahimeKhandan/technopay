import {
  Box,
  FormControl,
  Grid2,
  Skeleton
} from "@mui/material";

const FiltersSkeleton = ({ title }: { title: string }) => {
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
        <Skeleton animation="wave" variant="rectangular" width="100%" height={55} />
      </FormControl>

      <FormControl sx={{ display: { xs: "none", md: "block" } }}>
        <Grid2
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          {[1, 2, 3, 4].map((index) => (
            <Skeleton
              animation="wave"
              variant="rounded"
              width={170}
              height={55}
              key={index}
            />
          ))}
        </Grid2>
      </FormControl>
    </Box>
  );
};

export default FiltersSkeleton;
