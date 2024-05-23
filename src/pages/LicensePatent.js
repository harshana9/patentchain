import React from 'react'
import { useParams } from 'react-router-dom';

export default function LicensePatent(props) {
  let { id } = useParams()
  let licenseTableHasData = false;
  return (
  <div className="d-flex flex-column" id="content-wrapper" style={{ paddingLeft: '250px', paddingTop: '10px'}}>
            <div id="content">
            <form onSubmit={(e) =>e.preventDefault()}>
                {props.loading ? (
                    <div id='loader'>Loading</div>
                ) : (
                props.patents.map((patent, key) => {
                    if (patent.id == id) {
                        const grant_date = new Date(patent.grant_date * 1000)
                        const licenseDate = Math.floor(new Date().getTime() / 1000)

                        return (
                          <div id="content">
          <div className="container-fluid" style={{ marginTop: '5px' }}>
            <h5 className="fw-bold text-dark mb-4">License a Patent</h5>
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
                            disabled
                            value={patent.patent.grant_no}
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
                            disabled
                            value={grant_date}
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
                                disabled
                                value={patent.patent.registerd_country}
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
                                    disabled
                                    value={patent.patent.name}
                                    style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                  />
                                </div>
                                </div>
                              <div class="col-sm-6 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                <div class="mb-3">
                                  <label class="form-label fw-light" for="inventor" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                    <strong>Inventor</strong>
                                  </label>
                                  <input 
                                    class="form-control" 
                                    type="text" 
                                    name="inventor" 
                                    disabled
                                    value={patent.patent.inventor}
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
                                          <p>{patent.patent.description}</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row row-cols-4">
                                      <div class="col-sm-12 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                        <div class="mb-3">
                                          <label class="form-label fw-light" for="licenseTermsConsitions" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                            <strong>License Terms and Conditions</strong>
                                          </label>
                                          <p>Dev</p>
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
                                            disabled
                                            value={patent.patent.publication_number}
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
                                                  disabled
                                                  value={patent.patent.publication_kind}
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
                                                  disabled
                                                  value={patent.patent.publication_date}
                                                  style={{ height: '27.6px', paddingTop: '1px', paddingBottom: '1px', borderRadius: '2px', fontSize: '14px' }}
                                                />
                                                </div>
                                              </div>
                                          </div>
                                  </div>
                                  <div class="row row-cols-4">
                                    <div class="col-sm-11 col-lg-11" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '25px', paddingBottom:'30px' }}>
                                          <label class="form-label fw-light" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                            <strong>Issued Licenses</strong>
                                          </label>
                                          <br/>
                                          <table style={{width:'100%', fontSize: '10px'}} border="1">
                                            <thead>
                                              <tr><th>Licensee</th><th>licensed Date</th><th>Expire Date</th></tr>
                                            </thead>
                                            <tbody>
                                            {props.licenses.map((license, key) => {
                                                if (license.patentContainer.id == id) {
                                                  const license_date = new Date(license.license_date * 1000);
                                                  licenseTableHasData=true;
                                                  return (
                                                    <tr style={{border:'1px solid black'}}>
                                                      <td>{license.licensee.toString()}</td>
                                                      <td>{license_date.toString()}</td>
                                                      <td>{license.license_exp_date.toString()}</td>
                                                    </tr>
                                                  );
                                                }
                                            })}
                                          </tbody>
                                          </table>
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
                                                      disabled
                                                      value={patent.version}
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row row-cols-4">
                                              <div class="col-sm-12 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                                  <div class="mb-3">
                                                    <label class="form-label fw-light" for="licenser" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                      <strong>Licenser</strong>
                                                    </label>
                                                    <input 
                                                      class="form-control" 
                                                      type="text" 
                                                      name="licenser" 
                                                      disabled
                                                      value={ patent.owner }
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
                                                      disabled
                                                      value={window.web3.utils.fromWei(patent.price_assign.toString(), 'ether')}
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
                                                      disabled
                                                      value={window.web3.utils.fromWei(patent.price_license.toString(), 'ether')}
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row row-cols-4">
                                              <div class="col-sm-12 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                                  <div class="mb-3">
                                                    <label class="form-label fw-light" for="maxLicenseCount" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                      <strong>Max Licensee Count</strong>
                                                    </label>
                                                    <input 
                                                      class="form-control" 
                                                      type="text" 
                                                      name="maxLicenseCount" 
                                                      disabled
                                                      value={patent.max_license_count}
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row row-cols-4">
                                              <div class="col-sm-12 col-sm-2" style={{ padding: '0px', paddingRight: '3px', paddingLeft: '3px' }}>
                                                  <div class="mb-3">
                                                    <label class="form-label fw-light" for="licenseDate" style={{ marginBottom: '2px', fontSize: '14px' }}>
                                                      <strong>License Date</strong>
                                                    </label>
                                                    <input 
                                                      class="form-control" 
                                                      type="date" 
                                                      name="licenseDate" 
                                                      style={{ height: '27.6px', borderRadius: '2px', paddingTop: '1px', paddingBottom: '1px', fontSize: '14px' }}
                                                    />
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div class="mb-3 float-right">
                                            <button class="btn btn-success btn-sm" style={{ padding: '4px 20px', borderRadius: '2px', borderStyle: 'outset', marginLeft:'0px' }} onClick= {() => {props.licensePatent(patent.id,licenseDate,patent.price_license)}}>Obtain License
                                            </button>
                                          </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      </div>
                        );
                        } else {
                            return null;
                        }
                    })
                )}
                </form>
            </div>
        </div>
    )
}