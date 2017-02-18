import React from 'react';

class Captable extends React.Component {
  constructor(props) {
    super(props);
  }

  getRows() {
    var rows = [];

    this.props.store.map((item, ixItem) => {
      rows.push(
        <tr key={ixItem}>
          {
            React.Children.map(this.props.children.props.children, column => {
              return (
                <td>
                  {item[column.props.name]}
                </td>
              )
            })
          }
        </tr>
      );
    });

    return rows;
  }

  render() {
    return (
      <table className="table table-striped">
        {this.props.children}
        <tbody>
          {
            this.getRows().map((item, index) => {
              return item;
            })
          }
        </tbody>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.children}
        </tr>
      </thead>
    );
  }
}

class Column extends React.Component {
  render() {
    return (
      <th>
        {this.props.name}
      </th>
    );
  }
}

export { Captable, Columns, Column };