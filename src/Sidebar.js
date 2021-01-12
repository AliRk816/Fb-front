import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.frba1-1.fna.fbcdn.net/v/t1.0-9/131895638_1878191315663611_2698490271995668505_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH1SyCmU-KKE3VfD7H_irMpNaRUoFlGZB81pFSgWUZkH-oUMFOV8pYIqrrT7I8HBNxrb3syIiFUQo72gfRIWzya&_nc_ohc=LXZLrBBBjEMAX-FxU7T&_nc_ht=scontent.frba1-1.fna&oh=4345da0d83087986be7b2f12d73148a2&oe=6003B36E" title="Alii Rakouk" />
            <SidebarRow
             Icon={LocalHospitalIcon}
             title="COVID-19 Information Center"
             />

            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" /> 
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See More" />
        </div>
    )
}
