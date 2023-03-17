// getting DOM elements
const myName=document.querySelector('.name')
const starting=document.querySelector('.starting')
const profession=document.querySelector('.profession')

// changing them into array
 let nameArray=myName.innerText.split('')
 let startingArray=starting.innerText.split('')
 let professionArray=profession.innerText.split('')
 console.log(nameArray);
 myName.innerText=""
//console.log(myName,starting,profession);
nameArray.forEach(element => {
    element=element.replace(/"/g,'')
    myName.innerHTML+=`<span class="spanning">${element}<span>`
   
    });
    const gettingName=Array.from(document.querySelectorAll('.spanning'))
    gettingName.forEach(element=>{
        element.addEventListener('mouseover',()=>{
            element.classList.toggle('animating')
            element.classList.toggle('fa-shake')
                const gettingName=Array.from(document.querySelectorAll('.spanning'))
                gettingName.forEach(element=>{
                    element.classList.remove('fa-shake')
                })
                element.classList.toggle('fa-shake') 
            
          
            
            //console.log(element.innerText);
            //element.classList.add('fa-shake')
        })
    })
    console.log(gettingName);
const M=document.querySelector('.spanning')
M.classList.add('fa-shake')
    
 