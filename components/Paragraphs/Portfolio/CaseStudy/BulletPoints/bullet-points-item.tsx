

type BulletPointsItemType = {
    text:string
}

const BulletPointsItem = ({text}:BulletPointsItemType) => {

    const exampleItem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quo labore, deleniti optio non, voluptate illo doloribus odio iure molestiae eos tempora nobis."

    return (
        <li className="d-flex">
            {/* <!-- Check --> */}
            <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                <i className="fe fe-check"></i>
            </div>

            {/* <!-- Text --> */}
            <p>
                { exampleItem }
            </p>
        </li>
    )
}

export default BulletPointsItem;

