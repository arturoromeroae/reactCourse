import React from 'react';

const GifExpertApp = () => {

    const categories = ['Anime', 'Sports', 'Games'];

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>

            <button>Agregar</button>

            <ol>
                {
                    categories.map((category, i) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>

        </>

    );
}

export default GifExpertApp;