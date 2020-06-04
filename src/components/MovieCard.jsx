import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 10,
  },
  media: {
    width: 250,
    minHeight: 430,
  },
});

const MovieCard = (props) => {
  const {
    year,
    title,
    poster,
    imdbID,
    openDetail,
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => openDetail(imdbID)}>
        <CardMedia
          className={classes.media}
          image={poster}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;