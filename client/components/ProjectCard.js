import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
  content: {
    height: "16rem",
  }
});

const ProjectCard = ({project}) =>  {
  const classes = useStyles();

  /*const theme = createMuiTheme ({
          palette:{
             type: themeContext.theme === "dark" ? "dark" : "light",
          },
        });*/

  return (
    /*<ThemeProvider theme = {theme}>*/
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={project.image}
            title={project.imageAlt}
          />
          <CardContent className={classes.content}>
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
        <CardActions>
          <Button size="small" color="primary">
          <a href={project.links[0].link} target="_blank" rel="noopener">
            <img
              src={project.links[0].icon}
              className="project-circle-icon"
              alt={project.links[0].alt}
            />
          </a>
          </Button>
          <Button size="small" color="primary">
          <a href={project.links[1].link} target="_blank" rel="noopener">
            <img
              src={project.links[1].icon}
              className="project-circle-icon"
              alt={project.links[1].alt}
            />
          </a>
          </Button>
        </CardActions>
      </Card>
    /*</ThemeProvider>*/
  );
}

export default ProjectCard;
