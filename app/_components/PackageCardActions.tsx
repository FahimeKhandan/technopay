"use client";

import { Button, CardActions } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

const PackageCardActions = () => {
  return (
    <CardActions className="flex p-0 w-full justify-center">
      <Button variant="contained" color="secondary" className="w-full md:w-auto">
        انتخاب <WestIcon className="mr-2 text-md" />
      </Button>
    </CardActions>
  );
};

export default PackageCardActions;
