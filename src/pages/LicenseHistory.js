import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class LicenseHistory extends Component {
  render() {
    return (
      <div className="d-flex flex-column" id="content-wrapper" style={{ paddingLeft: '250px', paddingTop: '50px'}}>
        <div id="content">
          <div class="container-fluid">
                  <div class="" id="TableSorterCard">
                      <div class=" py-3">
                          <div class="row table-topper align-items-center">
                              <div class="col-12 col-sm-5 col-md-6 text-start" style={{ margin: '0px', padding: '5px 15px'}}>
                                  <input type='text' className='form-control' name='searchKey' id='searchKey' placeholder='Keyword' />
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12">
                              <div class="table-responsive">
                                  <table class="table table-striped table tablesorter" id="ipi-table">
                                      <thead class="thead-dark">
                                          <tr>
                                              <th class="text-center">ID</th>
                                              <th class="text-center">Grant NO</th>
                                              <th class="text-center">Name</th>
                                              <th class="text-center">Licenser</th>
                                              <th class="text-center">Licensee</th>
                                              <th class="text-center">Licened Date</th>
                                              <th class="text-center">Expire Date</th>
                                              <th class="text-center filter-false sorter-false">More</th>
                                          </tr>
                                      </thead>
                                      <tbody class="text-center">
                                        { this.props.loading ? <tr id='loader'><td colSpan={8}>Loading</td></tr>
                                          :(
                                              this.props.licenseCount > 0 ? (
                                                  this.props.licenses.map((license, key) => {
                                                    const licened_date = new Date(license.license_date * 1000);
                                                    const expire_date = new Date(license.license_exp_date * 1000);
                                                    return(
                                                      <tr key={key}>
                                                        <td>{license.patentContainer.id.toString()}</td>
                                                        <td>{license.patentContainer.patent.grant_no.toString()}</td>
                                                        <td>{license.patentContainer.patent.name.toString()}</td>
                                                        <td>{license.licensor.toString()}</td>
                                                        <td>{license.licensee.toString()}</td>
                                                        <td>{licened_date.toString()}</td>
                                                        <td>{expire_date.toString()}</td>
                                                        <td class="text-center align-middle" style={{ maxHeight: '60px', height: '60px' }}>
                                                          <Link to={ `/Details/${license.patentContainer.id.toString()}` }><span class="btn btnMaterial btn-flat primary semicircle" role="button"></span><i class="far fa-eye"></i></Link>
                                                        </td>
                                                      </tr>
                                                    )
                                                })
                                                ) : (
                                                  <tr>
                                                    <td colSpan={8}>No Data</td>
                                                  </tr>
                                                )
                                            )
                                          }
                                          
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
    )
  }
}

export default LicenseHistory