import React from 'react';
import ImageTogglerOnScroll from '../src/imageTogglerOnScroll';
const imageChangeOnScroll = () => {
    return (
    <ul>
         <ImageTogglerOnScroll 
            primaryImage="/static/galazy.png" 
            secondaryImage="/static/galazygray.jpg" 
            alt="galaxia" 
            
        />
         <ImageTogglerOnScroll
            primaryImage="/static/caticorn.jpg" 
            secondaryImage="/static/caticorngray.jpg" 
            alt="gato" 
            width="500" 
        />
         <ImageTogglerOnScroll
            primaryImage="/static/caticorn.jpg" 
            secondaryImage="/static/caticorngray.jpg" 
            alt="gato" 
            width="500" 
        />
        
    </ul>
    );
}

export default imageChangeOnScroll;