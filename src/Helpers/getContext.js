const getContext = () => {
    
    const canvas = document.getElementById("canvas1")
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'white';
    return { context }
}
export default getContext