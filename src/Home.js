import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function Home() {
    return (
        <div className="Home">
            <Header />

            <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
            </div>
        </div>
    )
}

export default Home
