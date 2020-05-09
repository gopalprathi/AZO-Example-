import React from 'react'
import './Search.css';

export default function Search({options,handleSearch}) {
   // alert(options)
    return (
        <div className="input-group mb-2 mr-sm-2 mt-2">
            <div className="input-group-prepend">
                <div className="input-group-text" id="SearchBtn" onClick={handleSearch}><span role="img" area-label="search">&#128269;</span></div>
            </div>
            <input id="searchField" onInput={handleSearch} type="text" className="form-control" placeholder="Search Here" list="searchTermList" />
            <datalist id='searchTermList'>
                {
                    options.map((item)=><option value={item} />)
                }
            </datalist>

        </div>
    )
}
