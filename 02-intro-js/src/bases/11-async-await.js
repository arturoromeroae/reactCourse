// const getImagenPromesa = () => new Promise(resolve => resolve('htps://google.com'));
// getImagenPromesa().then(console.log);

const getImagen = async() => {

    try {
        const apiKey = 'YhnX40P9CAmZymngvp0ut2dUZFL1youK';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const url = data.images.original.url
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo se error
        console.error('error al cargar la imagen', error);
    }
}

getImagen();
