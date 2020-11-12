//- создать массив с 20 числами.
//
// let arr =[1,4,2,32,432,12,565,7,989,78,9,12,3,5,78,90,2,122,76,43];
//
//-- при помощи метода sort и колбека  отсортировать массив.
//
//let sort =arr.sort((a,b)=>{
//    return a-b;
//});
//console.log(sort);
//
//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// let sort =arr.sort((a,b)=>{
//     return b-a;
// });
// console.log(sort);
//
//-- при помощи filter получить числа кратные 3
//
// let sort = arr.filter((value)=>(value%3==0));
// console.log(sort);
//
//-- при помощи filter получить числа кратные 10
//
// let sort = arr.filter((value)=>(value%10==0));
// console.log(sort);
//
//-- перебрать (проитерировать) массив при помощи foreach()
//
// let sort = arr.forEach(value=>{
//     console.log(value);
// });
//
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
// let sort = arr.map(value=>{
// return value*3;
// });
// console.log(sort);




//- создать массив со словами на 15-20 элементов.
//
// let arr = ['Rober','Ivan','Anna','Boris','Igornyatko','Den','makaroni','rys','Anastasia','Igor','zub','kompyuter','noga','volossya','prostir','imenyny'];
// 
//-- отсортировать его по алфавиту в восходящем порядке.
//
// let sort = arr.sort();
// console.log(sort);
//
//-- отсортировать его по алфавиту  в нисходящем порядке.
//
// let sort = arr.sort((a,b)=>{
//     if(a>b){
//         return -1;
//     }
// });
// console.log(sort);
//
//-- отфильтровать слова длиной менее 4х символов
//
// let sort = arr.filter((value)=>(value.length<4));
// console.log(sort);
//
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
// let sort = arr.map((value)=>{
//     return value+'!';
// })
// console.log(sort);




//Все робити через функції масивів (foreach, map ...тд)
//Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//
//- відсортувати його за  віком (зростання , а потім окремо спадання)
//
// let sort = users.sort((a,b)=>a.age-b.age);
// console.log(sort);
//
// let sort = users.sort((a,b)=>b.age-a.age);
//  console.log(sort);
//
//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// let sort = users.sort((a,b)=>(a.name.length-b.name.length));
//     console.log(sort);
//
// let sort = users.sort((a,b)=>(b.name.length-a.name.length));
//     console.log(sort);
//
//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//- відсортувати його за індентифікатором

//
// let sort = users.map((value,index,)=>{
//     let newValue= JSON.parse(JSON.stringify(value));
//         newValue['id']= index;
//         console.log(newValue);
//     return newValue;
// });
// console.log(sort);
//
