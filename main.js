function myfunction() {


    //retrieve the date of birth from the user
    var dateOfBirth = document.getElementById(`date`).value

    // calculation of day of month the person is bone
    var day = parseInt(dateOfBirth.slice(8, 10));


    // calculation of monthcodes
    var month = parseInt(dateOfBirth.slice(5, 7));

    if (month == 01) {
        var monthcode = 0
    }

    else if (month == 02) {
        var monthcode = 3
    }

    else if (month == 03) {
        var monthcode = 3
    }

    else if (month == 04) {
        var monthcode = 6
    }

    else if (month == 05) {
        var monthcode = 1
    }

    else if (month == 06) {
        var monthcode = 4
    }

    else if (month == 07) {
        var monthcode = 6
    }

    else if (month == 08) {
        var monthcode = 2
    }

    else if (month == 09) {
        var monthcode = 5
    }

    else if (month == 10) {
        var monthcode = 3
    }

    else if (month == 11) {
        var monthcode = 3
    }

    else if (month == 12) {
        var monthcode = 5
    }

    else {

        document.getElementById(`end`).innerHTML = `All fields are required!`
        document.getElementById(`end`).style.color = `red`

    }



    // finding the year of birth
    var year = parseInt(dateOfBirth.slice(2, 4));

    //finding the century of birth and calculating century codes
    var century = parseInt(dateOfBirth.slice(0, 2));
    if (century % 4 === 0) {
        var centuryCode = 6
    }

    else if (century % 4 === 1) {
        var centuryCode = 4
    }

    else if (century % 4 === 2) {
        var centuryCode = 2
    }
    else {
        var centuryCode = 0
    }

    //calculating the day of week

    var indexOfDay = ((year + Math.floor(year / 4) + monthcode + centuryCode + day) % 7);

    var daysOfWeek = [`Sunday`, `Monday`, `Teusday`, `Wednessday`, `Thursday`, `Friday`, `Saturday`]

    var dayOfWeek = (daysOfWeek[indexOfDay]);



    var gender = document.getElementById(`gender`).value
    if (gender == `male`) {
        if (dayOfWeek == `Sunday`) {
            var name = `Kwasi`
        }

        else if (dayOfWeek == `Monday`) {
            var name = `Kwadwo`
        }

        else if (dayOfWeek == `Tuesday`) {
            var name = `Kwabena`
        }

        else if (dayOfWeek == `Wednessday`) {
            var name = `Kwaku`
        }

        else if (dayOfWeek == `Thursday`) {
            var name = `Yaw`
        }

        else if (dayOfWeek == `Friday`) {
            var name = `Kofi`
        }

        else {
            var name = `Kwame`
        }
    }
    else if (gender == `female`) {
        if (dayOfWeek == `Sunday`) {
            var name = `Akosua`
        }

        else if (dayOfWeek == `Monday`) {
            var name = `Adwoa`
        }

        else if (dayOfWeek == `Tuesday`) {
            var name = `Abenaa`
        }

        else if (dayOfWeek == `Wednessday`) {
            var name = `Akua`
        }

        else if (dayOfWeek == `Thursday`) {
            var name = `Yaa`
        }

        else if (dayOfWeek == `Friday`) {
            var name = `Afua`
        }

        else {
            var name = `Ama`
        }
    }

    else {
        document.getElementById(`end`).innerHTML = `All fields are required!`
        document.getElementById(`end`).style.color = `white`
        document.getElementById(`end`).style.backgroundColor =`red`
       
    }

    if (day!=`` && month!=`` && century!=`` && year!==`` && gender!=`select your gender`){
        document.getElementById(`end`).innerHTML = `Your Akan name is ${name}`
        document.getElementById(`end`).style.color = `green`
        document.getElementById(`end`).style.backgroundColor =`black`
       

    }

    else{
        alert(`All fields are required!`)

    }


}
