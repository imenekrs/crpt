import React from 'react'
import logo from'../../images/g.png'

const Listitem = ({title,classprops})=>{
  return(
    <li className={'mx-4 cursor-pointer text-white'} > {title}</li>
  )
}

const Navbar = () => {
  return (
    <div className='w-full flex h-24 md:justify-center justify-between items-center p-4'>
      <div className='"md:flex-[0.5] flex-initial justify-center items-center w-1/4'>
        <img src={logo} className="w-32 cursor-pointer h-32 flex justify-center" />
      </div>
      <ul className='"text-white md:flex  list-none flex-row justify-between items-center flex-end w-3/4'>
       { ['Market','Exchange','Tuto','Wallets'].map((item,i)=>(
        <Listitem key={i} title={item}/>
       
       ))} <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
        Login
      </li>
      </ul>
    </div>
  )
}

export default Navbar