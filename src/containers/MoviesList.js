import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as moviesActions from '../actions/moviesActions';
import List from '../components/List';
import Waypoint from 'react-waypoint';
import {ListContainer} from '../components/Style/ListContainer';

class MoviesList extends Component {

  componentDidMount() {
    this.props.actions.loadMovies(this.props.page)
  }

  render() {
    
    const isEmpty = this.props.movies.length === 0
    return (
      <div>
        {isEmpty
          ? (this.props.isLoading ? <h2>Loading...</h2> : (this.props.isError ? <h2>Oops! Something went wrong.</h2> : null))
          : (this.props.isLoading
            ? <ListContainer className="movies_wrapper">
                <List
                  movies={this.props.movies}
                />
                <h2>Loading...</h2>
              </ListContainer>
            : <ListContainer className="movies_wrapper">
                <List
                  movies={this.props.movies}
                />
                <Waypoint
                  onEnter={() => this.props.actions.loadMovies(this.props.page)}
                  threshold={5.0}
                />
              </ListContainer>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
    isError: state.movies.isError,
    page: state.movies.page,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moviesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
