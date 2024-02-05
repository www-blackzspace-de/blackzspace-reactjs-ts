
import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/Downloads.css";


function Downloads() {
  useEffect(() => {

    document.title = "bS | Downloads";

    console.log(
      "Console > Downloads!"
    );
  }, []);

  return (
    <div className="Downloads">
      <header className="Downloads-header">
        <div className="head">
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="h4"
                component="h1"
                gutterBottom
              >
                Downloads Section
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
                    <th className="tg-baqh">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tg-baqh">VSCode</td>
                    <td className="tg-baqh">Integrated Desktop Enviroment</td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://code.visualstudio.com/download"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tg-baqh">Python</td>
                    <td className="tg-baqh">Python Interpreter</td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://www.python.org/downloads/"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tg-baqh">NodeJS</td>
                    <td className="tg-baqh">Node.js - Runtime Enviroment</td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://nodejs.org/de/download"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tg-baqh">QT</td>
                    <td className="tg-baqh">
                      QT-Designer/Creator Framework for building GUI's
                    </td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://www.qt.io/download"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tg-baqh">Arduino.cc</td>
                    <td className="tg-baqh">Microcontroller IDE </td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://www.arduino.cc/en/software"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tg-baqh">BlackLeakz Installer</td>
                    <td className="tg-baqh">
                      Offical Development Enviroment Installer (bS)
                    </td>
                    <td className="tg-baqh">
                      <div>
                        <center>
                          <Button
                            className="button"
                            variant="contained"
                            href="https://github.com/blackleakz/blackleakz_installer"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Downloads;
