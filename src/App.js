import './App.css';
import {Routes , Route} from "react-router-dom";
import ExerciseDetail from './Pages/ExerciseDetail/ExerciseDetail';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Box } from "@mui/material";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
     </Routes>
     <Footer/>
    </Box>
  );
}

export default App;
