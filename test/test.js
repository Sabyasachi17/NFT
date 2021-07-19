const Color = artifacts.require('./Color.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

  contract('Color', (accounts) => {
  let contract

  before(async () => {
    contract = await Color.deployed()
  })

  describe("deployment", async ()=> {
    it("successfully deployed", async ()=> {
      const address= contract.address 
      assert.notEqual(address,null)
    })
    it("name & Symbol present", async ()=> {
      const name= await contract.name()
      const symbol= await contract.symbol() 
      assert.equal(name,"color")
      assert.equal(symbol,"COLOR")
    })
  })
  describe("token minted", async ()=> {
    it("successfull minting", async ()=> {
      const address= contract.address
      const result= await contract.mint("#FFFF") 
      const totalsupply = await contract.totalSupply()
      assert.equal(totalsupply,1)
    })
  })
  describe("more than 3 tokens minted", async ()=> {
    it("successfull minting", async ()=> {
      const address= contract.address
      await contract.mint("#FFF1")
      await contract.mint("#FFF2")
      await contract.mint("#FFF3") 
      const totalsupply = await contract.totalSupply()
       let result=[]
       let color;

       for(var i=0;i<=3;i++)
       {
        color= await contract.colors(i)
        result.push(color)
       }

       let result2= ['#FFFF','#FFF1','#FFF2','#FFF3']
       assert.equal(result.join(','),result2.join(','))
    })
  })
})