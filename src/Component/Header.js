import '../App.css';

function Header(props) {
  return (
    <div className="header">
        <header>
            <p>Current user: {props.name} </p>
        </header>
    </div>
  );
}

export default Header;
