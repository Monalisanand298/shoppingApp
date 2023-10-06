import React from "react";
import Avatar from "@mui/material/Avatar";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import flower from "./flower.jpg";
import shopping from "./shopping.jpg";

import { FormControl, useFormControlContext } from "@mui/base/FormControl";

import { useForm, Controller } from "react-hook-form";
import FormNew from "./FormNew";
import { Typography } from "@mui/material";

function Sign() {
  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: `url(${shopping})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={7}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "text.secondary" }}>
              <AcUnitIcon />
            </Avatar>

            <h1>Sign in</h1>

            <FormNew />

            <Grid container justifyContent="center" spacing={12}>
              <Grid item>
                <Link href="#">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href="#">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Sign;
