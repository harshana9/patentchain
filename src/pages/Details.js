//rfc
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Details(props) {
let { id } = useParams()

  return (
        <div className="d-flex flex-column" id="content-wrapper" style={{ paddingLeft: '250px', paddingTop: '10px'}}>
            <div id="content">
                {props.loading ? (
                    <div id='loader'>Loading</div>
                ) : (
                props.patents.map((patent, key) => {
                    if (patent.id == id) {
                        return (
                            <div class="container mt-5" style={{margin:'0px'}}>
                                <div class='row'>
                                    <div class="col-sm-1" style={{ color: '#858796', margin: '0px', marginLeft: '0px' }}>
                                        <span></span><span class="fs-5 mt-5 mb-5">Back</span>
                                    </div>
                                    <div class="col-sm-11">
                                        <h5 class="fw-normal text-center mb-3" style={{ color: '#858796' }}>Patent Details</h5>
                                    </div>
                                </div>
                                <div class="card" style={{border: 'none'}}>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold">Grant No</label>
                                                <h5 class="fs-6">{patent.patent.grant_no.toString()}</h5>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold">Grant Date</label>
                                                <h5 class="fs-6">{patent.patent.grant_date.toString()}</h5>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold">Owner</label>
                                                <h5 class="fs-6">{patent.owner.toString()}</h5>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold">Country</label>
                                                <h5 class="fs-6">{patent.patent.registerd_country.toString()}</h5>   
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold">Application No</label>
                                                <h5 class="fs-6">{patent.patent.application_no.toString()}</h5>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold">Application Date</label>
                                                <h5 class="fs-6">{patent.patent.application_date.toString()}</h5>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold">Applicant</label>
                                                <h5 class="fs-6">{patent.patent.applicant.toString()}</h5>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold"><strong>Inventor</strong></label>
                                                <h5 class="fs-6">{patent.patent.inventor.toString()}</h5>
                                            </div>
                                        </div>
                                        <hr class="mb-0 pb-0"/>
                                    </div>
                                    <div class="card-body"><label class="form-label fs-4 fw-bold">{patent.patent.name.toString()}</label>
                                        <div class="row">
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-3"><label class="form-label fs-6 fw-bold">Version</label>
                                                <h5 class="fs-6">{patent.version.toString()}</h5>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                                                <label class="form-label fs-6 fw-bold">
                                                    <Link to={ `/LicensePatent/${patent.id.toString()}` }><button class="button" ><i class="fas fa-handshake"></i> License</button></Link>
                                                </label>
                                                <h5 class="fs-6">{window.web3.utils.fromWei(patent.price_license.toString(), 'ether')} ETH</h5>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                                                <label class="form-label fs-6 fw-bold">
                                                    <Link to={ `/AssignPatent/${patent.id.toString()}` }><button class="button button-blue" ><i class="fas fa-shopping-bag"></i> Assign</button></Link>
                                                </label>
                                                <h5 class="fs-6">{window.web3.utils.fromWei(patent.price_assign.toString(), 'ether')} ETH</h5>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-10 col-lg-8 "><label class="form-label fs-6 fw-bold">Description</label>
                                                <h6 class="fs-6" style={{ textAlign: 'justify' }}>{patent.patent.description.toString()}</h6>
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
            </div>
        </div>
    )
}

export default Details