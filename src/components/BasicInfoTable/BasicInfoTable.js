import React from 'react';
import './BasicInfoTable.css';
import AdmissionRate from '../AdmissionRate/AdmissionRate';

//returns the school name from the props.
//props should be data.results.(index)
function SchoolName(props){
    return(
        <p style={{fontWeight: 'bold'}}>{props['school.name']}</p>
    );
}

//returns the school location in "city + " ," + state" format
//props should be data.results.(index)
function SchoolLocation(props){
    return(
        <p style={{fontSize: '90%'}}>
        {props['school.city']}, {props['school.state']}
        </p>
    )
}

//returns the number of latest student count
//props should be data.results.(index)
function StudentSize(props){
    return(
        <p style={{fontSize: '90%', marginTop:0, height: '100%'}}>
        Student size:<br></br>
        <span style={{fontWeight: 'bold', color: "#868fd1"}}>{props['latest.student.size']}</span>
        </p>
    )
}

//returns a table with the basic information about the school
//uses the components: SchoolName, SchoolLocation, StudentSize, AdmissionRate
//props should be data.results.(index)
function BasicInfoTable(props){
    return(
      <table className='BasicInfoTable'>
        <tbody>
          <tr>
            <td colSpan={2}>{SchoolName(props)}</td>
          </tr>
          <tr>
            <td colSpan={2}>{SchoolLocation(props)}</td>
          </tr>
          <tr>
            <td>{StudentSize(props)}</td>
            <td>{AdmissionRate(props)}</td>
          </tr>
        </tbody>
      </table>
    )
  }


  export default BasicInfoTable;