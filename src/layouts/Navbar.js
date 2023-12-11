import { NavLink, Outlet } from "react-router-dom"

const style = {
  
  navbar:{
    margin: 0,
    padding:0,
  },
  header: {
    height: '50px',
    background: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  webname: {
    marginLeft: '40px',
  },
  nav:{
    display: 'flex',
    gap: '18px',
    color:'white ',
    marginRight: '40px',
    direction: 'rtl',
  },
  menu:{
    display: 'flex',
    color:'white',
    textDecoration: 'none',

  }
}

function Navbar() {
  return (
    <div style={style.navbar}>
        <header style={style.header}>
            <div style={style.webname}>website</div>
            <nav style={style.nav}>
                <NavLink style={style.menu} to="/">בית</NavLink>
                <NavLink style={style.menu}to="beithHamidras">בית המדרש</NavLink>
                <NavLink style={style.menu} to="donations">תרומות</NavLink>
                <NavLink style={style.menu} to="contact">צור קשר</NavLink>
                <NavLink style={style.menu} to="gallery">גלריה</NavLink>
                <NavLink style={style.menu} to="about">אודות</NavLink>
                <NavLink style={style.menu} to="forum">פורום</NavLink>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default Navbar