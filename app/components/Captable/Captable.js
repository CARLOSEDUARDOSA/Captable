import React from 'react';

class Captable extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        {this.props.children}
        <tbody>
          {this.props.store.map((data, index) => {
            return (
              <tr key={index}>
                <td>
                  {data.Hero}
                </td>
                <td>
                  {data.Type}
                </td>
                <td>
                  {data.Level}
                </td>
              </tr>
            )
          })}
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