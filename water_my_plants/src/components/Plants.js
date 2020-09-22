import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
    marginTop: 10,
  },
  media: {
    height: 200,
  },
});

function Plants({ plants }) {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {plants.map((plant) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={plant.imgurl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Species: {plant.species}
              </Typography>
              <Typography gutterBottom variant="body2" component="p">
                Nickname: {plant.nickname}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {plant.waterfrequency}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Plants;
