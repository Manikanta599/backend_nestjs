
import { Link } from 'react-router-dom';
import './CSS/navbar.css';


const Navbar = () => {
    return (
        <div>
            <header>
            <div id="nav">
            <div id="logo">
                logo
            </div>
            <div id="buttons">
                <ul>
                    <li>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/getdetails">
                            <button>GetDetails</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/fileupload">
                            <button>UploadExcelFile</button>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
        </header>
        </div>
    );
};

export default Navbar;
