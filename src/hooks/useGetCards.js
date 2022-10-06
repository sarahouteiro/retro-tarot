import { useEffect, useState } from "react"
import axios from "axios"
import shuffleArray from "../helpers/shuffleArray"

const useGetCards = () => {
    const [ cards, setCards ] = useState([])

    useEffect(() => {
        axios.get('tarot.json')

        .then((res) => {
            const shuffledArray = shuffleArray(res.data.cards)
            setCards(shuffledArray)
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