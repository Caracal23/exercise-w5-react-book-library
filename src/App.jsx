import "./App.css";
import Header from "./components/Header";
import data from "./data.json";

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
