import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function MessageSender() {

const [task,setTask] = useState({
    caption: "",
    image: ""
})


const {
    caption,image
} = task
    
 function change(e) {
    setTask({...task,[e.target.name]:e.target.value})
    }

    async  function submitTask(e){
        e.preventDefault()
        const headers = {
            'Authorization':'Bearer ' + localStorage.getItem('token')
        }
        if(caption  === "" || image === "")
        {
            alert('please fill all fields !')
        } else{
            const response = await Axios.post('http://127.0.0.1:8000/api/tasks', {caption,image},{headers})
            const data = await response.data
            console.log(data)
        }
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar
                    src="https://scontent.frba1-1.fna.fbcdn.net/v/t1.0-9/131895638_1878191315663611_2698490271995668505_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH1SyCmU-KKE3VfD7H_irMpNaRUoFlGZB81pFSgWUZkH-oUMFOV8pYIqrrT7I8HBNxrb3syIiFUQo72gfRIWzya&_nc_ohc=LXZLrBBBjEMAX-FxU7T&_nc_ht=scontent.frba1-1.fna&oh=4345da0d83087986be7b2f12d73148a2&oe=6003B36E"
                />
                <form onSubmit={submitTask}>
                    <input 
                    type="text"
                    name="caption"
                    value={caption}
                    onChange={change}
                    className="messageSender__input"
                    placeholder={`What's on your mind?`}
                    />
                    <input
                    type="file"
                    name="image"
                    value={image}
                    onChange={change}
                    placeholder="upload an image"
                    />

                    <button  type="submit">
                        Hidden Submit
                    </button>

                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{  color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{  color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{  color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}
