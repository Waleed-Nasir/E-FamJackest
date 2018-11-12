import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image1 from '.././Asset/one.png';
import image2 from '.././Asset/two.jpg';
import image3 from '.././Asset/three.png';
import image4 from '.././Asset/four.jpg';
import ItemGrid from '.././Grid/ItemGrid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TabsForDetails from './TabsForDetails';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minHeight:600,
    maxHeight:'auto',
    // backgroundImage:'linear-gradient(to bottom, #282c34 , #FF9800)',
    // display: 'flex',
    // justifyContent: "center",
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  subheader: {
    width: '100%',
  },
  view:{
    width: '100%',
    height: 600,
  },
  bigImage:{
    width: '100%',
    // height: '60%',
    // maxHeight:300,
    maxHeight:'60%',
    minHeight:'60%',
  },
  smallImage:{
    width: '20%',
    height: '20%',
  }
});
const tileData = [
    {
      img: image1,
      title: 'Image',
      author: 'author',
      cols: 8,
    },     {
      img: image2,
      title: 'Image',
      author: 'author',
      cols: 4,
    },     {
      img: image4,
      title: 'Image',
      author: 'author',
      cols: 4,
    },     {
      img: image3,
      title: 'Image',
      author: 'author',
      cols: 8,
    },
     ];
class Details extends React.Component  {
  constructor(){
    super();
    this.state={
      SelectedImg:'',
      ImgId:''
    }
  }
  View = (data,id) => {
    this.setState({SelectedImg:data.img,ImgId:id})
  }
    render (){
        const { classes } = this.props;
  return (
      <Grid container className={classes.root}>
     <ItemGrid  xs={12}sm={12} md={4} lg={4} xl={4} >
     <div className={classes.view}>
     {this.state.SelectedImg === ''?this.setState({SelectedImg:image1,ImgId:0}):null}
     <img src={this.state.SelectedImg}  className={classes.bigImage}/>
     <div>
     <GridList className={classes.gridList} cols={2.5}>
     {tileData.map((tile,ind) => (
       <GridListTile key={tile.img}  onClick={()=>this.View(tile,ind)}>
       <img src={tile.img} alt={tile.title} />
       <GridListTileBar
         title={tile.title}
         classes={{
           root: classes.titleBar,
           title: classes.title,
         }}
        //  actionIcon={
        //    <IconButton>
        //      <StarBorderIcon className={classes.title} />
        //    </IconButton>
        //  }
       />
     </GridListTile>
            // <img src={tile.img}  xs={12}sm={12} md={3} lg={4} xl={4}  onClick={()=>this.View(tile,ind)} 
            //  className={classes.smallImage} />
        ))}
            </GridList>
     </div>
     </div>

     </ItemGrid>
     <ItemGrid xs={12}sm={12} md={4} lg={8} xl={8}>
     <TabsForDetails/>
     </ItemGrid>
      </Grid>
  );}
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);