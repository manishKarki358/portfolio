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

     const logo=document.querySelector('.logo')
    logo.addEventListener('mousemove',(e)=>{
        const pic=document.querySelector('.logo-container')
        pic.style.animationPlayState="paused"
        pic.classList.add('hovered')
       // pic.style.animationName="jpt"
       // console.log(pic);
        //console.log("clicked");
        let xAxis=(window.innerWidth-e.pageX)/10
        let yAxis=(window.innerHeight-e.pageY)/10
        logo.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        window.addEventListener('click',()=>{
            pic.style.animationPlayState="running"
        pic.classList.remove('hovered')
        })
    }) 
   
 