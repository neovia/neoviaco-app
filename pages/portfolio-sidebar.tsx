import { NextPage } from "next";
import Image from 'next/image'
import IllustratedCardSidebar from "../components/Portfolio/Sidebar/illustratedCardSidebar";



const PortfolioSidebar:NextPage = () => {

    return (
        <>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-md-4 position-md-sticky d-flex align-items-center vh-md-100" style={{top: "0"}}>
                        {/* <!-- Sidebar --> */}
                        <aside className="py-8 py-md-10">
                            {/* <!-- Brand --> */}
                            <div className="img-fluid mb-4 text-body svg-shim" style={{maxWidth: "140px"}}>
                            { "NOM OU LOGO DU PROJET" }
                            </div>
                            {/* <!-- Text --> */}
                            <p className="fs-lg mb-7 text-muted">
                            We created a photographic brand for Larq that’s fun and exciting.
                            </p>
                            {/* <!-- List group --> */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    {/* <!-- Heading --> */}
                                    <h6 className="d-flex mb-0 text-uppercase">
                                        Year <span className="ms-auto">2019</span>
                                    </h6>
                                </li>
                                <li className="list-group-item">
                                    {/* <!-- Heading --> */}
                                    <h6 className="d-flex mb-0 text-uppercase">
                                        Service <span className="ms-auto">Photography</span>
                                    </h6>
                                </li>
                                <li className="list-group-item">
                                    {/* <!-- Heading --> */}
                                    <h6 className="d-flex mb-0 text-uppercase">
                                        Timeline <span className="ms-auto">60 Days</span>
                                    </h6>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col-12 col-md-7">
                        {/* <!-- Images --> */}
                        <section className="pb-8 pt-md-12 pb-md-10">
                            <IllustratedCardSidebar />
                            <IllustratedCardSidebar />
                            <IllustratedCardSidebar />
                            <IllustratedCardSidebar />
                            <IllustratedCardSidebar />
                            <IllustratedCardSidebar />
                            <IllustratedCardSidebar />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PortfolioSidebar;