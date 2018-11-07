import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
 import image from '../test.jpg';
 import image1 from '.././Asset/one.png';
 import image2 from '.././Asset/two.jpg';
 import image3 from '.././Asset/three.png';
 import image4 from '.././Asset/four.jpg';
 import image5 from '.././Asset/five.png';
import DisplayCard from './DisplayCard';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height:710,
  },
  gridList: {
    marginTop:'100px !important',
    width:"100%",
    height: 610,
  },
  subheader: {
    width: '100%',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
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
   class DisplayLock extends React.Component{

     render() {
      const { classes } = this.props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={12}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
           <DisplayCard image={tile.img}/>
            {/* <img src={tile.img} alt={tile.title} /> */}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

DisplayLock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayLock);