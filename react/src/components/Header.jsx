function Header() {
  
    return (
      <>
      <header>
        <div className="nav-container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <h1 id="navbar-logo">
              <i className="fa-solid fa-frog"></i>
              <a href="index.html" id="banner" title="Play2Learn Home Page">Play2Learn</a>
            </h1>
            <ul className="nav-menu">
              <li className="nav-links"><a href="/src/public/index.html">Home</a></li>
              <li className="nav-links" id="games">Games</li>
                <ul id="games-links">
                  <li className="nav-links p2lgames"><a href="/src/public/games/anagram-hunt.html" target="_blank">Anagram
                      Hunt</a></li>
                  <li className="nav-links p2lgames"><a href="/src/public/games/math-facts.html" target="_blank">Math Facts
                      Practice</a></li>
                </ul>
              <li className="nav-links"><a href="/src/public/about.html">About</a></li>
              <li className="nav-links"><a href="/src/public/login.html">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
      </>
    )
    
  }
  
  export default Header
  