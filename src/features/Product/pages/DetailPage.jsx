import { Container, Grid, LinearProgress, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import { addToCart } from "../../Cart/cartSlice";
import AddToCartForm from "../components/AddToCartForm";
import ProductAdditional from "../components/ProductAdditional";
import ProductDescription from "../components/ProductDescription";
import ProductInfo from "../components/ProductInfo";
import ProductMenu from "../components/ProductMenu";
import ProductReviews from "../components/ProductReviews";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetails";

DetailPage.propTypes = {};

function DetailPage(props) {
  const { productId } = useParams();

  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box sx={{ position: "fix", left: "0", top: "0" }}>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    console.log(action);
    dispatch(action);
  };

  return (
    <Box padding={3}>
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
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <ProductMenu />
        </Paper>
        <Routes>
          <Route
            path=""
            element={<ProductDescription product={product} />}
          ></Route>
          <Route path="additional" element={<ProductAdditional />}></Route>
          <Route path="reviews" element={<ProductReviews />}></Route>
        </Routes>
      </Container>
    </Box>
  );
}

export default DetailPage;
