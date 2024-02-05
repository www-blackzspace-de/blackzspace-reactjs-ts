
import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/Projects.css";


function Projects() {
  useEffect(() => {
    document.title = "bS | Projects";

    console.log(
      "Console > Projects"
    );
  }, []);

  return (
    <div className="Projects">
      <header className="Projects-header">
        
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="h5"
                component="h1"
                gutterBottom
              >
                Projects Section
              </Typography>
            </Box>
          </Container>




          <div className="body">
            <center>

              <table className="tg">

                <thead>
                  <tr>
                    <th className="tg-baqh">Name</th>
                    <th className="tg-baqh">Description</th>
                    <th className="tg-baqh">Version</th>
                    <th className="tg-baqh">Author</th>
                    <th className="tg-baqh">Link</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td className="tg-baqh">bS Discord.js Bot</td>
                    <td className="tg-baqh">Discord.JS v14 Bot | OpenSource</td>
                    <td className="tg-baqh">v.3.0.0</td>
                    <td className="tg-baqh">BlackLeakz</td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://github.com/blackzspace-de/blackleakz-bot"
                          >
                            Visit
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>

                  <tr>
                  <td className="tg-baqh">blackzspace.de - ReactJS App</td>
                    <td className="tg-baqh">This websites source code!</td>
                    <td className="tg-baqh">v.0.0.1</td>
                    <td className="tg-baqh">BlackLeakz</td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://github.com/blackzspace-de/blackzspace-reactjs-app.git"
                          >
                            Visit
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>

                  <tr>
                  <td className="tg-baqh">BPI-M2-BERRY SSD1306 OLED Control</td>
                    <td className="tg-baqh">Python3 | BananaPi-M2-Berry GPIO OLED SSD1306 Control</td>
                    <td className="tg-baqh">release</td>
                    <td className="tg-baqh">BlackLeakz</td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://github.com/blackleakz/bpi-m2-berry-oledssd1306-gpio-control"
                          >
                            Visit
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>




        </div>
      </header>
    </div>
  );
}

export default Projects;
