import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 10,
  },
  media: {
    width: 350,
    minHeight: 530,
  },
});

const MovieCard = (props) => {
  const {
    year,
    link,
    title,
    poster,
  } = props;
  const classes = useStyles();

  const handleRedirect = (e) => {
    e.preventDefault();
    window.open(link, '_blank');
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleRedirect}>
        <CardMedia
          className={classes.media}
          image={poster}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
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