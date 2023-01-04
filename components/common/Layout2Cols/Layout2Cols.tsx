import React from 'react'
import { layoutProps } from "../../../models/types"

const Layout2Cols = ({ children }: layoutProps) => {
    return (
        <>
            <section className="spad">
                <div className="container">
                    <div className="row">
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout2Cols
