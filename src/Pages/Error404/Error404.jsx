
import { Link } from 'react-router-dom';
import './Error404.css'

function Error404() {
    return (
        <div className='container-error'>
            <h1 className='error'>Error 404 - Not Found</h1>
            <Link to={`/`} className='link'><button className= "back">Voltar</button></Link>
        </div>

    );
}

export default Error404;