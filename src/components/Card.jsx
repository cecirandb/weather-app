import React from 'react';

function Card({min, max, name, img, onClose, id}) {
    return (
        <div className='card'>
            <div id='closeIcon' className='row'>
                <button onClick={onClose} className='btnX'>x</button>
            </div>
            <div className='cardBody'>
                <h5>{name}</h5>
                <div className='row'>
                    <div className='min'>
                        <p>Min</p>
                        <p>{min}°</p>
                    </div>
                    <div className='max'>
                        <p>Max</p>
                        <p>{max}°</p>
                    </div>
                    <div className='image'>
                        <img className='iconWeather' src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
