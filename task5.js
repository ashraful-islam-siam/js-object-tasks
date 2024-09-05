let myObject = {
  name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
} 


let keys = Object.keys(myObject)

for(key of keys){
  console.log("key:", key, "|", "type:", typeof myObject[key])
}