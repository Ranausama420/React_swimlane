import './upload.css';
import { useRef, useState } from "react";
import Log from '../log';
import Flow from "../Flow";
import Diagram from "../diagram";
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import SelectSmall from '../Upload/dropdown'
import FlowWithProvider from "../Flow";

let bottom_sx={border: 1,borderColor: 'secondary',margin:0.5,minHeight:330, bgcolor:'#D9D9D9' }

function Upload() {
    const [file, setFile] = useState();
    const [state,setstate] = useState({data:""});
    const [isShown, setIsShown] = useState(false);
    const fileRef = useRef();

    const onChangeFile = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const updatedJSON = e.target.files[0];
            console.log(updatedJSON.type);
            const fileReader = new FileReader();
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = e => {
                console.log("e.target.result", e.target);
                const target = e.target;
                const result = target?.result;
                console.log(result);
                console.log(typeof result);
                setstate({data:result});
                setIsShown(current => !current);

            }

        }
    };

    return (


        <Container maxWidth={false}>
            <Box sx={{ bgcolor: '#D9D9D9', border: 1,borderColor: 'secondary',minHeight:630 ,margin:0.5}} >
                {/*{isShown &&<FlowWithProvider data={'fff'}/>}*/}
                <FlowWithProvider data={state.data}/>
            </Box>
            <Box>
                {/* <Grid><Box sx={{ bgcolor: '#D9D9D9', border: 1,borderColor: 'secondary',minHeight:0.4 ,margin:0.5}} >
                    <div style={{textAlign:'center'}}>Timeline<span>&#8594;</span></div>
                </Box></Grid>
                <Grid container  >
                    <Grid xs={7} >
                        <Box sx={bottom_sx}>
                            <div style={{textAlign:'center'}}>Element Editor</div>
                            <div className={'elementeditor'}>
                            <SelectSmall></SelectSmall>
                                <Grid container  >
                                <Grid xs={5}>
                                    <Box sx={{ bgcolor: '#D9D9D9', border: 5,borderColor: 'red',borderRadius:5,minHeight:'190px',margin:3}}  ><div style={{textAlign:'center'}}>Element Editor</div>
                                        <form style={{margin:5,border:20}}>
                                                <input style={{width:'300px'}} type="text" name="name" />
                                                <input style={{width:'300px'}}type="text" name="name" />
                                                <input style={{width:'300px'}}type="text" name="name" />
                                                <input style={{width:'300px'}} type="text" name="name" />
                                                <input style={{width:'300px'}} type="text" name="name" />
                                        </form>
                                    </Box>

                                </Grid>
                                <Grid xs={5}>
                                    <Box sx={{ bgcolor: '#D9D9D9', border: 5,borderColor: 'black',borderRadius:5,minHeight:'145px',margin:3}}  ><div style={{textAlign:'center'}}>Element Editor</div>
                                        <form style={{margin:5,border:20}}>
                                            <input style={{width:'300px'}} type="text" name="name" />
                                            <input style={{width:'300px'}}type="text" name="name" />
                                            <input style={{width:'300px'}}type="text" name="name" />
                                        </form>
                                    </Box>

                                </Grid>
                                    <Grid xs={5}>
                                        <Box sx={{ bgcolor: '#D9D9D9', border: 5,borderColor: 'black',borderRadius:5,minHeight:'145px',margin:3}}  ><div style={{textAlign:'center'}}>Element Editor</div>
                                            <form style={{margin:5,border:20}}>
                                                <input style={{width:'300px'}} type="text" name="name" />
                                                <input style={{width:'300px'}}type="text" name="name" />
                                                <input style={{width:'300px'}}type="text" name="name" />
                                                <input style={{width:'300px'}} type="text" name="name" />
                                            </form>
                                        </Box>
                                    </Grid>
                                </Grid>

                                </div>
                        </Box>
                    </Grid>
                    <Grid xs={5}>
                        <Box sx={bottom_sx}>
                            <div style={{textAlign:'center'}}>MetaData Editor</div>
                            <Box sx={{margin:2}}>
                                <textarea style={{width:'400px',height:'300px',borderRadius:2}}>
  Hello there, this is some text in a text area
</textarea>
                            </Box>
                            <Box sx={{margin:2}}>
                                <form style={{margin:5,border:20,width:'450px'}}>
                                    <input style={{margin:2}} type="text" name="name" />
                                    <input style={{margin:2}}type="text" name="name" />
                                    <input style={{margin:2}} type="text" name="name" />
                                    <input style={{margin:2}}type="text" name="name" />
                                </form>
                            </Box>
                            <Box sx={{margin:2}}>
                                <textarea style={{width:'600px',height:'70px',borderRadius:20}}>

</textarea>
                            </Box>
                        </Box>
                    </Grid>
                </Grid> */}
                <Grid>
                    <Box sx={{ bgcolor: '#D9D9D9', border: 1,borderColor: 'secondary',minHeight:0.4 ,margin:0.5}} >
                    <div className="upload">
                        <input
                            type="file"
                            id="input_json"
                            ref={fileRef}
                            onChange={onChangeFile}
                        />
                    </div>

                </Box>



                </Grid>
            </Box>


        </Container>


    );
}

export default Upload;
