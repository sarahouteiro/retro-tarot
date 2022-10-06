import BackCard from '../../components/BackCard/BackCard'
import { goToCardDetail, goToCards, goToHomePage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useGetCards from '../../hooks/useGetCards'
import {  CartasDiv, Titulo, Title, Mesa, Cartas } from './styled'
import CardsTitle from '../../assets/cardstitle.png'
import Botao from '../../components/Botao/Botao'

const Cards = () => {
    const { cards } = useGetCards()

    const navigate = useNavigate()

    const cardsList = cards.map((card) => {
        return(
            <BackCard onClick={() => goToCardDetail(navigate, card)} key={card.name}/>
        )
    })

    return(
        <>
            <CartasDiv>
                <Titulo>
                    <Botao text='HomePage' onClick={() => goToHomePage(navigate)}/>
                    <Title src={CardsTitle} alt='Concentre-se e clique na carta que escolher'/>
                    <Botao text='Recomeçar' onClick={() => goToCards(navigate)}/>
                </Titulo>
                <Mesa>
                    <Cartas>
                        {cardsList}
                    </Cartas>
                </Mesa>
            </CartasDiv>
        </>
    )
}

export default Cards