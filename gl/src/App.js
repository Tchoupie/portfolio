import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import {shake} from 'react-animations';
import {fadeInDown} from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const Shake = styled.div`animation: 2s ${keyframes`${shake}`} infinite`;
const FadeInDown = styled.div`animation: 2s ${keyframes`${fadeInDown}`}`;

class Home extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      isOpen:false
    };
  }

  openClick = () => {
    this.setState(state => ({
      isOpen : !state.isOpen
    }));
  }

  render()
  {
    return (
    <div className="App">
      <header className="App-header">
        <Bounce><img src={logo} className="App-logo" alt="logo" /></Bounce>
        <p><code>PortFolio</code></p>
        <p>
          <code>Gaëtan Limentour</code>
        </p>
        <Shake onClick= {this.openClick}>
          Ouvrir
        </Shake>
        {this.state.isOpen ? <FadeInDown><p>Hello</p></FadeInDown> : <p></p> }
      </header>
    </div>);
  }
}

function App() {
  return <Home/>
}

export default App;
