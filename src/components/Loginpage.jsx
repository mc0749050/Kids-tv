import Logo from '../assets/logo.png';
import {useContext, useRef, useState} from 'react';
import {DataApi} from '../data/contextApi'
import emailjs from 'emailjs-com';
const Loginpage = () => {

  const {email, setEmail, password, setPassword, setPagerout, setIslogin } = useContext(DataApi)

const inputRefemail = useRef(null);

const inputRefpass = useRef(null);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailvalue = inputRefemail.current.value;
    const passvalue = inputRefpass.current.value;
    setEmail(emailvalue);
    setPassword(passvalue);
    inputRefemail.current.value = "";
    inputRefpass.current.value = "";
    sendMail(emailvalue);
    setTimeout(() => {
      setPagerout('Homepage')
      setIslogin(true);
    }, 600)
  }


  //Email send function
  const [to, setTo] = useState(email);

  const sendMail = async (newusername) => {
    try {
      await emailjs.send(
        "service_c3ony9i", // Service ID
        "template_v04qshe", // Template ID
        {
          to,
          name: newusername,
        },
        "uQ4vmRtvI_xZz6NDc", // User ID
      );
      console.log("Email sent successfully!");
    } catch (error) {
      console.log("Email sent failed!");
    }
  };

  
  return(
    <div className="bg-black w-[100vw] fixed top-0 h-[100vh] left-0">
    <div className="w-[90vw] ml-[5vw] font-sans text-center">
    <h1 className="font-[500] text-white text-[35px] mt-[100px]">Sign in</h1>
      <form onSubmit={handleSubmit}>
      <input className="w-[86vw] py-[14px]  px-[4vw]  bg-[#262626] border-[1px] border-white rounded-[7px] mt-12 text-white" type="email" placeholder="abc123@gmail.com" required ref={inputRefemail} />
      <input className="w-[86vw] py-[14px] px-[4vw] bg-[#262626] border-[1px] border-white rounded-[7px] mt-12 text-white" type="password"
placeholder="Password" required
        ref={inputRefpass} />
      <button className="w-[86vw] px-[4vw] rounded-[5px] py-[12px] bg-[#ff3131] text-white font-sans font-[500] active:bg-[#d40000] mt-8">Sign in</button>
      </form>
        </div>

      <img src={Logo} className="w-[60vw] m-auto" alt="loading.." />
    </div>
  );
}
export default Loginpage;