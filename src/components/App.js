import React, { Component, useState, useEffect } from 'react';
import Web3 from 'web3'; //Import Web3
import './App.css'; //Import CSS
import IPManager from '../abis/IPManager.json';//import the abi

import Navbar from './Navbar';
import SideNav from './SideNav';
import Main from './Main'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegisterPatent from '../pages/RegisterPatent';
import AssignPatent from '../pages/AssignPatent';
import LicensePatent from '../pages/LicensePatent';
import PatentList from '../pages/PatentList';
import Footer from './Footer';
import Details from '../pages/Details';
import AssignHistory from '../pages/AssignHistory';
import LicenseHistory from '../pages/LicenseHistory';
//import logo from '../logo.png';

class App extends Component {

  account = null;
  renewFee = 1.5;

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.eth_requestAccounts
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    //set result arrys empty
    this.setState({patents:[]})
    this.setState({licenses:[]})
    this.setState({ownerships:[]})

    // Load account
    const accounts = await web3.eth.getAccounts()
    //const licenses = await web3.eth.get

    //console.log(accounts)//console out the accounts
    this.account = accounts[0] //this is for navbar

    //console.log(IPManager.abi)
    //console.log(IPManager.networks[5777].address)

    const networkId = await web3.eth.net.getId()
    const networkData = IPManager.networks[networkId]
    if(networkData) {
      const ipManager = web3.eth.Contract(IPManager.abi, networkData.address)
      this.setState({ ipManager })
      const patentCount = await ipManager.methods.patentCount().call()
      const licenseCount = await ipManager.methods.licenseCount().call()
      const ownershipCount = await ipManager.methods.ownershipCount().call()

      //console.log(patentCount.toString())
      this.setState({ patentCount })
      this.setState({ licenseCount })
      this.setState({ ownershipCount })
      //console.log(ownershipCount);

      // Load patents
      for (var i = 1; i <= patentCount; i++) {
        const patent = await ipManager.methods.patents(i).call()
        this.setState({
          patents: [...this.state.patents, patent]
        })
        //window.alert('Loop Patents.')
      }

      //Load Licenses
      for (var i = 1; i <= licenseCount; i++) {
        const license = await ipManager.methods.licenses(i).call()
        this.setState({
          licenses: [...this.state.licenses, license]
        })
      }

      //load Ownership History
      for (var i = 1; i <= ownershipCount; i++) {
        const ownership = await ipManager.methods.ownerships(i).call()
        this.setState({
          ownerships: [...this.state.ownerships, ownership]
        })
      }

      //console.log(this.state.patentCount)
      this.setState({ loading: false})
    } else {
      window.alert('IPManager contract not deployed to detected network.')
    }
  }


  applyPatent(priceLicense, priceAssign, owner, version, publicationDate, 
          publicationKind, publicationNumber, description, name, inventor, 
          applicationDate, applicationNo, registerdCountry, grantDate, grantNo,
          maxLicenseCount) {
    this.setState({ loading: true })
    const web3 = window.web3
    const date = new Date('May 19, 2000 12:10:52');//Hardcoded
    this.state.ipManager.methods
      .applyForPatent(
        {id:12345, version:0, owner:this.account,  price_assign:web3.utils.toWei(priceAssign, 'Ether'), price_license:web3.utils.toWei(priceLicense, 'Ether'), 
          verifierPayment:web3.utils.toWei('1', 'Ether'), patent:{grant_no:grantNo, grant_date:grantDate, application_no:applicationNo, applicant:this.account, inventor:inventor, 
          publication_number:publicationNumber, registerd_country:registerdCountry, description:description, application_date:applicationDate,
          publication_date:publicationDate, publication_kind:publicationKind, name:name}, max_license_count:maxLicenseCount, licenseCount:0,
          max_renew_count:1, renewCount:0
        })
      .send({ from: this.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
      })
  }


  purchasePatent(id, price) {
    this.setState({ loading: true })
    this.state.ipManager.methods
      .purchasePatent(id).send({ from: this.account, value: price})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  licensePatent(id, license_date, price) {
    let license_exp_date = 0
    this.setState({ loading: true })
    this.state.ipManager.methods
      .licensePatent(id, license_date, license_exp_date).send({ from: this.account, value: price})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  renewPatent(id, renew_date) {
    const web3 = window.web3
    this.setState({ loading: true })
    this.state.ipManager.methods
      .renewPatent(id, renew_date).send({ from: this.account, value: web3.utils.toWei(this.renewFee.toString(), 'Ether')})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      patentCount: 0,
      licenseCount: 0,
      patents: [],
      licenses: [],
      loading: true
    }

    console.log(React.version)

    this.applyPatent = this.applyPatent.bind(this)
    this.loadBlockchainData = this.loadBlockchainData.bind(this)
    //this.patents = this.patents.bind(this)
    this.purchasePatent = this.purchasePatent.bind(this)
    this.licensePatent = this.licensePatent.bind(this)
    this.renewPatent = this.renewPatent.bind(this)
  }

  render() {
    return (
      <>
        <Navbar account={this.account}/>

        <Router>
          <SideNav />
          <Routes>
            <Route path='/' exact element={<PatentList loading={this.state.loading} patentCount={this.state.patentCount} patents={this.state.patents} />}/>
            <Route path='/ApplyPatent' exact element={<RegisterPatent account={this.account} applyPatent={this.applyPatent} countryList={this.countryList} />}/>
            <Route path='/LicensePatent/:id' element={<LicensePatent loading={this.state.loading} patentCount={this.state.patentCount} patents={this.state.patents} licensePatent={this.licensePatent} licenses={this.state.licenses} />}/>
            <Route path='/AssignPatent/:id' element={<AssignPatent loading={this.state.loading} patentCount={this.state.patentCount} patents={this.state.patents} purchasePatent={this.purchasePatent} licenses={this.state.licenses} ownerships={this.state.ownerships} />}/>
            <Route path='/PatentList' element={<PatentList  loading={this.state.loading} patentCount={this.state.patentCount} patents={this.state.patents} />}/>
            <Route path="/Details/:id" element={<Details patents={this.state.patents} patentCount={this.state.patentCount} purchasePatent={this.purchasePatent} account={this.account} renewPatent={this.renewPatent} renewFee={this.renewFee} />} />
            <Route path='/AssignHistory' element={<AssignHistory  loading={this.state.loading} ownershipCount={this.state.ownershipCount} ownerships={this.state.ownerships} />}/>
            <Route path='/LicenseHistory' element={<LicenseHistory  loading={this.state.loading} licenseCount={this.state.licenseCount} licenses={this.state.licenses} />}/>          
          </Routes>
        </Router>
        
        <Footer/>
      </>
    );
  }
}

export default App;
/*  
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Main
                  patents={this.state.patents}
                  createPatent={this.createPatent}
                  //purchaseProduct={this.purchaseProduct}
                  />
              }
            </main>
          </div>
        </div>*/