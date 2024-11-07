import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer color="brown" greeting= "Hi, welcome to our store, you metal maniac!!" />
      </div>
   
    </>
  )
}

export default App
