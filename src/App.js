import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Header from './pages/static/Header'
import Footer from './pages/static/Footer'

function App() {
    return (
        <div className="contanter-fluid bg-dark text-light">
            <Header />
                <Switch>
                    <Route exact={true} path='/'>
                        <About />
                    </Route>
                    <Route exact={true} path='/about'>
                        <About />
                    </Route>
                    <Route exact={true} path='/work'>
                        <Work />
                    </Route>
                    <Route exact={true} path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
            <Footer />
        </div>
    )
}

export default App;
