import React, { useState } from "react";
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import genres from '../../common/genres';
import artists from '../../common/artists';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup, ImageList, ImageListItem, ImageListItemBar, Card, TextField, Checkbox, Typography, createTheme, Button, FormControlLabel } from '@mui/material';
import './Home.css';

const Homefn = () => {
  const allMoviesData = moviesData;
  const filteredData = [];

  const theme = createTheme({});

  const [movieName, setMovieName] = useState('');
  const [genresName, setGenresName] = useState([]);
  const [artistsName, setArtistsName] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const generNameChangleHandler = (e) => {
    const value = e.target.value;
    setGenresName(value);
    console.log(value);
  }

  console.log(genresName);
  
  return (
    
    <div className="main-container">
      {/* Header */}
      <Header />

      {/* Heading "Upcoming Movies" */}
      <div className="heading">
        <span>Upcoming Movies</span>
      </div>

      {/* Image List for Upcoming Movies */}
      <ImageList className="imagelist-upcoming" cols={6}>
        {moviesData.map((item) => (
          <ImageListItem className="imagelistitem-upcoming" key={item.id}>
            <img
              id="imagelistimage"
              src={`${item.poster_url}`}
              alt={`${item.title}`}
            />
            <ImageListItemBar title={item.title}></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>

      {/* Image List for Released Movies */}
      <div className="flex-container">
        {/* Movie Image List */}
        <div className="left">
          <ImageList className="imagelist-released" cols={3}>
            {allMoviesData.map((data) => (
              <>
                <Link to={"/details/" + `${data.id}`}>
                  <ImageListItem
                    className="imagelistitem-released"
                    key={data.id}
                  >
                    <img src={`${data.poster_url}`} alt={`${data.title}`} />
                    <ImageListItemBar
                      key={data.id}
                      title={data.title}
                      subtitle={
                        <span>
                          Release Date :{" "}
                          {new Date(data.release_date).toDateString()}
                        </span>
                      }
                    ></ImageListItemBar>
                  </ImageListItem>
                </Link>
              </>
            ))}
          </ImageList>
        </div>
        {/* Form Filter Div */}
        <div className="right">
          <Card style={{ margin: theme.spacing(2) }}>
            <FormControl
              style={{
                color: theme.palette.primary.light,
                margin: theme.spacing(2),
              }}
            >
              <Typography component={"span"}>FIND MOVIES BY:</Typography>
            </FormControl>
            <FormControl
              variant="standard"
              style={{ margin: theme.spacing(2) }}
            >
              <TextField
                id="standard-basic"
                label="Movie Name"
                variant="standard"
                name="moviename"
                onChange={event => setMovieName(event.target.value)}
              />
            </FormControl>
            <FormControl
              variant="standard"
              style={{ width: theme.spacing(24.5), margin: theme.spacing(2) }}
            >
              <TextField select multiline variant="standard" label="Genres" onChange={() => generNameChangleHandler}>
                {
                  genres.map((data) => (
                  <FormGroup>
                    <FormControlLabel
                      className="checkboxItem"
                      key={data.id}
                      control={<Checkbox />}
                      label={`${data.name}`}
                    />
                  </FormGroup>
                  ))
                }
              </TextField>
            </FormControl>
            <br />
            <FormControl
              variant="standard"
              style={{ width: theme.spacing(24.5), margin: theme.spacing(2) }}
            >
              <TextField variant="standard" select label="Artists">
                {artists.map((data) => (
                  <FormGroup>
                    <FormControlLabel
                      className="checkboxItem"
                      key={data.id}
                      control={<Checkbox />}
                      label={`${data.first_name + " " + data.last_name}`}
                    />
                  </FormGroup>
                ))}
              </TextField>
            </FormControl>
            <FormControl
              style={{ width: theme.spacing(24.5), margin: theme.spacing(2) }}
            >
              <TextField
                type="date"
                variant="standard"
                label="Release Date Start"
                InputLabelProps={{ shrink: true }}
                onChange={event => setFromDate(event.target.value)}
              ></TextField>
            </FormControl>
            <br />
            <FormControl
              style={{ width: theme.spacing(24.5), margin: theme.spacing(2) }}
            >
              <TextField
                type="date"
                variant="standard"
                label="Release Date End"
                InputLabelProps={{ shrink: true }}
                onChange={event => setEndDate(event.target.value)}
              ></TextField>
            </FormControl>
            <br />
            <FormControl
              style={{ width: theme.spacing(24.5), margin: theme.spacing(2) }}
            >
              <Button variant="contained" >
                Apply
              </Button>
            </FormControl>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Homefn;
