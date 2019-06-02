import React from 'react';
import ImageTogglerOnMouseHover from '../src/imageTogglerOnMouseOver';
const imageChangeOnHover = () => {
    return (
    <div>
         <ImageTogglerOnMouseHover 
            primaryImage="/static/galazy.png" 
            secondaryImage="/static/galazygray.jpg" 
            alt="galaxia" 
            
        />
         <ImageTogglerOnMouseHover
            primaryImage="/static/caticorn.jpg" 
            secondaryImage="/static/caticorngray.jpg" 
            alt="gato" 
            width="500" 
        />
    </div>
    );
}

export default imageChangeOnHover;