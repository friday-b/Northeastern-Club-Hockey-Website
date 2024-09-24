import {useEffect, useState} from "react";


const images = ["/images/home-example.png","/images/home-example2.jpeg", 
"/images/home-example3.jpg"
];

export function Slideshow() {

const [imageID, setImageID] = useState(0);


useEffect(() => {
    const interval = setInterval(() => {
        setImageID((prevImageID) => (prevImageID === images.length - 1 ? 0 : prevImageID + 1));
    }, 1000);
    return () => clearInterval(interval);
}, [imageID]);


    return (
        <div>
        <img src = {images[imageID]} />
        </div>
    );
}


