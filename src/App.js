import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import Header from './components/Header';

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
         </Switch>
        </Router>

      </Container>
      
    </div>
  );
}

export default App;


const Container = styled.div``