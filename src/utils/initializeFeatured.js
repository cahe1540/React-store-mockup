import generateRand from './getRandomNums' 

//generate an array of featured items
const initializeFeatured = (products, numFeaturedItems) => {
    //get random number 1-15 
    const rand = generateRand(products.length, numFeaturedItems);
    let index = 0;
    const featured = products.filter(plant => {
         if(index < numFeaturedItems && plant.id === rand[index]){
          index++; 
          return plant;
         }else return null;
    });
    return featured;
  }

export default initializeFeatured;