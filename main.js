function myfunction(){


//retrieve the date of birth from the user
 var dateOfBirth = document.getElementById(`date`).value

//retrieve the date of birth from the user
var dateOfBirth = document.getElementById(`date`).value

// calculation of day of month the person is bone
var day = parseInt(dateOfBirth.slice(8,10));


// calculation of monthcodes
var month = parseInt(dateOfBirth.slice(5,7));

if (month == 01){
        var monthcode = 0
    }

     else if (month == 02){
        var monthcode = 3
    }
    
    else if (month  == 03){
        var monthcode =3
    }
    
    else if (month == 04){
        var monthcode = 6
    }
    
    else if (month == 05){
        var monthcode = 1
    }
    
    else if (month == 06){
        var monthcode = 4
    }
    
    else if (month == 07){
        var monthcode = 6
    }
    
    else if (month == 08){
        var monthcode = 2
    }
    
    else if (month == 09){
        var monthcode = 5
    }
    
    else if (month == 10){
        var monthcode = 3
    }
    
    else if (month == 11){
        var monthcode = 3
    }
    
    else if (month == 12){
        var monthcode = 5
    }

  

// finding the year of birth
var year = parseInt(dateOfBirth.slice(2,4));

//finding the century of birth and calculating century codes
var century = parseInt(dateOfBirth.slice(0,2));
if(century%4 === 0){
    var centuryCode =6
}

else if (century%4===1){
    var centuryCode=4
}

else if (century%4 ===2){
    var centuryCode =2
}
 else {
     var centuryCode = 0
 }
 
 alert(centuryCode);

}