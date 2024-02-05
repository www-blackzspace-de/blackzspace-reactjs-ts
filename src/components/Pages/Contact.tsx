import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../Styles/Contact.css";

function Contact() {
  useEffect(() => {
    document.title = "bS | Contact";
    console.log("Console > Contact!");
  }, []);

  return (
    <div className="head">
      <header className="Contact-header">
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
              Contact
            </Typography>
          </Box>
        </Container>
        <center>
          <p>Contact me over Discord:</p>
        </center>
        <div>
          <iframe
            title="discord"
            className="discord"
            src="https://discord.com/widget?id=1201563586280034314&theme=dark"
            width="350"
            height="500"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </header>
        <div className="Contact-body">
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography align="center" variant="h6" component="p" gutterBottom>
                Contact me over our board!
                <li>
                  <a href="/https://board.blackspace.de/">Board</a>
                </li>
              </Typography>
            </Box>
          </Container>
    </div>
    </div>
    );
}

export default Contact;
