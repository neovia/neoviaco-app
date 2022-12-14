import Image from "next/image";
import SliderItem from "./slider-item";

type ImageType = {
    imageUrl:string
}

const Slider = ({imageUrl}:ImageType) => {

    const imageExample:string = imageUrl.length > 0 ? imageUrl: "https://thumbs.dreamstime.com/b/illusion-d-optique-tunnel-abstrait-image-un-avec-des-rayures-noires-et-blanches-diagonales-168695979.jpg"

    return (
        <>
          <section className="pt-6 pt-md-8">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 col-lg-11 col-xl-10">
                    <figure className="figure mb-0">
                    <div className="figure-img" data-flickity='{"wrapAround": true, "pageDots": false, "imagesLoaded": true, "adaptiveHeight": true}'>
                        <SliderItem imageUrl={imageExample} />
                        <SliderItem imageUrl={imageExample} />
                        <SliderItem imageUrl={imageExample} />
                        <SliderItem imageUrl={imageExample} />
                        <SliderItem imageUrl={imageExample} />
                    </div>
                    <figcaption className="figure-caption text-center">
                        This is a caption on this photo for reference
                    </figcaption>
                    </figure>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Slider;