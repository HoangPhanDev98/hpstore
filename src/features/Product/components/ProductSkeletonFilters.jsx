import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Grid, Skeleton, Typography } from "@mui/material";

ProductSkeletonFilters.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonFilters.defaultProps = {
  length: 6,
};

function ProductSkeletonFilters({ length }) {
  return (
    // <Box>
    //   <Typography variant="subtitle2">
    //     <Skeleton />
    //   </Typography>
    //   {Array.from(new Array(length)).map((x, index) => (
    //     <Typography variant="body2" key={index}>
    //       <Skeleton />
    //     </Typography>
    //   ))}
    // </Box>

    <div>
      <Typography variant="subtitle2">
        <Skeleton key={100} width="60%" />
      </Typography>

      <Box
        sx={[
          {
            ul: {
              listStyleType: "none",
              padding: 0,
              margin: 0,
              "& > li": {
                marginTop: "16px",
                transition: "all 0.25",
                "&:hover": { cursor: "pointer", color: "purple" },
              },
            },
          },
        ]}
      >
        <ul>
          {Array.from(new Array(length)).map((x, index) => (
            <li key={index}>
              <Typography variant="body2">
                <Skeleton />
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default ProductSkeletonFilters;
