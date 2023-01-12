import { useRouter } from 'next/router'
import React, { useState, useEffect, useMemo } from 'react'
import { Breadcrumb } from 'react-bootstrap'

const Breadcrumbs:React.FC = () => {
    const router = useRouter()

    const breadcrumbs = useMemo(() => {
        // Remove any query parameters, as those aren't included in breadcrumbs
        const asPathWithoutQuery = router.asPath.split("?")[0];

        // Break down the path between "/"s, removing empty entities
        // Ex:"/my/nested/path" --> ["my", "nested", "path"]
        const asPathNestedRoutes = asPathWithoutQuery.split("/")
            .filter(v => v.length > 0);

        // Iterate over the list of nested route parts and build
        // a "crumb" object for each one.
        const crumblist = asPathNestedRoutes.map((subpath, idx) => {
            // We can get the partial nested route for the crumb
            // by joining together the path parts up to this point.
            const href = asPathNestedRoutes.slice(0, idx + 1).join("/") === '/home' ? '/' : '/' + asPathNestedRoutes.slice(0, idx + 1).join("/")
            // The title will just be the route string for now
            const title = subpath;

            const isActive = router.asPath === (href === "/home" ? "/" : href);

            return { href, title };
        })

        return crumblist

    }, [router.asPath])


    return (
        <>
            {breadcrumbs.length > 0 &&
                <section className="breadcrumb-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__text">
                                    <h4>{breadcrumbs[breadcrumbs.length - 1].title}</h4>
                                    <div className="breadcrumb__links">
                                        <Breadcrumb key="Breadcrumb"><>
                                            {breadcrumbs.map((crumb, i) => {
                                                return <>
                                                    {(i === breadcrumbs.length - 1 || breadcrumbs[i].href === '/home')
                                                        ? <Breadcrumb.Item active key={"breadcrumb-" + i} >{crumb.title}</Breadcrumb.Item>
                                                        : <Breadcrumb.Item href={crumb.href} key={"breadcrumb-" + i}>{crumb.title}</Breadcrumb.Item>
                                                    }
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
