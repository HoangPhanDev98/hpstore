import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "@mui/material/Button";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "../../../../components/form-controls/PasswordField";
import "./registerform.scss";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup
    .object({
      identifier: yup
        .string()
        .required("Please enter your email")
        .email("Please enter avalid email address"),

      password: yup.string().required("Please enter your password"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;
  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <Avatar className="register-form__avatar">
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h6" className="register-form__title">
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          className="register-form__submit"
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
