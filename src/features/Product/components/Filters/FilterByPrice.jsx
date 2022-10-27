import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  return (
    <div>
      <Box padding={2} borderTop="1px solid #cfcfcf">
        <Typography variant="subtitle2" fontWeight="bold">
          GIÁ
        </Typography>

        <Box
          sx={[
            {
              marginY: "16px",
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",

              "& > span": {
                marginX: "10px",
              },
            },
          ]}
        >
          <TextField
            name="salePrice_gte"
            value={values.salePrice_gte}
            onChange={handleChange}
            variant="standard"
          ></TextField>
          <span>-</span>
          <TextField
            name="salePrice_lte"
            value={values.salePrice_lte}
            onChange={handleChange}
            variant="standard"
          ></TextField>
        </Box>

        <Button onClick={handleSubmit} variant="outlined" color="primary">
          Áp dụng
        </Button>
      </Box>
    </div>
  );
}

export default FilterByPrice;
