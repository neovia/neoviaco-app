import MainMenu from "../Menus/main-menu";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    {/* <!-- Brand --> */}
                    <a className="navbar-brand" href="./index.html">
                        <img src="./assets/img/brand.png" className="navbar-brand-img" alt="..."/>
                    </a>
                    {/* <!-- Toggler --> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Collapse --> */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* <!-- Toggler --> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fe fe-x"></i>
                        </button>

                        {/* MAIN-MENU ICI  */}
                        <MainMenu />
                        {/* <!-- Button --> */}
                        {/* <!--  */}
                        <a className="navbar-btn btn btn-sm btn-primary lift ms-auto" href="https://themes.getbootstrap.com/product/landkit/" target="_blank">
                            Buy now
                        </a>
                        {/* --> */}
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Header;