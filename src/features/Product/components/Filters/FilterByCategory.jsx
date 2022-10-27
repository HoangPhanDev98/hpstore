import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import categoryApi from "../../../../api/categoryApi";
import ProductSkeletonFilters from "../ProductSkeletonFilters";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();

        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log("Failed fetch data: ", error);
      }

      setLoading(false);
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (!onChange) return;
    onChange(category.id);
  };

  return (
    <Box padding={2}>
      {loading ? (
        <ProductSkeletonFilters />
      ) : (
        <div>
          <Typography variant="subtitle2" fontWeight="bold">
            DANH MỤC SẢN PHẨM
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
              {categoryList.map((category) => (
                <li
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                >
                  <Typography variant="body2">{category.name}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        </div>
      )}
    </Box>
  );
}

export default FilterByCategory;
