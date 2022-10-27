import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Chip } from "@mui/material";

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Miễn phí giao hàng",
    isActive: (filters) => filters.isFreeShip,
    isVisible: (filters) => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Khuyến mãi",
    isActive: (filters) => filters.isPromotion,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;

      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: (filters) => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_lte") &&
      Object.keys(filters).includes("salePrice_gte"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;

      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 4,
    getLabel: (filters) => "Danh mục",
    isActive: (filters) => true,
    isVisible: (filters) => Object.keys(filters).includes("category.id"),
    isRemovable: true,
    onRemove: (filters) => {},
    onToggle: (filters) => {},
  },
];

function FilterViewer({ filters = {}, onChange = null }) {
  return (
    <Box
      component="ul"
      sx={[
        {
          display: "flex",
          flexFlow: "row wrap",
          listStyleType: "none",
          padding: "0 0 16px 8px",
          borderBottom: "1px solid #cfcfcf",
          "& > li": {
            padding: 0,
            margin: "0 8px",
          },
        },
      ]}
    >
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
