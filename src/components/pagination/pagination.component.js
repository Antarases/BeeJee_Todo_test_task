import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../../actions';

import { Grid, Button } from 'react-bootstrap';

import './pagination.component.css';

const Pagination = ({
    onPrevClick,
    onNextClick,
    currentPage,
    totalPages
}) => (
    <Grid
        id="pagination"
        componentClass="section"
    >
        <Button
            className="prev"
            style={{
                display: currentPage === 1 ?
                            'none' :
                            'inline-block'
            }}
            onClick={() => onPrevClick()}
        >
            Prev
        </Button>
        {' '}
        <Button
            className="next"
            style={{
                display: currentPage === totalPages ?
                    'none' :
                    'inline-block'
            }}
            onClick={() => onNextClick()}
        >
            Next
        </Button>

        {' '}

        <span>
            Page {currentPage} of {totalPages}
        </span>
    </Grid>
);

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func
}


const mapStateToProps = (state) => {
    return {
        currentPage: state.pagination.currentPage,
        totalPages: state.pagination.totalPages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPrevClick: () => dispatch(
            changePage('prev')
        ),
        onNextClick: () => dispatch(
            changePage('next')
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);
