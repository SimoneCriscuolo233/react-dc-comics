const Header = () => {
  const menu = [
    {
      id: 1,
      label: "Characters",
      href: "#",
      active: false
    },
    {
      id: 2,
      label: "Comics",
      href: "#",
      active: true
    },
    {
      id: 3,
      label: "Movies",
      href: "#",
      active: false
    },
    {
      id: 4,
      label: "Tv",
      href: "#",
      active: false
    },
    {
      id: 5,
      label: "Games",
      href: "#",
      active: false
    },
    {
      id: 6,
      label: "Collectibles",
      href: "#",
      active: false
    },
    {
      id: 7,
      label: "Videos",
      href: "#",
      active: false
    },
    {
      id: 8,
      label: "Fans",
      href: "#",
      active: false
    },
    {
      id: 9,
      label: "News",
      href: "#",
      active: false
    },
    {
      id: 10,
      label: "Shop",
      href: "#",
      active: false
    },
  ]
  return (
    <header>

      <div className="container">
        <div className="row align-center justify-between">
          <div id="logo" className="col-25">
            <img src="../public/img/dc-logo.png" alt="Logo" />
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
