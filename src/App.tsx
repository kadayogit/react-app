import ListGroup from "./components/ListGroup";

let items = ["Hargeisa", "Burco", "Berbera", "Borama", "Ceerigabo"];
function App() {
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;