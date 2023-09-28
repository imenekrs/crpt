const {ethers} = require('hardhat')
const main = async ()=>{
  const a = await ethers.getContractFactory('Transaction')
  const b = await a.deploy()
  console.log(b)

}


const runmain = async()=>{
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

}

runmain()