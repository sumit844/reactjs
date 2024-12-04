import React from 'react';
import ChildComp3 from './ChildComp3';
class ChildComp2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Child Component 2</h2>
        <ChildComp3 />
      </div>
    );
  }
}


export default ChildComp2;