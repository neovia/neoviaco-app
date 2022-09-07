import { NextPage } from "next";
import { useState } from "react";
import Image from 'next/image'
import IllustratedCardGrid from "../components/Paragraphs/Portfolio/Grid/illustrated-card--grid";

interface PortfolioGridTypes {
    posts:{
        items:object,
        kind:string,
        totalItems:number
    }
}

// type itemGrid = {
//     accessInfo:object,
//     etag:string,
//     id:string,
//     kind:string,
//     saleInfo:object,
//     searchInfo:object,
//     selfLink:string,
// }

const PortfolioGrid:NextPage<any> = ({posts}) => {

    let [itemsCounterState, setStateItemsCounter] = useState([0,1,2,3,4,5]);

    const getImageCards = () => {
        let CardsTabs:JSX.Element[] = [];
        posts.items.forEach((item:any, index:number) => {
            const tiltle:string = item.volumeInfo.title.length > 0 ? item.volumeInfo.title :'';
            const image:string = Object.keys(item.volumeInfo).includes('imageLinks') === true ? item.volumeInfo.imageLinks.thumbnail : '';
            CardsTabs.push(<IllustratedCardGrid key={index} title={tiltle} image={image}/>)
        });
        return CardsTabs;
    }

    return (
        <>
         {/* <!-- WELCOME --> */}
            <section className="pt-8 pt-md-12 pb-12 pb-md-15">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 text-center">
                            {/* <!-- Heading --> */}
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
                        {itemsCounterState.length > 0 ?
                            <>
                                { getImageCards() }
                            </>
                        :
                            <></>
                        }
                    </div>
                </div>
            </section>
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

export default PortfolioGrid;