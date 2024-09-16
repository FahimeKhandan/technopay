import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#4D637B",
    boxShadow: theme.shadows[1],
    fontSize: 16,
    padding:"16px",
    borderRadius:"16px"
  },
  [`& .${tooltipClasses.arrow}`]: {
    "&:before": {
      boxShadow: theme.shadows[1],  
    },
    color: theme.palette.common.white,
  },
}));

export default LightTooltip;
