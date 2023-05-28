 //temp
 function convert11(){
    var ip=document.getElementById("temp")
    var input=parseInt(ip.value);
    var fah=document.getElementById("r1")
    var cel=document.getElementById("r2")
    var msg=document.getElementById("op1")

    if(fah.checked){
        var c=(input-32)*5/9;
        msg.innerHTML=input+"fah="+c+"deg cel";
        

    }
    if(cel.checked){
        var b=input*9/5+32
        msg.innerHTML=input+"deg cel="+b+"deg fah";
    }
}

//age
function datecon(){
var output=document.getElementById("op2")
var dob=document.getElementById("date").value
var dob1=new Date(dob);

if(dob==null || dob=='') {
      document.getElementById("op2").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob1.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    var month=age_dt.getUTCMonth();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    return document.getElementById("op2").innerHTML =  
             "Age is: " + age + " years. "+month+"months";
    }
}

//percentage

function percentage(){
    var obtained=document.getElementById("grade").value
    var total=document.getElementById("total").value
    var op3=document.getElementById("oper")

    var p=(obtained/total)*100+"%"
    op3.innerHTML="Total percentage:"+p
}
//cgpa

function cgpa(){
    var op3=document.getElementById("oper")
    var per=document.getElementById("per").value
    var b=(per/9.5)
op3.innerHTML="cgpa:"+b+"cgpa"
}
//gpa

function gpa(){
    var op3=document.getElementById("oper")
    var per2=document.getElementById("per2").value
    var v=(per2/100*4)
   op3.innerHTML="gpa:"+v+"gpa"
}

// bmi

function bmi(){
    var wt=document.getElementById("wt").value
    var ht=document.getElementById("ht").value
var msg=document.getElementById("bmip")
var h2=ht*ht
    var b=(wt/h2)
    msg.innerHTML="BMI:"+b+"Kg/m2"

}

// body fat
function bodyfat(){
    var male=document.getElementById("male")
    var female=document.getElementById("female")
    var wt1=document.getElementById("wt1").value
    var ht1=document.getElementById("ht1").value
    var age=document.getElementById("age").value
var msg=document.getElementById("bfatp")
var h3=ht1*ht1
    var p=(wt1/h3)

    if(female.checked){
    var res=(1.2*p)+(0.23*age)-5.4
    msg.innerHTML="Body fat %:"+res+"%"
    }
    if(male.checked){
        var res=(1.2*p)+(0.23*age)-16.2
        msg.innerHTML="Body fat %:"+res+"%"
    }
}