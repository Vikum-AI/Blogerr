import React from 'react'
import featImg from '../Assets/featured-img.png'
import '../Styles/featured.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function featured() {
    return (
        <div className='featured'>
            
            <div className="card">
             <h1> Last Chance to Join the 2021 GitHub Actions Hackathon on DEV! </h1>

            <div className="tags">
                <p> #Tags </p>
                <p> #Tags </p>
            </div>
            
            <div className="likes">

                <div className="like">
                    <span id='heart' class="material-icons">favorite</span>
                    <p> 99 Likes </p> 
                </div>


               <div className="comment">
                    <span id='comment' class="material-icons">chat_bubble</span>
                    <p> 24 Comments </p>
               </div>
               

               <div className="save">
                   <button> <span class="material-icons">bookmark_border</span> Bookmark </button>
               </div>
            </div>


            <div className="img">
                <img src={ featImg } alt="" />
            </div>
             
            </div>
            
            
        </div>
    )
}
