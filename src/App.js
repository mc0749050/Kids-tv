import './App.css';
import Homepage from './components/Homepage';
import Mainpage from './components/Mainpage';
import Loginpage from './components/Loginpage';
import Cartoonpage from './components/Cartoonpage';
import { useContext, useEffect, useState } from 'react';
import { DataApi } from './data/contextApi';

const App = () => {
  const { cartoonpagestatus, pagerout } = useContext(DataApi);
const [page, setPage] = useState(<Homepage />)

  useEffect(() => {
    if (pagerout === "Mainpage") {
      setPage(<Mainpage />)
    }
    else if (pagerout === "Loginpage") {
      setPage(<Loginpage />)
    }
    else if(pagerout === "Homepage"){
      setPage(<Homepage />)
    }
    else if(pagerout === "Cartoonpage"){
      setPage(<Cartoonpage />)
    }
  }, [pagerout])
  return (
    <>
      
      {page}
    </>
  );
  }


export default App;