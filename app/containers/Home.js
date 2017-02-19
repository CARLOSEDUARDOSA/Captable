import React from 'react';
import { Captable, Columns, Column } from '../components/Captable/Captable';
import data from '../data.js';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
          <Captable store={data} height="300">
            <Columns>
              <Column name="Hero" />
              <Column name="Type" />
              <Column name="Level" />
              <Column name="Hero" />
              <Column name="Type" />
              <Column name="Level" />
              <Column name="Hero" />
              <Column name="Type" />
              <Column name="Level" />
            </Columns>
          </Captable>
      </div>
    );
  }
}

export default Home;
