import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { Captable, Columns, Column } from './Captable/Captable';

const data = [{ Hero: 'Mirana', Type: 'Agility', Level: '15' }, { Hero: 'Disruptor', Type: 'Intelligence', Level: '12' }, { Hero: 'Dragon Knight', Type: 'Agility', Level: '16' }, { Hero: 'Sniper', Type: 'Agility', Level: '17' }, { Hero: 'Pudge', Type: 'Strength', Level: '16' }];

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages} />
        <div className="row">
          <div className="col-sm-12">
            <div className="panel">
              <div className="panel-body">
                <Captable store={data}>
                  <Columns>
                    <Column name="Hero" />
                    <Column name="Type" />
                    <Column name="Level" />
                  </Columns>
                </Captable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
