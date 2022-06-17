import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {Container} from 'react-bootstrap'
import Hoteldeatails from "./components/Hoteldeatails"

function App() {

  return (

 <Router>
     <Header/>
      <main className="App">
  
<Container>
      <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/deatails/:id" element={<Hoteldeatails/>}/>
        </Routes>
</Container>
      </main>
 </Router>
  );
}

export default App;
