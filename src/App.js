import './App.css';
import {Switch, Route} from 'react-router-dom'
import UnsplashApp from './components/UnsplashApp'
import UnsplashView from './components/UnsplashView'

function App() {
  return (
    <>
            <Switch>
                <Route exact path="/" component={UnsplashApp} />
                <Route exact path="/view/" component={UnsplashView} />
            </Switch>
    </>
  );
}

export default App;
