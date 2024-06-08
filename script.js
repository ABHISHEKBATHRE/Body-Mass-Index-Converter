
    let form=document.querySelector(".form");
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
       let height=parseInt(document.querySelector("#height").value);
       let weight=parseInt(document.querySelector("#weight").value);
       let result=((weight*10000)/(height*height)).toFixed(2);
       if(height<=0 || isNaN(height) || height=="")
       {
        document.querySelector("#b2").innerHTML=`Please enter a valid number`;
       }
       else if(weight<=0 || isNaN(weight) || weight=="")
       {
        document.querySelector("#b2").innerHTML=`Please enter a valid number`;
       }
       else{
       document.querySelector("#b2").innerHTML=`${result}`;
       }
    })
