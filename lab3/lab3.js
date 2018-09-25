//This is lab 3 for APP-LAB Fall 2018

//challenge 1
/*newword=''
function reverse (word){
    for (let i=0;i<word.length;i++){
        newword = newword + word[word.length-i]
    }


}
let word = 'happy'
console.log(word.reverse(word))

const volumeOfCube = function(length) {
    return length * length * length;
  };
  console.log(volumeOfCube(2));
  //8
*/

const rev= function (word){
    newword=''
    for (let i=0;i<word.length;i++){
        newword = newword + word[word.length-1-i]
    }
    return newword;
}
console.log('challenge 1')
console.log('the reverse of hello is '+rev('hello'));


//challenge 2

const CountConsonant = function (sentense){
    num = 0;
    for (let i=0;i<sentense.length;i++){
        if(sentense[i]==='b'|| sentense[i]==='c'|| sentense[i]==='d'|| 
        sentense[i]==='f'|| sentense[i]==='g'|| sentense[i]==='h'|| sentense[i]==='j'|| 
        sentense[i]==='k'|| sentense[i]==='l'|| sentense[i]==='m'|| sentense[i]==='n'||
        sentense[i]==='p'|| sentense[i]==='q'|| sentense[i]==='r'|| sentense[i]==='s'|| 
        sentense[i]==='t'|| sentense[i]==='v'|| sentense[i]==='w'|| sentense[i]==='x'|| 
        sentense[i]==='y'|| sentense[i]==='z'  ){
            num+=1
        }
    }
    return num;
}
console.log('challenge two, the length consonants of the sentence "Write a JS function that accepts a string and counts the number of consonants" is')
console.log(CountConsonant('Write a JS function that accepts a string and counts the number of consonants'))

//challenge 3

function action (totalDue,totalGiven){
    if (totalDue>totalGiven) {
        return 'you need more money'
        
    } else {
        return 'ohh, you saved money'
    }
}
console.log('challenge 3, totalDue is 30, totalGiven is 40')
console.log(action(30,40))


//challenge 4 

function cubevolume (a){
    return a*a*a
} 
function volumeininch (b){
    b=b*2.54
    return cubevolume(b)
}
console.log('challenge 4: 5 inch cube volume in cm')
console.log(volumeininch(5))

//challenge 5

function countLine (names){
    numb=1
    for (let i=0;i<names.length;i++){
        if (names[i]===' ')
        numb+=1
    }
    return numb;
}

console.log(countLine('jim henry paddy laura kris'))


