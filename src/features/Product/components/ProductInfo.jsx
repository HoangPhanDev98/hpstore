import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { formatPrice } from "../../../utils";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box paddingBottom="16px" borderBottom="1px solid #c9c9c9">
      <Typography variant="h4" component="h1">
        {name}
      </Typography>
      <Typography variant="body2" padding="16px 0">
        {shortDescription}
      </Typography>

      <Box
        sx={{
          backgroundColor: "#cfcfcf",
          padding: "16px",
          borderBottom: "1px solid #cfcfcf",
        }}
      >
        <Typography
          component="span"
          variant="h4"
          sx={{ marginRight: "24px", fontWeight: "bold" }}
        >
          {formatPrice(salePrice)}
        </Typography>
        <Typography
          component="span"
          sx={{ marginRight: "16px", textDecoration: "line-through" }}
        >
          {formatPrice(originalPrice)}
        </Typography>
        <Box component="span">{` -${promotionPercent}%`}</Box>
      </Box>
    </Box>
  );
}

export default ProductInfo;
