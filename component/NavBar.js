import Link from 'next/link';
const NavBar = () => (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link prefetch  href="/">
                    <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link prefetch href="/about">
                    <a className="nav-link" >About</a>
                    </Link>
                </li>
               
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
            {/* <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        <style jsx>{`
            ul{
                background:#333;
                color:#fff;
                list-style:none;
                display:flex;
                height: 30px;
            }
            ul li {
                font-size: 20px;
                margin-right:20px;
                

            }
            ul li a {
                color: #fff;
                text-decoration: none;

            }
            `}

        </style> */}
        </div>
        
   

);

export default NavBar;