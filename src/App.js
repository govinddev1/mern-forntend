import styled from '@emotion/styled';
import './App.css';
import  Form  from './components/Form';
import { Typography } from '@mui/material';


function App() {
  const StickyHeader = styled("div")({
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "blue", 
    background: "linear-gradient(45deg, #f54b4b 30%, #a7a7a7 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    borderRadius: "0px 0px 10px 10px",
    color:"white",

    padding: (theme) => theme.spacing(2),
  });
  return (
    <div className="App">
         <StickyHeader>
        <Typography variant="h3" gutterBottom >
          MERN Stack App
        </Typography>
      </StickyHeader>
    <Form/>
    </div>
  );
}

export default App;

