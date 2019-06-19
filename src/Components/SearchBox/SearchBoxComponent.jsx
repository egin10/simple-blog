import React from 'react'
import "./SearchBoxComponent.css"

const SearchBox = props => {
    const handleInput = (e) => {
        let word = e.target.value
        props.search(word)
    }

    return (
        <div className="search">
            <input type="text" name="search" placeholder="Search something..." onChange={handleInput} />
        </div>
    )
}

export default SearchBox;