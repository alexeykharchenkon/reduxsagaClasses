import React from 'react';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '@store/actions/actionFilterTypes';

interface TodosFilterProps {
    setFilter: any;
    filter: any;
    classes: any;
}

export class TodosFilter extends React.Component<TodosFilterProps> {
  render() {
    const {filter, classes, setFilter} = this.props;
    return (
      <Card className={classes.filter}>
          <div>
            Show All
            <Checkbox
              checked={ filter === SHOW_ALL ? true : false}
              onChange={() => setFilter(SHOW_ALL)}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            Show Completed
            <Checkbox
              checked={ filter === SHOW_COMPLETED ? true : false}
              onChange={() => setFilter(SHOW_COMPLETED)}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            Show Active
            <Checkbox
              checked={ filter === SHOW_ACTIVE ? true : false}
              onChange={() => setFilter(SHOW_ACTIVE)}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
      </Card>
    );
  }
}

