let screen=document.getElementById('screen');
// console.log(screen);
// screen.value=10;
let historyArray = [];
let btn=document.querySelectorAll('.btn');
let btn1=document.getElementById('his')
// let history = document.querySelector("#history");
// let historyList = document.querySelector("#history ul");
message = document.querySelector(".message")

 btn1.addEventListener("click", display)

// // history.style.visibility = "hidden";

function display(){
  message.innerText = ` ${historyArray}`

  
}

function sin()
    {
        screen.value=Math.sin(screen.value);
    }

    function cos()
    {
        screen.value=Math.cos(screen.value);
    }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pi()
    {
        screen.value= 3.14159265359;
    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }

    function equal()
    {
      var lhs=screen.value;
      
        screen.value=eval(screen.value);
        var rhs = screen.value;
        // console.log(lhs, rhs);
        historyArray.push(lhs+" = "+rhs);
        console.log(historyArray);
    }

    function number(value){
      // console.log(value);

        screen.value += value;
        const arr = [screen.value];
        // console.log(arr);
        return arr;
        
    }

// let his = document.querySelector("#his");

function hist(){
      // const ar = number();
      console.log(historyArray);
      // document.write(historyArray);
      // pop.historyArray;
    //   let style = history.style.visibility;
    // history.style.visibility =style=="hidden"?"visible":"hidden"
    
      // screen.value=ar;
    }
    
// his.addEventListener("click", hist);
