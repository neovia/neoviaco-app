

type QuoteType = {
    text:string
}

const Quotes = ({text}:QuoteType) => {

    return (
        <>
            {/* <!-- Divider --> */}
            <hr className="hr-md mb-7 mx-auto" />
            {/* <!-- Blockquote --> */}
            <blockquote className="blockquote mb-7">
                <p className="h2 mb-0 text-center text-primary-desat">
                    {`“${text}”`}
                </p>
            </blockquote>
            {/* <!-- Divider --> */}
            <hr className="hr-md mb-7 mx-auto" />
        </>
    )
}

export default Quotes;