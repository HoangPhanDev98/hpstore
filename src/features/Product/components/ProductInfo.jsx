import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box>
      <Typography variant="h4" component="h1">
        {name}
      </Typography>
      <Typography variant="body2" padding="16px 0">
        {shortDescription}
      </Typography>

      <Box sx={{ backgroundColor: "#cfcfcf" }}>
        <Box component="span">{salePrice}</Box>
        <Box component="span">{originalPrice}</Box>
        <Box component="span">{promotionPercent}</Box>
      </Box>
    </Box>
  );
}

export default ProductInfo;
