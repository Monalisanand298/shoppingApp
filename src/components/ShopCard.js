import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Singlepage from "./Singlepage";
import { Container, TextField } from "@mui/material";

import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ShopCard() {
  const [userInput, setUserInput] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setUserInput(response.data.products);
    });
  }, []);

  const [value, Setvalue] = useState("");
  const [add, setAdd] = useState("ADD TO WISHLIST");

  const fetchdata = (input) => {
    axios
      .get(`https://dummyjson.com/products/search?q=${input}`)
      .then((response) => {
        setUserInput(response.data.products);
      });
  };

  const handleChange = (input) => {
    Setvalue(input);
    fetchdata(input);
  };

  return (
    <Container maxWidth="xl">
      <Paper
        component="form"
        sx={{
          bgcolor: "info.main",
          display: "flex",
          my: "20px",
          alignItems: "center",
          justifyContent: "center",
          width: 1,
        }}
      >
        <TextField
          sx={{ width: "90%", m: 2, bgcolor: "white", borderRadius: 2 }}
          placeholder="search"
          type="text"
          value={value}
          className="Input"
          onChange={(e) => handleChange(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          {userInput.map((data, index) => {
            return (
              <Grid item xs={6} lg={3}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={data.thumbnail}
                    title={data.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <div>{data.title}</div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <div>{data.description}</div>
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      mx: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Price: ${data.price}</p>

                    <Button
                      onClick={() => {
                        navigate(`/view/${data.id}`);
                      }}
                      size="small"
                    >
                      view
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
