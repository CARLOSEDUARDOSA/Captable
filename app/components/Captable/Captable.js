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
      <div className="captable" style={{ height: this.props.height + 'px' }}>
        <table className="captable__table table table-striped">
          {this.props.children}
          <tbody style={{ height: this.props.height - this.props.headerHeight + 'px' }}>
            {
              this.getRows().map((item, index) => {
                return item;
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Captable.defaultProps = {
  height: '200',
  headerHeight: '40'
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

Column.defaultProps = {
  name: 'Nome indefinido',
  width: '180px'
};

export { Captable, Columns, Column };