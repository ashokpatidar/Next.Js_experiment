import Navbar from './NavBar';
import Head from 'next/head';


const Layout = (props)=> (
    <div>
        <Head>
            <title>Stock Price</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
        {props.children}
        </div>

    </div>
);

export default Layout;