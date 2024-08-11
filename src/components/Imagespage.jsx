import { useContext } from 'react';
import { DataApi } from '../data/contextApi';
const Imagespage = () => {
const {itemvalue} = useContext(DataApi);
  return(
    <div className="w-[100vw] flex overflow-y-auto flex-wrap">

      {itemvalue.imagescomponent.map((url) => (<img className="w-[85vw] ml-[7.5vw] mt-8 shadow shadow-white rounded-[10px] mb-[10px]" src={url.img} onClick={() => {
      const imageUrl = url.img  // URL of the image to download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg'; // The name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
      }} />))}
      
    </div>
  );
}
export default Imagespage;