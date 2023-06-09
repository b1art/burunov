export function loadImage(src) {
    return new Promise((resolve, reject) => {
        const image = new Image
        image.src = src
        image.onload = () => resolve(image)
        image.onerror = e => reject(e)
    })
}

export function loadJSON(src) {
    return fetch(src).then(x => x.json())
}

export default {
    loadImage,
    loadJSON
}