
import './panel.css';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { useEffect, useState } from "react";
import InterestsIcon from '@mui/icons-material/Interests';
import MediationIcon from '@mui/icons-material/Mediation';
import Stack from '@mui/material/Stack';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return position;
};

const Custompanel =({onAdd}) => {
    // const position = useMousePosition();

  return (
   
         <Box>
      <Stack spacing={12}>
        <Box></Box>
        <Box></Box>
         <Box>
      <Tabs sx={{ bgcolor: '#D8D8D8', border:'1px solid grey', borderRadius:'10%', width:'70%',padding:'1' }} orientation="vertical">
        <Tab sx={{ bgcolor: '#D8D8D8',  marginLeft:'-13px;' }}icon={<InterestsIcon />} onClick={onAdd} />
        <Tab sx={{ bgcolor: '#D8D8D8',  marginLeft:'-13px;' }} icon={<DashboardCustomizeIcon />} />
        <Tab sx={{ bgcolor: '#D8D8D8',  marginLeft:'-13px;' }} icon={<MediationIcon />}/>
      </Tabs>
      </Box >
      </Stack>
      </Box>
  );
}
export default Custompanel;
