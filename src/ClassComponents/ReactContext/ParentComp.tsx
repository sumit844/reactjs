import React,{createContext} from 'react';
import ChildComp1 from './ChildComp1';


type contextObject={
  val:string,
  setVal?:any
}

let initialObj:contextObject={
  val:''
}
export const weatherContext = createContext(initialObj);

class ParentComp extends React.Component {
  state:any;
  constructor(props:any){
    super(props);

    this.state={
      student:"Rohan"
    }
  }

  addStudentPrefix=()=>{
    this.setState({...this.state, student:this.state.student+"mr"});
  }
  render() {
    return (
      <div>
        <weatherContext.Provider value={{val:this.state.student,
          setVal:this.addStudentPrefix}}>
        <h1>Parent Component</h1>
        <button onClick={this.addStudentPrefix}>Add Suffix to the Name</button>
        <ChildComp1 />
       
        </weatherContext.Provider>
      </div>
    );
  }
}

export default ParentComp;