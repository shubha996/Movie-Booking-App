import { Typography, Grid, ImageListItemBar, ImageListItem } from '@mui/material';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import StarRating from './StarRating';
import './Details.css';

const Details = () => {
    const params = useParams();
    const { id } = params;

    const item = moviesData.filter((v) => {
        return v.id == id;  
    })

    return (
        <div className='main-container'>
          <div className="header">
              <Header />
          </div>
          <div className="backbutton">
              <Link to="/" id='backtohome'><Typography >&lt; Back to Home</Typography></Link>
          </div>
          <div className="content">
              <div className="leftDetails">
                  <img src={`${item[0].poster_url}`} alt="" />
              </div>
              <div className="middle">
                  <Typography component={'span'}>
                      <h2>{`${item[0].title}`}</h2>
                  </Typography>
                  <Typography>
                      <strong>Genre: </strong>{`${item[0].genres}`}
                  </Typography>
                  <Typography>
                      <strong>Duration: </strong>{`${item[0].duration}`}
                  </Typography>
                  <Typography>
                      <strong>Release Date: </strong>{(new Date(item[0].release_date).toDateString())}
                  </Typography>
                  <Typography>
                      <strong>Ratings: </strong>{`${item[0].critics_rating}`}
                  </Typography>
                  <br />
                  <Typography>
                      <strong>Plot: </strong>{`${item[0].storyline}`}
                  </Typography>
                  <br />
                  <Typography>
                      <strong>Trailer: </strong>{`${item[0].genres}`}
                  </Typography>
                  <div className="video">
                    <iframe width="100%" height="320px" src={`${item[0].trailer_url.replace('watch?v=' , 'embed/')}`} 
                            title="YouTube video player" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                  </div>
              </div>
              <div className="right">
                  <Typography>
                      <b>Rate this movie: </b>
                  </Typography>
                  <Typography>
                      <StarRating />
                  </Typography>
                  <Typography style={{marginTop: '16px', marginBottom: '16px'}}>
                      <b>Artists: </b>
                  </Typography>
                  <Typography>
                      <Grid>
                          {
                              item[0].artists.map((items) => (
                                  <ImageListItem>
                                      <img id='profile-url' src={`${items.profile_url}`} alt=''/>
                                      <ImageListItemBar title={`${items.first_name} ${items.last_name}`}></ImageListItemBar>
                                  </ImageListItem>
                              ))
                          }
                      </Grid>
                  </Typography>
              </div>
          </div>
        </div>
      )
}

export default Details;