import Flow from '../Flow';
import Upload from '../Upload';
import { Container } from '@mui/material';
import { borders } from '@mui/system';
import Box from '@mui/material/Box';


import './App.css';


function App() {
  return (
    <div className="App">
        {/*<Container maxWidth={false}>*/}
        {/*    <Box sx={{ bgcolor: '#cfe8fc', border: 1,borderColor: 'secondary'  }} >*/}
        {/*        <Flow data={'fff'}/>*/}
        {/*</Box>*/}
        {/*</Container>*/}

     <div className='Upload_container'><Upload /></div>


    </div>
  );
}

export default App;
