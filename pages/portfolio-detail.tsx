import { NextPage } from "next";
import { useState } from "react";
import IllustratedCardSidebar from "../components/Paragraphs/Portfolio/Sidebar/illustratedCardSidebar";



const PortfolioSidebar:NextPage<any> = ({posts}) => {

    const project = Object.keys(posts).includes('items') == true && posts.items.length > 0 ? posts.items[1].volumeInfo : [];
    let [itemsCounterState, setStateItemsCounter] = useState([0,1]);

    const getImageCards = () => {
        let CardsTabs:JSX.Element[] = [];
        if(Object.keys(project).length > 0 && Object.keys(project).includes('imageLinks') == true  ) {
            itemsCounterState.forEach((items:any, index:number) => {
                CardsTabs.push(<IllustratedCardSidebar key={index} imageUrl={project.imageLinks.thumbnail} />)
            });
        }
        return CardsTabs;
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-md-4 position-md-sticky d-flex align-items-center vh-md-100" style={{top: "0"}}>
                        {/* <!-- Sidebar --> */}
                        <aside className="py-8 py-md-10">
                            {/* <!-- Brand --> */}
                            <div className="img-fluid mb-4 text-body svg-shim" style={{maxWidth: "140px"}}>
                            { project.title }
                            </div>
                            {/* <!-- Text --> */}
                            <p className="fs-lg mb-7 text-muted">
                                { project.subtitle }
                            </p>
                            {/* <!-- List group --> */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    {/* <!-- Heading --> */}
                                    <h6 className="d-flex mb-0 text-uppercase">
                                        Date <span className="ms-auto">{ project.publishedDate }</span>
                                    </h6>
                                </li>
                                <li className="list-group-item">
                                    {/* <!-- Heading --> */}
                                    <h6 className="d-flex mb-0 text-uppercase">
                                        Service <span className="ms-auto">{project.printType}</span>
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
                            {itemsCounterState.length > 0 ?
                                <>
                                    { getImageCards() }
                                </>
                            :
                                <></>
                            }
                        </section>
                    </div>
                </div>
            </div>
        </>
    )

}

export async function getStaticProps() {
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=quilting')
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    }
  }

export default PortfolioSidebar;