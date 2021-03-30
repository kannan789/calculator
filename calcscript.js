var lis=document.querySelectorAll("li");
    lis.forEach((node)=> {
        node.addEventListener('mousedown',function(event){
            var value=node.innerText.trim();
            var result=document.querySelector(".result");
            var resultText=result.innerText.trim();
            if(resultText==0||resultText=="undefined"||resultText=="Infinity"){
                result.innerText='';
                }
            if(value=="="){
                var solution=eval(resultText);
                result.innerText=solution;
                return true;
            }
            if(value.toLowerCase()=="c"){
                result.innerText="0";
                return true;
            }
            result.append(value);
        });
    });
