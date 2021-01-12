import React, {Component} from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import Axios from 'axios';

export default class Feed extends Component{

    render () {
        return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
                        <Post
                            // key={id}
                            profilPic="https://scontent.frba1-1.fna.fbcdn.net/v/t1.0-9/131895638_1878191315663611_2698490271995668505_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH1SyCmU-KKE3VfD7H_irMpNaRUoFlGZB81pFSgWUZkH-oUMFOV8pYIqrrT7I8HBNxrb3syIiFUQo72gfRIWzya&_nc_ohc=LXZLrBBBjEMAX-FxU7T&_nc_ht=scontent.frba1-1.fna&oh=4345da0d83087986be7b2f12d73148a2&oe=6003B36E"
                            message="My first post"
                            timestamp="22/12/20"
                            username="Alii Rakouk"
                            image="https://scontent.frba1-1.fna.fbcdn.net/v/t1.0-9/131895638_1878191315663611_2698490271995668505_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH1SyCmU-KKE3VfD7H_irMpNaRUoFlGZB81pFSgWUZkH-oUMFOV8pYIqrrT7I8HBNxrb3syIiFUQo72gfRIWzya&_nc_ohc=LXZLrBBBjEMAX-FxU7T&_nc_ht=scontent.frba1-1.fna&oh=4345da0d83087986be7b2f12d73148a2&oe=6003B36E"
                        />
                        <Post
                            // key={id}
                            profilPic="https://scontent.frba1-1.fna.fbcdn.net/v/t1.0-9/131895638_1878191315663611_2698490271995668505_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH1SyCmU-KKE3VfD7H_irMpNaRUoFlGZB81pFSgWUZkH-oUMFOV8pYIqrrT7I8HBNxrb3syIiFUQo72gfRIWzya&_nc_ohc=LXZLrBBBjEMAX-FxU7T&_nc_ht=scontent.frba1-1.fna&oh=4345da0d83087986be7b2f12d73148a2&oe=6003B36E"
                            message="My second post!!"
                            timestamp="22/12/20"
                            username="Alii Rakouk"
                            image="https://www.personal.psu.edu/jll5677/Pictures/003.3.jpg"
                        />
        </div>
        )
    }
}
