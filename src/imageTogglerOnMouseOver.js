import React,{useRef} from 'react';

const ImageTogglerOnMouseOver = ({primaryImage, secondaryImage}) => { 
    const imageRef = useRef(null);
    return (<img 
        onMouseOver={()=>{ imageRef.current.src = primaryImage}}
        onMouseOut={()=>{ imageRef.current.src = secondaryImage}}
        src={primaryImage} 
        alt="" 
        ref={imageRef}
        width="500" />
    );
}
export default ImageTogglerOnMouseOver;