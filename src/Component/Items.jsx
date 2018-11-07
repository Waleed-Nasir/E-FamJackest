import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ItemGrid from '../Grid/ItemGrid';
import Grid from '@material-ui/core/Grid';
import image2 from '.././Asset/two.jpg';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: 320,
    height: 350,
  },
  mean: {
    display: 'flex'
    
  },
  container: {
    height: 'calc(100% - 100px)',
    // overflowY: 'auto',
    // overflowX: 'hidden',
},
img:{
  maxWidth:320,
  height: 200,
}
});

function Items(props) {
  const { classes } = props;

  return (
    <Grid    container
    className={classes.container}
    >
      {/* {projectsSorted &&
                    projectsSorted.map((project) => ( */}
      <ItemGrid  xs={12}sm={12} md={9} lg={3} xl={2}>
        <Paper className={classes.root} elevation={1}>
          <img src={image2} className={classes.img}/>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
        </Typography>
        </Paper>
      </ItemGrid>



      {/* ))} */}
    </Grid>
  );
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Items);