export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToCards = (navigate) => {
    navigate('/cards')
}

export const goToCardDetail = (navigate, card) => {
    navigate(`/cards/detail`, {state: card})
}