import React from "react";
import PropTypes from "prop-types";
import { Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <Box padding={1}>
      <Skeleton variant="rect" width="100%" height={118} />
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent}
      </Typography>
    </Box>
  );
}

export default Product;
