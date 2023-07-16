import React , {useState} from 'react';
import styles from './Card.module.css'
import up from '../imge/up.svg'
import down from '../imge/down.svg'

const Card = (props) => {
    const {image,name,cost}=props;
    const [counter , setCounter] = useState(0);
    const upHandler = () =>{

        setCounter(prevCounter => prevCounter + 1)
    }
    const downHandler = () =>{
        if(counter >= 1){
            setCounter(prevCounter => prevCounter - 1)
        }

    }
    return (
        <div className={styles.container}>
            <img src={image}  alt='bed' />
            <h3>{name}</h3>
            <p>{cost}{counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])}$` : ""}</p>
            <div className={styles.counter}>
                <img src={up} alt="up"  onClick={upHandler}/>
                <span>{counter}</span>
                <img src={down} alt="down" onClick={downHandler}  className={!counter && styles.deactive}/>
            </div>
        </div>
    );
};

export default Card;