import React from "react";

const ThreeColumnComponent = ({ data }) => {
  const lengthArray = data.length;
  const column1 = Math.ceil(lengthArray / 3);
  let newArra = [];
  let count = 0;
  for (let i = 0; i < column1; i++) {
    let eachRow = [];
    for (let j = count; j < count + 3; j++) {
      eachRow.push(data[j]);
    }
    count = count + 3;
    newArra.push(eachRow);
  }
  return (
    <>
      <div>ThreeColumnComponent</div>
      {newArra?.map((item,index) => {
          return( 
         <div key={index+"1bc"} style={{ display: "flex", flexDirection: "row" }}>
           { item?.map((item2,index) => {
              return (
                <div key={index+item2?.name?.common} style={{width:"33%"}}>
                  <h1>{item2?.name?.common}</h1>
                  <img src={item2?.flags?.png} alt="flag" width="200px" height="100px" />
                </div>
              );
          })}
          </div>
        )
        })}
    </>
  );
};

export default ThreeColumnComponent;
