import BackCard from '../../components/BackCard/BackCard'
import { goToCardDetail, goToHomePage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useGetCards from '../../hooks/useGetCards'
import { Header, Titulo, Logo, Title, Mesa, Cartas } from './styled'
import CardsTitle from '../../assets/cardstitle.png'
import CleanLogo from '../../assets/cleanlogo.png'

const CardsPage = () => {
    const { cards } = useGetCards()

    const navigate = useNavigate()

    const cardsList = cards.map((card) => {
        return(
            <BackCard onClick={() => goToCardDetail(navigate, card)} key={card.name}/>
        )
    })

    return(
        <>
            <Header>
                <Logo onClick={() => goToHomePage(navigate)} src={CleanLogo} alt='retro-tarot'/>
                <Titulo>
                    <Title src={CardsTitle} alt='Concentre-se e clique na carta que escolher'/>
                </Titulo>
            </Header>
            <Mesa>
                <Cartas>
                    {cardsList}
                </Cartas>
            </Mesa>
        </>
    )
}

export default CardsPage