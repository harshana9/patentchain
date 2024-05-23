const IPManager = artifacts.require('./IPManager.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('IPManager', ([deployer, owner]) => {
  let ipmanager

  before(async () => {
    ipmanager = await IPManager.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await ipmanager.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await ipmanager.title()
      assert.equal(name, 'IP Manager')
    })
  })

  describe('patents', async () => {
    let result, patentCount
    const date = new Date('May 19, 2000 12:10:52');

    before(async () => {

      result = await ipmanager.createPatent(
        {id:12345, version:0, owner:owner,  price_assign:0, price_license:web3.utils.toWei('1', 'Ether'), 
          patent:{grant_no:10001, grant_date:date.getTime(), application_no:101, applicant:'GSK', inventor:'S K Smith', 
          publication_number:'PUB/ST/2303', registerd_country:'England', description:'Test Description', application_date:date.getTime(),
          publication_date:date.getTime(), publication_kind:'A', name:'TestPatent'}
        });
      patentCount = await ipmanager.patentCount()
    })

    it('creates patents', async () => {
      // SUCCESS
      assert.equal(patentCount, 1)
      const event = result.logs[0].args
      assert.equal(event.patentContainer.id, patentCount, 'id is correct')
      assert.equal(event.patentContainer.patent.name, 'TestPatent', 'name is correct')
      assert.equal(event.patentContainer.price_license, '1000000000000000000', 'price is correct')
      assert.equal(event.patentContainer.owner, owner, 'owner is correct')

      /*// FAILURE: Product must have a name
      await await ipmanager.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
      // FAILURE: Product must have a price
      await await ipmanager.createProduct('TestPatent', 0, { from: seller }).should.be.rejected;*/
    })

    /*it('lists patents', async () => {
      const patent = await ipmanager.patents(0)
      assert.equal(patent.patentContainer.id, patentCount, 1)
      assert.equal(patent.patentContainer.patent.name, 'TestPatent', 'name is correct')
      assert.equal(patent.patentContainer.price_license, '1000000000000000000', 'price is correct')
      assert.equal(patent.patentContainer.owner, owner, 'owner is correct')
    })*/

    /*it('sells patents', async () => {
      // Track the seller balance before purchase
      let oldSellerBalance
      oldSellerBalance = await web3.eth.getBalance(seller)
      oldSellerBalance = new web3.utils.BN(oldSellerBalance)

      // SUCCESS: Buyer makes purchase
      result = await ipmanager.purchasePatent(patentCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')})

      // Check logs
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), patentCount.toNumber(), 'id is correct')
      assert.equal(event.name, 'TestPatent', 'name is correct')
      assert.equal(event.price, '1000000000000000000', 'price is correct')
      assert.equal(event.owner, buyer, 'owner is correct')
      assert.equal(event.purchased, true, 'purchased is correct')

      // Check that seller received funds
      let newSellerBalance
      newSellerBalance = await web3.eth.getBalance(seller)
      newSellerBalance = new web3.utils.BN(newSellerBalance)

      let price
      price = web3.utils.toWei('1', 'Ether')
      price = new web3.utils.BN(price)

      const exepectedBalance = oldSellerBalance.add(price)

      assert.equal(newSellerBalance.toString(), exepectedBalance.toString())

      // FAILURE: Tries to buy a patent that does not exist, i.e., patent must have valid id
      await ipmanager.purchasePatent(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;      // FAILURE: Buyer tries to buy without enough ether
      // FAILURE: Buyer tries to buy without enough ether
      await ipmanager.purchasePatent(patentCount, { from: buyer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
      // FAILURE: Deployer tries to buy the patent, i.e., patent can't be purchased twice
      await ipmanager.purchasePatent(patentCount, { from: deployer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
      // FAILURE: Buyer tries to buy again, i.e., buyer can't be the seller
      await ipmanager.purchasePatent(patentCount, { from: buyer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
    })
*/
  })
})