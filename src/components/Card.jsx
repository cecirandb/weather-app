import React from 'react';
import './styles/Card.css';

function Card({min, max, name, img, onClose, id}) {
    return (
        <div className='card'>
            <div id='closeIcon'>
                <button onClick={onClose} className='btnX'>x</button>
            </div>
            <div className='cardBody'>
                <h5 className='name'>{name}</h5>
                <div className='temps'>
                    <div className='divTempMin'>
                        <p className='min'>Min</p>
                        <p className='minTemp'>{min}°</p>
                    </div>
                    <div className='divTempMax'>
                        <p className='max'>Max</p>
                        <p className='maxTemp'>{max}°</p>
                    </div>
                    </div>
                    <div className='image'>
                        <img className='iconWeather' width={'100px'} height={'100px'} src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} alt='img not found'/>
                    </div>
            </div>
        </div>
    )
}

export default Card;
