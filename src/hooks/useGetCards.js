import { useEffect, useState } from "react"
import axios from "axios"

const useGetCards = () => {
    const [ cards, setCards ] = useState([])

    useEffect(() => {
        axios.get('tarot.json')
        .then((res) => {
            setCards(res.data.cards)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return {
        cards
    }
}

export default useGetCards