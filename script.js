
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
       if(result<18.6)
        {
            document.querySelector("#b2").innerHTML+="Under Weight as BMI is less than 18.6";  
        }
        else if(result>=18.6 && result<24.9)
            {
                document.querySelector("#b2").innerHTML+="Normal Weight as BMI is in between 18.6 and 24.9";  
            }
            else if(result>=24.9)
                {
                    document.querySelector("#b2").innerHTML+="<p>Over Weight as BMI is greater than 24.9 </p>";  
                } 
       }
    })
  