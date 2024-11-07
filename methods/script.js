let antrian = ["ray", "fiki", "fadhilla", "farah"];
antrian.push("nabila");
antrian.push("maza", "elsi");
antrian.pop();
antrian.splice(0, 2);
antrian.unshift("tomi");
console.log("Antrian:", antrian.join(", "));

// const UPPERCASE = document.querySelector('#uppercase')

// let celerates = 'celeRates'
// celerates = celerates.toUpperCase()
// console.log('TOUPPERCASE ' + celerates)
// UPPERCASE.innerText = celerates

// let content1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corporis, aliquam doloribus odit a soluta sint quidem facere, earum suscipit iure! Magni architecto voluptas nesciunt repellendus maiores perspiciatis quia quasi!`


// content1 = content1.toLowerCase()
// console.log('lowercase' + content1)

// const lowercase = document.querySelector('#lowercase')

// lowercase.innerText = content1

// const foods = "Mie, Nasi goreng, Sate, Lontong, Nasi Telor"
// const splittedFoods = foods.split(', ')
// console.log( splittedFoods)

// console.log(foods.replace('Nasi goreng', 'NASI GORENG'))

// const tropicalFruits = ['Coconut', "Apple", 'Rambutan', 'Mango']
// console.log('Jumlah array stlh ditambahkan data baru ' + tropicalFruits.push('Durian'))

// console.log(tropicalFruits)

// // POP
// // const newTropicalFruits = tropicalFruits
// // newTropicalFruits.pop()
// // console.log(tropicalFruits)

// // const newTropicalFruits =  tropicalFruits.slice()
// // const newTropicalFruits =  Array.from(tropicalFruits) 
// const newTropicalFruits = [...tropicalFruits]
// newTropicalFruits.pop()
// console.log(`Array lama : ` + tropicalFruits)
// console.log(`Array baru : ` + newTropicalFruits)

// newTropicalFruits.shift()
// console.log(newTropicalFruits)

// const myFavoriteFruits = ['Melon', 'Grapes']
// newTropicalFruits.unshift('Pineapple', 'Banana', ...myFavoriteFruits)
// console.log(newTropicalFruits)

// const elsiFavFruits = ['Durian', 'Kelengkang']

// const favFruits = newTropicalFruits.concat(elsiFavFruits)
// console.log(favFruits)

// const arrNum1 = [1, 2, 3, 1, 4, 6]
// const arrNum2 = [9, 7, 8,5]
// const arrNum3 = [...arrNum1, ...arrNum2]
// console.log(arrNum3)

// const totalNum = arrNum3.reduce((acc, currItem) => acc + currItem)
// console.log(totalNum)

// favFruits.forEach((fruit, index) => console.log(`Index ke ${index} buah: ${fruit}`))

// console.log('Array NUM3 ' + arrNum3)
// const findNumberLargerThan2 = arrNum3.find((num) => num > 2)
// console.log(findNumberLargerThan2)
