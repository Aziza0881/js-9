let total = 0

let arr = [
    [
        {
            a: {
                price: 20
            }
        },
    ] ,
    [
        {
            a: {
                price: 35
            }
        }
    ] ,
    [
        {
            a: {
                price: 44
            }
        }
    ] ,
]

for (let item of arr) {
    total += item[0].a.price
}
console.log(total);
