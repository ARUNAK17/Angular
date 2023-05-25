a=[12.43,23,45,173]
console.log(a[[5]])  //undefined

console.log(a[[50]])  //undefined

a[2]=89 //mutable,can change
a[90]=65 //legal

console.log(a[[90]])  
console.log(a)  
console.log(a.length)  

a[-22]=434
a['place']='chennai'
b={city:'coimbatore'}
a[b]='javascript'

console.log(a)  
console.log(b)  
