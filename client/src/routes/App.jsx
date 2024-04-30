import './App.css'
import Artwork from '../components/Artwork';
import Slider from '../components/Slider';
import ColorPicker from '../components/ColorPicker';
import Creator from '../components/Creator';
import Checkbox from '../components/Checkbox';
import { useState } from 'react';
import { Form, redirect } from "react-router-dom";

import { createArtwork } from '../services/artwork';


function App() {

  // background

  const [background, setBackground] = useState('#242424');
  const handleSetBackground = (e) => {
    setBackground(e);
  }

  const backgroundStyle = {
    backgroundColor: background
  }
  // input name

  const [inputText, setInputText] = useState("unlock");
  const handleNameChange = (e) => {
    setInputText(e);
  }

  // sun

  const [radius, setRadius] = useState(225);
  const handleSetRadius = (e) => {
    setRadius(e);
  }

  const [colorOne, setColorOne] = useState('red');
  const handleSetColorOne = (e) => {
    setColorOne(e);
  }

  const[offsetOne, setOffsetOne] = useState(0);
  const handleSetOffsetOne = (e) => {
    setOffsetOne(e);
  }

  const offsetOnePercentage = offsetOne + '%';

  const [colorTwo, setColorTwo] = useState('yellow');
  const handleSetColorTwo = (e) => {
    setColorTwo(e);
  }

  const [offsetTwo, setOffsetTwo] = useState(100);
  const handleSetOffsetTwo = (e) => {
    setOffsetTwo(e);
  }

  const offsteTwoPercentage = offsetTwo + '%';

  const [rotation, setRotation] = useState(90);
  const handleSetRotation = (e) => {
    setRotation(e);
  }

  const rotationResult = 'rotate(' + rotation + ')';

  // earth

  const [xPos, setXPox] = useState(38);
  const handleSetXPos = (e) => {
    setXPox(e);
  }

  const [yPos, setYPox] = useState(103);
  const handleSetYPos = (e) => {
    setYPox(e);
  }

  // stars

  const [showStars, setShowStars] = useState(false);
  const handleShowStars = (e) => {
    setShowStars(e);
  }

  
    return(
      <div className='container'>
        <div className='instuctions'>
          <h1>Galaxy Wallpaper Generator &#9788;</h1>
          <h2>change the parameters and start generating</h2>
        </div>
        
        <div className='wrapper'>
          
          <div className='control__panel'>
            <h2>Swipe up to ...</h2>
            <Creator onValueChange={handleNameChange}/>
  
            <h2>Background</h2>
            <ColorPicker onValueChange={handleSetBackground}/>
            <h2>Gradient Sun</h2>
              <Slider label="Size" min="150" max="300" onValueChange={handleSetRadius} />
              <div className='Gradient'>
                <p>Color One</p>
                <ColorPicker label="colorOne" onValueChange={handleSetColorOne}/>
                <p>Color Two</p>
                <ColorPicker label="colorTwo" onValueChange={handleSetColorTwo}/>
              </div>
              <div className='sliders'>
                <Slider label="offsetOne" min="0" max="100" onValueChange={handleSetOffsetOne}/>
                <Slider label="offsetTwo" min="0" max="100" onValueChange={handleSetOffsetTwo}/>
                <Slider label="Rotation" min="0" max="360" onValueChange={handleSetRotation}/>
              </div>
            <h2>Earth</h2>
            <Slider label="Links - Rechts" min="-50" max="143" onValueChange={handleSetXPos}/>
            <Slider label="Boven - Beneden" min="-50" max="280" onValueChange={handleSetYPos}/>
            <h2>Stars</h2>
            <Checkbox label="Show Stars" onValueChange={(isChecked) => setShowStars(isChecked)} />
            
            
            <Form method='POST'>
              <div>
                <span>Title artwork</span>
                <input type="text" placeholder='Spicy Sky' name='title' defaultValue="" />
              </div>
              <input type="hidden" name="data" defaultValue={JSON.stringify()} />
              <p>
                <button type="submit">Save</button>
              </p>
            </Form>

            
          </div>
          <div className='canvas' style={backgroundStyle}>
                <Artwork radius={radius} colorOne={colorOne} colorTwo={colorTwo} rotation={rotationResult} offsetOne={offsetOnePercentage} offsetTwo={offsteTwoPercentage} xPos={xPos} yPos={yPos} showStars={showStars}/>
                <h3 className='maker'>Swipe up to {inputText}</h3>
            </div>
        </div>
      </div>
    );
}

export default App; 