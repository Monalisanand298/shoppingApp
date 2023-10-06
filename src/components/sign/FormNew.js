import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/base/Input";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function FormNew() {
  const { handleSubmit, control, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email" // Replace with your field name
        control={control}
        defaultValue="" // Default field value
        render={({ field }) => (
          <TextField
            required
            {...field}
            label="enter your Email"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="password" // Replace with your field name
        control={control}
        defaultValue="" // Default field value
        render={({ field }) => (
          <TextField
            sx={{ my: 5 }}
            {...field}
            required
            label="enter your Password"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="remember" // Replace with your field name
        control={control}
        defaultValue={false} // Default field value
        render={({ field }) => (
          <FormControlLabel
            {...field}
            control={<Checkbox defaultChecked />}
            label="remember me"
          />
        )}
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </form>
  );
}

export default FormNew;
