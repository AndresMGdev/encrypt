import logo from '/me.png'

function Header() {
  return (
    <header>
        <img className='logo' src={logo} alt="Logo me" />
        <div className="title-head">
          <h1>Text Encrypted</h1>
        </div>
    </header>
  )
}

export default Header
