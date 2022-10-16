import {
    CardModalBackdrop,
    BackCardContainer,
    FrontCardContainer,
    CardModalBody,
    Close
} from './styled'
import BackCard from '../BackCard/BackCard'
import FrontCard from '../FrontCard/FrontCard'
import { useState, useEffect } from 'react'

const CardModal = (props) => {
    const [showBackCard, setShowBackCard] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowBackCard(false)
        }, 1500)
    }, [])

    return(
        <>
            <CardModalBody>

                {showBackCard && <BackCardContainer>
                    <BackCard />
                </BackCardContainer>}

                {!showBackCard && <FrontCardContainer>
                    <FrontCard image={props.selectedCard.image}/>
                </FrontCardContainer>}
                <span>
                    <Close onClick={props.closeModal} />
                    <h2>{props.selectedCard.name}</h2>
                    <p>{props.selectedCard.description}</p>
                </span>
            </CardModalBody>
            <CardModalBackdrop onClick={props.closeModal}/>
        </>
    )
}

export default CardModal;