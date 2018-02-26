import React, { Component } from 'react';
import './App.css';
import cars from './cars.json'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import CarCard from './components/CarCard'

class App extends Component {
    state = {
        message: "Click on a car image to begin the game!",
        topScore: 0,
        curScore: 0,
        cars: cars,
        unselectedCars: cars
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

}

export default App;

