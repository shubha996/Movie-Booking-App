import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import './Home.css';

class Home extends Component {
  render() {
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
                <div className="right">

                </div>

            </div>
        
      </div>
    )
  }
}
export default Home;

