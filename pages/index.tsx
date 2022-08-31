import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
  <>
    <section data-jarallax data-speed=".8" className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax" style={{backgroundImage: "url(assets/img/covers/cover-13.jpg)"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 text-center">

            <h1 className="display-2 fw-bold text-white">
              Page d'accueil Neovia
            </h1>

            <p className="lead mb-0 text-white-75">
              Exemple d'implémentation Landkit
            </p>

          </div>
        </div>
      </div>
    </section>
    <section className="pt-7 pt-md-10">
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="card card-row shadow-light-lg mb-6 lift lift-lg">
              <div className="row gx-0">
                <div className="col-12">

                  <span className="badge rounded-pill bg-light badge-float badge-float-inside">
                    <span className="h6 text-uppercase">Featured</span>
                  </span>

                </div>
                <a className="col-12 col-md-6 order-md-2 bg-cover card-img-end" style={{backgroundImage: "url(assets/img/photos/photo-27.jpg);"}} href="#!">

                  {/* <img src="assets/img/photos/photo-27.jpg" alt="..." /className="img-fluid d-md-none invisible"> */}

                  {/* <!-- Shape --> */}
                  <div className="shape shape-start shape-fluid-y svg-shim text-white d-none d-md-block">
                    <svg viewBox="0 0 112 690" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z" fill="currentColor"/></svg>                  </div>

                </a>
                <div className="col-12 col-md-6 order-md-1">

                  {/* <!-- Body --> */}
                  <a className="card-body" href="#!">

                    {/* <!-- Heading --> */}
                    <h3>
                      Travel Can Keep You Creatively Inspired.
                    </h3>

                    {/* <!-- Text --> */}
                    <p className="mb-0 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin erat purus.
                    </p>

                  </a>

                  {/* <!-- Meta --> */}
                  <a className="card-meta" href="#!">

                    {/* <!-- Divider --> */}
                    <hr className="card-meta-divider"/>

                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-sm me-2">
                      {/* <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"> */}
                    </div>

                    {/* <!-- Author --> */}
                    <h6 className="text-uppercase text-muted me-2 mb-0">
                      Ab Hadley
                    </h6>

                    {/* <!-- Date --> */}
                    <p className="h6 text-uppercase text-muted mb-0 ms-auto">
                      <time dateTime="2019-05-02">May 02</time>
                    </p>

                  </a>

                </div>

              </div>
            </div>

          </div>
       </div>
       </div>
    </section>

    {/* <!-- ARTICLES --> */}
    <section className="pt-7 pt-md-10">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md">

            {/* <!-- Heading --> */}
            <h3 className="mb-0">
              Latest Stories
            </h3>

            {/* <!-- Text --> */}
            <p className="mb-0 text-muted">
              Here’s what we've been up to recently.
            </p>

          </div>
          <div className="col-12 col-md-auto">

            {/* <!-- Button --> */}
            <a href="#!" className="btn btn-sm btn-outline-gray-300 d-none d-md-inline">
              View all
            </a>

          </div>
        {/* </div> <!-- / .row --> */}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 d-flex">

            {/* <!-- Card --> */}
            <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">

              {/* <!-- Image --> */}
              <a className="card-img-top" href="#!">

                {/* <!-- Image --> */}
                {/* <img src="assets/img/photos/photo-15.jpg" alt="..." className="card-img-top"> */}

                {/* <!-- Shape --> */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"/></svg>                  </div>
                </div>

              </a>

              {/* <!-- Body --> */}
              <a className="card-body" href="#!">

                {/* <!-- Heading --> */}
                <h3>
                  Cafe Coworking Has Become the Norm.
                </h3>

                {/* <!-- Text --> */}
                <p className="mb-0 text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                </p>

              </a>

              {/* <!-- Meta --> */}
              <a className="card-meta mt-auto" href="#!">

                {/* <!-- Divider --> */}
                <hr className="card-meta-divider" />

                {/* <!-- Avatar --> */}
                <div className="avatar avatar-sm me-2">
                  {/* <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"> */}
                </div>

                {/* <!-- Author --> */}
                <h6 className="text-uppercase text-muted me-2 mb-0">
                  Ab Hadley
                </h6>

                {/* <!-- Date --> */}
                <p className="h6 text-uppercase text-muted mb-0 ms-auto">
                  <time dateTime="2019-05-02">May 02</time>
                </p>

              </a>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">

            {/* <!-- Card --> */}
            <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">

              {/* <!-- Image --> */}
              <a className="card-img-top" href="#!">

                {/* <!-- Image --> */}
                {/* <img src="assets/img/photos/photo-14.jpg" alt="..." className="card-img-top"> */}

                {/* <!-- Shape --> */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"/></svg>                  </div>
                </div>

              </a>

              {/* <!-- Body --> */}
              <a className="card-body" href="#!">

                {/* <!-- Heading --> */}
                <h3>
                  Weekly Roundtable Meetings Saved Us.
                </h3>

                {/* <!-- Text --> */}
                <p className="mb-0 text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                </p>

              </a>

              {/* <!-- Meta --> */}
              <a className="card-meta mt-auto" href="#!">

                {/* <!-- Divider --> */}
                <hr className="card-meta-divider" />

                {/* <!-- Avatar --> */}
                <div className="avatar avatar-sm me-2">
                  {/* <img src="assets/img/avatars/avatar-2.jpg" alt="..." className="avatar-img rounded-circle"> */}
                </div>

                {/* <!-- Author --> */}
                <h6 className="text-uppercase text-muted me-2 mb-0">
                  Adolfo Hess
                </h6>

                {/* <!-- Date --> */}
                <p className="h6 text-uppercase text-muted mb-0 ms-auto">
                  <time dateTime="2019-05-02">May 02</time>
                </p>

              </a>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">

            {/* <!-- Card --> */}
            <div className="card mb-6 mb-md-0 shadow-light-lg lift lift-lg">

              {/* <!-- Image --> */}
              <a className="card-img-top" href="#!">

                {/* <!-- Image --> */}
                {/* <img src="assets/img/photos/photo-7.jpg" alt="..." className="card-img-top"> */}

                {/* <!-- Shape --> */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"/></svg>                  </div>
                </div>

              </a>

              {/* <!-- Body --> */}
              <a className="card-body" href="#!">

                {/* <!-- Heading --> */}
                <h3>
                  Nature Can Save Your Creative Side.
                </h3>

                {/* <!-- Text --> */}
                <p className="mb-0 text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                </p>

              </a>

              {/* <!-- Meta --> */}
              <a className="card-meta mt-auto" href="#!">

                {/* <!-- Divider --> */}
                <hr className="card-meta-divider" />

                {/* <!-- Avatar --> */}
                <div className="avatar avatar-sm me-2">
                  {/* <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"> */}
                </div>

                {/* <!-- Author --> */}
                <h6 className="text-uppercase text-muted me-2 mb-0">
                  Ab Hadley
                </h6>

                {/* <!-- Date --> */}
                <p className="h6 text-uppercase text-muted mb-0 ms-auto">
                  <time dateTime="2019-05-02">May 02</time>
                </p>

              </a>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">

            {/* <!-- Card --> */}
            <div className="card d-lg-none shadow-light-lg lift lift-lg">

              {/* <!-- Image --> */}
              <a className="card-img-top" href="#!">

                {/* <!-- Image --> */}
                {/* <img src="assets/img/photos/photo-5.jpg" alt="..." className="card-img-top" /> */}

                {/* <!-- Shape --> */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"/></svg>                  </div>
                </div>

              </a>

              {/* <!-- Body --> */}
              <a className="card-body" href="#!">

                {/* <!-- Heading --> */}
                <h3>
                  Coffee Can Keep You Going, But At What Cost?
                </h3>

                {/* <!-- Text --> */}
                <p className="mb-0 text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                </p>

              </a>

              {/* <!-- Meta --> */}
              <a className="card-meta mt-auto" href="#!">

                {/* <!-- Divider --> */}
                <hr className="card-meta-divider" />

                {/* <!-- Avatar --> */}
                <div className="avatar avatar-sm me-2">
                  {/* <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" /> */}
                </div>

                {/* <!-- Author --> */}
                <h6 className="text-uppercase text-muted me-2 mb-0">
                  Ab Hadley
                </h6>

                {/* <!-- Date --> */}
                <p className="h6 text-uppercase text-muted mb-0 ms-auto">
                  <time dateTime="2019-05-02">May 02</time>
                </p>
              </a>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  </>
  )
}

export default Home;
