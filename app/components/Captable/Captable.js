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
          <tbody className="captable__tbody" style={{ height: this.props.height - this.props.headerHeight + 'px' }}>
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
  constructor(props) {
    super(props);

    this.state = {
      theaderWidth: 0
    }
  }

  componentDidMount() {
    this.theaderWidthFix();
  }

  componentDidMount() {
    window.addEventListener("resize", this.theaderWidthFix());
  }
    
  componentWillUnmount() {
    window.removeEventListener("resize", this.theaderWidthFix());
  }

  //Método para corrigir a largura do header
  //Apenas momentâneo pois temos que estudar a responsividade da tabela.
  theaderWidthFix() {
    let theader = document.getElementsByTagName("theader");
    let tbody = document.getElementsByTagName("tbody");

    //Descobrindo o valor da largura do scroll no tbody
    let scrollbarWidth = tbody[0].offsetWidth - tbody[0].clientWidth;
    
    this.setState({
      theaderWidth: tbody[0].offsetWidth - scrollbarWidth
    });
  }

  render() { 
    return (
      <thead style={{width: this.state.theaderWidth}}>
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