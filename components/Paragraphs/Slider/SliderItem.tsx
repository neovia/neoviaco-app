import Image from "next/future/image";

type ImageType = {
    imageUrl:string
}

const SliderItem = ({imageUrl}:ImageType) => {

    const imageExample:string = imageUrl.length > 0 ? imageUrl: "https://thumbs.dreamstime.com/b/illusion-d-optique-tunnel-abstrait-image-un-avec-des-rayures-noires-et-blanches-diagonales-168695979.jpg"
    const NeoviaImageLoader = ({ src, width, quality }: {src: string, width: number, quality?: number}) => {
        return src;
    }

    return (
        <>
            <div className="w-100">
                <Image
                        className="img-fluid rounded"
                        loader={NeoviaImageLoader}
                        src={imageExample}
                        // layout="raw"
                        alt="reference-example"
                        width={500}
                        height={500}
                    />
                    {/* <img src={imageExample} className="img-fluid rounded" alt="reference-example"/> */}
            </div>
            {/* <a className="d-block mb-4" data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-6.jpg"}' href="#">
                <Image
                        className="img-fluid rounded lift lift-lg"
                        loader={NeoviaImageLoader}
                        src={imageExample}
                        layout="responsive"
                        alt="reference-example"
                        width={500}
                        height={500}
                    />
            </a> */}
        </>
    )
}

export default SliderItem;