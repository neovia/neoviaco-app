import { NextPage } from "next";
import Image from 'next/image'



const References:NextPage = () => {

    const imageExample:string = "https://thumbs.dreamstime.com/b/illusion-d-optique-tunnel-abstrait-image-un-avec-des-rayures-noires-et-blanches-diagonales-168695979.jpg"

    const NeoviaImageLoader = ({ src, width, quality }: {src: string, width: number, quality?: number}) => {
        return src;
    }

    return (
        <>
         {/* <!-- WELCOME --> */}
            <section className="pt-8 pt-md-12 pb-12 pb-md-15">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 text-center">
                            {/* <!-- Headin --> */}
                            <h1 className="display-1 fw-bold">
                            Our Work.
                            </h1>

                            {/* <!-- Text --> */}
                            <p className="lead text-secondary mb-4">
                            We design & build products, tools, apps, and sites for companies trying to do great things for our planet.
                            </p>

                            {/* <!-- Badges --> */}
                            <nav className="nav justify-content-center">
                            <a className="badge rounded-pill bg-secondary-soft active me-1 mb-1" href="#" data-bs-toggle="pill" data-filter="*" data-bs-target="#portfolio">
                                <span className="h6 text-uppercase">Primary</span>
                            </a>
                            <a className="badge rounded-pill bg-secondary-soft me-1 mb-1" href="#" data-bs-toggle="pill" data-filter=".product" data-bs-target="#portfolio">
                                <span className="h6 text-uppercase">Product</span>
                            </a>
                            <a className="badge rounded-pill bg-secondary-soft me-1 mb-1" href="#" data-bs-toggle="pill" data-filter=".ux" data-bs-target="#portfolio">
                                <span className="h6 text-uppercase">UX</span>
                            </a>
                            <a className="badge rounded-pill bg-secondary-soft me-1 mb-1" href="#" data-bs-toggle="pill" data-filter=".resources" data-bs-target="#portfolio">
                                <span className="h6 text-uppercase">Resources</span>
                            </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 py-md-11 mt-n10 mt-md-n14">
            <div className="container">
                <div className="row" id="portfolio" data-isotope='{"layoutMode": "fitRows"}'>
                <div className="col-12 col-md-4 product">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Branding</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Curology Campaign</h4>

                    </div>

                    </a>

                </div>
                <div className="col-12 col-md-4 resources">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Packaging</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Honest Packaging</h4>

                    </div>

                    </a>

                </div>
                <div className="col-12 col-md-4 ux">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Branding</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Larq Bright Campaign</h4>

                    </div>

                    </a>

                </div>
                <div className="col-12 col-md-4 resources">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Ideation</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Doodle Pads</h4>

                    </div>

                    </a>

                </div>
                <div className="col-12 col-md-4 product">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Branding</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Larq Earthtones Collection</h4>

                    </div>

                    </a>

                </div>
                <div className="col-12 col-md-4 resources">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Product Design</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Goby Brush Prototype</h4>

                    </div>

                    </a>

                </div>
                <div className="col-12 col-md-4 product">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Product Design</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Larq Bottle Redesign</h4>

                    </div>

                    </a>

                </div>
                <div className="col-12 col-md-4 ux">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Product Design</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Goby Packaging </h4>

                    </div>

                    </a>

                </div>
                <div className="col-12 col-md-4 ux">

                    {/* <!-- Card --> */}
                    <a className="card card-flush mb-7" href="#!">

                    {/* <!-- Image --> */}
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer">

                        {/* <!-- Preheading --> */}
                        <h6 className="text-uppercase mb-1 text-muted">Branding</h6>

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Trek Campaign</h4>

                    </div>

                    </a>

                </div>
                </div>
            </div>
            </section>
        </>
    )

}

export default References;