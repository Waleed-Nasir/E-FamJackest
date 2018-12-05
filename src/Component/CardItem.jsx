import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import image4 from '.././Asset/four.jpg';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 160,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  favoClick:{
    color:'#ff9800'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  name:{
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    height:40
  }
});

class CardItem extends React.Component {
  state = { expanded: false,favo:false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleFavo = () => {
    this.setState(state => ({ favo: !state.favo }));
  };

  render() {
    const { classes,itemNum,history } = this.props;

    return (
      <Card className={classes.card}>
        {/* //<CardHeader
        //   avatar={
            // <Avatar aria-label="Recipe" className={classes.avatar}>
            //   R
            // </Avatar>
        //   }
        //   action={
        //     <IconButton>
        //       <MoreVertIcon />
        //     </IconButton>
        //   }
        //   title="Shrimp and Chorizo Paella"
        //   subheader="September 14, 2016"
        // /> */}
        <CardMedia
          className={classes.media}
          image={image4}
          title="Paella dish"
        />
        <div className={classes.name}>
        <p noWrap>
            This impressive paella is a perfect 
          </p>

        </div>
        {/* <CardContent>
          <Typography component="p">
            This impressive paella is a perfect 
          </Typography>
        </CardContent> */}
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton  className={classnames(classes.favo, {
              [classes.favoClick]: this.state.favo,
            })}
            onClick={this.handleFavo}
              aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
           <div className={classes.sectionDesktop}>
           <Button onClick={()=>{history.push('/Details'+'/id_'+itemNum)}} variant="contained" size="small" color="primary" className={classes.button}>
          Details
        </Button>
           </div>
          <div className={classes.sectionMobile}>
          <Button onClick={()=>{history.push('/Details'+'/id_'+itemNum)}} variant="contained" size="small" color="primary" className={classes.button}>
          Details
        </Button>
         </div>
        </CardActions>
        {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography> */}
            {/* <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    );
  }
}

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardItem);