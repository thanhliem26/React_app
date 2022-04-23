import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
  return (
    <div className="nav__link">
      <NavLink to="/" activeclassname="active">
        Home
      </NavLink>
      <NavLink to="/table" activeclassname="active">
        Table
      </NavLink>
      <NavLink to="/tooltip" activeclassname="active">
        React Tooltip
      </NavLink>
      <NavLink to="/exampleStyled" activeclassname="active">
        Validate Form
      </NavLink>
    </div>
  )
}

export default Nav
