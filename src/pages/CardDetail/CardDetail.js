import FrontCard from "../../components/FrontCard/FrontCard"
import { useLocation, useNavigate } from 'react-router-dom'
import { goToCards, goToHomePage } from "../../routes/coordinator"
import { Container, ImageDiv, TextDiv, BotaoDiv } from './styled'
import Botao from '../../components/Botao/Botao'


const CardDetail = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const { name, image, description } = location.state

    return(
        <>  <BotaoDiv>
                <Botao text='HomePage' onClick={() => goToHomePage(navigate)}/>
                <Botao text='Recomeçar' onClick={() => goToCards(navigate)}/>
            </BotaoDiv>
            <Container>
                <ImageDiv>
                    <FrontCard image={image}/>
                </ImageDiv>
                <TextDiv>
                <p>{name}</p>
                <p>{description}</p>
                </TextDiv>
            </Container>
        </>
    )
}

export default CardDetail