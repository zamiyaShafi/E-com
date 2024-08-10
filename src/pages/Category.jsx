import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        console.log(res);
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(category, "categories");

  return (
    <>
      {/* xs={12} means 12/12 columns (100% width).
sm={6} means 6/12 columns (50% width).
md={4} means 4/12 columns (33.33% width). */}

      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ color: "#040000", textAlign: "center", margin: "10px" }}
      >
        Browse Product Categories
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          margin: "10px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {category.map((item, i) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, backgroundColor: "#20b2aa" }}>
                <CardActionArea>
                  <CardContent>
                    <Link to={`/cat-product/${item.name}`}>
                      {" "}
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
