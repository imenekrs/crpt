import {abi,contractadrs} from '../utils/cts.js'
import React,{useContext,useState,useEffect, createContext} from 'react'
import {ethers} from '../../../../hardhat fundme/frontend/ethers.min.js'


export const transcontxt = createContext()
const {ethereum} = window

const getethereumcontract = ()=>{
const provider = new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractadrs,abi,signer)
return contract

}

  

export const Transprovider = ({children})=>{
    
  const[acc ,Setacc]=useState('')
  const[load ,Setload]=useState(false)
  const[count ,Setcount]=useState(0)
  const[ttt ,Setttt]=useState([])

  const[form,setform] = useState({to:'',amount:'',keyword:'',message:''})

  const checkwallet = async ()=>{
    try {
      if(!ethereum){console.log('install metamask') 
    return}
      const accs = await ethereum.request({method:'eth_accounts'})
      if(accs.length){Setacc(accs[0])}
    } catch (error) {
      console.log(error)
      
    }
  }

  
  const connectwallet = async ()=>{
    try {
      if(!ethereum){console.log('no metamask')
    return}
  const ac = await ethereum.request({method:'eth_requestAccounts'})
     Setacc(ac[0])
     
    } catch (error) {
      console.log(error)

    }
  }

  const getalltrans = async()=>{
    try {

      const ctrc =  getethereumcontract()
      const txs = await ctrc.getalltrans()
     const tt = txs.map((transaction)=>({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / (10 ** 18)
     }
    
    ))
     Setttt(tt)
    } catch (error) {
      console.log(error)
    }
  }
  const transexist = async()=>{}

   const sendtrans = async()=>{
    try {
      if(!ethereum){console.log('no metamask')
      return}
    const tx = await ethereum.request( { method: "eth_sendTransaction",
    params: [{
      from: acc,
      to: form.to,
      gas: "0x5208",
      value: ethers.utils.parseEther( form.amount)._hex,}]})
console.log('ur tx ',tx)

     const cntrc = getethereumcontract()
     const gg = await cntrc.addtoblock(form.to,ethers.utils.parseEther( form.amount)._hex,form.keyword,form.message)
    Setload(true)
    await gg.wait()
    Setload(false)
      
      console.log(gg)
      
    } catch (error) {
      console.log(error)
    }
   }
 useEffect(()=>{
  checkwallet()
  getalltrans()
 },[])
 
  return(
    <transcontxt.Provider value={{connectwallet,acc , sendtrans,form,setform,load,ttt}}>
        {children}
    </transcontxt.Provider>
  )
}