import { Link } from "react-router-dom"
import "./NavBar.less"

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/marked">Marked</Link>
      <Link to="/toastui">ToastUI</Link>
    </nav>
  )
}

export default NavBar