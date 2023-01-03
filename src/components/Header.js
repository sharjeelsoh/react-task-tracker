import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  
  return (
    <header className="header">
        <h1>{title}</h1>
        {location.pathname === '/' && (
          <Button 
            color={showAdd ? 'Red' : 'Green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
          />)
        }
    </header>
  )
}

// Default value for title property, in case if not provided one
Header.defaultProps = {
    title: 'Task Tracker',
}

// Property types, in this case, title property type should be string (required)
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
