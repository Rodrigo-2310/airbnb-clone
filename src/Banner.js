import React, {useState} from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';

function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner_search">

                <Button variant="outlined" className="banner_searchButton" onClick={() => setShowSearch(!showSearch)}>
                    Search Dates
                </Button>
                {showSearch && <h1><Search/></h1>}

            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of gateway to uncover the hidden gems near you.
                </h5>
                <Button variant="outlined">
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
