import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useEffect, useState } from "react"
const Header = () => {
    const history = useHistory()
    const [currentTask, setCurrentTask] = useState("")
    
    useEffect(() => {
        history.listen((location) =>setCurrentTask(location.pathname))
        // eslint-disable-next-line
    }, [history])

    return(
        <nav className="navbar">
            <div className={`${currentTask === '/task1' && 'active'}`} > 
                <Link to="/task1"><a href >Task 1</a></Link>
            </div>
            <div className={`${currentTask === '/task2' && 'active'}`} > 
                <Link to="/task2"><a href >Task 2</a></Link>
            </div>
            <div className={`${currentTask === '/task3' && 'active'}`} > 
                <Link to="/task3"><a href >Task 3</a></Link>
            </div>
        </nav>
    )
}
export default Header