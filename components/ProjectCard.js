import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import { useEffect, useState, useContext } from "react";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const ProjectCard = ({project}) =>  {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  const themeContext = useContext(ThemeContext);

  const cardtheme = createMuiTheme ({
          palette:{
             type: themeContext.theme === "dark" ? "dark" : "light",
          },
        });

  return (
    <ThemeProvider theme = {cardtheme}>
      <Card style={{maxWidth: 345, minWidth: 330, height: "32rem"}}>
        <CardActionArea>
          <CardMedia
            style={{
              maxWidth:330,
              maxHeight:170,
              width: "auto",
              height: "auto",
              margin: "auto",
            }}
            component="img"
            image={project.image}
            title={project.imageAlt}
          />
          <CardContent style={{height: "16rem"}}>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {project.domain}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent: 'center'}}>
        {
          project.links.map((links,idx) =>
            (
              <Button size="small" color="primary"  key={idx}>
                  <a href={links.link} target="_blank" rel="noopener">
                  <img
                    src={links.icon}
                    className="project-circle-icon"
                    alt={links.alt}
                  />
                </a>
              </Button>)
          )
        }

        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default ProjectCard;
