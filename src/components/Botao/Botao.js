import { BotaoStart } from "./styled"

const Botao = (props) => {
    return(
        <BotaoStart onClick={() => props.onClick()}>{props.text}</BotaoStart>
    )
}

export default Botao