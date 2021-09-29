import  { useEffect } from 'react';
import Events from './../Data/events';
import Polygons from './../Data/polygon';
import getContext from '../Helpers/getContext';
import getFormattedEvents from '../Helpers/getFormattedEvents';
const pointInPolygon = require('point-in-polygon');

const Task2 = () => {

    useEffect(() => {
        const { context } = getContext()
        getFormattedEvents().forEach(([x, y], index) => {
            context.fillStyle = pointInPolygon([Events[index][0], Events[index][1]], Polygons) ? 'red' : 'white'
            context.fillRect(x, y, 3, 3)
        })
    }, [])
    
    return (<canvas className = "canvas1" id="canvas1" width="400" height="400"/>)
}

export default Task2;