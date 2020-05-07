import React from 'react'
import './Search.css';

export default function Search() {
    return (
        <div className="input-group mb-2 mr-sm-2 mt-2">
            <div className="input-group-prepend">
                <div className="input-group-text" id="SearchBtn"><span role="img" area-label="search">&#128269;</span></div>
            </div>
            <input type="text" className="form-control" placeholder="Search Here" />
        </div>
    )
}
