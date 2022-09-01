import Image from "next/image";

const IllustratedCardSidebar = () => {

    const imageExample:string = "https://thumbs.dreamstime.com/b/illusion-d-optique-tunnel-abstrait-image-un-avec-des-rayures-noires-et-blanches-diagonales-168695979.jpg"
    const NeoviaImageLoader = ({ src, width, quality }: {src: string, width: number, quality?: number}) => {
        return src;
    }

    return (
        <>
            <a className="d-block mt-7" data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-22.jpg"}' href="#">
                <Image
                    className="img-fluid rounded"
                    loader={NeoviaImageLoader}
                    src={imageExample}
                    layout="responsive"
                    alt="reference-example"
                    width={500}
                    height={500}
                />
            </a>
        </>
    )
}

export default IllustratedCardSidebar;