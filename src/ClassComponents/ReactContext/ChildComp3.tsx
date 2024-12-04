import React from 'react';
import ChildComp4 from './ChildComp4';
import { weatherContext } from './ParentComp';

class ChildComp3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Child Component 3</h2>
        <weatherContext.Consumer>
            
            {(temp) => {
                return (
                <>
                <h3>{temp.val}</h3>
             <button onClick={temp.setVal}>Add Prefix in the child component</button> 
             </>
              )
            }}  
        </weatherContext.Consumer>
        <ChildComp4 />
      </div>
    );
  }
}


export default ChildComp3;