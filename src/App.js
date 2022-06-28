import React, {useState, useEffect} from 'react';
import './App.css';
import BigTable from './components/BigTable/BigTable';
const DATAURL = ("https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential.level,latest.programs.cip_4_digit.title&api_key=5Qca9aYnpXSaeogjXxqgDsx2g7vymw4ptkdynZ1V");

//Calls the API using APIURL and returns the json format of the data.
function GetData() {
  //using hooks to fetch the data and store it into state
  const [data,setData] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetch(DATAURL);
      const jsonData = await fetchedData.json();
      setData(jsonData);
    }
    fetchData();
  }, []);
  return data;
}

//The main component that calls the data and passes it down the data flow
function App() {
  const data = GetData();

  //Checking if the data is being present before passing it down the data flow
  //Accessing array elements when data is 'undefined' will give errors in multiple child components
  if (data) {
    return (
      <>{BigTable(data.results)}</>
    )
  } else {
    return(<></>)
  }
  
  
}

export default App;
