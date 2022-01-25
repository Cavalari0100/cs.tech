import './App.css';

function App() {
  return (
    <div className="App">
      <img
        style={{
          paddingBottom: "1em",
          width: "500px",
          height: "500px",
        }}
        src={"/logo-cstech.png"}
        alt="Logo-Pagina"
      />
      <p style={{color:"white"}}>Site
        <b><a
          className="App-link"
          href="https://www.facebook.com/CS.TechnologySystems"
          target="_blank"
          rel="noopener noreferrer"
        >
          CS.TECH
        </a></b>
        em produção</p>
    </div>
  );
}

export default App;
