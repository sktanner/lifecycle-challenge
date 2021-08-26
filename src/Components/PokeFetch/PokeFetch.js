import React, { Component } from 'react'
import CountdownTimer from '../CountdownTimer';
import './PokeFetch.css';


class PokeFetch extends Component {
  constructor() {
    super()
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      count: 10
    }
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        })
      })
      .catch((err) => console.log(err))
  }

  timer() {
    // let myTimer = setInterval(() => function () {
      // var seconds = document.getElementById("timer").textContent;
      this.countdown = setInterval(() => {
       this.setState(prevState => ({
         count: prevState.count - 1
       }),console.log(this.state.count))
       if (this.state.count === 0){ 
        clearInterval(this.countdown)
      } if (this.state.count < 0){
        this.setState({count: 10})
      }
      }, 1000)
    }

  render() {
    if (this.state.count > 0){
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => {this.fetchPokemon(); this.timer()}}>Start!</button>
        
        <h1 className={'timer'} >{this.state.count}</h1>
        <div className={'pokeWrap'}>
          <img className={'darkImg'} src={this.state.pokeSprite} />
          
        </div>
        </div>
    )
  } else {
    return(
     <div className={'wrapper'}>
     <button className={'start'} onClick={() => {this.fetchPokemon(); this.timer()}}>Start!</button>
      
      <h1 className={'timer'} >{this.state.count}</h1>
      <div className={'pokeWrap'}>
        <img className={'pokeImg'} src={this.state.pokeSprite} />
        <h1 className={'pokeName'}>{this.state.pokeName}</h1>
      </div>
      </div>
    )
  }
    
  
  }
}

export default PokeFetch;