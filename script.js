const menubtn=document.getElementById('menubtn');
const firstmenu=document.getElementById('firstmenu')
const secondmenu=document.getElementById('secondmenu')

var toggle;
menubtn.onclick=function(){
    
    if (toggle) {
        menubtn.style.transform='rotate(0deg)'
        firstmenu.style.display='none'
        secondmenu.style.display='none'
        toggle=false
    }
    else{
        menubtn.style.transform='rotate(90deg)'
        firstmenu.style.display='flex'
        secondmenu.style.display='flex'
        toggle=true
    }
    
}



