import * as React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";

export default function Singlepage() {
  const id = useParams().id;
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);
  const [dis, setDis] = useState("");
  const [title, setTitle] = useState("");
  const [discount, setDiscount] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      // setUserInput(response.data.products);
      setPrice(response.data.price);
      setImage([response.data.thumbnail]);
      setDis(response.data.description);
      setTitle(response.data.title);
      setDiscount(response.data.discountPercentage);
      setStock(response.data.stock);
      setBrand(response.data.brand);
      setCategory(response.data.category);
    });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ my: 15 }}>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <CardMedia
                component="img"
                sx={{
                  width: "50%",
                  m: 1,
                  display: { xs: "block", sm: "none" },
                }}
                image={image}
                alt={title}
              />
              <Typography component="h2" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                price: $ {price}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                discount%: $ {discount}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {dis}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                brand: {brand}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                category: {category}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                In stock: {stock}
              </Typography>

              <Typography variant="subtitle1" color="primary">
                <Link to="/">Back to HOME page</Link>
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: "50%", display: { xs: "none", sm: "block" } }}
              image={image}
              alt={title}
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Container>
  );
}
