import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
        </Box>
        <Typography
          variant="4"
          fontWeight="bold"
          sx={{ color: colors.gray[100] }}
        >
          {title}
        </Typography>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {subtitle}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
