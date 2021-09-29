import { useEffect } from 'react';
import getContext from '../Helpers/getContext';
import getFormattedEvents from '../Helpers/getFormattedEvents';
import Polygons from '../Data/polygon';
import Events from '../Data/events';
const pointInPolygon = require('point-in-polygon');


const Task3 = () => {

    useEffect(() => {
        const { context } = getContext()
        context.fillStyle = 'red'
        getFormattedEvents(false).map(([x, y], index) => pointInPolygon([Events[index][0], Events[index][1]], Polygons) && context.fillRect(x, y, 3, 3))
    }, [])
    
    return (<canvas className = "canvas1" id="canvas1" width="400" height="400"/>)
}

export default Task3;