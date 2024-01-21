function handleSub(){
    const initialValue = Number(document.getElementById('quantity-input').value);
    
   if(initialValue>1){
    document.getElementById("quantity-input").value = initialValue - 1;
   }else{
    alert("Quantity cannot be less than 1!!");
   }
    
    
}

function handleAdd(){
    const initialValue = Number(document.getElementById('quantity-input').value);
    document.getElementById("quantity-input").value = initialValue + 1;
    
}



// ----------------------about us feedbak form------------------------------------

function handleSubmit(){
    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;

    if(!email){
        const spa = document.createElement("span");
        spa.style.color = "red";
        spa.innerHTML = "Please enter a email address";
        
        const comp = document.getElementById('email-group');
       comp.appendChild(spa);

    }

    
    if(!fullName){
        const spa = document.createElement("span");
        spa.style.color = "red";
        spa.innerHTML = "Please enter a Full Name";
        
        const comp = document.getElementById('fullName-group');
       comp.appendChild(spa);

    }

    if(!number){
        const spa = document.createElement("span");
        spa.style.color = "red";
        spa.innerHTML = "Please enter a contact number";
        
        const comp = document.getElementById('number-group');
       comp.appendChild(spa);

    }
    if(!message){
        const spa = document.createElement("span");
        spa.style.color = "red";
        spa.innerHTML = "Please enter message";
        
        const comp = document.getElementById('message-group');
       comp.appendChild(spa);

    }

    if(email && fullName && number && message ){
        alert("Form submitted.Thank you!!!")
    }
}