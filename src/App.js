import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import DarkModeToggle from "react-dark-mode-toggle";

// import { getPosts } from './actions/posts'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import wisp_logo from "./images/wisp_logo.png";
import useStyles from "./styles";

import { ThemeProvider, createTheme } from "@material-ui/core";

const App = () => {
  const [currentId, setCurrentId] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  //const [isDarkMode, setIsDarkMode] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <Container maxwidth="lg">
      <ThemeProvider theme={darkTheme}>
        <AppBar
          className={classes.appBar}
          position="static"
          color={`${isDarkMode ? "default" : "primary"}`}
        >
          <Typography className={classes.heading} variant="h2" align="center">
            Wisper
          </Typography>
          <img
            className={classes.image}
            src={wisp_logo}
            alt="wisper logo"
            height="60"
          />
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />

          {/* <DarkModeToggle
          onChange={() => setIsDarkMode((prevState) => !prevState)}
          checked={isDarkMode}
          size={80}
        /> */}
        </AppBar>
      </ThemeProvider>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
