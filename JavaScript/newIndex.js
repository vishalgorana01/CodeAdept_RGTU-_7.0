
//Typing effect
function typeString(string){
    let text = document.getElementById("text")
    let i =0;
    WriteString();
    
        
        
       function WriteString(){

        let typing = setInterval(()=>{
            if(i<string.length){
                text.innerText+=string[i];
                i++;
            }
            else{
                clearInterval(typing);
                backSpace();
            }
        },150);

       }

            function backSpace(){
                setTimeout(()=>{
                    let deleting = setInterval(()=>{
                        if(i>0){
                            text.innerText = text.innerText.substring(0, text.innerText.length - 1);
                            i--;
                        }
                        else{
                            clearInterval(deleting);
                            WriteString();
                        }
                    },150)
                },1000)
                
                
            }
           
        

        
    
        
    
}
typeString("Code to adept")