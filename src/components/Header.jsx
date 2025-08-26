const Header = () => {
  return (
    <header>

      <div className="container">
        <div className="row align-center justify-between">
          <div id="logo" className="col-25">
            <img src="../public/img/dc-logo.png" alt="Logo" />
          </div>
          <div className="list col-75">
            <ul className="d-flex">
              <li><a href="#">Characters</a></li>
              <li><a href="#" className="active">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Collectibles</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Fans</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
        </div>
      </div>


    </header>


  )
}

export default Header
