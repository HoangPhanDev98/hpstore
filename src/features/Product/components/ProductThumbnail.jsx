import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/index";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.product.thumbnail
    ? `${STATIC_HOST}${product.product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  console.log(product.product.thumbnail.url);

  return (
    <Box>
      <img src={thumbnailUrl} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
