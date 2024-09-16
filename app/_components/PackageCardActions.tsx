"use client";

import { Button, CardActions } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

const PackageCardActions = () => {
  return (
    <CardActions className="p-0">
      <Button variant="contained" color="secondary">
        انتخاب <WestIcon className="mr-2 text-md"/>
      </Button>
    </CardActions>
  );
};

export default PackageCardActions;
