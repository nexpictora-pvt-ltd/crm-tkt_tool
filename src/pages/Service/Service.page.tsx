import { Button ,Grid, Paper, TextField, Typography } from '@mui/material'
import  { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';




const ServicePage = () => {
  const [selectedFile, setSelectedFile] = useState('');

  const handleFileUpload = (event:any) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file)); // Store the URL of the selected file for preview
  };
  return (
    <>
    <Grid xs={12} sx={{display:'flex' ,justifyContent:"center"}} padding={3}>
        <Typography variant='h4' sx={{fontWeight:'700'}}>Add Service/Product</Typography>
    </Grid>
    <Grid container gap={4} padding={10}>
    <Grid xs={12} container sx={{display:'flex' ,justifyContent:"center"}}>
    <Grid xs={6} sx={{display:'flex' ,justifyContent:"flex-end",padding:'20px'}}>
    <Typography variant='h6'>Name/Title:</Typography>
      </Grid><Grid xs={6} sx={{display:'flex' ,justifyContent:"flex-start"}}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      </Grid>
      <Grid xs={12} container sx={{display:'flex' ,justifyContent:"center"}}>
    <Grid xs={6} sx={{display:'flex' ,justifyContent:"flex-end",padding:'20px'}}>
    <Typography variant='h6'>Service Price:</Typography>
      </Grid><Grid xs={6} sx={{display:'flex' ,justifyContent:"flex-start"}}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      </Grid>
      <Grid xs={12} container sx={{display:'flex' ,justifyContent:"center"}}>
    <Grid xs={6} sx={{display:'flex' ,justifyContent:"flex-end",padding:'20px'}}>
    <Typography variant='h6'>Upload Image: </Typography>
      </Grid><Grid xs={6} sx={{display:'flex' ,justifyContent:"flex-start"}}>
      <Paper sx={{display:'flex' ,justifyContent:"center",height:'20vh' ,width:'40vh',bgcolor:'#CBEEF0'}}>
      {selectedFile ? (
                <img
                  src={selectedFile}
                  alt="Selected"
                  style={{ width: '100%', height: '100%' ,objectFit:'cover'}}
                />
              ) : (
                <>
                  <label htmlFor="file-upload">
                    <Grid>
                    <Grid> <CloudUploadIcon sx={{paddingTop:'8vh',color:'#082C5E'}}></CloudUploadIcon></Grid>
                    <Grid> <Typography> Upload Your Image Here </Typography></Grid>
                    </Grid>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                  />
                </>
              )}
      </Paper>
      </Grid>
      </Grid>
      <Grid xs={12} sx={{display:'flex' ,justifyContent:"space-between"}}>
      <Button variant='contained' >Preview</Button>
      <Button variant='contained' >Add</Button>
      </Grid>
    </Grid>
    </>
  )
}

export default ServicePage