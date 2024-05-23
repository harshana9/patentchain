import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class PatentList extends Component {
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
                                              <th class="text-center">NAME</th>
                                              <th class="text-center">Country</th>
                                              <th class="text-center">Publication</th>
                                              <th class="text-center">GRANT DATE</th>
                                              <th class="text-center filter-false sorter-false">ACTIONS</th>
                                          </tr>
                                      </thead>
                                      <tbody class="text-center">
                                        { this.props.loading ? <tr id='loader'><td colSpan={7}>Loading</td></tr>
                                          :(
                                              this.props.patentCount > 0 ? (
                                                  this.props.patents.map((patent, key) => {
                                                    return(
                                                      <tr key={key}>
                                                        <td>{patent.id.toString()}</td>
                                                        <td>{patent.patent.grant_no.toString()}</td>
                                                        <td>{patent.patent.name.toString()}</td>
                                                        <td>{patent.patent.registerd_country.toString()}</td>
                                                        <td>{patent.patent.publication_kind.toString()} ({patent.patent.publication_number.toString()}) @ {patent.patent.publication_date.toString()}</td>
                                                        <td>{patent.patent.grant_date.toString()}</td>
                                                        <td class="text-center align-middle" style={{ maxHeight: '60px', height: '60px' }}>
                                                          <Link to={ `/Details/${patent.id.toString()}` }><span class="btn btnMaterial btn-flat primary semicircle" role="button"></span><i class="far fa-eye"></i></Link>
                                                          <a class="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i class="fas fa-shopping-bag"></i></a>
                                                          <a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style={{ marginLeft: '5px' }} data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i class="fas fa-handshake"></i></a>
                                                        </td>
                                                      </tr>
                                                    )
                                                })
                                                ) : (
                                                  <tr>
                                                    <td colSpan={7}>No Data</td>
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

export default PatentList