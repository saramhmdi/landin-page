import React , {useState} from 'react';
import Card from './Card';
import bed from '../imge/Modern-four-poster-bed-600x433.jpeg'
import reception from '../imge/Black-sofa-lounge-600x433.jpeg'
import kitchen from '../imge/Monochrome-home-design-600x433.jpeg'
import Bathroom from '../imge/Modern-bath-tub-600x433.jpeg'
import styles from './Cards.module.css'

const Cards = () => {
    const [data] = useState([
        {id : 1 ,image : bed , name:"black and white bedroom" , cost:"1500 $"},
        {id : 2 ,image:reception , name:"black and white reception" , cost:"30000 $"},
        {id : 3 ,image:kitchen , name:"black and white kitchen" , cost:"2200 $"},
        {id : 4 ,image:Bathroom , name:"black and white Bathroom" , cost:"4800 $"}
    ])
    return (
        <div className={styles.container}>
            {data.map(product => <Card key={product.id} image={product.image} name={product.name} cost={product.cost}/>)}
            {/* <Card image={bed} name="black and white bedroom" cost="1500 $"/>
            <Card image={reception} name="black and white reception" cost="30000 $"/>
    {kitchen} name="black and white kitchen" cost="2200 $"/>
            <Card image={Bathroom} name="black and white Bathroom" cost="4800 $"/> */}

       
        </div>
    );
};

export default Cards;