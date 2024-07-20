import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const Reveal = ({children,delay=0.25 ,left,right}) => {
    const ref = useRef(null)
    const isInView=useInView(ref,{once:true})
    const mainControls=useAnimation()
    useEffect(()=>{
        if (isInView) {
                mainControls.start("visible");
        }
    },[isInView])
    return ( 
    <div ref={ref} style={{position:"relative",overflow:"hidden"}}>
        <motion.div
        variants={{
             hidden:left?{opacity:0,x:75}:right?{opacity:0,x:-75}:{opacity:0,y:75},
            visible:{opacity:1,y:0,x:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5, delay:delay}}
        >
            {children}
        </motion.div>
    </div> );
}
 
export default Reveal;