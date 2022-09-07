import Image from "next/image";


type ImageType = {
    imageUrl:string
}

const CoverImage = ({imageUrl}:ImageType) => {

    const imageExample:string = imageUrl.length > 0 ? imageUrl: "https://thumbs.dreamstime.com/b/illusion-d-optique-tunnel-abstrait-image-un-avec-des-rayures-noires-et-blanches-diagonales-168695979.jpg"
    const NeoviaImageLoader = ({ src, width, quality }: {src: string, width: number, quality?: number}) => {
        return src;
    }

    return (
        <>
            <section data-jarallax data-speed=".8" className="d-block mt-7"
            // style={{backgroundImage: "url(assets/img/portfolio/portfolio-cover-8.jpg);"}}
            >
                <Image
                    className="img-fluid rounded"
                    loader={NeoviaImageLoader}
                    src={imageExample}
                    layout="responsive"
                    alt="reference-example"
                    width={500}
                    height={500}
                />
            </section>
        </>
    )
}

export default CoverImage;