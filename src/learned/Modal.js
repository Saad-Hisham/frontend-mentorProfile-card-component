import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { useState } from "react";
const Modal =({handleClose,text})=>{
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
    const childVariants = {
        initial: {
          opacity: 0,
          y: 50,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      };
    return(
<motion.div onClick={handleClick}>
    click
      <motion.div
        variants={childVariants}
        initial="initial"
        animate={isClicked ? "animate" : "initial"}
      >
        hello
      </motion.div>
    </motion.div>


    )

}
export default Modal