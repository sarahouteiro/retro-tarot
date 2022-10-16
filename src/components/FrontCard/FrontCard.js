import { frontImage } from "../../constants/urls"
import { Carta } from './styled'

const FrontCard = (props) => {
    const cardUrl = `${frontImage}${props.image}`

    return(
        <Carta>
            <img src={cardUrl} alt='Frontside Tarot Card'/>
        </Carta>
    )
}

export default FrontCard