import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Container>
        <Router>
        <Header/>
         <Switch>
           <Route exact path="/">
             <Login />
           </Route>
           <Route path="/home">
             <Home/>
           </Route>
         </Switch>
        </Router>

      </Container>
      
    </div>
  );
}

export default App;


const Container = styled.div``