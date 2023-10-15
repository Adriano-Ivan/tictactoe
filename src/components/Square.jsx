

const Square = ({num, value}) => {
    console.log(num)
    return <button type="button" className="square">
        {value}
    </button> ;
}

export default Square;