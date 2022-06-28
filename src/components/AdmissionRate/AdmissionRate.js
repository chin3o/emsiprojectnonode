import React from 'react';
import './AdmissionRate.css';
import ProgressBar from './ProgressBar';

//returns the admission rate as percentage and returns a corresponding ProgressBar component
//props should be data.results.(index) 
function AdmissionRate(props){
    var rate = 0;
    //When the admission rate is 0 we return N/A with not filled up bar
    //Some schools from the data returned 0 for admission rate field
    if(props['latest.admissions.admission_rate.overall']){
      rate = Math.round(props['latest.admissions.admission_rate.overall'] * 100);
      return(
        <>
          <p style={{fontSize: '90%', height: '100%'}}>
            Admission rate:<br></br>
            <span style={{fontWeight: 'bold', color: "#868fd1"}}>{rate}%</span> {ProgressBar({barRate:rate})}
          </p>
        </>
      )
    } else {
      rate = 0;
      return(
        <>
          <p style={{fontSize: '90%', height: '100%'}}>
            Admission rate:<br></br>
            <span style={{fontWeight: 'bold', color: "#868fd1"}}>N/A</span> {ProgressBar({barRate:rate})}
          </p>
        </>
      )
    }
    
  }
  
export default AdmissionRate;
  