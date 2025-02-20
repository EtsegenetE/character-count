import search from "./image/search.png"

function Header() {
    return (
        <div>
            <header className="header">
                <img 
                    src={search}
                    width="40px"
                    height="40px"
                    alt="search icon"
                />
                <h4>Character Counter</h4>
            </header>

            <div className="title">
                <h1>Analyze your text <br />in real-time.</h1>
            </div>
        </div>
    );
}

export default Header;