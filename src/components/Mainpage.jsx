import { IoExitOutline } from "react-icons/io5";
import { useContext } from 'react';
import { DataApi } from '../data/contextApi';
import loader from '../assets/loader.gif'
const Mainpage = () => {

const {data, loading, error, setCartoonpagestatus, setItemvalue, setPagerout} = useContext(DataApi);

  
const handleClicks = (item) => {
  setItemvalue(item);
  setCartoonpagestatus(true);
 setPagerout("Cartoonpage")

}
  
  if (loading) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black "><img src={loader} /></div>
    );
  }
  if (error) {
    return <div>{error}</div>
  } 
  
  return(
    <div className="w-[100vw] h-[100vh] bg-black font-sans fixed overflow-x-auto top-0 left-0 text-center">
      <div className="fixed bg-black text-cenetr w-[100vw]">
    <IoExitOutline onClick={() => setPagerout("Homepage")} className="text-[35px] text-white absolute top-[20px] right-[20px]"/>
      <input type="text" placeholder="search..." className="w-[86vw] px-[4vw] ml-[3vw] py-[3.5vw] mt-[65px] rounded-[10px] border-[1px] border-white bg-[#161616] text-white" />
    </div>

    <div className="w-[100vw] mt-[200px]">
      {data.cartoonObj.map((item) => (  <img onClick={() => handleClicks(item)} className="w-[90vw] ml-[5vw] border-[1px] border-white rounded-[15px] mt-16 mb-[20px]" src={item.coverimg} />))}
   </div>


      
    </div>
  );
}
export default Mainpage;