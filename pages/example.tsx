import { NextPage } from "next";

const Example:NextPage = () => {

    return (
        <>
            <div className=" " id="modalExample" role="dialog" aria-labelledby="modalExampleTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-body">

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        <div className="text-center">
                        {/* <img src="./assets/img/illustrations/illustration-1.png" alt="..." className="img-fluid mb-3" style={{width: "200px"}} /> */}
                        </div>

                        <h2 className="fw-bold text-center mb-1" id="modalExampleTitle">
                        Schedule a demo with us
                        </h2>

                        <p className="fs-lg text-center text-muted mb-6 mb-md-8">
                        We can help you solve company communication.
                        </p>

                        <form>
                        <div className="row">
                            <div className="col-12 col-md-6">

                            <div className="form-floating">
                                <input type="text" className="form-control form-control-flush" id="registrationFirstNameModal" placeholder="First name" />
                                <label htmlFor="registrationFirstNameModal">First name</label>
                            </div>

                            </div>
                            <div className="col-12 col-md-6">

                            <div className="form-floating">
                                <input type="text" className="form-control form-control-flush" id="registrationLastNameModal" placeholder="Last name" />
                                <label htmlFor="registrationLastNameModal">Last name</label>
                            </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">

                            <div className="form-floating">
                                <input type="email" className="form-control form-control-flush" id="registrationEmailModal" placeholder="Email" />
                                <label htmlFor="registrationEmailModal">Email</label>
                            </div>

                            </div>
                            <div className="col-12 col-md-6">

                            <div className="form-floating">
                                <input type="password" className="form-control form-control-flush" id="registrationPasswordModal" placeholder="Password" />
                                <label htmlFor="registrationPasswordModal">Password</label>
                            </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">

                            <button className="btn w-100 btn-primary mt-3 lift">
                                Request a demo
                            </button>

                            </div>
                        </div>
                        </form>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Example;