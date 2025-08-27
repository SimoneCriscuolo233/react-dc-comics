const Header = ({ menu }) => {
  return (
    <header>
      <div className="container">
        <div className="row align-center justify-between">
          <div id="logo" className="col-25">
            <img src="/img/dc-logo.png" alt="Logo" />
          </div>
          <div className="list col-75">
            <ul className="d-flex">
              {menu.map((elem) => {
                const { id, href, active, label } = elem
                return <li key={id}><a href={href} className={active === true ? "active" : ""}>{label}</a></li>

              })}

            </ul>
          </div>
        </div>
      </div>


    </header>


  )
}

export default Header
