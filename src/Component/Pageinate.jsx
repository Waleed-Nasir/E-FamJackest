/* Pagination Component 
-------------------------------------------------*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardItem from './CardItem';
import ItemGrid from '../Grid/ItemGrid';

const styles = theme => ({
pagination:{
    display:' inline-block',
    borderRadius: 4,
    margin: '20px 0',
    paddingLeft: 0,
},
nonActive:{
    position: 'relative',
    float: 'left',
    padding: '6px 12px',
    marginLeft: -1,
    lineHeight: 1.42857143,
    color: '#282c34',
    textDecoration: 'none',
    backgroundColor: '#ff9800',
    border: '1px solid #ddd',
    display: 'inline',
    cursor: 'pointer',

},
active:{
    display: 'inline',
    lineHeight: 1.42857143,
    zIndex: 2,
    color: '#ff9800',
    cursor: 'pointer',
    backgroundColor: '#282c34',
    borderColor: '#337ab7',
    position: 'relative',
    float: 'left',
    padding: '6px 12px',
    marginLeft: -1,
},
disabled:{
    position: 'relative',
    float: 'left',
    padding: '6px 12px',
    marginLeft: -1,
    lineHeight: 1.42857143,
    color:'#337ab7',
    textDecoration: 'none',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    display: 'inline',
    cursor: 'not-allowed',
},
container: {
    height: 'calc(100% - 100px)',
    // overflowY: 'auto',
    // overflowX: 'hidden',
},
PageOp:{
    width:'100%'
}
})


const defaultProps = {
    initialPage: 1
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page);

        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 24;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;
        const { classes } = this.props;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <ul className={classes.pagination}>
                <li onClick={() => this.setPage(1)} className={pager.currentPage === 1 ?classes.disabled :classes.nonActive}>
                    <a>First</a>
                </li>
                <li onClick={() => this.setPage(pager.currentPage - 1)} className={pager.currentPage === 1 ?classes.disabled :classes.nonActive}>
                    <a>Previous</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li onClick={() => this.setPage(page)} key={index} className={pager.currentPage === page ? classes.active  :classes.nonActive}>
                        <a>{page}</a>
                    </li>
                )}
                <li onClick={() => this.setPage(pager.currentPage + 1)} className={pager.currentPage === pager.totalPages ? classes.disabled :classes.nonActive}>
                    <a>Next</a>
                </li>
                <li onClick={() => this.setPage(pager.totalPages)} className={pager.currentPage === pager.totalPages ? classes.disabled :classes.nonActive}>
                    <a>Last</a>
                </li>
            </ul>
        );
    }
}

Pagination.defaultProps = defaultProps;


/* App Component 
-------------------------------------------------*/

class Paginations extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = [...Array(35).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid    container
            className={classes.container}
            >
               {this.state.pageOfItems.map(item =>
              <ItemGrid  xs={6}sm={4} md={3} lg={2} xl={2}>
               <CardItem />
              </ItemGrid>
             )}<div   className={classes.PageOp}>
                <Pagination classes={classes} items={this.state.exampleItems} onChangePage={this.onChangePage} />
             </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(Paginations);
