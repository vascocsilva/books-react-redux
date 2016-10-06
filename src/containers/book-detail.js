import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>No book selected.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>
          <div>{`title: ${this.props.book.title}`}</div>
          <div>{`pages: ${this.props.book.pages}`}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
