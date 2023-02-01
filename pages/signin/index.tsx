import { LoginForm } from '@/components/auth'
import { Layout } from '@/components/common/layout'
import { REQUEST_METHOD } from '@/constants/methodRequest.constant'
import { LoginPayload } from '@/models'
import Head from 'next/head'

const Signin = () => {

  
    const setPassword = () => { }

    const loginSubmit = (payload: LoginPayload) => {
        const res = fetch('/api/login', {
            method: REQUEST_METHOD.POST,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        res.then((result) => {
            console.log(result.status)
            console.log(result.statusText)
            console.log(result)
        })
    }
    const setEmail = () => { }
    return (
        <>
            <Layout>
                <Head>
                    <title>Sign in page</title>
                </Head>

                <main>
                    <section className=" spad">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-4">
                                    <LoginForm onSubmit={loginSubmit} />
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </Layout>
        </>
    )
}

export default Signin
