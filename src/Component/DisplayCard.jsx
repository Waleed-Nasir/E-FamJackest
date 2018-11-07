import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

const styles = {
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 300,
  },
};

function DisplayCard(props) {
  const { classes,image, } = props;
  return (
     <Paper className={classes.card} elevation={1}>
     <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
      </Paper>
       
  );
}

DisplayCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayCard);