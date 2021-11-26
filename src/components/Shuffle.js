function shuffle(arr) {
    //return arr.sort((a, b) => 0.5 - Math.random());
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

export default shuffle;
