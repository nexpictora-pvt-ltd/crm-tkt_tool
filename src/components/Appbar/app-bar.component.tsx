import { Grid, IconButton, InputBase } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const SearchBar = () => {
  

  return (
    <>
    <Grid container  bgcolor={"#082C5E"} margin={'-10px'} width={'101vw'} sx={{ boxShadow: '3.5px 3.5px 3.5px rgba(0, 0, 0, 0.3)',zIndex:'4'}} >
<Grid xs={2} sm={1} md={1}  sx={{ p: '10px', display: 'flex', alignItems: 'center', width: '40%',height: 40,}} >
<MenuIcon sx={{display: 'flex', alignItems: 'flex-start',color:'#EFEFEF'}}></MenuIcon>
</Grid>

<Grid xs={10} sm={9} md={9}  >

  <Grid container xs={7} sm={5} sx={{
  backgroundColor: 'rgba(203, 238, 240, 0.2)', // Light blue with opacity
  borderRadius: '15px',
  marginTop: '5px',
  zIndex: '5',
  backdropFilter: 'blur(10px)', // Adjust the blur value as needed
}}>
  
<Grid xs={10}>
<InputBase
        sx={{ ml: 1, flex: 1 ,display: 'flex', alignItems: 'flex-start' ,color:'white'}}
        placeholder="Search.."
      />
</Grid>
<Grid container xs={2}>
<IconButton type="button" aria-label="search" sx={{  display: 'flex', alignItems: 'center',height: 30,color:'white' }}>
        <SearchIcon sx={{color:'white'}}/>
      </IconButton>
</Grid>
</Grid>
</Grid>



<Grid xs={0} display={{ xs: 'none' }} sm={2} md={2} container direction={'row'} sx={{ display: 'flex', alignContent: 'center', color: '#EFEFEF' }}>
        <Grid sm={4} md={4}  display={{ xs: 'none',sm:'block' }}>
          <NotificationsIcon />
        </Grid>
        <Grid sm={4} md={4} display={{ xs: 'none',sm:'block' }}>
          <AccountCircle />
        </Grid>
        <Grid sm={4} md={4}  display={{ xs: 'none',sm:'block' }}>
          <MoreIcon></MoreIcon>
        </Grid>
</Grid>

   </Grid>  
    
    </>
  )
}

export default SearchBar;

