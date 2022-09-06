import Image from "next/image";

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
                    alt="reference-example"
                    width="500"
                    height="500"
                    // layout="fill"
                    objectFit="contain"
                />
            </div>
        </>
    )
}

export default SliderItem;