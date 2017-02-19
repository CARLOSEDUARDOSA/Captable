import React from 'react';

class Column extends React.Component {
  render() {
    return (
      <th>
        {this.props.name}
      </th>
    );
  }
}

Column.defaultProps = {
  name: 'Nome indefinido',
  width: '180px'
};

export default Column;