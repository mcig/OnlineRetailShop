import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
  content: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function MediaCard({ title, icon, form }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        {icon}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.content}>{form}</CardActions>
    </Card>
  );
}
