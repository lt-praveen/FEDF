function Navbar() {

  const showMessage = (page) => {
    alert(`${page} page will open soon.`);
  };

  return (
    <nav className="navbar">

      <h2>Land Records Portal</h2>

      <ul>
        <li onClick={() => showMessage("Home")}>Home</li>

        <li onClick={() => showMessage("Search")}>
          Search
        </li>

        <li onClick={() => showMessage("Services")}>
          Services
        </li>

        <li onClick={() => showMessage("Track Status")}>
          Track Status
        </li>

        <li onClick={() => showMessage("Login")}>
          Login
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;