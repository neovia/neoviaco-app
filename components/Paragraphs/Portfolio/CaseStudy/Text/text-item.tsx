

type TextItemType = {
    text:string
}

const TextItem = ({text}:TextItemType) => {
    return (
        <p>
            {text}
        </p>
    )
}

export default TextItem;