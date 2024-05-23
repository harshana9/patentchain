import React, { useState, useEffect, Component } from 'react'

/*Need to install this 
  npm install react-widgets
before this import*/
import Combobox from "react-widgets/Combobox";

export class RegisterPatent extends Component {
 
  render() {
    var cl = [];
    cl = this.props.countryList;
    //console.log(cl);
    return (
      <div id="content">
      <form onSubmit={(event) => {
        event.preventDefault()
        const grantNo = this.grantNo.value
        //const grantDate_input = Date.parse(this.grantDate.value)
        const grantDate = Math.floor(new Date(this.grantDate.value).getTime() / 1000)
        const registerdCountry = this.registerdCountry.value
        const applicationNo = this.applicationNo.value
        const applicationDate = Math.floor(new Date(this.applicationDate.value).getTime() / 1000)
        const inventor = this.inventor.value
        const name = this.name.value
        const description = this.description.value
        const publicationNumber = this.publicationNumber.value
        const publicationKind = this.publicationKind.value
        const publicationDate = Math.floor(new Date(this.publicationDate.value).getTime() / 1000)
        const version = this.version.value
        const owner = this.owner.value
        //const priceAssign = window.web3.utils.toWei(this.priceAssign.value.toString(), 'ether')
        //const priceLicense = window.web3.utils.toWei(this.priceLicense.value.toString(), 'ether')
        const priceAssign = this.priceAssign.value.toString();
        const priceLicense = this.priceLicense.value.toString();
        const maxLicenseCount = this.maxLicenseCount.value;
        console.log(priceLicense)

        this.props.applyPatent(priceLicense, priceAssign, owner, version, publicationDate, 
          publicationKind, publicationNumber, description, name, inventor, 
          applicationDate, applicationNo, registerdCountry, grantDate, grantNo, maxLicenseCount)
        //console.log(grantNo)
        //const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
        //this.props.createPatent(name, price)
      }}>

      <div className="d-flex flex-column" id="content-wrapper" style={{ paddingLeft: '250px', paddingTop: '50px'}}>
        <div id="content">
          <div className="container-fluid" style={{ marginTop: '5px' }}>
            <h5 className="fw-bold text-dark mb-4">Register a Patent</h5>
            <div className="row mb-3">
              <div className="col-lg-8">
                <div className="card shadow mb-3">
                  <div className="card-header" style={{ padding: '6px', paddingTop: '6px', paddingBottom: '6px' }}>
                    <p className="text-dark m-0 fw-bold">Patent Data</p>
                  </div>
                  <div className="card-body">
                    <div className="row row-cols-4">
                      <div className="col-sm-4 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                        <div className="mb-3">
                          <label className="form-label fw-light" htmlFor="grant_no" style={{ marginBottom: '2px', fontSize: '14px' }}>
                            <strong>Grant No</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="grant_no" 
                            ref={(input) => { this.grantNo = input }} 
                            style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                          />
                        </div>
                      </div>
                      <div class="col-sm-4 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                        <div class="mb-3">
                          <label class="form-label fw-light" for="grant_date" style={{ marginBottom: '2px', fontSize: '14px' }}>
                            <strong>Grant Date</strong>
                          </label>
                          <input 
                            class="form-control" 
                            type="date" 
                            name="grant_date" 
                            ref={(input) => { this.grantDate = input }} 
                            style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                          />
                        </div>
                        </div>
                          <div class="col-sm-4 col-sm-2 "style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                            <div class="mb-3">
                              <label class="form-label fw-light" for="registerd_country" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                <strong>Country</strong>
                              </label>
                              <input 
                                class="form-control" 
                                type="text" 
                                name="registerd_country" 
                                ref={(input) => { this.registerdCountry = input }} 
                                style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row row-cols-4">
                          <div class="col-sm-4 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                            <div class="mb-3">
                              <label class="form-label fw-light" for="application_no" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                <strong>Application No</strong>
                              </label>
                              <input 
                                class="form-control" 
                                type="text" 
                                name="application_no"
                                ref={(input) => { this.applicationNo = input }}  
                                style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                              />
                            </div>
                            </div>
                              <div class="col-sm-4 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                <div class="mb-3">
                                  <label class="form-label fw-light" for="application_date" style={{ marginBottom: '2px', fontSize: '14px' }} >
                                    <strong>Application Date</strong>
                                  </label>
                                  <input 
                                    class="form-control" 
                                    type="date" 
                                    name="application_date" 
                                    ref={(input) => { this.applicationDate = input }} 
                                    style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                  />
                                </div>
                              </div>
                            <div class="col-sm-4 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                              <div class="mb-3">
                                <label class="form-label fw-light" for="applicant" style={{ marginBottom: '2px', fontSize: '14px' }} >
                                  <strong>Applicant</strong>
                                </label>
                                <input 
                                  class="form-control" 
                                  type="text" 
                                  name="applicant" 
                                  ref={(input) => { this.applicant = input }} 
                                  style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                />
                                </div>
                              </div>
                            </div>
                            <div class="row row-cols-4">
                              <div class="col-sm-6 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                <div class="mb-3">
                                  <label class="form-label fw-light" for="inventor" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                    <strong>Inventor</strong>
                                  </label>
                                  <input 
                                    class="form-control" 
                                    type="text" 
                                    name="inventor" 
                                    ref={(input) => { this.inventor = input }} 
                                    style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row row-cols-4">
                              <div class="col-sm-6 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                <div class="mb-3">
                                  <label class="form-label fw-light" for="name" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                    <strong>Name</strong>
                                  </label>
                                  <input 
                                    class="form-control" 
                                    type="text" 
                                    name="name" 
                                    ref={(input) => { this.name = input }} 
                                    style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                  />
                                </div>
                                </div>
                                  </div>
                                    <div class="row row-cols-4">
                                      <div class="col-sm-12 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                        <div class="mb-3">
                                          <label class="form-label fw-light" for="description" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                            <strong>Description</strong>
                                          </label>
                                          <textarea 
                                            class="form-control" 
                                            name="description" 
                                            ref={(input) => { this.description = input }} 
                                            style={{ fontSize: '14px', paddingTop: '1px', paddingBottom: '1px', borderRadius: '2px' }}
                                          >
                                          </textarea>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row row-cols-4">
                                      <div class="col-sm-4 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                        <div class="mb-3">
                                          <label class="form-label fw-light" for="publication_number" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                            <strong>Publication No</strong>
                                          </label>
                                          <input 
                                            class="form-control" 
                                            type="text" 
                                            name="publication_number" 
                                            ref={(input) => { this.publicationNumber = input }} 
                                            style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                          />
                                          </div>
                                          </div>
                                            <div class="col-sm-4 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                              <div class="mb-3">
                                                <label class="form-label fw-light" for="publication_kind" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                  <strong>Publication Kind</strong>
                                                </label>
                                                <input 
                                                  class="form-control" 
                                                  type="text" 
                                                  name="publication_kind" 
                                                  ref={(input) => { this.publicationKind = input }} 
                                                  style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                />
                                              </div>
                                            </div>
                                            <div class="col-sm-4 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                              <div class="mb-3">
                                                <label class="form-label fw-light" for="publication_date" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                  <strong>Publication Date</strong>
                                                </label>
                                                <input 
                                                  class="form-control" 
                                                  type="date" 
                                                  name="publication_date" 
                                                  ref={(input) => { this.publicationDate = input }} 
                                                  style={{ height: '27.6px', paddingTop: '1px', paddingBottom: '1px', borderRadius: '2px', fontSize: '14px' }}
                                                />
                                                </div>
                                              </div>
                                          </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-4">
                              <div class="card shadow mb-3">
                                  <div class="card-header" style={{ padding: '6px', paddingTop: '6px', paddingBottom: '6px' }}>
                                      <p class="text-dark m-0 fw-bold">System Parameters&nbsp;</p>
                                  </div>
                                  <div class="card-body">
                                          <div class="row row-cols-4">
                                              <div class="col-sm-12 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                                  <div class="mb-3">
                                                    <label class="form-label fw-light" for="version" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                      <strong>Version No</strong>
                                                    </label>
                                                    <input 
                                                      class="form-control" 
                                                      type="text" 
                                                      name="version" 
                                                      ref={(input) => { this.version = input }} 
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row row-cols-4">
                                              <div class="col-sm-12 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                                  <div class="mb-3">
                                                    <label class="form-label fw-light" for="owner" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                      <strong>Owner</strong>
                                                    </label>
                                                    <input 
                                                      class="form-control" 
                                                      type="text" 
                                                      name="owner" 
                                                      disabled
                                                      value={ this.props.account }
                                                      ref={(input) => { this.owner = input }} 
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row row-cols-4">
                                              <div class="col-sm-6 col-sm-2" style={{ padding: '0px', paddinRight: '3px', paddingLeft: '3px' }}>
                                                  <div class="mb-3">
                                                    <label class="form-label fw-light" for="price_assign" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                      <strong>Price Assign</strong>
                                                    </label>
                                                    <input 
                                                      class="form-control" 
                                                      type="text" 
                                                      name="price_assign" 
                                                      ref={(input) => { this.priceAssign = input }} 
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                              <div class="col-sm-6 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                                  <div class="mb-3">
                                                    <label class="form-label fw-light" for="price_license" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                      <strong>Price License</strong>
                                                    </label>
                                                    <input 
                                                      class="form-control" 
                                                      type="text" 
                                                      name="price_license" 
                                                      ref={(input) => { this.priceLicense = input }} 
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row row-cols-4">
                                              <div class="col-sm-12 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                                  <div class="mb-3">
                                                    <label class="form-label fw-light" for="owner" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                      <strong>Max Licensee Count</strong>
                                                    </label>
                                                    <input 
                                                      class="form-control" 
                                                      type="text" 
                                                      name="maxLicenseCount" 
                                                      ref={(input) => { this.maxLicenseCount = input }} 
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="mb-3 float-right">
                                            <button class="btn btn-success btn-sm" type="submit" style={{ padding: '4px 20px', borderRadius: '2px', borderStyle: 'outset', marginLeft:'0px' }}>Submit
                                            </button>
                                          </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </form>
      </div>
    )
  }
}

export default RegisterPatent