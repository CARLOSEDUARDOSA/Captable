import React from 'react';

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

export default Columns;