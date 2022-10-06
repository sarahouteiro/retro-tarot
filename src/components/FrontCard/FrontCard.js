import { frontImage } from "../../constants/urls"

const FrontCard = (props) => {
    const cardUrl = `${frontImage}${props.image}`

    return(
        <>
            <div>
                    <img src={cardUrl} alt='Frontside Tarot Card'/>
            </div>
        </>
    )
}

export default FrontCard