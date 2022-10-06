import { goToCards } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { HomePageDiv } from './styled'
import TitleImage from '../../assets/titleimage.png'
import Botao from '../../components/Botao/Botao'

const HomePage = () => {
    const navigate = useNavigate()

    return(
        <>
            <HomePageDiv>
                <img src={TitleImage} alt='Retrô Tarot'/>
                <p>Tire uma carta agora e veja como você pode aproveitar o melhor do seu dia!</p>
                <Botao text='Tirar Carta' onClick={() => goToCards(navigate)}/>
            </HomePageDiv>
        </>
    )
}

export default HomePage