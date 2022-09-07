import BulletPointsItem from "./bullet-points-item";

type BulletPointsType = {
    title:string,
    text:string
}

const BulletPoints = ({title, text}:BulletPointsType) => {
    const exampleItem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quo labore, deleniti optio non, voluptate illo doloribus odio iure molestiae eos tempora nobis."

    return (
        <>
            <section className="py-6 py-md-8">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                        {/* <!-- Heading --> */}
                        <h3 className="fw-bold">
                        Small heading for a smaller transition
                        </h3>

                        {/* <!-- Text --> */}
                        <p className="mb-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ducimus provident,
                        quos sint hic, quidem voluptatibus. Quasi, distinctio cupiditate, omnis vitae maxime
                        nisi eum similique libero ad dolore sint tempora.
                        </p>

                        {/* <!-- List --> */}
                        <ul className="list-unstyled mb-0">
                            <BulletPointsItem text={exampleItem} />
                            <BulletPointsItem text={exampleItem} />
                            <BulletPointsItem text={exampleItem} />
                            <BulletPointsItem text={exampleItem} />
                            <BulletPointsItem text={exampleItem} />

                        </ul>
                    </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
            </section>
        </>
    )
}

export default BulletPoints;