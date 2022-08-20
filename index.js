
    let inputs=Array.from(document.querySelectorAll('input'));
    

    inputs.map ( input => input.addEventListener('blur', event => blurHandler(event.target)));
    inputs.map ( input =>input.addEventListener('focus', event => focusHandler(event.target)));

    function blurHandler (elem) {
        elem.style.border = "1px solid hsl(246, 25%, 77%)";
    }
    function focusHandler (elem) {
        elem.style.border = "1px solid hsl(248, 32%, 49%)";
    }

    function handleSubmit() {
        let checkError = true;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //input elements
        let elem1= document.getElementById('first-name');
        let elem2= document.getElementById('last-name');
        let elem3= document.getElementById('email');
        let elem4= document.getElementById('password');
        //input paragraph elements
        let pelem1 = document.getElementById('first-name-p');
        let pelem2 = document.getElementById('last-name-p');
        let pelem3 = document.getElementById('email-p');
        let pelem4 = document.getElementById('password-p');
        //input icon elements
        let ielem1 = document.getElementById('first-name-i');
        let ielem2 = document.getElementById('last-name-i');
        let ielem3 = document.getElementById('email-i');
        let ielem4 = document.getElementById('password-i');
        if(elem1.value ==''){ 
            elem1.style.border = "2px solid red";
            pelem1.style.display = "block";
            ielem1.style.display = "block";
            checkError = false;
        }
        if(elem2.value ==''){ 
            elem2.style.border = "2px solid red";
            pelem2.style.display = "block";
            ielem2.style.display = "block";
            checkError = false;
        }
        if(!elem3.value.match(mailformat)){ 
            elem3.style.border = "2px solid red";
            pelem3.style.display = "block";
            ielem3.style.display = "block";
            checkError = false;
        }
        if(elem4.value ==''){ 
            elem4.style.border = "2px solid red";
            pelem4.style.display = "block";
            ielem4.style.display = "block";
            checkError = false;
        }
        return checkError;
    }