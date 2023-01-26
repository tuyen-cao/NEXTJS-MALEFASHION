'use client' 
import SidebarAccordion from '@/appcomponents/sidebar-accordion'
import SidebarSearch from '@/appcomponents/sidebar-search'
import {LeftSideBar} from '@/components/common/sidebars/index'
import React from 'react'
import ProductList from './product-list'

async function fetchProducts () {

    const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json) 

    return data
}

export default  function Page () {
   // let data = await  fetchProducts()
    return (
        <>
            <section className="spad">
                <div className="container">
                    <div className="row">
                        <LeftSideBar>
                            <SidebarSearch/>
                            <SidebarAccordion>
                                <p>fsdfdsfds</p>
                            </SidebarAccordion>
                        </LeftSideBar>
                        {/*  <SideBar handleSelectCategory={handleSelectCategory} /> */}
                        <main className="col-lg-9">
                       {/*  {data.title} */}
                            <ProductList/>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

