import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import genres from '../../common/genres';
import artists from '../../common/artists';
import { FormControl, ImageList, ImageListItem, ImageListItemBar, Card, TextField, Select, MenuItem, InputLabel, Checkbox, Typography, createTheme, Button } from '@mui/material';
import './Home.css';

class Home extends Component {
  render() {
      const theme = createTheme({});
    return (
      <div className='main-container'>
{/* Header */}
          <Header/>

{/* Heading "Upcoming Movies" */}
          <div className='heading'>
              <span>Upcoming Movies</span>
          </div>

{/* Image List for Upcoming Movies */}
          <ImageList className='imagelist-upcoming' cols={6}>
            {
                moviesData.map((item) => (
                    <ImageListItem className='imagelistitem-upcoming' key={item.id}>
                        <img id='imagelistimage' src={`${item.poster_url}`} alt={`${item.title}`} />
                        <ImageListItemBar title = {item.title}>
                            
                        </ImageListItemBar>
                    </ImageListItem>
                ))
            }
          </ImageList>

{/* Image List for Released Movies */}
            <div className='flex-container'>
            {/* Movie Image List */}
                <div className="left">
                    <ImageList className='imagelist-released' cols={3}>
                        {
                            moviesData.map((data) => (
                                <ImageListItem gap={50} className='imagelistitem-released' key={data.id}>
                                    <img src={`${data.poster_url}`} alt={`${data.title}`} />
                                    <ImageListItemBar title = {data.title} subtitle = {<span>Release Date : {new Date(data.release_date).toDateString()}</span>} >
                                    
                                    </ImageListItemBar>
                                    
                                </ImageListItem>
                            ))
                        }
                    </ImageList>
                </div>
            {/* Form Filter Div */}
                <div className="right">
                    <Card style = {{margin: theme.spacing(2)}}>
                        <FormControl style={{color: theme.palette.primary.light, margin: theme.spacing(2)}}>
                            <Typography >
                                FIND MOVIES BY:
                            </Typography>
                        </FormControl>
                        <FormControl variant="standard" style = {{margin: theme.spacing(2) }}>
                            <TextField id="standard-basic" label="Movie Name" variant="standard" />
                        </FormControl>
                        <FormControl variant="standard" style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <InputLabel id="genres">Genres</InputLabel>
                            <Select labelId="genres" id="genres-input" label="Age">
                                {
                                    genres.map((data) => (
                                        <MenuItem><Checkbox/>{data.name}</MenuItem>
                                    ))    
                                }
                            </Select>
                        </FormControl><br />
                        <FormControl variant="standard" style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <InputLabel id="artist">Artists</InputLabel>
                            <Select labelId="artist" id="artist-input" label="Age">
                                {
                                    artists.map((data) => (
                                        <MenuItem><Checkbox/>{`${data.first_name + ' ' + data.last_name}`}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <TextField type="date" variant='standard' label="Release Date Start" InputLabelProps={{shrink: true,}}></TextField>
                        </FormControl><br />
                        <FormControl style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <TextField type="date" variant='standard' label="Release Date End" InputLabelProps={{shrink: true}}></TextField>
                        </FormControl><br />
                        <FormControl style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <Button variant="contained">Apply</Button>
                        </FormControl>
                    </Card>
                </div>

            </div>
        
      </div>
    )
  }
}
export default Home;

