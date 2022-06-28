import React from 'react';
import './AdmissionRate.css';

//returns a progress bar that is filled using props.rate as the percentage filled.
  //props should have an element 'barRate' that is 0<100
  //uses to elements, outer element is the behind bar
  //inner element will cover the behind bar to show how much of behind bar is filled.
  function ProgressBar(props){
    const progress = props.barRate;
    const filledBar = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: '#add8e6',
      borderRadius: '5%',
      textAlign: 'right'
    }
    return(
      <div className='behindBar'>
        <div style={filledBar}>
        </div>
      </div>
    )
  }

export default ProgressBar;