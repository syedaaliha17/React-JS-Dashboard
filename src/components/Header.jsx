import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h2"
        color={color.gray[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={color.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
