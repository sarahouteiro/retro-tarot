import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import CardsPage from '../pages/CardsPage/CardsPage'
import CardDetailPage from '../pages/CardDetailPage/CardDetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='cards' element={<CardsPage/>}/>
                <Route path='cards/detail' element={<CardDetailPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router