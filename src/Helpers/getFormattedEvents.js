import Events from "../Data/events"
const getFormattedEvents = (isFirstTwoElements=true) => {
    
    const events = []
    Events.forEach((event) => {
        let x, y
        isFirstTwoElements ? [x, y] = event :  [ , , y, x] = event
        x = Math.floor( x * 400 / 250000);
        y = 400 - Math.floor( y * 400 / 250000);
        events.push([x, y])
    })
    return events
}
export default getFormattedEvents