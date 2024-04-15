import React from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from './animals';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';

const background = <img class='background' alt='ocean' src="./images/ocean.jpg"/>

const images = [];

for (const animal in animals) {
    const image = (
        <img
            onClick={displayFact} 
            key={animal} 
            className ='animal' 
            alt={animal} 
            src={animals[animal].image} 
            aria-label={animal} 
            role='button' 
        /> 
    );
    images.push(image);
}

function displayFact(e) {
    const animal = e.target.alt;
    let index = Math.floor(Math.random() * animals[animal].facts.length);
    let funFact = animals[animal].facts[index];
    const p = document.getElementById('fact')
    p.innerHTML = funFact;
}

const showBackground = true;

const animalFacts = (
    <div>
        <h1>{title  === '' ? 'Click an animal for a fun fact' : title}</h1>
        {showBackground && background}
        <p id="fact"></p>
        <div className='animals'>
            {images}
        </div>
    </div>
);

root.render(animalFacts);