import ErrorImage from '../../assets/errorimage.png'
import { Container, Error } from './styled'
import Botao from '../../components/Botao/Botao'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'

const ErrorPage = () => {
    const navigate = useNavigate()

    return(
        <>
            <Container>
                <Error src={ErrorImage} alt='Algo deu errado!'/>
                <Botao text='Voltar para a HomePage' onClick={() => {goToHomePage(navigate)}}/>
            </Container>
        </>
    )
}

export default ErrorPage