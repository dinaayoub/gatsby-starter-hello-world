import React from "react"
import './header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
function Header(props) {
  return <header>
    <AppBar position="static" className="navbar">
      <div className="navbar">
        <Toolbar>
          <Typography variant="h4"><Link color="inherit" >Home</Link></Typography>
          <Typography variant="h4"><Link color="inherit">Portfolio</Link></Typography>
        </Toolbar>
      </div>
    </AppBar>
  </header>
}
export default Header;