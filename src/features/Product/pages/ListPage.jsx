import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import productApi from "../../../api/productApi";
import FilterViewer from "../components/FilterViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";

ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);

  let navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);

  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }

      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSortValue) => {
    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      ...newFilters,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilters = (newFilters) => {
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: 250 }}>
            <Paper elevation={0}>
              <ProductFilters
                filters={queryParams}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item sx={{ flex: "1 1 0" }}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={queryParams._sort}
                onChange={handleSortChange}
              />

              <FilterViewer filters={queryParams} onChange={setNewFilters} />

              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}

              <Box
                marginTop={3}
                paddingBottom={3}
                display="flex"
                justifyContent="center"
              >
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  color="primary"
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
