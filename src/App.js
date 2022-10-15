import Router from './routes/Router'
import { GlobalStyle, Container } from './styled'

const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Router/>
    </Container>
  )
}

export default App
