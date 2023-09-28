
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from './Loader'
import { useContext } from "react";
import { transcontxt } from "../context/context";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const {connectwallet,acc,sendtrans,form,setform,load}= useContext(transcontxt)
  return (
  
      <div  className="flex w-full mf:flex-row items-start justify-between md:px-20  px-4">

        <div className="flex py-5 flex-1 justify-start items-start flex-col mf:mr-10">
          <h1  className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Crypto money <br/> Across the world</h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">Explore the crypto world with us buy and sell cryptocurerencies easil and in safety with us</p>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>Reliability</div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>Ethereum</div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>Web 3</div>
            <div className={companyCommonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>Blockchain</div>
          </div>
          <button onClick={()=>{connectwallet()}} className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"> Connect</button>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl  h-40 m-0 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">

            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm "> {acc}</p>
                <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
              </div>

            </div>

          </div>


            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
               <Input placeholder="Address To" name="to" type="text" handleChange={(e)=>{setform((prev)=>({...prev , to:e.target.value}))}} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={(e)=>{setform((prev)=>({...prev , amount:e.target.value}))}} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={(e)=>{setform((prev)=>({...prev , key:e.target.value}))}} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={(e)=>{setform((prev)=>({...prev , message:e.target.value}))}} />
             
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {load
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={()=>{sendtrans()}}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
            </div>

        </div>
      </div>
  )
}

export default Welcome