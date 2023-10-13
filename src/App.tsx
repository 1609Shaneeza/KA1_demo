import ToDoList from "./components/ToDoList";

function App() {

  return (
    <>
    <ToDoList title = "Shopping List" items = {["Milk", "Cheese", "Bread","Butter"]} />

    <ToDoList title= "Chores" items= {["Vaccum", "Wash Dishes", "Laundry"]} />
    </>
  )
}

export default App
