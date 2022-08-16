const cat = {
    name: 'Mr. Bean',
    legs: 4,
    type: 'Feline',
    friends: [
        {
            name: 'Georgey',
            legs: 4,
            type: 'Feline'
        }, 
        {
            name: 'Snake',   // cat.friends[1].name    
            legs: 3,         // cat['friends'][1]['name']
            type: 'Feline'
        }, 
        {
            name: 'Rixio', //  cat.friends[2].name
            legs: 5,       //  cat['friends'][2]['name']
            buddies: [
                {
                    name: 'Arthur',
                    fins: 5,   //   cat.friends[2].buddies[0].fins    ->   5
                    type: 'fish' // cat['friends'][2]['buddies'][0]
                },
                {  
                    name: 'Hannibal',
                    type: 'Platypus' //  cat.friends[2].buddies[1].type[4]
                }
            ]
        }
    ]
}
​
// How do access nested values???
​
// 1. How do we access the string 'Snake'?
// console.log(cat.friends[1].name) 
​
// 2. How do we access the string 'Rixio'?
// console.log(cat.friends[2].name)
​
// 3. How do we access the fins property?
// console.log(cat.friends[2].buddies[0].fins)

cat.friends
cat['friends']

console.log(cat.friends[2].buddies[1].type[4])
console.log(cat.friends[2].buddies[1][1])
console.log(cat.friends[2].buddies[1].type.charAt(4))