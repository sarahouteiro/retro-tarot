import { useState } from 'react'
import BackCard from '../../components/BackCard/BackCard'
import { goToCardDetail, goToHomePage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useGetCards from '../../hooks/useGetCards'
import { Header, Titulo, Logo, Title, Mesa, Cartas } from './styled'
import CardsTitle from '../../assets/cardstitle.png'
import CleanLogo from '../../assets/cleanlogo.png'
import CardModal from '../../components/CardModal/CardModal'

const CardsPage = () => {
    const [ selectedCard, setSelectedCard ] = useState()
    const [ openModal, setOpenModal ] = useState(false)
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

    const cardsList = cards.map((card) => {
        return(
            <BackCard onClick={() => selectCard(card)} key={card.name}/>
            // <BackCard onClick={() => goToCardDetail(navigate, card)} key={card.name}/>
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
                {openModal && <CardModal selectedCard={selectedCard} closeModal={clearModal} />}
                <Cartas>
                    {cardsList}
                </Cartas>
            </Mesa>
        </>
    )
}

export default CardsPage