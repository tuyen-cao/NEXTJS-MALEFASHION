import { useRouter } from 'next/router'
import React, { useState, useEffect, useMemo } from 'react'
import { Breadcrumb } from 'react-bootstrap'

const Breadcrumbs = () => {
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
            const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
            // The title will just be the route string for now
            const title = subpath;
            return { href, title };
        })

        // Add in a default "Home" crumb for the top-level
        return [{ href: "/", title: "Home" }, ...crumblist];

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
                                        <Breadcrumb>
                                            {breadcrumbs.map((crumb, i) => {
                                                return <>
                                                    {(i === breadcrumbs.length - 1)
                                                        ? <Breadcrumb.Item active>{crumb.title}</Breadcrumb.Item>
                                                        : <Breadcrumb.Item href={crumb.href}>{crumb.title}</Breadcrumb.Item>
                                                    }
                                                </>
                                            })}
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
