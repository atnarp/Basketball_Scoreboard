
let scoreH = document.getElementById("scH")
let ssH = 0

function add1()
{
    ssH += 1
    scoreH.innerText = ssH
}
function add2()
{
    ssH += 2
    scoreH.innerText = ssH
}
function add3()
{
    ssH += 3
    scoreH.innerText = ssH
}

let scoreG = document.getElementById("scG")
let ssG = 0

function add1G()
{
    ssG += 1
    scoreG.innerText = ssG
}
function add2G()
{
    ssG += 2
    scoreG.innerText = ssG
}
function add3G()
{
    ssG += 3
    scoreG.innerText = ssG
}

let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
  
let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 
  
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    timer = false; 
     
    minute = 0; 
    second = 0; 
    count = 0; 
    
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
}); 
  
function stopWatch() { 
    if (timer) { 
        count++; 
  
        if (count == 100) { 
            second++; 
            count = 0; 
        } 
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        
  
        
        let minString = minute; 
        let secString = second; 
        let countString = count; 
  
         
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  
        if (count < 10) { 
            countString = "0" + countString; 
        } 
  
         
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString; 
        setTimeout(stopWatch, 10); 
    } 
}