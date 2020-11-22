// class id{
//     constructor(name)
//     {
//         this.idName=document.getElementById(this.name=name)
//     }
// }

let FirstName = document.getElementById("validationTooltip01")
let LastName = document.getElementById("validationTooltip02")
let passName = document.getElementById("validationTooltip03")

let Mobile = document.getElementById("validationTooltip05")

let lname = false;
let fname = false;
let pasname = false;

let mname = false;

// let saveData={};

// console.log(FirstName,LastName,CountryName,Gender,Mobile);


// regular expression for the first Name code...

FirstName.addEventListener('blur', function () {

    let validname = /^[a-z]*([a-z])$/i

    let str = FirstName.value

    if (validname.test(str)) {
        fname = true;
    } else if (str == "") {
        fname = false;
    }
    else {
        fname = false;
        document.getElementById('fnamenot').style.display = 'block'
        document.getElementById('doalert').innerText = `Please Enter The Valid Name..`
        document.getElementById('doalert').style.display = 'block'

    }


})

FirstName.addEventListener('click', () => {
    document.getElementById('confirm').style.display = "none"
    document.getElementById('doalert').style.display = 'none'
    document.getElementById('fnamenot').style.display = 'none'
})

// regular expression for the last name code

LastName.addEventListener('blur', function () {

    let validname = /^[a-z]*([a-z])$/i

    let stri = LastName.value

    if (validname.test(stri)) {
        lname = true;
    } else if (stri == "") {
        lname = false;
    }
    else {
        lname = false;
        document.getElementById('lnamenot').style.display = 'block'
        document.getElementById('doalert').innerText = `Please Enter The Valid Name..`
        document.getElementById('doalert').style.display = 'block'

    }


})

LastName.addEventListener('click', () => {
    document.getElementById('confirm').style.display = "none"
    document.getElementById('doalert').style.display = 'none'
    document.getElementById('lnamenot').style.display = 'none'
})


// regular Expression for the Password
passName.addEventListener('blur', function () {


    // console.log(typeof passName.value);
    let conv = passName.value
    if (conv == "") {
        pasname = false;
        document.getElementById('passnot').style.display = 'block'
        document.getElementById('passnot').innerText = `${passName.validationMessage}`
        // document.getElementById('passnot').style.display='none'
    }
    else {
        pasname = true;
        // document.getElementById('doalert').innerText=`Please Enter The Valid Name..`
        // document.getElementById('doalert').style.display='block'

    }


})

passName.addEventListener('click', () => {
    document.getElementById('confirm').style.display = "none"
    document.getElementById('doalert').style.display = 'none'
    document.getElementById('passnot').style.display = 'none'
})


Mobile.addEventListener('blur', () => {

    let r = /^[0-9]*[0-9]$/
    if (Mobile.value.length == 10 && r.test(Mobile.value)) {
        mname = true;
    }
    else if (Mobile.value == "") {
        mname = false;
    }
    else {
        mname = false;
        document.getElementById('monot').style.display = 'block'
    }
})

Mobile.addEventListener('click', () => {
    document.getElementById('confirm').style.display = "none"
    document.getElementById('doalert').style.display = 'none'
    document.getElementById('monot').style.display = 'none'
})


// to submitt the form 
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    if (lname && fname && pasname && mname) {
        //  saveData.name=FirstName.value;
        //  saveData.password=passName.value;
        document.getElementsByTagName('form')[0].reset();

        document.getElementById('confirm').style.display = "block"


    } else {

        document.getElementById('doalert').innerText = "Somethig is missing Please Check Your form"
        document.getElementById('doalert').style.display = 'block'
    }
    // console.log(lname,fname,pasname,mname,saveData);

})

