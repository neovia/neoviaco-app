import Head from "next/head"

interface LayoutProps {
    children: React.ReactNode;
}


const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Neovia</title>
                <meta name="description" content="Agence Web Drupal et React" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
            </Head>
            {children}
            {/* <!-- CTA --> */}
    <section className="pt-6 pt-md-8 bg-gray-200">
      <div className="container pb-6 pb-md-8 border-bottom border-gray-300">
        <div className="row align-items-center">
          <div className="col-12 col-md">

            {/* <!-- Heading --> */}
            <h3 className="mb-1 fw-bold">
              Get our stories delivered
            </h3>

            {/* <!-- Text --> */}
            <p className="fs-lg text-muted mb-6 mb-md-0">
              From us to your inbox weekly.
            </p>

          </div>
          <div className="col-12 col-md-5">

            {/* <!-- Form --> */}
            <form>
              <div className="row">
                <div className="col">

                  {/* <!-- Input --> */}
                  <input type="email" className="form-control" placeholder="Enter your email" />

                </div>
                <div className="col-auto ms-n5">

                  {/* <!-- Button --> */}
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>

                </div>
              </div>
              {/* <!-- / .row --> */}
            </form>

          </div>
        </div>
        {/* <!-- / .row --> */}
      </div>
      {/* <!-- / .container --> */}
    </section>

    {/* <!-- FOOTER --> */}
    <footer className="py-8 py-md-11 bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">

            {/* <!-- Brand --> */}
            <img src="./assets/img/brand.png" alt="..." className="footer-brand img-fluid mb-2" width="50px" />

            {/* <!-- Text --> */}
            <p className="text-gray-700 mb-2">
              A better way to build.
            </p>

            {/* <!-- Social --> */}
            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li className="list-inline-item list-social-item me-3">
                <a href="http://instagram.com/icemortgagetech" target="_blank" className="text-decoration-none">
                  <img src="./assets/img/icons/social/instagram.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="https://www.facebook.com/ICEMortgageTech" target="_blank" className="text-decoration-none">
                  <img src="./assets/img/icons/social/facebook.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="https://twitter.com/ICEMortgageTech" target="_blank" className="text-decoration-none">
                  <img src="./assets/img/icons/social/twitter.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
             <li className="list-inline-item list-social-item">
                <a href="#!" className="text-decoration-none">
                  <img src="./assets/img/icons/social/pinterest.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">

            {/* <!-- Heading --> */}
            <h6 className="fw-bold text-uppercase text-gray-700">
              Products
            </h6>

            {/* <!-- List --> */}
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Page Builder
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  UI Kit
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Styleguide
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Changelog
                </a>
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">

            {/* <!-- Heading --> */}
            <h6 className="fw-bold text-uppercase text-gray-700">
              Services
            </h6>

            {/* <!-- List --> */}
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Documentation
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Changelog
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Pagebuilder
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  UI Kit
                </a>
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">

            {/* <!-- Heading --> */}
            <h6 className="fw-bold text-uppercase text-gray-700">
              Connect
            </h6>

            {/* <!-- List --> */}
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Page Builder
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  UI Kit
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Styleguide
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Documentation
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Changelog
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Changelog
                </a>
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">

            {/* <!-- Heading --> */}
            <h6 className="fw-bold text-uppercase text-gray-700">
              Legal
            </h6>

            {/* <!-- List --> */}
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Documentation
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Pagebuilder
                </a>
              </li>
            </ul>

          </div>
        </div>
        {/* <!-- / .row --> */}
      </div>
      {/* <!-- / .container --> */}
    </footer>
        </>

    )
}

export default Layout;
