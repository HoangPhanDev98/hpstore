import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Container, Grid, Paper, Typography } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";
import { useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetails";
import ProductInfo from "../components/ProductInfo";

DetailPage.propTypes = {};

function DetailPage(props) {
  const { productId } = useParams();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box>
        <Typography>Loading</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Container>
        <Paper>
          <Grid container>
            <Grid
              item
              sx={[
                {
                  width: "400px",
                  padding: "12px",
                  borderRight: "1px solid #cfcfcf",
                },
              ]}
            >
              <ProductThumbnail product={{ product }} />
            </Grid>
            <Grid
              item
              sx={[
                {
                  flex: "1 1 0",
                  padding: "12px",
                },
              ]}
            >
              <ProductInfo product={product} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
