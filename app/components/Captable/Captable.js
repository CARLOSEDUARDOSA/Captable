import React from 'react';
import Column from './Column.js';
import Columns from './Columns.js';

class Captable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowSelected: -1
    }
  }

  getRows() {
    var rows = [];

    this.props.store.map((item, ixItem) => {
      rows.push(
        <tr key={ixItem} onClick={() => this.selectRow(item, ixItem)} className={this.state.rowSelected == ixItem ? 'captable__selected-row' : null}>
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

  selectRow(row, position) {
    this.setState({
      rowSelected: position
    });
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
  height: 200,
  headerHeight: 40
}

export { Captable, Columns, Column };