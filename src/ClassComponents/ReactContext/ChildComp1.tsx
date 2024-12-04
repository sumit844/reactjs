import React from 'react';
import ChildComp2 from './ChildComp2';
class ChildComp1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Child Component 1</h2>
        <ChildComp2 />
      </div>
    );
  }
}


export default ChildComp1;