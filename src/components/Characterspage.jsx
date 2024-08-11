import { useContext } from 'react'
import { DataApi } from '../data/contextApi'
const Characterspage = () => {
const { itemvalue } = useContext(DataApi);
  return(
    <div className="w-[100vw] flex flex-wrap overflow-y-auto">


      {itemvalue.characterscomponents.map((item) => (
          <div className="w-[85vw] rounded-[10px] text-center bg-gray-900 ml-[7.5vw] mt-12 text-center mb-12 pb-6 ">
    <div className="w-[30vw] h-[30vw] rounded-full overflow-hidden flex items-center justify-center m-auto mt-8">
  <img src={item.imgurl} alt="Image Description" className="w-[100vw] h-full object-cover" />
</div>
      <h1 className="font-sans font-[500] mt-4">{item.name}</h1>

      <p className="font-sans mt-6 w-[80%] text-left ml-[10%]">{item.about}</p>
    </div>
      ))}
      
    </div>
  );
}
export default Characterspage;