import React from 'react'

const Recipe = ({title, calories, image, ingrs}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingrs.map(ingr =>(
                    <li>{ingr.text}</li>
                ))}
            </ol>
            <p>{calories}s</p>
            <img src ={image} alt="" />
        </div>
    )
}

export default Recipe