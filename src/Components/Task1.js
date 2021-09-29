import { useEffect } from 'react';
import getContext from '../Helpers/getContext';
import getFormattedEvents from '../Helpers/getFormattedEvents';


const Task1 = () => {

    useEffect(() => {
        const { context } = getContext()
        getFormattedEvents().map(([x, y]) => context.fillRect(x, y, 3, 3))
    }, [])
    
    return ( <canvas className = "canvas1" id="canvas1" width="400" height="400"/> )
}

export default Task1;