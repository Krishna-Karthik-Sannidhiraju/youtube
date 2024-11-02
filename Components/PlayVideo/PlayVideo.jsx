import React, { useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'
const PlayVideo = ({videoId}) => {

  const [apiData,setApiData]=useState(null);

  const fetchVideoData=async () => {
    const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)

  }
  return (
    <div className='play-video'>
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1` } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>best youtube channel to learn dev</h3>
        <div className="play-video-info">
          <p>1534 views &bull; 2days ago</p>
          <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />2</span>
            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={jack} alt="" />
          <div>
            <p>Full stack</p>
            <span>1M Subscribers</span>
          </div>
          <button>Subscribe</button>

        </div>
        <div className="vide-description">
          <p>channel is easy</p>
          <p>subscribe it to more videos</p>
          <hr />
          <h4>130 comments</h4>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicolson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique repudiandae placeat facilis perspiciatis perferendis et ducimus sit, id consequatur porro ipsum? Aspernatur architecto aliquid praesentium dicta nam consectetur mollitia repellendus.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
              
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicolson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique repudiandae placeat facilis perspiciatis perferendis et ducimus sit, id consequatur porro ipsum? Aspernatur architecto aliquid praesentium dicta nam consectetur mollitia repellendus.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
              
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicolson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique repudiandae placeat facilis perspiciatis perferendis et ducimus sit, id consequatur porro ipsum? Aspernatur architecto aliquid praesentium dicta nam consectetur mollitia repellendus.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
              
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicolson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique repudiandae placeat facilis perspiciatis perferendis et ducimus sit, id consequatur porro ipsum? Aspernatur architecto aliquid praesentium dicta nam consectetur mollitia repellendus.</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlayVideo