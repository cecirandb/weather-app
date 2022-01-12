import React from 'react';
import Card from './Card.jsx';

function Cards({cities, onClose}) {
    
    if(cities) {

    return (
        <div>
            {cities.map(c => <Card
                max= {c.max}
                min= {c.min}
                name= {c.name}
                img= {c.img}
                onClose= {() => onClose(c.name)}
                id={c.id}
            /> )}
        </div>
    )
    } else {
        
        return(
            <div>Sin ciudades</div>
        )
    }
}

export default Cards;
