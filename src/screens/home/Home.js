import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import genres from '../../common/genres';
import artists from '../../common/artists';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup, ImageList, ImageListItem, ImageListItemBar, Card, TextField, Checkbox, Typography, createTheme, Button, FormControlLabel } from '@mui/material';
import './Home.css';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            movieName: '',
            genresName: [],
            artistsName: [],
            releaseDateStart: '',
            releaseDateEnd: ''
        }
    }

    movieNameInputChangeHandler = (e) => {
        this.setState({movieName: e.target.value});
    }

    releaseDateStartInputChangeHandler = (e) => {
        var x = e.target.value;
        var date = new Date(x);
        this.setState({releaseDateStart: date});
    }

    releaseDateEndInputChangeHandler = (e) => {
        var x = e.target.value;
        var date = new Date(x);
        this.setState({releaseDateEnd: date});
    }

    filterDateUsingInputStateData(){
        var moviename = this.state.movieName;
        var releasestartdate = this.state.releaseDateStart;
        var releaseenddate = this.state.releaseDateEnd;

        moviesData.map((data) => {
            var date = new Date(data.release_date).getTime();
            var d1 = new Date(releasestartdate).getTime();
            var d2 = new Date(releaseenddate).getTime();
            if(d2 >= date && d1 <= date){
                console.log("true");
            }
        })
        
        moviesData.map((data) => {
            if((moviename.toLowerCase() === data.title.toLowerCase())){
                console.log(data.title);
            }
        })
    }

  render() {
      const theme = createTheme({});
    return (
      <div className='main-container'>
{/* Header */}
          <Header />

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
                                <>
                                    <Link to={'/details/' + `${data.id}`}>
                                        <ImageListItem className='imagelistitem-released' key={data.id}>
                                            <img src={`${data.poster_url}`} alt={`${data.title}`} />
                                            <ImageListItemBar key={data.id} title = {data.title} subtitle = {<span>Release Date : {new Date(data.release_date).toDateString()}</span>}>
                                            </ImageListItemBar>
                                        </ImageListItem>
                                    </Link>
                                </>
                            ))
                        }
                    </ImageList>
                </div>
            {/* Form Filter Div */}
                <div className="right">
                    <Card style = {{margin: theme.spacing(2)}}>
                        <FormControl style={{color: theme.palette.primary.light, margin: theme.spacing(2)}}>
                            <Typography component={'span'}>
                                FIND MOVIES BY:
                            </Typography>
                        </FormControl>
                        <FormControl variant="standard" style = {{margin: theme.spacing(2)}}>
                            <TextField id="standard-basic" label="Movie Name" variant="standard" onChange={this.movieNameInputChangeHandler}/>
                        </FormControl>
                        <FormControl variant="standard" style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <TextField select variant='standard' label="Genres">
                                {
                                    genres.map((data) => (
                                        <FormGroup>
                                            <FormControlLabel className='checkboxItem' key={data.id} control = {<Checkbox />} label={`${data.name}`}/>
                                        </FormGroup>
                                    ))    
                                }
                            </TextField>
                        </FormControl><br />
                        <FormControl variant="standard" style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <TextField variant='standard' select label="Artists">
                                {
                                    artists.map((data) => (
                                        <FormGroup>
                                            <FormControlLabel className='checkboxItem' key={data.id} control = {<Checkbox />} label={`${data.first_name + ' ' + data.last_name}`}/>
                                        </FormGroup>
                                    ))
                                }
                            </TextField>
                        </FormControl>
                        <FormControl style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <TextField type="date" variant='standard' label="Release Date Start" InputLabelProps={{shrink: true}} onChange={this.releaseDateStartInputChangeHandler}></TextField>
                        </FormControl><br />
                        <FormControl style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <TextField type="date" variant='standard' label="Release Date End" InputLabelProps={{shrink: true}} onChange={this.releaseDateEndInputChangeHandler}></TextField>
                        </FormControl><br />
                        <FormControl style={{width: theme.spacing(24.5), margin: theme.spacing(2)}}>
                            <Button variant="contained" onClick={() => this.filterDateUsingInputStateData()}>Apply</Button>
                        </FormControl>
                    </Card>
                </div>

            </div>
        
      </div>
    )
  }
}
export default Home;

