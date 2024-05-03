
import Artwork from '../components/Artwork';
import Slider from '../components/Slider';
import ColorPicker from '../components/ColorPicker';
import Creator from '../components/Creator';
import Checkbox from '../components/Checkbox';
import { useState } from 'react';
import { Form, redirect } from "react-router-dom";

import { createArtwork } from '../services/artwork';
import { getAuthData } from "../services/auth";

const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.artworkData = JSON.parse(data.artworkData);
  console.log("formdata", data);
  await createArtwork(data);

  return redirect(`/`);
};

const loader = async ({ request }) => {
  const { user } = getAuthData();
  if (!user) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }
  return null;
};

function CreateArtwork() {

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

  const [items] = useState({
    title: "",
    slogan: "",
    backgroundColor: "",
    size: "",
    gradientColorOne: "",
    gradientColorTwo: "",
    gradientOffsetOne: "",
    gradientOffsetTwo: "",
    gradientRotation: "",
    xPosition: "",
    yPosition: "",
    stars: ""

  });

  
    return(
      <div className='container'>
        <div className='instuctions'>
          <h1>Galaxy Wallpaper Generator &#9788;</h1>
          <h2 className="maker__title">Change the parameters and start generating</h2>
        </div>
        
        <div className='wrapper'>
          
          <div className='control__panel'>
            <Form method='POST'>
              <div className="control_group">
                <h3 className="control__title">Swipe up to ...</h3>
                <Creator className="control__name" onValueChange={handleNameChange} name='slogan'/>
              </div>
    
              <h3>Background</h3>
              <ColorPicker onValueChange={handleSetBackground} name='backgroundColor'/>
              <h3>Gradient Sun</h3>
                <Slider label="Size" min="150" max="300" onValueChange={handleSetRadius} name='size'/>
                <div className='Gradient'>
                  <p>Color One</p>
                  <ColorPicker label="colorOne" onValueChange={handleSetColorOne} name='gradientColorOne'/>
                  <p>Color Two</p>
                  <ColorPicker label="colorTwo" onValueChange={handleSetColorTwo} name='gradientColorTwo'/>
                </div>
                <div className='sliders'>
                  <Slider label="offsetOne" min="0" max="100" onValueChange={handleSetOffsetOne} name='gradientOffsetOne'/>
                  <Slider label="offsetTwo" min="0" max="100" onValueChange={handleSetOffsetTwo} name='gradientOffsetTwo'/>
                  <Slider label="Rotation" min="0" max="360" onValueChange={handleSetRotation} name='gradientRotation'/>
                </div>
              <h3>Earth</h3>
              <Slider label="Links - Rechts" min="-50" max="143" onValueChange={handleSetXPos} name='xPosition'/>
              <Slider label="Boven - Beneden" min="-50" max="280" onValueChange={handleSetYPos} name='yPosition'/>
              <h3>Stars</h3>
              <Checkbox label="Show Stars" onValueChange={(isChecked) => setShowStars(isChecked)} name='stars'/>
            
            
            
              <div>
                <span>Title</span>
                <input type="text" placeholder='Spicy Sky' name='title' defaultValue="" />
              </div>
              <input type="hidden" name="artworkData" defaultValue={JSON.stringify(items)} />
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
CreateArtwork.action = action;
CreateArtwork.loader = loader;
export default CreateArtwork; 