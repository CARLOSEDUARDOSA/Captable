import React from 'react';

class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderByAsc: true
        };
    }

    render() {
        return (
            <th className="captable__column" onClick={() => this.changeOrder()}>
                {this.props.name}
                <i className={this.state.orderByAsc ? "fa fa-caret-up" : "fa fa-caret-down"} aria-hidden="true"></i>
            </th>
        );
    }

    changeOrder() {
        this.setState({
            orderByAsc: this.state.orderByAsc ? false : true
        });
    }
}

Column.defaultProps = {
    name: 'Nome indefinido',
    width: '180px'
};

export default Column;