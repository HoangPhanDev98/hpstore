import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <div>
      <Box
        padding={2}
        borderTop="1px solid #cfcfcf"
        sx={[
          {
            ul: {
              listStyleType: "none",
              padding: 0,
              margin: 0,
              "& > li": { margin: 0, marginTop: "16px" },
            },
          },
        ]}
      >
        <Typography variant="subtitle2" fontWeight="bold">
          DỊCH VỤ
        </Typography>

        <ul>
          {[
            { value: "isPromotion", label: "Khuyến mãi" },
            { value: "isFreeShip", label: "Miễn phí giao hàng" },
          ].map((service) => (
            <li key={service.value}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(filters[service.value])}
                    onChange={handleChange}
                    name={service.value}
                    color="primary"
                  />
                }
                label={service.label}
              />
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default FilterByService;
