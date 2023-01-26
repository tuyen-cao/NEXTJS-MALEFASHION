import React from 'react'
import SearchForm from './common/SearchForm'

const SidebarSearch = () => {
    return (
        <div className="shop__sidebar__search">
            <SearchForm hasSubmitBtn placeholder="Search..."
                handleSubmit={
                    () => {
                        console.log("aaaaaa")
                    }
                }/>
        </div>
    )
}

export default SidebarSearch
