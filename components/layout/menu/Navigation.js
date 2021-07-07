import { motion } from "framer-motion";
import MenuItem from './MenuItem';
import classes from './menu.module.css'

const variants = {
    open: {
        transition: {staggerChidren: 0.07,delayChildren:0.2}
    },
    closed: {
        transition:{staggerChidren:0.05,staggerDirection:-1}
    }
}

const itemsID = [0, 1, 2, 3, 4];

const Navigation = () => (
    <motion.ul className={classes.unOrderedList} variants={variants} >
        {itemsID.map(i => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
)

export default Navigation