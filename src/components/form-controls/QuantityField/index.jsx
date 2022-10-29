import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { FormHelperText, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  lable: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label } = props;
  const { control, setValue } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, isTouched, error },
      }) => (
        <>
          <FormControl
            error={isTouched && invalid}
            margin="normal"
            variant="outlined"
            fullWidth
            size="small"
          >
            <Typography>{label}</Typography>
            <Box>
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                  )
                }
              >
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                id={name}
                type="number"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                sx={{ maxWidth: "80px" }}
              />
              <IconButton
                onClick={() => {
                  console.log(Number.parseInt(value));
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                  );
                }}
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
          </FormControl>
          <FormHelperText error={invalid}>{error?.message}</FormHelperText>
        </>
      )}
    ></Controller>
  );
}

export default QuantityField;
