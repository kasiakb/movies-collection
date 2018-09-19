import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as moviesActions from '../actions/moviesActions';
import List from '../components/List';


class MoviesList extends Component {

  componentDidMount() {
    this.props.actions.loadMovies()
  }

  render() {
    
    const isEmpty = this.props.movies.length === 0
    console.log('list', isEmpty)
    return (
      <div>
        {isEmpty
          ? (this.props.isLoading ? <h2>Loading...</h2> : (this.props.isError ? <h2>Oops! Something went wrong.</h2> : null))
          : <div>
              <List
                movies={this.props.movies}
              />
            </div>
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
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moviesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)