import { useContext, useState, useEffect} from 'react'
import { IoExitOutline } from "react-icons/io5";
import { DataApi } from '../data/contextApi'
import Imagespage from './Imagespage';
import Episodespage from './Episodespage'
import Characterspage from './Characterspage'
const Cartoonpage = () => {
  const { itemvalue, cartoonpagestatus, setPagerout } = useContext(DataApi);

  // component states

  const [component, setComponent] = useState("Images");
const [page, setPage] = useState(<Imagespage />);

  useEffect(() => {
    if(component === "Episodes") {
   setPage(<Episodespage />)
  }
  else if(component === "Characters") {
    setPage(<Characterspage />)
  }
  else {
    setPage(<Imagespage />)
  }
  
  }, [component])
  
  return(
    <div className="w-[100vw] h-[100vh] bg-black fixed overflow-y-auto">
      <IoExitOutline onClick={() => setPagerout("Mainpage")} className="fixed top-[20px] right-[20px] text-white z-40 text-[35px]" />
      <div className="fixed w-[100vw] top-0 left-0 bg-black">
      {cartoonpagestatus ? <img className="w-[100vw]" src={itemvalue.coverimg}/> : null }


  <div className="w-[90vw] ml-[5vw] font-sans flex justify-around text-white mt-8">
  <p className={component === "Images" ? 'text-[#ff3131] font-[600]' : null} onClick={() => setComponent("Images")}>Images</p>
  <p className={component === "Episodes" ? 'text-[#ff3131] font-[600]' : null} onClick={() => setComponent("Episodes")}>Episodes</p>
  <p className={component === "Characters" ? 'text-[#ff3131] font-[600]' : null} onClick={() => setComponent("Characters")}>Characters</p>
  </div>
      <div className="w-[75vw] h-[0.5px] ml-[12.5vw] mt-6 bg-white"></div>
      </div>

      <div className="mt-[40vh] text-white">
        {page}
      </div>


    </div>
  );
  
}
export default Cartoonpage;