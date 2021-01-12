import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Post({profilPic, image, username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src="https://scontent.frba1-1.fna.fbcdn.net/v/t1.0-9/131895638_1878191315663611_2698490271995668505_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH1SyCmU-KKE3VfD7H_irMpNaRUoFlGZB81pFSgWUZkH-oUMFOV8pYIqrrT7I8HBNxrb3syIiFUQo72gfRIWzya&_nc_ohc=LXZLrBBBjEMAX-FxU7T&_nc_ht=scontent.frba1-1.fna&oh=4345da0d83087986be7b2f12d73148a2&oe=6003B36E" 
                className="post__avatar"
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>
                        Timestamp...
                        {/* {new Date(timestamp?.toDate()).toUTCString()} */}
                    </p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    )
}
