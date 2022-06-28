import React from 'react';
import './SchoolCard.css';
import BasicInfoTable from '../BasicInfoTable/BasicInfoTable';
import ListOfDegrees from '../ListOfDegrees/ListOfDegrees';
import logo from './university.svg';
//returns the whole SchoolCard which includes: logo, BasicInfoTable, ListOfDegrees
//props should be data.results.(index)
function SchoolCard(props){
    return(
      <div className='SchoolCard'>
        <table>
          <tbody>
            <tr>
              <td className='logoCell'><img src={logo} className="App-logo" alt="logo" /></td>
              <td className='infoCell'>{BasicInfoTable(props)}<br id='dividingLine'></br></td>
            </tr>
          </tbody>
        </table>
        <hr></hr>
        {ListOfDegrees(props['latest.programs.cip_4_digit'])}
      </div>
    )
  }

export default SchoolCard;