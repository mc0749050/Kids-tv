import { createContext, useState, useEffect } from 'react';

export const DataApi = createContext();
const DataProvider = ({children}) => {

// Api data fatching 
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  
useEffect(() => {
  fetch('https://raw.githubusercontent.com/mc0749050/Timefortv-Api/main/data.json')
  .then((response) => {
    if(!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json();
  })
  .then((data) => {
    setData(data);
    setLoading(false);
  })
  .catch((error) => {
    setError(error)
    setLoading(false);
  });
}, [])

  // cartoon page status
  const [cartoonpagestatus, setCartoonpagestatus] = useState(false);

  // item select state

  const [itemvalue, setItemvalue] = useState();

  // for main pages 

  const [pagerout, setPagerout] = useState("Homepage");

  
  // user account 
  const [email, setEmail] = useState(() => {
    // Get the initial state from local storage if it exists
    const savedState = localStorage.getItem('myState');
    return savedState ? JSON.parse(savedState) : ''; // Provide a default value if nothing is in local storage
  });

  useEffect(() => {
    // Save the state to local storage whenever it changes
    localStorage.setItem('myState', JSON.stringify(email));
  }, [email]);


  const [password, setPassword] = useState(() => {
    // Get the initial state from local storage if it exists
    const savedStates = localStorage.getItem('myStates');
    return savedStates ? JSON.parse(savedStates) : ''; // Provide a default value if nothing is in local storage
  });

  useEffect(() => {
    // Save the state to local storage whenever it changes
    localStorage.setItem('myStates', JSON.stringify(password));
  }, [password]);
  
  // is login or log out 
  const [islogin, setIslogin] = useState(() => {
    const savedData = localStorage.getItem('myData');
    return savedData ? JSON.parse(savedData) : false  });

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(islogin))
  }, [islogin])
  return(
    <DataApi.Provider value={{data, loading, error, cartoonpagestatus, setCartoonpagestatus, itemvalue, setItemvalue, pagerout, setPagerout, email, setEmail, password, setPassword, islogin, setIslogin}}>
      {children}
    </DataApi.Provider>
  )
}
export default DataProvider;