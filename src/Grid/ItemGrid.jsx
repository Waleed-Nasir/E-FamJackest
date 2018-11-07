import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const style = {
    grid: {
        padding: '10px 15px !important',
    },
};

function ItemGrid({ ...props }) {
    const { classes, children, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

ItemGrid.propTypes = {
    children: PropTypes.shape({}).isRequired,
    classes: PropTypes.shape({}).isRequired,
};

export default withStyles(style)(ItemGrid);
