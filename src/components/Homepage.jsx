import bg from '../assets/bg.jpg';
import logo  from '../assets/logo.png'
import { useContext, useRef } from 'react';
import { DataApi } from '../data/contextApi'
const Homepage = () => {
const { setPagerout, islogin, setIslogin } = useContext(DataApi);
  const inputRefemail = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    const emailvalue = inputRefemail.current.value;
    inputRefemail.current.value = "";
    setTimeout(() => {
      setPagerout('Mainpage')
    }, 600)
  }


  return(
    <div className="bg-black w-[100vw] h-[100vh]">
      <div>
     <img className="w-[100vw]" src={bg} />
      <div className="shadow-inner-custom"></div>
      <img className="w-[65vw] absolute top-[-60px] left-[-60px]" src={logo} />

        {islogin ? <button className="absolute top-[30px] right-[25px] font-sans font-[600] py-[5px]  px-6 bg-[#ff3131] text-white rounded-[5px] active:bg-[#d40000] " onClick={() => setIslogin(false)}>Sign out</button> : <button className="absolute top-[30px] right-[25px] font-sans font-[600] py-[5px]  px-6 bg-[#ff3131] text-white rounded-[5px] active:bg-[#d40000] " onClick={() => setPagerout("Loginpage")}>Sign in</button>}
        
      </div>

      <div className="font-sans font-[500] text-[30px] text-center w-[100vw] text-white absolute top-[20vh]"><p>Watch your Favourite Cartoon's Episodes and more</p></div>

     <form  onSubmit={handleSubmit}>
      <div className="absolute top-[45vh] w-[100vw] text-center">
      <input className="w-[90vw] ml-[2vw] px-[2vw] py-[4vw] bg-[rgba(0,0,0,0.5)] rounded-[7px] border-[1px] border-white text-[rgba(255,255,255,0.9)] font-sans" type="email" placeholder="email@gmail.com" required ref={inputRefemail}/>
        <br />
        <button className="w-[40vw]  py-[3vw] bg-[#ff3131] font-sans font-[500] text-white active:bg-[#d40000] mt-6 rounded-[5px]">Get Started</button>
      </div>
     </form>

      <div>
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="w-[80vw] mt-[0px] ml-[10vw]"/>
        <img  className="w-[60vw] ml-[20vw] mt-[-171px]" src="https://getwallpapers.com/wallpaper/full/8/5/0/819743-chhota-bheem-wallpapers-1920x1080-phone.jpg"/>
      </div>
    </div>
  );
}
export default Homepage;