'use client'
import { useSelectedLayoutSegments} from 'next/navigation'
import React from 'react'
import {Breadcrumb} from 'react-bootstrap'

const Breadcrumbs: React.FC = () => {
    const segments = useSelectedLayoutSegments()
  
    return (<> {segments.length > 0 &&
                    <section className="breadcrumb-option">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb__text">
                                        <h4>{segments[segments.length - 1]}</h4>
                                        <div className="breadcrumb__links">
                                            <Breadcrumb key="Breadcrumb"><>
                                                <Breadcrumb.Item  key={"breadcrumb-home"} href="/" >Home</Breadcrumb.Item>
                                                {segments.map((crumb, i) => {
                                                    return <>
                                                        {(i < segments.length - 1)
                                                        ? <>
                                                            <Breadcrumb.Item href={`/${segments.slice(0,i+1).reduce(
                                                        (preValue: string, prod: string) => `${preValue}/${prod}`)}`}  key={"breadcrumb-" + i} >{crumb}</Breadcrumb.Item>
                                                        </>
                                                        : <Breadcrumb.Item active key={"breadcrumb-" + i} >{crumb}</Breadcrumb.Item> }
                                                        
                                                    </>
                                                })}</>
                                            </Breadcrumb>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </>
    )
}

export default React.memo(Breadcrumbs)
