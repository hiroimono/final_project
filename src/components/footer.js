import React from 'react';
import { Link} from 'react-router-dom';

function Footer () {
    return (
        <footer className="footer" style = {{ position:'fixed', bottom:'0', width: '100%', padding: '5px', backgroundColor:'rgba(0,0,0,0.70)'}}>
            <div className="content has-text-centered">
                <p style={{textAlign:'center'}}>
                    <Link to="/"><i className="fas fa-at"></i><strong> BluePlanet </strong></Link>
                    <span style={{color:'white'}}>2019, Berlin. The source code is licensed by</span> <a href="https://github.com/hiroimono">HIROIMONO</a>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
