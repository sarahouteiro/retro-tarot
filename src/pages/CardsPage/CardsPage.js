import { useState } from 'react'
import BackCard from '../../components/BackCard/BackCard'
import { goToHomePage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useGetCards from '../../hooks/useGetCards'
import { Header, Titulo, Logo, Title, Mesa, Cartas, ShuffleBack, ShuffleFront } from './styled'
import CardsTitle from '../../assets/cardstitle.png'
import CleanLogo from '../../assets/cleanlogo.png'
import CardModal from '../../components/CardModal/CardModal'
import Botao from '../../components/Botao/Botao'
import FrontCard from '../../components/FrontCard/FrontCard'

const CardsPage = () => {
    const [ selectedCard, setSelectedCard ] = useState()
    const [ openModal, setOpenModal ] = useState(false)
    const [ showCards, setShowCards ] = useState(true)
    const { cards } = useGetCards()
    const navigate = useNavigate()

    const selectCard = (card) => {
        setSelectedCard(card)
        setOpenModal(true)
    }

    const clearModal = () => {
        setSelectedCard(null)
        setOpenModal(false)
    }

    const backCardsList = cards.map((card, index) => {
        return <ShuffleBack><BackCard key={index} onClick={() => selectCard(card)}/></ShuffleBack>
    })

    const frontCardsList = cards.map((card, index) => {
        return <ShuffleFront><FrontCard key={index} image={card.image}/></ShuffleFront>
    })

    return(
        <>
            <Header>
                <Logo onClick={() => goToHomePage(navigate)} src={CleanLogo} alt='retro-tarot'/>
                <Titulo>
                    <Title src={CardsTitle} alt='Concentre-se e clique na carta que escolher'/>
                </Titulo>
                <Botao text="Tirar Carta" onClick={() => setShowCards(!showCards)}/>
            </Header>
            <Mesa>
                {openModal && <CardModal selectedCard={selectedCard} closeModal={clearModal} />}
                <Cartas>
                    {showCards ? frontCardsList : backCardsList}
                </Cartas>
            </Mesa>
        </>
    )
}

export default CardsPage