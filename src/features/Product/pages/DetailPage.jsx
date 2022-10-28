import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Container, Grid, Paper } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";

DetailPage.propTypes = {};

function DetailPage(props) {
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
              <ProductThumbnail product={{}} />
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
              Right column
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
