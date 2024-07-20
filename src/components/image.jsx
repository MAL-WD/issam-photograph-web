import React, { useEffect, useState } from "react"; 
import { Blurhash } from "react-blurhash";
const Image = ({ src,placeholder,  alt ,hash}) => {
    const [imageLoaded,setImagedLoaded]=useState(false)
    useEffect(()=>{
        const img =new window.Image();
        img.onload=()=>{
            setImagedLoaded(true)
        }
        img.src=src
        
    },[src])
return(
        <>
        {!imageLoaded&&(
            <Blurhash
            className="rounded-3xl max-h-[700px] w-full"
            hash={hash}
            width={"100%"}
            height={"100%"}
            resolutionX={32}
            resolutionY={32}
            punch={1}
            />)}
    {imageLoaded&&<img className="rounded-3xl max-h-[700px] w-full" src={src} alt={alt} />}
    </>

)
}
export default Image;