import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#4D637B",
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}));

export default LightTooltip;
