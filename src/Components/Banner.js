
import '../Styles/Banner.css';
import Clock from './Clock';

function Banner(){

    return(
        <div className="Banner">
            <div className="clock">
           <Clock />
           </div>
        </div>
    );
}

export default Banner;