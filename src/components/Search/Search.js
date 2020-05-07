import React from 'react'
import './Search.css';

export default function Search() {
    return (
        <div class="input-group mb-2 mr-sm-2 mt-2">
            <div class="input-group-prepend">
                <div class="input-group-text" id="SearchBtn"><span role="img" area-label="search">&#128269;</span></div>
            </div>
            <input type="text" class="form-control" placeholder="Search Here" />
        </div>
    )
}
