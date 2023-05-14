const { motion } = require("framer-motion");
const Backdrop = ({children,onclick})=>{
    return(
        <motion.div 
        className="backdrop"
      
        >
            {children}
        </motion.div>
    )
}

export default Backdrop