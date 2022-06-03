import { Typography } from '@mui/material';
import React, { Component } from 'react'
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import './Details.css';

class Details extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
  render() {
    return (
      <div className='main-container'>
        <div className="header">
            <Header />
        </div>
        <div className="backbutton">
            <Typography>&lt; Back to Home</Typography>
        </div>
        <div className="content">
            <div className="left">
                <img src={`${moviesData[1].poster_url}`} alt="" />
            </div>
            <div className="middle">
                <Typography>
                    <h2>{`${moviesData[1].title}`}</h2>
                </Typography>
                <Typography>
                    <strong>Genre: </strong>{`${moviesData[1].genres}`}
                </Typography>
                <Typography>
                    <strong>Duration: </strong>{`${moviesData[1].duration}`}
                </Typography>
                <Typography>
                    <strong>Release Date: </strong>{(new Date(moviesData[1].release_date).toDateString())}
                </Typography>
                <Typography>
                    <strong>Ratings: </strong>{`${moviesData[1].critics_rating}`}
                </Typography>
                <br />
                <Typography>
                    <strong>Plot: </strong>{`${moviesData[1].storyline}`}
                </Typography>
                <br />
                <Typography>
                    <strong>Trailer: </strong>{`${moviesData[1].genres}`}
                </Typography>
                <div className="video">
                <iframe width="100%" height="340px" src="https://www.youtube.com/embed/LoebZZ8K5N0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
            <div className="right">
                <Typography>
                    <b>Rate this movie: </b>
                </Typography>
                <Typography>
                    {[...Array(5)].map(() => {
                        return <StarBorderOutlinedIcon/>
                    })}
                </Typography>
                <Typography>
                    <b>Artists: </b>
                </Typography>
                <Typography>
                    
                </Typography>
            </div>
        </div>
      </div>
    )
  }
}
export default Details;