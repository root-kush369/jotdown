// topic1 operators
// 1>

// let a=10,b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


//2 assignment

// let a=10;
// let c=a;
// console.log(c)

//3 increment decrement operator


//1
// let x=10; //11//12//13


    // let y=15; //16//17



// let z= ++x + (y++ * x++) + (++x * y++);
// let z= ++x + (y++ * x++) + ++x * (y++);  new expression!


//11 + (15+11)+(13*16)===>384


// console.log(z);


//2

// let a = 5;//6//7//8
// let b = 3;//2//1
// let c = 2;//3//lastvalue c--->4
// let result = a++ * --b + (c++ * ++a) - b-- * (a + c++);
// 5*2+(2*8)-  2*(8+3)
// 10+(16)-2*(11)
// 26-22//4

// a=5,//6//7
// b=3 ,//2//1
// c=2//3//lastvalue-->4
// let result = a++ * --b + c++ * ++a - b-- * a + c++;
//(5 * 2) +(2*7)-(2*7)+3
//10+14-14+3=13

// console.log(result);


// //3
// let x = 2;
// let y = 3;
// let z = x++ + y + (x * --y); // Rightmost has ()
// console.log(z);


//MY EXPLN LEDS FOR THIS GROK WORDS
// You’re right—I could’ve been clearer earlier, and I apologize for the confusion! I was trying to address your C++ background and the precedence focus you brought, which led to a longer explanation to bridge that gap. Here’s the short, crisp truth we’ve landed on:

// Final Clarity
// In JavaScript: Execution of operators like +, -, * starts from left-to-right (due to left-associativity).
//so mostly execution start from left to right


//4 relational comparision operator

// let x=10;
// let y=12;
// console.log(x>y); //f
// console.log(x<y);//t
// console.log(x<=y);//t
// console.log(x>=y);//f
// console.log(x!=y);//t
// console.log(x==y);//f
// console.log(x===y);//f
// console.log(x!=y);//t
// console.log(x!==y);//t

// let a=121;
// let b =121;
// let c=12;
// let d="12";
// console.log(a==b); //t
// console.log(a===b);//t
// console.log(c==d);//t
// console.log(c===d);//f



//5 logical operator
// let a=19 ;
// let b=21 ;

// console.log(a>b  || a>17)  


//6size of not here applied


//7terniary operator //also if else shortcut //conditional operator (not condition/relational operator point4 above)

// let a=191;
// let b=211;

// if (a>b ? console.log("a is greater" )  : console.log("b is greater")  ,  console.log("none is greater") );

//none is greater part dont comes in syntax of conditional
// if (a>b ? console.log("a is greater" )  : console.log("b is greater")  ,  console.log("none is greater") );


//.....................................................................................................
//8> bitwise operator 


//imp observation for interview


//QuesN

// in left shift and right shift i learned a trick for 
// left shift x*2^n where n is how much to shiuft and same for 
// rights shift i learned x/2^n now when i did same in js it works but when i came across divide part 
// like right shift it gave answer without decimal where as 
// java script allows answer in decimal not like c++ dolike 13/7= 
// i get answer   1.8571428571428572but if i do like 23 >>3 i get answer 2 in js but it divides can get answer2.875


//Ans
// Yes, you’re on the right track! Let me explain it simply:
// What "32-bit Integer" Means
// 32 Bits: A "bit" is a 0 or 1. A 32-bit integer uses 32 bits to store a number.

// Bytes: 1 byte = 8 bits. So, 32 bits = 32 / 8 = 4 bytes.

// Space: A 32-bit integer takes 4 bytes of memory to represent a whole number (no decimals).

// In JavaScript
// Rule: Bitwise operators like >> convert numbers to 32-bit integers (4 bytes) before operating.

// Range: It can store values from -2,147,483,648 to 2,147,483,647 (signed integer range for 32 bits).

// Example: 23 >> 3 → 23 is treated as a 32-bit integer (00010111 in binary), shifted, and decimals are dropped.

// Comparison
// C/C++: An int is often 4 bytes (32 bits) too, depending on the system, and behaves the same for bitwise operations.

// JS Twist: Normally, JS numbers are 64-bit floating-point (8 bytes), but bitwise operators force them to 32-bit integers temporarily.

// Short Answer
// Yes, a 32-bit integer means 4 bytes in memory for whole numbers. In JS, >> uses this format, cutting decimals, even though regular numbers are bigger (8 bytes).


// let a=23;
// let b=3;
// console.log(a>>b);
// // 101/2^121 //3.79 answer came in round of

//used here shortuct of topic 7.2 operators!
//(left shift x*2^n and rightshift x/2^n) //also point h jo-kona ke baad wale se utna shift krna hota h
// let a=17;
// console.log(a>>2);

// let aa=19;
// console.log(aa<<2);

// 00001010
// console.log(13/7)


//8.2 bitwise 1's 2's complement with memory presentation

// let a=11;
// ....8421
            //0000 1011


            //a ->//1111   0100
                    // 0000 1011
                                        // 1
                                        // 00001100//12


// console.log(~a);

// let b=-11;
// console.log(~b);

//11 in binary- >    0000 1011
//-11 in memory  in 2's complement form -> so its also  2's complement m doing also  showing it in memory

//1111 0100 //1's complement
//              +1 //add 1
//            1111   0101  //-1 of MSB is 1 than -ve  //->-->this is -ve 11 in memory


//convert back to binary rule here is simple do 1's complement 
//0000 1010
//10 //- of -10 and 1111 was in MSB so - of thay - and - cuts 
//so answer is 10







//.....................................................................................................


//JS Day 2
//topic 1creation of objects //need in API creation too much and in JS functionality , in react !!



// let kush = {

//   a : 10,
//   b : 20,

    // x : function task()
    // { 
        // console.log("fine");
        // return("fine");
    // }

// }

// console.log(kush.x());




// topic2  creation of factory function and constructor function


//2.1
// //factory function
// function ipl()
// {
//     // this.fname=z
//     let ok = {

//         a : '1',
//         b: '2',
//         c: function p()
//         {
//             return "hey";
//             // return  this.fname;
//         }

//     }
//     return ok;
// }

// let factoryfunctionObj =  ipl;  this ipl() with out () this means ipl is not allowded orvalid object creation in factoryfunction
// let factoryfunctionObj =  ipl(); //difference is here in this line of factory func with respect to constructor function is 
// //like when we declare constructor object where new keyword used and birth of this keyword takes place
// //..and this keyword is used inside class in all progr lang or here in constructor function
//2nd diff is factory function is combination of function + object and object name is returned
// console.log(factoryfunctionObj);

//constructor function no object creation done nothing is returned
//as constructor  is so smart as i initlize with new keyword this also born and i can
//say this object is created or formed itself which has access to all member/variable(properties)
//and methods(behaviour) i when create any object by name of class in normal progM
//or here in constructorfN this points to current object
//so if this has access to all member and behaviour so do object has too
//if x==y==z than x==z! (x is class in normalproG or constructorfunction / y is this keyword / and z is object created by name of either class or constructor function)









// for (temp in ipl)
// {
    // console.log(temp.a);
// }
// console.log(factoryfunctionObj.a);
// console.log(factoryfunctionObj.b);
// console.log(factoryfunctionObj.c);
// factoryfunctionObj.b;
// factoryfunctionObj.c;


//topic3 constructor function


// let

// function ipl(t1,t2,t3)
// {
//     this.team1=t1;
//     this.team2=t2;
//     this.team3=t3;

//     this.finalMatch=function FM()
//     {
//         console.log(`final match can be between this teams ${this.team1} ,${this.team2},${this.team3}`);
//     }
//     return 0;
// }

// let constructorfNobject= new ipl("mi","csk","srh");
// console.log(constructorfNobject.finalMatch())



//topic 4 dynamic nature of object ~> means object allows parsing of new value at time of creation or calling lets see

//4.1
// let a=10;

// let x= {
//     a:11,
//     b:12,

//     c: function test()
//     {
//         console.log("hii");
//     }
// }

// x.a=13;
// x.c=function a()
// {
//     console.log(`value of a is  ${x.a} `)
// }
// console.log(x.c());



// //4.2 in factory function dynamic nature of object

// function ipl()
// {
//     let x =
//     {
//         obj1 : 1,
//         obj2 : 2,

//         obj3 : function ok()
//         {
//             console.log("hii");
//         }
//     }
//     return x;
// }
// let factFunction = ipl(); //READ it interview ~~dont use like  ipl use full with () like ipl()  .//technically here in funcObj weather refrence stores but here  is nothing like refrence here its called as object
    //..so object weather func call () ke value funcObj  m store hogye
// console.log(factFunction);
// console.log(factFunction.obj3());

// //dynamic nature of object touched below
// factFunction.obj1=11;
// factFunction.obj2=12;
// factFunction.obj3=function okk()
// {
//     console.log("bye");
// }


// console.log(factFunction);
// console.log(factFunction.obj3());


 //topic 4.3 //dynamic nature of object in constructor function :~ here i didnt created any new object just passed value
 //..so dynamic nature of object dont work here in  constructor function

// function ok (fn,ln)
// {
//     this.fname=fn;
//     this.lname=ln;
//     this.occup=function occupA()
//     {
//         console.log(`occupation of ${this.fname} , ${this.lname} is sde`);

//     }

// }

// let constructorfunctionObj=new ok("kush" ,"Bhardwaj");
// console.log(constructorfunctionObj.occup());


// constructorfunctionObj.owner="hind"; //changed perfectly...

// console.log(constructorfunctionObj);
// constructorfunctionObj.owner="Jaihind";
// console.log(constructorfunctionObj);


// //topic5 function are objects //we can access them by dot operator lets see


// function weather()
// {
//     //step1
//     //create membervariable/property and membermethod/behaviour
//     //with functionname and . operator


//      weather.himachal=29;
//      weather.UP=37;
    
//     //................ this is object declaration member declaration can"t be declare without 
//     //..object creation
    
//     // a:10,
//     // b:20,
//     //................

//     //step2 return function name
//     return weather;
// }

// let functObj= weather(); //create object by function name but no use of new keyword ..//technically here in funcObj weather refrence stores but here  is nothing like refrence here its called as object
    //..so object weather func call () ke value funcObj  m store hogye
// console.log(functObj.UP);


//Topic6th //imp here read call by sharing thoroughly..
//types in js 

//primitive types data variable not operator dont confuse with that js day1
//number/string(character/str not  same here)/bool/null(0)/undefined(nothing)

// let x=10;
// let y=x; //y is variable that got 
// console.log(x,y);


//..............................
//imp interview question

// //althought its call by value prove is if i change x it dont change value of y later
// x=20;
// console.log(x,y);
//..............................


//reference type ex objects , functions, array are objects here share same reference



//call by refrence via object


//access mechanism via function as object
// function test()
// {
//      test.x =10;
//     test.z= ++test.x; //imp here how to do increment if function treated or accessed as object
//     return test;
// }

// let objA=test();


// console.log(objA.x);



//IMP HERE read call by sharing happening here as js dont have or allow exactly clal by refrence
            //..only call by value and call by sharing


//call by sharing :-where object is copied and shared and it can access membervariable/property and member method/behaviour
//like i copied object   ConstFunctionObj in tempHoldValueofconstructorFunc and than shared to function and made changes to
// constructor function property/member variable called as c
// function ConstrucFunc()
// {
//     this.x=20;
//     this.y=21;


// }
//v imp interviewQuestion//
//in constructtor function without() this object creation allowded but not in factory function
// let ConstFunctionObj = new ConstrucFunc;
// console.log(ConstFunctionObj.x);

// function test(temp) //object which was there at time of calling came here as formal paramteter
// {
//     ++temp.x;
// }

// let tempHoldValueofconstructorFunc=ConstFunctionObj; //here i passed reference 

// let functionVariableWhichHasCopiedObject=test(tempHoldValueofconstructorFunc);

// console.log(ConstFunctionObj.x);


//..................................................................................................................
//vimp interviewQuestion js dont have call by refrence exactly

// Is This Call-by-Reference?
// Not Exactly: JavaScript doesn’t use true call-by-reference. It uses call-by-value, but with a twist for objects: the “value” passed is a reference to the object. 
//means in simple object as value paas horha hota h ,bcoz here is no concept of refrence like c++
// This is often called call-by-sharing or “call-by-value with reference semantics.”

// Key Difference:
// Call-by-Reference (C++ Style): The function would get the actual memory address of the variable, and reassigning temp = something would change ConstFunctionObj.

// JS Behavior: The function gets a copy of the reference (a pointer to the object), not the variable itself.
//..................................................................................................................


//Vimp ~>interviewQuestion
//array is order collection of data but somedatatypes are unordered
//unordered doesnt means noncontiguous
//contigious is dont linked to ordered too
//like both array and Linkedlist(which is not in js ) are ordered datastructure but with non contiigious memory locations

//unordered dataStructure  defin here
// ohh kay unordered means value are tied to variable or key in case of hash data structure but
// it doesnt gurantee to appear in first position or last while iteration?
//like if a=10,b=20 so in next turn b=20 can appear before a=10




//topic 7th
//iteration /loops and recursion
//but lets study all loops
// for in to loopover objects
//for of to loop over array(pr array is also object in js) and map pr iterate 



//USE OF FOR IN LOOP ~~>to iterate over object
// let x = { //object can be accessed using dot and using slice operator[see in array Day3]
//     //amd @1 below
        
//         //objectname[key]//note best save it with huge observation made myself
//         fname : "kush",
//         lname :"bhardwj",
    
//         occup: function occupation()
//         {
//             console.log("sde..");
//         }
//     }

//     for (temp in x)
//     {
//         console.log(temp) //dont show function value or block
//     }


////USE OF FOR OF LOOP

// via array and maps looping happens


//>>VIA ARRAY
// let x =[1,"kush","2",2,"bhardwaj"];
// for( temp of x)
// {
//     console.log(temp);
// }
// console.log(x[1]);


////>>FOR OF VIA MAPS

// let z= [1,2,3,4];
// let x=[];

// //automatic iteration happen here this is higher order function and predicate logic
// z.map(function (test)
// {
//    x.unshift(test+"@k.com")
// });


// for (temp of  x)
// {
//     console.log(temp);
// }

// let z= [1,2,3,4];
// for (temp of z )
// {
//     console.log(temp);
// }
// let newmap = z.map(function(temp){
//   return  temp+"@onkeydown.com" //predicate function expect return
// })
// for (temp of newmap)
// {
//     console.log(temp);
// }


//topic8 cloning object means creating exact copy with exact new address not same!

// let x = {
//     fname : "kush",
//     lname :"bhardwj",

//     occup: function occupation()
//     {
//         console.log("sde..");
//     }
// }

//1st way by spread operator
// let z={};
//  z= {...  x}; //declaration of object by let variablename={};

// console.log(z);

//2nd way by for in loop
// let z={}
//  for(temp in x)
// {
//     z[temp]=x[temp] //temp can be used here as indexing
//     // bcoz temp gives index and by array name and subscript value is accessed or can be assigneds
// }

// for(temp in z)
//     {
//        console.log(temp);
//     }
    

// console.log(z.occup())

//3rd way by predefined member object whose function is assign

// let z={};
// z= Object.assign({},x) //syntax / /step1 object.assign //step2 use inside () of Object.assign({} and x);
// console.log(z);


//topic 9 

//topic 9

//
//if else if else and switch case statments
// let salary =122000;

// if (salary >100000)
// {
//     console.log("take job")

// }
// else if (salary ===100000)
// {
//     console.log("will think")
// }
// else
// {
//     console.log("No..");
// }


// //topic10th switchcase
// let day=1;

// switch(day)
// {
//     case 1 : console.log("Mon");
                
//     case 2 : console.log("Tue");
//                 break;
//     case 3 : console.log("Wed");
//                 break;
//     case 4 : console.log("Thurs");
//                             break;
//     case 5 : console.log("Fri");
//                 break;
//     case 6 : console.log("Sat");
//                 break;
//     default : console.log("Sun");
                
// }



//Js Day3rd ~>Array datastructure or i can say object in More Details

//Topic1
// array part

//adding  data inside array

// let x=[1,2,3,4];

//1st way~>//add in front iguess
//unshift operator~means no shift add data bcoz shift mtlb shift krna and that happens by removing data
// x.unshift("kush");

// for (temp of x)
// {
//     console.log(temp)
// }
// x.unshift("bhardwaj");

// for (temp of x)
// {
//     console.log(temp)
// }

//2nd add in middle splice operator


// x.splice(3,0,"om") //syntax where ,how much to remove, what to add
// for (temp of x)
//     {
//         console.log(temp)
//     }    

//3rd push at the end     



// x.push("car");

// for (temp of x)
//     {
//         console.log(temp)
//     }    



//topic2 delete
//2) removing element same opposite of above /specific element



// x=[1,2,3,4,5];//2) removing element same opposite of above /specific element

//1~ remove from forward
// x.shift();

// for (temp of x)
//     {
//         console.log(temp)
//     }    


// //2~remove from mid and specific position
// x.splice(1,1);
// for (temp of x)
//     {
//         console.log(temp)
//     }    


// //3 ~> remove from end
// x.pop()
// for (temp of x)
//     {
//         console.log(temp)
//     }    



//topic3 empty array all at once

// let x=[1,2,3,4,5];
// let z=x;
// x=""; //1st way but not completely right way so do x.length=0;
// console.log(z);
// console.log(x);
// //but still z point to x memory block

//2nd way
// x.length=0;
// console.log(x);

//3rd way
// pop out all values by iteration
// let temp=x;



//1st way not right logic
// for (let i =0 ; i<temp.length ; ++i)
// {
//     console.log(x[i]);
//     x.pop();
// }

////2nd way not right logic
// for( tempp of x)
// {
    // console.log(tempp)
    // console.log("hiii");
    // temp.pop()
    // break;
// }
// console.log(x.length);
// console.log(x);

//3rd way ~Right way

// while(x.length)
// {
//     x.pop();
// }
// console.log(x);

//4th way by splice operator

// x.splice(0,5)

// console.log(x);


//topic 4th finding and searching element of array

// let x=[1,2,3,4];
// console.log( x.includes(3) );
// console.log( x.indexOf(4) );


//topic5th
//....................................................................................
// combining and slicing


//two ways of combining

// //5.a combining 1st way~ by concat ->follows strict rule takes array as argument

// let x=[1,2,3,4,5];
// let y=[8,9];
// // x.concat(y) ;//concat always takes array as input
// // console.log(x);


// //5.bcombining 2nd way~ by using spread operator takes 2 array name start by ... operator and i can store it in existing array
// x=[...x , ...y ,99]; //here i can add more elements on my own
// console.log(x);
// //katna array ko takes 2 Actualargument [khaa/start] se [khaa tk/end]
// // let x=[1,2,3,4,5];
// // //


//....................................................................................

//5.2 cutting slicing array by S for Splice function !
// let y=[];
// y=x.splice(0,3) //keedr //kitnae position tk //and kya add krna (3 argument here 3rd don"t need)
// console.log(y);


//topic 6 iterating through array!

// let x=[1,2,3,4,5];
//1st way by for of loop
// for (temp of x)
// {
//     console.log(temp);
// }

//2nd way
// predicate function higher order function i.e by forEach here

// x.forEach(function(iterator){
//     console.log(iterator);
// })

//3 by fundamental loops for/while iterators


//Topic7 :~joining and splitting array
//join is not concat here and split is not cut here !
//here joining means on what basis to join

//join converts array to string
// //and split function/behaviour/method convets string to array
// x=[1,2,3,4];
// y="abc/d";

// x=x.join("pookie"); //means after each value pookie came  bcoz pookie ke basis pr yaa pookie ko hr value ke saath join krdeeya 
// //and form string atlast
// console.log(x);

// y=y.split("/"); //means "/ formward slash ke  basis pr array ko split krdeeya" 
// console.log(y);


//Topic8th 

// x=[4,3,2,1];
// x.sort(); //simple sort

// console.log(x);


//sorting here also predicate higher order function concept gonna come
// x=[4,3,2,1,33,2,11,2]; //failed here basic sort
// x.sort(function(value1 , value2){
//     if(value1<value2)
//     {
//         return -1;
//     }
//     else if (value2 <value1)
//     {
//         return 1;
//     }
//     else if (value2==value1)
//     {
//         return 0;
//     }
// })

// console.log(x);


// 0 1 -1 //0 no change  //1 in number line is +ve right side //-1 is -ve in left side
//and value1 is actually 2nd value and value2 is 1st value


// //Topic9th filtering and mapping //here it comes in amazon app creation ~~>need in js and react !!


// x=[1,2,3,4,5,6];

// let y=x.filter(function(formalP){
//     if(formalP%2==0)
//     {

//         return formalP;
//     }
// })
// console.log(x);
// console.log(y);

// y=y.map(function(formalP){
//     return formalP+"@Amazon.com"
// })
// console.log(y);


//Js Day4th
//Function I love it Shiv/RamJi 
//Details


//topic1
//hoisting concept + function assigments seen which dont show hoisting traits
// x(); 
// let x=ok(); //function assignment done here
// function ok()
// {
//     console.log("wud");
// }

// 2)//function with formal and actual arguments


// function sum(inpOne, inpTwo )
// {
//     return inpOne + inpTwo;
// }
// console.log( sum(12, 12) );


//3 function concept with default parameter
//concept of default parameter
// function sum(inpOne, z=13 ,inpTwo)
// {
//     return inpOne +z+ inpTwo;
// }
// console.log( sum(12, undefined ,12) ); //if want to mentioned default parameter in between in
//formal parameter/argument area but always try to write formal parameter right most

//4 function with predefined keyword arguments and restoperator(i.e spread operator as formal argument only)

// let z=[1,2,3,4]

// function pass(x,y, ...z) //first 2 actual arguments stores in order of MSB/ leftmost /
// {

//     console.log("rest of formal argu",arguments);
//     console.log(typeof(z)); //type is object here but z stores all argument in form of array does
//     //..and array is also an object so i can say restoperator has charactersticks like Array
//     console.log(typeof(z));
//     return  x+y +z[0];

// }

// console.log(  pass(2,4,5,6,7,777,7777,77777) );


//5 anonymous function concept

//concept here is given no name for function but stored it in variable kinda that gets address of that
//function
// let storeAnon= function()
// {
//     // console.log("hii");
//     return("hii");
// }
// console.log(storeAnon());
// console.log(typeof storeAnon);



//6 getter and setter method


//very important
//setter and getter are not function here just predefined keywords to setvalues 
//look as function when declared and defined but don't look when we call them


// let x ={

//     iplteam1:"csk",
//     iplteam2:"MI",

//     set fname(val)
//     {
//         console.log("new val: ",val);
//     },
//     get getName()
//     {
//         console.log(`team is  ${this.iplteam1} & ${this.iplteam2}`)
//     },

// }
// x.fname="pi";
// x.getName; //they look like function while creation but at time of calling they dont as i dont use() bracket 


// //Topic7
// //error handling

// let x ={

//     iplteam1:"csk",
//     iplteam2:"MI",

//     set fname(val)
//     {
//         if (typeof val !== "string")
//         {
//             throw new Error (`${val} is not a string buddy`)
//         }
//         else
//         {
//             console.log("new val is string : ",val);

//         }
//     },
//     get getName()
//     {
//         console.log(`team is  ${this.iplteam1} & ${this.iplteam2}`)
//     },

// }

// try{
//     // x.fname="ok"
//     x.fname=12;
// }
// catch(errrorhu)
// {
//     console.log("error came following : ", errrorhu);
// }

//topic8th closure proper
// function xyz(t)
// {
//     let temp=t;
//     function abc() //closure property is inside function abc i am able to access last value of xyz
//     // function i.e of temp even though xyz returned so its value should end acc to runtimestack destroy
//     //but it gets retained inside abc()! ig this not applicablein c++ i tried ..bcoz once function is returned there run time stack is destroyed
//     {
//         console.log("val temp : ",temp);
//         ++temp;
//         console.log("val temp : ",temp);
//         // return null;
//         return temp;
//         // return abc;
//     }
//     return abc;
// }

// let  p =xyz(12) ;
// // console.log(p(12));
// console.log( p() );




// >>>>>>>>>>>>>imp<<<<<<<<<<<<<<
//dom + modernjs 2
//eventphases test by adding too many events

// console.log (  document.querySelector("#div")  );

// let div=document.querySelector("#div") ;
// div.addEventListener("click",function(event){
//     console.log("i am div");
// })

// console.log( document.querySelector("#span") );

// let span=document.querySelector("#span") ;
// span.addEventListener("click",function(event){
//     console.log("i am span");
//     event.stopPropagation();
// },true)



//
//fetching current target in js 


//esaa element jiske value hote ho uske he krega fetch
// let div = document.querySelector("#div");
// div.addEventListener("click",function(event){
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     console.log(event.target.value); 
// })


// //one for example of event chaining mulitple event click and with phases!
// let t1=performance.now();

// let customElementFirst=null;

// function parafuncOne(event)
// {
//     if(event.target.nodeName==="P")
//     console.log(`this is para number :~>`, event.target.textContent);
// }




// function parafuncSec(event)
// {
//     if(event.target.nodeName === "DIV") //event.target.nodeName jo node trigger huaa usko name laa skta hu mai isse
            //.... to compare maybe
//     {
//         console.log(`this is div clicked`);
//     }
// }




// let customElementSecond=document.createElement("div");

// customElementSecond.addEventListener("click" , parafuncSec , true);





// for (let i = 0 ; i<100; ++i)
// {

//     console.log(`Para : ${i}`);

//     //created element
//     customElementFirst=document.createElement("p");
    
//     //stored by setmethod
//     customElementFirst.textContent=`hii dude${i} `;
    
//     customElementFirst.addEventListener("click" , parafuncOne , true);
    

//     //means div ke andr p store krra hu
//     customElementSecond.append(customElementFirst);
// }

// document.body.append(customElementSecond);
// let t2=performance.now();
// console.log("time : ", t2-t1);



// let t1=performance.now();
// let newElement=null;


// function paraFunc(event)
// {
//      console.log("here is the value of para number " ,event.target.textContent );
// }
// let customFragment=document.createDocumentFragment();

// let elementOne= document.createElement("div");

// for (let i= 0; i<100; ++i)
// {

//      newElement = document.createElement("p");
//      newElement.textContent = `hii${i}`;
     
//      newElement.addEventListener("click",paraFunc);

//      customFragment.append(newElement);

// }
// document.body.append(customFragment); //reflow(konsa tag/element khaa pr place hoga) and repaint (pixel by pixel)

// let t2=performance.now();
// console.log(t2-t1); //time reduced from 28 to 5 sec



//.................................................................
//Dom+ModernJsDay4


//topic1
//sync and async code
// function ok ()
// {
//     setTimeout(function(){
//         console.log("bye");
//     },1000);
//     console.log("hii");
// }

// ok();


//topic2
//promise for sync code not recommended i discuessed with Grok3 
// Not Recommended:
// Wrapping synchronous code in a Promise is unnecessary and adds overhead (e.g., microtask queue scheduling).

// It can make the code harder to read and less performant.

// let newPromiseObj = new Promise(function (resolve, reject){
//    console.log("sync code");

// });


//promise with async makes sense

// let newPromiseObj = new Promise(function (resolve, reject){
//     setTimeout(() => {
//         console.log("async code..");
//         resolve("done..");
//     }, (3000));
 
//  });
//  console.log(newPromiseObj);


 //reject with asynccode


//  let newPromiseObj2= new Promise(function(resolve , reject){
//     if (133<13) {
//         // reject("Error: Condition not met");
//         reject(new Error("this") );
//       } else {
//         // Async operation
//         console.log("else..");
//         setTimeout(() => resolve("Success"), 1000);
//       }
//  })
//  newPromiseObj2.then(function(value){
//     console.log(value);
//  })
 
//1st
// let newPromiseObj2= new Promise(function(resolve , reject){
//     // if (133<13) {

//         // Async operation
//         // console.log("else..");
//         // setTimeout(() => resolve("Success"), 1000);

//     // }
// });
// console.log(newPromiseObj2);


//2nd
// let newPromiseObj2= new Promise(function(resolve , reject){

//     setTimeout(() => {
//         console.log("async code..");
//     }, (3000));
//     resolve("done..");
     
// });
// console.log(newPromiseObj2);


//3rd

// let newPromiseObj2 = new Promise(function(resolve, reject) {
//     if (133 < 13) {
//         reject(new Error("this"));
//     }
//      else {
//         // console.log("else..");

//         settimeout(function(){
//             console.log("hii");
//             resolve("done..");
//         },4000);
//     }
// });
// console.log(newPromiseObj2);



//topic2.2 promise async sync resolve reject then catch...

// promise chaining will make me pro is resolve and reject

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//kush read this when ever visiting async sync code promise/resolve reject
// so all in al  i can say async code settimeout execution is not linked or tied up with promise
// Promise sensible link is with resolve or reject its like extra miscellanous part which i
//  can use or bind up async code inside
//  it so kinda marker i can use resolve after async code to track value ke
//  agr resolve chlgya by then keyword means us se pahle wale value b chl gyi hoge

// but still if i dont use promise resolve reject concept hii would print beautifully and if i dont want to print still with use of promise resolve reject i can print value with the help of then and its predicate  function
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// let promiseobjectOne= new Promise(function (resolve,reject){

//     setTimeout(function(){
//         resolve("first promise done");
//         console.log("hii");  //READ interview ~~> ye print hojayega 2 second baad but resolve mai print kraa skta hu then se which is function of resolve
            //resolve muje then se print krwana h yhaaa
//     },2000);
    
// });
// // console.log(promiseobjectOne); //is stage pr promise pending aayega bcoz
// //resolve or reject attach with async codeand background execution is async actually use
// //of resolve and reject is with predicate function inside promise and  uska kaam  is to print by then or catch keyword
// //and uske through he value nikalna bnta h sahi --> its a rule other wise 

// promiseobjectOne.then(function(value){
//     console.log(value);
// })


//topic3rd aysnc await



// async function kushWeather()
// {
// let SataunMausam = new Promise(
//    function(resolve){
//       setTimeout(function()
//       {
//          console.log("temperature is 7deg");
         
//          resolve(true);
//         },2000);
// });

// let SataunW=await SataunMausam;

// //await wait krta hae fulfilled ka until that wo aagae he ne jayega ye dekh leeya maine!
// // console.log(SataunW);

// let PaontaMausam = new Promise(
//    function(resolve){
//       setTimeout(function()
//       {
//          console.log("temperature is 9deg");
         
//            resolve(true);
//       },1000);
// });


// // let SataunW=await SataunMausam;
// let PaontaW=await PaontaMausam;
// // console.log(PaontaW);

// return [PaontaW,SataunW];
// }


// console.log(kushWeather())


//

// async function one()
// {
//     let paontaWeather = new Promise(function(resolve , reject){
//         setTimeout(() => {
//             console.log("temp is 18 cels")
//             resolve("Paonta shown..");
//         }, (7000));
//     })
//     {

//     };
//     let P=await paontaWeather;
//     let SataunMausam =new Promise(function(resolve,reject){
//         setTimeout( ()=>{
//             console.log("temp is 16 cels");
//             resolve("sataun shown")
//         },(4000) );
//     })
//     {

//     };
//     let S=await SataunMausam ;
//     return[P,S]
// }
// console.log(one() ); 

//one way by then
// one().then(function(val){
//     console.log(val);
// });


//topic 4th Api calls


//creating  own api

//  async function Kush()
// {

// let weatherkush = {

//      method : "POST", //here is post method means sending data to server API backend not actually backend database
//      //but mimiced database

//     body : JSON.stringify( {
//                                                               //bhejne se pahle muje string mai bnana hoga  , dont confuse ke ye backend pr hai to string form mai hai
                                                                //its in json form but i had to convert it in string as coder to send to typicode.com mimiced backend
//         fname :"kush",
//         lname:"bhardwaj",
//         fullname: function fn()
//         {
//             console.log(`full name is ${fname} & ${lname}`);
//             return(`full name is ${fname} & ${lname}`);
//         }
//     }) ,

//     headers : {
//         'Content-Type' : "application/json ; charset=UTF-8"
//     },

    
// }

// //requestfunction by fecth
// let kushAPI= await fetch("https://jsonplaceholder.typicode.com/posts",weatherkush);
// let finalop= await kushAPI.json(); //data can be seen in string but its good to visualize in json for further operation
// // //bcoz js have maximum function w.r.t json predefined
// // console.log(finalop);



// // }
// // console.log (  Kush() );




// //revision apr16 Wed

// let x =[1,2,3,4,5];

// // x.map(function (task , index){
// //     console.log(task , index);
// // })
// temp={
//     task1:"hii",
//     task2:"hii2",
//     task1:"hii3",

// }

// let y=[];
// console.log(y);
// y=x.map(function(itemtask, index){

//      return itemtask; 
// }) 

// console.log(y);
const newTask = {
    text: "aagyivalue", // The task text
    date: "formatdate", // The date
    Checked:  "isChecked", 
    // To track if the task is marked done
  };


to_do=[1,2,3,4];

to_do=[... to_do , newTask];
to_do.map(function (formalParameter , i ){
    console.log(formalParameter , i);
});


    