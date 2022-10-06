import { backImage } from '../../constants/urls'
import { Carta } from './styled'

const BackCard = (props) => {
    return(
        <Carta>
            <div onClick={() => props.onClick()}>
                <img src={backImage} alt='Backside Tarot Card'/>
            </div>
        </Carta>
    )
}

export default BackCard