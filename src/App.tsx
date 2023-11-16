import NameForm from "./NameForm";
import NameProvider from "./NameProvider";


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
