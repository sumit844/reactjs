import React from 'react';
import ChildComp5 from './ChildComp5';

class ChildComp4 extends React.Component {
  render() {
    return (
      <div>
        <h2>Child Component 4</h2>
        <ChildComp5/>
      </div>
    );
  }
}


export default ChildComp4;