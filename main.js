let a=Math.floor(Math.random() * 2)
let eingabe=document.getElementById('eingabe')
let resu=document.getElementById('resu')
let i3=document.getElementById('i3')
let i5=document.getElementById('i5')
let i7=document.getElementById('i7')
let custom=document.getElementById('custom')
let cus=document.getElementById('cus')
let select=document.getElementById('select')
let selected=document.getElementById('selected')


function rech(){
    if(resu.innerHTML.search('Sehr')>0){
        return
    }else 
    if(eingabe.value<a){
        resu.innerHTML+=`<li>Mehr als ${eingabe.value},versuch nochmal</li>`
    }else if(eingabe.value>a){
        resu.innerHTML+=`<li>weniger als ${eingabe.value},versuch nochmal</li>`
    } else if(eingabe.value==a){
        resu.innerHTML+=`<li>Sehr gut</li>` 
    }
}
let e=''
let e1=''
let e2=''
let e4=''

function choose(){
    select.style.display='none'
    if(resu.innerHTML.search('Sehr')>0){
        return
    }else if(i3.checked==true){
        e++
        selected.innerHTML=e +"/ 3"
    }
    if(e==4){
        location.reload();
    }else if(i5.checked==true){
        e1++
        selected.innerHTML=e1 +"/ 5"  
    }if(e1==6){
        location.reload();
    }else if(i7.checked==true){
        e2++
        selected.innerHTML=e2 +"/ 7"  
    }if(e2==8){
        location.reload();
    }else if(custom.checked==true){
        e4++
        selected.innerHTML=e4 +"/"+ cus.value 
    }if (e4>cus.value){
        location.reload()
    }
}

function display(){
    if(custom.checked==true){
        cus.style.display='block'
    }else if(custom.checked==false){
        cus.style.display='none'
    }
}
