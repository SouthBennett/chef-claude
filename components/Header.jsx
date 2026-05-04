import chefClaudeLogo from "/img/chef-claude.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={chefClaudeLogo} alt="Claude Logo" className="header-image"/>
        <h1 className="header-title">Chef Claude</h1>
      </header>
    </>
  )
}