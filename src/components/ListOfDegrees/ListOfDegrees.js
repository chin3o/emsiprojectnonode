import React from 'react';
import './ListOfDegrees.css';
//Counts the programs with their given credential levels
//returns the list of credentials and their counted values.
//props should be data.results.(index)['latest.programs.cip_4_digit']
function ListOfDegrees(props){
    const listOfPrograms = props;
    var credentials = {
      level1:0,
      level2:0,
      level3:0,
      level4:0,
      level5:0,
      level6:0,
      level7:0,
      level8:0
    }
    //counting credential levels
    for(let i=0; i<listOfPrograms.length; i++){
      if (listOfPrograms[i]['credential'].level === 1)
      {credentials.level1 +=1;} 
      else if (listOfPrograms[i]['credential'].level === 2)
      {credentials.level2 +=1;}
      else if (listOfPrograms[i]['credential'].level === 3)
      {credentials.level3 +=1;}
      else if (listOfPrograms[i]['credential'].level === 4)
      {credentials.level4 +=1;}
      else if (listOfPrograms[i]['credential'].level === 5)
      {credentials.level5 +=1;}
      else if (listOfPrograms[i]['credential'].level === 6)
      {credentials.level6 +=1;}
      else if (listOfPrograms[i]['credential'].level === 7)
      {credentials.level7 +=1;}
      else if (listOfPrograms[i]['credential'].level === 8)
      {credentials.level8 +=1;}
    }
    var toRender = []

    //Making sure the credential levels with the value 0 is not being rendered
    if(credentials.level1 !== 0){
       toRender[0] = (<tr><td>Undergraduate Certificate or Diploma: {credentials.level1}</td></tr>)
    }
    if(credentials.level2 !== 0){
       toRender[1] = (<tr><td>Associate's Degree: {credentials.level2}</td></tr>)
    }
    if(credentials.level3 !== 0){
       toRender[2] = (<tr><td>Post-baccalaureate Certificate: {credentials.level3}</td></tr>)
    }
    if(credentials.level4 !== 0){
       toRender[3] = (<tr><td>Bachelor’s Degree: {credentials.level4}</td></tr>)
    }
    if(credentials.level5 !== 0){
       toRender[4] = (<tr><td>Master's Degree: {credentials.level5}</td></tr>)
    }
    if(credentials.level6 !== 0){
       toRender[5] = (<tr><td>Doctoral Degree: {credentials.level6}</td></tr>)
    }
    if(credentials.level7 !== 0){
       toRender[6] = (<tr><td>First Professional Degree: {credentials.level7}</td></tr>)
    }
    if(credentials.level8 !== 0){
       toRender[7] = (<tr><td>Graduate/Professional Certificate: {credentials.level8}</td></tr>)
    }


    return(
      <table className='ListOfDegrees'>
        <tbody>
          {toRender}
        </tbody>
      </table>
    )
  }
export default ListOfDegrees;  