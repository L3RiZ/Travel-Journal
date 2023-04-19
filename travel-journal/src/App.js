import './App.css';
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"

function App() {
  const card = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <>
      <Nav />
      {card}
    </>
  );
}

export default App;
