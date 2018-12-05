import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Shop from '@material-ui/icons/Shop';
import Assignment from '@material-ui/icons/Assignment';
import RateReview from '@material-ui/icons/RateReview';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import { Paper, Button, Card, CardContent, Grid } from '@material-ui/core';
import ItemGrid from '../Grid/ItemGrid';
import Send from '@material-ui/icons/Send';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  TabH: {
    width: '100%',
    minHeight: 500,
    // maxHeight:'-webkit-fill-available',
    width: 'auto',
    backgroundImage: 'linear-gradient(to bottom, #282c34 , #ff9800)'
  },
  Mean: {
    textAlign: 'left',
    height: 100
  },
  Meanr: {
    textAlign: 'left',
    height:50
  },
  Upper: {
    height: 60,
  },
  Details: {
    width: '90%',
    textAlign: 'left',
    padding: 15,
    fontSize: 18,
    color: 'white',
    // height:20
  },
  Inner: {
    paddingLeft: 20,
    fontSize: 14,
    color: 'white',
    width: '100%',
    height: 20,
    display: 'flex',
    justifyContent: 'left'
  },
  InnerExt: {
    // paddingLeft: 20,
    fontSize: 16,
    color: 'white',
    width: '100%',
    // height:20,
    display: 'flex',
    justifyContent: 'left'
  },
  Info: {
    // display: 'flex',
    /* justify-content: left; */
    width: '100%',
    height: 200
  },
  ProductInfo: {
    width: '96%',
    height: 135,
    paddingTop: '10%'
  },
  ProductDetails: {
    width: '96%',
    height: 200,
    paddingLeft: '4%'
  },
  ProductReviews: {
    width: '96%',
    height: 280,
    paddingLeft: '4%'
  },
  InnerD: {
    display: 'flex',
    // justifyContent: 'left',
    width: '100%',
    height: 25
  },
  card: {
    // minWidth: 275,
    width: '100%',
    height: 165,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  Dec: {
    display: 'none',
    width: '95%',
    height: 180,
    paddingRight: '5%',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
    },
  },
  DecR: {
    display: 'none',
    width: '100%',
    height: 125,
    backgroundColor:'#282c34',

    // paddingRight: '5%',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
    },
  },
  DecM: {
    display: 'inline-block',
    width: '90%',
    height: 400,
    paddingRight: '10%',
    marginTop: '40%',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  DecMR: {
    display: 'inline-block',
    width: '100%',
    backgroundColor:'#282c34',
    // paddingRight: '10%',
    // marginTop: '40%',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
    // maxWidth: 300,
  },
  formControlr: {
    width: '100%',
    // maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    width: 60,
    height: 30,
    marginTop: '0px'
  },
  textFieldr: {
  },
  QTY: {
    display: 'flex',
    height: 40,
    justifyContent: 'center'
  },
  button:{
    marginTop:-12  },
    // buttonr:{
    //  width:'80%',
    //  marginLeft:'10%'
    //   },
});

class TabsForDetails extends React.Component {
  state = {
    value: 2,
    name: [],
    count:1
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  handleChangeSize = event => {
    this.setState({ name: event.target.value });
  };
  addProd = (con)=>{
if(con === '+'){
  this.setState({count:this.state.count+1})
}
else{
  this.setState({count:this.state.count-1})

}
  }
  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
      
        const rates = ['1','2','3','4','5',]
        const names = [
            'XXL',
            'XL',
            'L',
            'M',
            'F M',
            'S',
            'XS',
            'XXS',
          ];
    const contant =(<Grid container >
      <ItemGrid xs={12} sm={6} md={6} lg={6} xl={6}>
      <FormControl className={classes.formControlr}>
              <InputLabel htmlFor="select-multiple">Give Stars</InputLabel>
              <Select
                // multiple
                value={this.state.name}
                onChange={this.handleChangeSize}
                // input={<Input id="select-multiple" />}
                MenuProps={MenuProps}
              >
                {rates.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
        <TextField
  required
  id="standard-required"
  label="Email/Name"
  defaultValue="Hello World"
  className={classes.textFieldR}
  margin="normal"
  fullWidth
  />
      </ItemGrid>
      <ItemGrid xs={12} sm={6} md={6} lg={6} xl={6}>
      <TextField
  id="filled-multiline-flexible"
  label="Message"
  multiline
  rowsMax="4"
  fullWidth
  // value={this.state.multiline}
  // onChange={this.handleChange('multiline')}
  className={classes.textFieldR}
  // margin="normal"
  // helperText="hello"
  // variant="filled"
  />
      </ItemGrid>

      </Grid>)
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            // scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab className={classes.TabsH} label="Product" icon={<Shop color={`${value === 0 && "secondary"}`} />} />
            <Tab className={classes.TabsH} label="Details" icon={<Assignment color={`${value === 1 && "secondary"}`} />} />
            <Tab className={classes.TabsH} label="Reviews" icon={<RateReview color={`${value === 2 && "secondary"}`} />} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          {value === 0 && <Paper className={classes.TabH}>
            <div className={classes.Mean}>
              <div className={classes.Upper}>
                <Typography className={classes.Details}>Product Name Will be come Here soon</Typography>
              </div>
              <div className={classes.InnerD}>
                <Typography className={classes.Inner}>Rating Come Soon     </Typography>
                {/* <Typography className={classes.Inner}>     Write a Review      </Typography> */}
                <Typography className={classes.Inner}>   In Stock    </Typography>
              </div>
            </div>
            {/* <div className={classes.Info}> */}
            <Grid container className={classes.Info}>
              <ItemGrid xs={12} sm={6} md={6} lg={6} xl={6}>

                <div className={classes.ProductInfo}>
                  <Typography className={classes.InnerExt}>List Price: $219.00</Typography>
                  <Typography className={classes.InnerExt}>Price:&#160;&#160;&#160;&#160;&#160;&#160;&#160;$219.00 $149.00</Typography>
                  <Typography className={classes.InnerExt}>Returns:&#160;&#160;&#160;90 DAY EASY RETURNS</Typography>
                  <Typography className={classes.InnerExt}>Shipping:&#160;&#160;FREE US SHIPPING OVER $35</Typography>
                </div>
              </ItemGrid>
              <ItemGrid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card className={classes.card}>
                  <CardContent>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="select-multiple">Select Size</InputLabel>
                      <Select
                        // multiple
                        value={this.state.name}
                        onChange={this.handleChangeSize}
                        // input={<Input id="select-multiple" />}
                        MenuProps={MenuProps}
                      >
                        {names.map(name => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <div className={classes.QTY}>
                      <Typography className={classes.title} color="textSecondary">
                        Quantity
         </Typography>

                      {/* <AddIcon /> */}
                      <div style={{ display: 'flex' }}>
                          <IconButton color="primary" onClick={()=>this.addProd('-')} className={classes.button}>
                          <RemoveIcon color="secondary" /> 
                        </IconButton>
                        <TextField
                          id="outlined-bare"
                          className={classes.textField}
                          defaultValue="Bare"
                          value={this.state.count}
                          onChange={(e)=>this.setState({count:Number(e.target.value)})}
                          margin="normal"
                          variant="outlined"
                        />
                         <IconButton color="primary" onClick={()=>this.addProd('+')} className={classes.button}>
                          <AddIcon  color="secondary" />
                        </IconButton>
                      </div>
                    </div>
                    <Button variant='raised' fullWidth color='primary'>Add to Card</Button>
                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        
        <Typography variant="h5" component="h2">
          be
        </Typography> */}
                  </CardContent>
                  {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
                </Card>
              </ItemGrid>
            </Grid>
            <div className={classes.Dec}>
              <Typography className={classes.Details}>Description:</Typography>
              <Typography className={classes.Inner}>Feel like Bane when you wear this Winter Coat. The Dark Knight Rises Bane Distressed Coat has shearling lining inside of the jacket
               necessary to keep you warm when the temperature is 0°C or below.
    The Bane Jacket is made of distress brown PU leather and comes with two large size button pockets with two chest pockets and two inside pockets. The Coat has full button feature in front and opens hem cuffs for sleeves. Attire this Mens Shearling Coat as a daily wear or for Halloween or Christmas
    . This is also a unique fashion piece to gift your beloved ones.
</Typography>
            </div>

            <div className={classes.DecM}>
              <Typography className={classes.Details}>Description:</Typography>
              <Typography className={classes.Inner}>Feel like Bane when you wear this Winter Coat. The Dark Knight Rises Bane Distressed Coat has shearling lining inside of the jacket
               necessary to keep you warm when the temperature is 0°C or below.
    The Bane Jacket is made of distress brown PU leather and comes with two large size button pockets with two chest pockets and two inside pockets. The Coat has full button feature in front and opens hem cuffs for sleeves. Attire this Mens Shearling Coat as a daily wear or for Halloween or Christmas
    . This is also a unique fashion piece to gift your beloved ones.
</Typography>
            </div>
            {/* </div> */}
          </Paper>}
          {value === 1 && <Paper className={classes.TabH}>
            <div className={classes.Mean}>
              <div className={classes.Upper}>
                <Typography className={classes.Details}>Product Name Will be come Here soon</Typography>
              </div>
            </div>
            <div className={classes.ProductDetails}>
              <Typography className={classes.InnerExt}>Brand Name</Typography>
              <Typography className={classes.InnerExt}>Product Owner:&#160;&#160;&#160;&#160;&#160;&#160;&#160;$219.00 $149.00</Typography>
              <Typography className={classes.InnerExt}>Shipping Time in City:&#160;&#160;FREE US SHIPPING OVER $35</Typography>
              <Typography className={classes.InnerExt}>Shipping Time Out of City:&#160;&#160;FREE US SHIPPING OVER $35</Typography>
              <Typography className={classes.InnerExt}>RETURNS:&#160;&#160;&#160;90 DAY EASY RETURNS</Typography>
              <Typography className={classes.InnerExt}>City:&#160;&#160;&#160;90 DAY EASY RETURNS</Typography>
              <Typography className={classes.InnerExt}>Address:&#160;&#160;FREE US SHIPPING OVER $35</Typography>
            </div>
            <div className={classes.Dec}>
              <Typography className={classes.Details}>About Product Company:</Typography>
              <Typography className={classes.Inner}>Feel like Bane when you wear this Winter Coat. The Dark Knight Rises Bane Distressed Coat has shearling lining inside of the jacket
               necessary to keep you warm when the temperature is 0°C or below.
    The Bane Jacket is made of distress brown PU leather and comes with two large size button pockets with two chest pockets and two inside pockets. The Coat has full button feature in front and opens hem cuffs for sleeves. Attire this Mens Shearling Coat as a daily wear or for Halloween or Christmas
    . This is also a unique fashion piece to gift your beloved ones.
</Typography>
            </div>

            <div className={classes.DecM}>
              <Typography className={classes.Details}>Description:</Typography>
              <Typography className={classes.Inner}>Feel like Bane when you wear this Winter Coat. The Dark Knight Rises Bane Distressed Coat has shearling lining inside of the jacket
               necessary to keep you warm when the temperature is 0°C or below.
    The Bane Jacket is made of distress brown PU leather and comes with two large size button pockets with two chest pockets and two inside pockets. The Coat has full button feature in front and opens hem cuffs for sleeves. Attire this Mens Shearling Coat as a daily wear or for Halloween or Christmas
    . This is also a unique fashion piece to gift your beloved ones.
</Typography>
            </div>
          </Paper>}
          {value === 2 && <Paper className={classes.TabH}>
          <div className={classes.Meanr}>
              <div className={classes.Upper}>
                <Typography className={classes.Details}>Product Reviews</Typography>
              </div>
            </div>
            <div className={classes.ProductReviews}>
              <Typography className={classes.InnerExt}>Brand Name</Typography>
              <Typography className={classes.InnerExt}>Product Owner:&#160;&#160;&#160;&#160;&#160;&#160;&#160;$219.00 $149.00</Typography>
              <Typography className={classes.InnerExt}>Shipping Time in City:&#160;&#160;FREE US SHIPPING OVER $35</Typography>
              <Typography className={classes.InnerExt}>Shipping Time Out of City:&#160;&#160;FREE US SHIPPING OVER $35</Typography>
              <Typography className={classes.InnerExt}>RETURNS:&#160;&#160;&#160;90 DAY EASY RETURNS</Typography>
              <Typography className={classes.InnerExt}>City:&#160;&#160;&#160;90 DAY EASY RETURNS</Typography>
              <Typography className={classes.InnerExt}>Address:&#160;&#160;FREE US SHIPPING OVER $35</Typography>
            </div>
            <Paper className={classes.DecR}>{contant}</Paper>
            <Paper className={classes.DecMR}>{contant}</Paper>
              
              <Button fullWidth variant="contained" color="primary" className={classes.buttonr}>
        Send
        <Send color="secondary" />
      </Button>
          </Paper>}
        </SwipeableViews>
      </div>
    );
  }
}

TabsForDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsForDetails);