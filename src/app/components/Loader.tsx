import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }
}

