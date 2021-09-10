//return a sorted array with n unique random numbers from pool of 1 to numProducts
const generateRand = (numProducts, n) => {
    let set = new Set();
    while(set.size < n){
        set.add(Math.floor(Math.random() * numProducts) + 1);
    }
    return [...set].sort((a,b) => a-b);
}

export default generateRand;