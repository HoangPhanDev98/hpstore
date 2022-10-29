import { Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

ProductMenu.propTypes = {};

function ProductMenu(props) {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        listStyle: "none",
        justifyContent: "center",
        "& > li": {
          padding: "16px 32px",
          "&>a": {
            textDecoration: "none",
            color: "#000000",
            "&.active": { color: "blue", textDecoration: "underline" },
          },
        },
      }}
    >
      <li>
        <Link component={NavLink} to="" end>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to="additional">
          Additional Information
        </Link>
      </li>
      <li>
        <Link component={NavLink} to="reviews">
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
