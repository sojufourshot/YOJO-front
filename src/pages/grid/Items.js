import React from 'react';
import styles from './Items.module.css';


export const Item = ({item})=>{
    const { id, title, author, content, src } = item;

    return(

         <div className={styles.item}> 
            <div className={styles.item_box}>
            <img className={styles.item_box_img} src={src}/>
            </div>
         </div>
         
    );



};

