import { backImage } from '../../constants/urls'
import { Carta } from './styled'

const BackCard = (props) => {
    return(
        <Carta onClick={() => props.onClick()}>
            <img src={backImage} alt='Backside Tarot Card'/>
        </Carta>
    )
}

export default BackCard