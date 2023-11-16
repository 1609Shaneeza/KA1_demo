import { useContext } from "react";
import NameForm from "./NameForm";
import NameProvider, { NameContext } from "./NameProvider";


function App() {

  return (
    <>
    <NameProvider>
      <h1>Hello World!</h1>
      <NameForm />
    </NameProvider>
    
    </>
  )
}

export default App;
