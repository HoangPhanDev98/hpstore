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

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required("Please enter your full name")
        .test(
          "Should has at least two words",
          "Please enter at least two words",
          (value) => {
            return value.split(" ").length >= 2;
          }
        ),

      email: yup
        .string()
        .required("Please enter your email")
        .email("Please enter avalid email address"),

      password: yup
        .string()
        .required("Please enter your password")
        .min(6, "Please enter at least 6 characters"),

      retypePassword: yup
        .string()
        .required("Please retype your password")
        .oneOf([yup.ref("password")], "Password does not match"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
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
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          className="register-form__submit"
          disabled={isSubmitting}
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
