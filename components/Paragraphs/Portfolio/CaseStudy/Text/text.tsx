import TextItem from '../Text/text-item';

const Text = () => {

    const exampleText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi reiciendis odio perferendis libero saepe voluptatum fugiat dolore voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque pariatur commodi.";
    const exampleText2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quidem, earum! Quo fugiat voluptates similique quidem dolorem ex non quibusdam odio suscipit error, maiores, itaque blanditiis vel, sed, cum velit?";

    return (
        <>
            {/* <!-- SECTION --> */}
            <section className="pt-6 pt-md-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                            {/* <!-- Text --> */}
                            <TextItem text={exampleText}/>
                            <TextItem text={exampleText2}/>
                        </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
            {/* <!-- / .container --> */}
            </section>
        </>
    )
}

export default Text;