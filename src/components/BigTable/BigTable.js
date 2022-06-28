import React from 'react';
import './BigTable.css';
import SchoolCard from '../SchoolCard/SchoolCard';
//returns a whole table of SchoolCards where each row only consists of 3 SchoolCards
//props should be data.results (an array of schools)
function BigTable(props){
    var allSchools = props;
    var toRender =[];

    //Putting every school in a nested array where the outer array has elements of 3 schools.
    for(var i=0;i<Math.ceil(allSchools.length/3);i++){
      //to build the last row of the table
      //have to make sure no 'undefined' value is being passed into toRender
      //which would cause multiple errors down the data flow
      if(i*3 === allSchools.length-1){
        var lastRow = [];

        if(allSchools[i*3]) {
          lastRow = <td>{SchoolCard(allSchools[i*3])}</td>;
        }
        if(allSchools[i*3+1]) {
          lastRow.concat(<td>{SchoolCard(allSchools[i*3+1])}</td>);
        }
        if(allSchools[i*3+2]) {
          lastRow.concat(<td>{SchoolCard(allSchools[i*3+2])}</td>);
        }
        
        toRender[i] = <tr>{lastRow}</tr>;
        
      } else {
      toRender[i]=<tr>{[
        <td>{SchoolCard(allSchools[i*3])}</td>,
        <td>{SchoolCard(allSchools[i*3+1])}</td>,
        <td>{SchoolCard(allSchools[i*3+2])}</td>
      ]}</tr>;
      }
    }
  
    return(
      <table className='BigTable'>
        <tbody>{toRender}</tbody>
      </table>
    );
  }

export default BigTable;