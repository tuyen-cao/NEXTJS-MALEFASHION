import Link from 'next/link'
import React from 'react'

async function fetchProducts () {

    const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json) 

    return data
}

export default async function RootPage () {
    let data = await  fetchProducts()
    return (
        <main>
            <section className="product spad">
                <div className="container">
                    Home page 
                                  <br/>  {data.title}

                    <Link href="/">
                        home page
                    </Link>

                </div>
            </section>


        </main>
    )
}

