import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/InputPesquisa.module.css'  

export default function InputPesquisa({src, width, height, placeholder}){

    const [event, setEvent] = useState('');
    console.log(event)

    return(
        <div>

            <div className={styles.container_pesquisa}>
                <input  
                    onChange={(e) => setEvent(e.target.value)} 
                    value={event} 
                    type="search" 
                    placeholder={placeholder}
                    />
                <Image src={src} width={width} height={height} />
            </div>

        </div>
    )
}