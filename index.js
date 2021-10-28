const containerValue = document.querySelector(".container");
const firstContainerValue = document.querySelector(".firstContainer");
const secondContainerValue = document.querySelector(".secondContainer");
const thirdContainerValue = document.querySelector(".thirdContainer");
const startButValue = document.querySelector(".startBut");
const resultContainerValue = document.querySelector(".resultContainer");
// for correct answer
const correctancer1Value = document.querySelector(".correctancer1");
const correctancer2Value = document.querySelector(".correctancer2");
const correctancer3Value = document.querySelector(".correctancer3");
// for next button
const nextbuttonOccurValue = document.querySelector(".nextbuttonOccur");
// falseAnswer1
const falseanswer1of1Value = document.querySelector(".falseanswer1of1");
const falseanswer2of1Value = document.querySelector(".falseanswer2of1");
const falseanswer3of1Value = document.querySelector(".falseanswer3of1");
// falseAnswer2
const falseanswer1of2Value = document.querySelector(".falseanswer1of2");
const falseanswer2of2Value = document.querySelector(".falseanswer2of2");
const falseanswer3of2Value = document.querySelector(".falseanswer3of2");
// falseAnser3
const falseanswer1of3Value = document.querySelector(".falseanswer1of3");
const falseanswer2of3Value = document.querySelector(".falseanswer2of3");
const falseanswer3of3Value = document.querySelector(".falseanswer3of3");
// for correct message
const correctMessageValue = document.querySelector(".correctMessage");
// for false message
const falseMessageValue = document.querySelector(".falseMessage");
// for finalresult
const liValue = document.querySelector("li");
// for mark
let mark=0;
let falseMark;
let nextCount=0;
const forstart=()=>{
    containerValue.style.opacity="0";
    setTimeout(()=>{
        containerValue.style.display="none";
        firstContainerValue.style.display="block";
        firstContainerValue.style.opacity="10";
    },1000);
    
}
// for next
const nextBut=()=>{
    nextCount++;
    if(nextCount===1){
        firstContainerValue.style.display="none";
        secondContainerValue.style.display="block";
        thirdContainerValue.style.display="none";
        correctMessageValue.style.opacity="0";
        falseMessageValue.style.opacity="0";
        nextbuttonOccurValue.style.opacity="0";
        
        
    
    } else if(nextCount===2){
        secondContainerValue.style.display="none";
        thirdContainerValue.style.display="block";
        correctMessageValue.style.opacity="0";
        falseMessageValue.style.opacity="0";
        nextbuttonOccurValue.style.opacity="0";
                   
    }   else if(nextCount===3){
        firstContainerValue.style.display="none";
        secondContainerValue.style.display="none";
        thirdContainerValue.style.display="none";
        resultContainerValue.style.display="block";
        correctMessageValue.style.opacity="0";
        falseMessageValue.style.opacity="0";
        nextbuttonOccurValue.style.opacity="0";
        liValue.append(mark+"Marks");
    }
    
}
nextbuttonOccurValue.addEventListener("click",nextBut);

// for correct answer function

const correctanswer1=()=>{
    if(mark===10){
        return;
    }
    if(falseMark==="falseValue1"){
        return;
    }
    falseMark="falseValue1";
    mark+=10;
    correctancer1Value.style.backgroundColor="lightgreen";
    nextbuttonOccurValue.style.display="flex";
    correctMessageValue.style.opacity="10";
    console.log(mark);
};
const correctanswer2=()=>{
    if(mark===20){
        return;
    }
    if(falseMark==="falseValue2"){
        return;
    }
    falseMark="falseValue2";
    mark+=10;
    correctancer2Value.style.backgroundColor="lightgreen";
    nextbuttonOccurValue.style.display="flex";
    correctMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
    console.log(mark);
};
const correctanswer3=()=>{
    if(mark===30){
        return;
    }
    if(falseMark==="falseValue3"){
        return;
    }
    falseMark="falseValue3";
    mark+=10;
    correctancer3Value.style.backgroundColor="lightgreen";
    nextbuttonOccurValue.style.display="flex";
    correctMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
    console.log(mark);
    
};
// for false answer function

const falseanswer1of1=()=>{
    if(falseMark==="falseValue1"){
        return;
    }
    falseMark="falseValue1";
    console.log(mark);
    falseanswer1of1Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
}
const falseanswer2of1=()=>{
    if(falseMark==="falseValue1"){
        return;
    }
    falseMark="falseValue1";
    console.log(mark);
    falseanswer2of1Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
}
const falseanswer3of1=()=>{
    if(falseMark==="falseValue1"){
        return;
    }
    falseMark="falseValue1";
    console.log(mark);
    falseanswer3of1Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
}

const falseanswer1of2=()=>{
    if(falseMark==="falseValue2"){
        return;
    }
    falseMark="falseValue2";
    console.log(mark);
    falseanswer1of2Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
}
const falseanswer2of2=()=>{
    if(falseMark==="falseValue2"){
        return;
    }
    falseMark="falseValue2";
    console.log(mark);
    falseanswer2of2Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
}
const falseanswer3of2=()=>{
    if(falseMark==="falseValue2"){
        return;
    }
    falseMark="falseValue2";
    console.log(mark);
    falseanswer3of2Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
}

const falseanswer1of3=()=>{
    if(falseMark==="falseValue3"){
        return;
    }
    falseMark="falseValue3";
    console.log(mark);
    falseanswer1of3Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
}
const falseanswer2of3=()=>{
    if(falseMark==="falseValue3"){
        return;
    }
    falseMark="falseValue3";
    console.log(mark);
    falseanswer2of3Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
}
const falseanswer3of3=()=>{
    if(falseMark==="falseValue3"){
        return;
    }
    falseMark="falseValue3";
    console.log(mark);
    falseanswer3of3Value.style.backgroundColor="red";
    nextbuttonOccurValue.style.display="flex";
    falseMessageValue.style.opacity="10";
    nextbuttonOccurValue.style.opacity="10";
}

// for start button
startButValue.addEventListener("click",forstart);
// for crrect answer function calling
correctancer1Value.addEventListener("click",correctanswer1);
correctancer2Value.addEventListener("click",correctanswer2);
correctancer3Value.addEventListener("click",correctanswer3);

// for false answer function calling
falseanswer1of1Value.addEventListener("click",falseanswer1of1);
falseanswer2of1Value.addEventListener("click",falseanswer2of1);
falseanswer3of1Value.addEventListener("click",falseanswer3of1);

falseanswer1of2Value.addEventListener("click",falseanswer1of2);
falseanswer2of2Value.addEventListener("click",falseanswer2of2);
falseanswer3of2Value.addEventListener("click",falseanswer3of2);

falseanswer1of3Value.addEventListener("click",falseanswer1of3);
falseanswer2of3Value.addEventListener("click",falseanswer2of3);
falseanswer3of3Value.addEventListener("click",falseanswer3of3);