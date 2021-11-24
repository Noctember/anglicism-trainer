function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return arr; // This could return nothing but im to lazy to change it
}

export default shuffle;
