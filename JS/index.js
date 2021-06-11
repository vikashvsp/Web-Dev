//1. WAYS TO PRINT IN JAVASCRIPT
    // console.log("hello world")
    // alert("me")


//2. JAVASCRIPT CONSOLE API    
    // console.log("hello world", 4 + 6, "another log")
    // console.warn("this is warning")
    // console.error("this is an error")
//3. Javascript variable
    //what are variable?- container to store data value

    /*multi 
    line
    Comment*/

    
    var number1 = 34;
    var number2 = 56;
    // console.log(number1+number2);

// 4.datatypes in javascript
    // numbers
    var num1 =455;
    var num2 = 56.67;
    // string
    var str1="this is a string";
    var str2='this is also a string'
    // objects
        var marks = {
            ravi: 34,
            shubham: 78,
            harry: 97.32
        }
        // console.log(marks);
    // booleans 
    var a = true;
    var b = false; 
    // console.log( a,b);

    // var und = undefined;
    var und;
    // console.log(und);
    // null
    var n = null;
    // console.log(n);

    /* at a very high level, there are two types of data 
     types in java script
     1.primitive data types: undefined, null, number, string, boolean, symbol
     2.reference data types: arrrays and object

     */

    //  array 

        var arr = [1,2,"string",4,5];
        // console.log(arr[2])
        // console.log(arr)

//5. operator in java 
    // arithemtic operator
        var a = 100;
        var b = 10;
        // console.log ("the value of a + b is ",(a+b));
        // console.log ("the value of a - b is ",(a-b));
        // console.log ("the value of a * b is ",(a*b));
        // console.log ("the value of a / b is ",(a/b));
    
        // assignment operator
    var c=b;
    // c+=2;
    // c-=2;  //c = c-2;
    // c*=2;
    // c/=2;
    //  console.log(c);

    // comparison operator
    var x = 34;
    var y = 56;
    // console.log(x==y);
    // console.log(x>=y);    
    // console.log(x<=y);
    // console.log(x>y);
    // console.log(x<y);

    // logical operator
        // logical and 
        // console.log(true&&true);
        // console.log(true&&false);
        // console.log(false&&true);
        // console.log(false&&false);

        // logical or 
        // console.log(true||true);
        // console.log(true||false);
        // console.log(false||true);
        // console.log(false||false);

        // logical not 
        // console.log(!true);
        // console.log(!false);
// 6.function  in javascript
function avg(a,b) {
    c = (a+b)/2;
    return c;
}
//DRY= do not repeat yourself
        c1 = avg(6,4);
        c2 = avg(14,10);
        // console.log(c1,c2);
//7.conditionals in java script
     /*var age = 56;
    //  if (age>8) {
    //      console.log('you are not a kid');
    //  }
    //  else {
    //      console.log('you are a kid')
    //  }

    // if-else ladder
    if (age<8){
        console.log('you are  a kid')
    }
    else if(age>26) {
        console.log("you are adult")
    }
    else 
        console.log('you are on going adult')
*/

//8.loop in java script

    // var arr = [1,2,3,4,5,6,7];
    // console.log(arr);
    // for( var i=0; i<arr.length;i++) {
    //     if(i==2){
    //         // break;
    //         continue;
    //     }
    //     console.log(arr[i])
    // }

    // arr.forEach(function(element){
    //     console.log(element);
    // })

    // const ac = 0;
    // let j = 0;
    // while(j<arr.length) {
    //     console.log(arr[j]);
    //     j++;
    // }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

    // let myArr = ["fan", "camera" ,34,null,true]
    //  array method 
    // console.log(myArr.length);
    // myArr.pop(); 
    //  myArr.push("vikash") 
    //  myArr.shift();
    // const newLen = myArr.unshift("vikash")
    // console.log(newLen)
    // console.log(myArr);

//9.String method in java script
    // let myLovelyString= "vikash is a good boy good "
    // console.log(myLovelyString.length);
    // console.log(myLovelyString.indexOf("good"))
    // console.log(myLovelyString.lastIndexOf("good"))
    // console.log(myLovelyString.slice(4,6))
    // d = myLovelyString.replace("good","bad")
    // console.log(myLovelyString,d)


//10.date

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// 11.DOM manipulation

  let elem = document.getElementById('btn');
//   console.log(elem);
  let elemclass = document.getElementsByClassName("container")
    // console.log(elemclass);
    elemclass[0].style.background = "yellow"
    elemclass[0].classList.add("bg-primary")
    elemclass[0].classList.add("text-success")
    // console.log(elem.innerHTML);
    // console.log(elem.innerText);

    // console.log(elemclass[0].innerHTML);
    // console.log(elemclass[0].innerText);
    
    tn = document.getElementsByTagName('div')
   // console.log(tn)
    createdElement = document.createElement('p');
    createdElement.innerText = "this is a created para"
    createdElement2 = document.createElement('b');
    createdElement2.innerText = "this is a created bold"
    tn[0].appendChild(createdElement)
    tn[0].replaceChild(createdElement2,createdElement)

    // removeChild(element);  --->removes an element

    // Selecting using query 
    sel = document.querySelector('.container')
  //  console.log(sel)
    sel = document.querySelectorAll('.container')
  //  console.log(sel)

    // 12.event in java script 
    function clicked() {
        // console.log("the button was clicked")
        // alert("button is clicked")
    }

    window.onload = function()  {
       // console.log("the document was loaded")
    }

// btn.addEventListener('click',function() {
//     document.querySelectorAll('#btn')[0].innerHTML = "Clicked"
//     console.log("click hua")
// })

// firstContainer.addEventListener('mouseover',function() {
//     console.log("mouse gya")
// })

// firstContainer.addEventListener('mouseout',function() {
//     console.log("mouse out of container")
// })

// let prevHTML= document.querySelectorAll('#btn')[0].innerHTML;
// firstContainer.addEventListener('mouseup',function() {
//     document.querySelectorAll('#btn')[0].innerHTML = prevHTML
//     console.log("mouse up when clicked on container")
// })

// firstContainer.addEventListener('mousedown',function() {
//     document.querySelectorAll('#btn')[0].innerHTML = "Clicked"
//     console.log("mouse down when clicked on container")
    
// })

//arrow function
// function summ(a,b){
//     return a+b;
// }

// summ = (a,b) => {
//     return a+b;
// }


// 12.setTimeout and setInterval
logKaro = ()=> {
    document.querySelectorAll('#btn')[0].innerHTML = "Clicked"
    console.log('i am your log')
}
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro,2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
 

//13.javascript localstorage

// localStorage.setItem('name','vikash')
// localStorage.getItem('name')
// "vikash"
// localStorage.removeItem('name')
// localStorage.clear();

//14.JSON

    // obj = {name: "harry", length:1, a: {this: "that"}}
    // jso = JSON.stringify(obj)
    //console.log(jso)
    //console.log(typeof jso)
    // parsed = JSON.parse(`{"name": "harry", "length":1, "a": {"this": "that"}}`)
    // console.log(parsed);
//15.Template literals - backticks

// a =34;
// console.log(`this is my ${a}`)
