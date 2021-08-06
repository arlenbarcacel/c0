var nameofthestudentarray=[];

function submit(){
    var displaystudentarray=[];
    for(var j=1; j<=4; j++){
        var nameofthestudent=document.getElementById("name_of_the_student_"+j).value;
        console.log(nameofthestudent);
        nameofthestudentarray.push(nameofthestudent);
}
console.log(nameofthestudentarray);

var lengthofstudentarray=nameofthestudentarray.length;
console.log(lengthofstudentarray);

for(var k=0;k<lengthofthestudentarray;k++){
    displaystudentarray.push(nameofthestudentarray[k]);
    console.log(displaystudentarray);
}
document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;

var removecommas=displaystudentarray.join(" ");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;

document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block";


