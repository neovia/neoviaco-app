import Image from "next/image";

const IllustratedCardGrid = () => {

    const imageExample:string = "https://thumbs.dreamstime.com/b/illusion-d-optique-tunnel-abstrait-image-un-avec-des-rayures-noires-et-blanches-diagonales-168695979.jpg"
    const NeoviaImageLoader = ({ src, width, quality }: {src: string, width: number, quality?: number}) => {
        return src;
    }

    return (
        <>
            <div className="col-12 col-md-4">
                <a className="card card-flush mb-7" href="#!">
                    <div className="card-zoom">
                        <Image
                            className="card-img-top rounded shadow-light-lg"
                            loader={NeoviaImageLoader}
                            src={imageExample}
                            layout="responsive"
                            alt="reference-example"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="card-footer">
                        <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
                        <h4 className="mb-0">Curology Campaign</h4>
                    </div>
                </a>
            </div>
        </>
    )
}

export default IllustratedCardGrid;