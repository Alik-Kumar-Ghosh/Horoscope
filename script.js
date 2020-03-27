var res;
function getSelectValue()
{
   var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
    document.getElementById("givesignvalue").innerHTML = "Yours Todays Fortune";
    if(selectedValue=="none"){
        alert("first select your sign");
    }  
    else{
    const base="https://aztro.sameerkumar.website/?sign=";
    const url=base+selectedValue+"&day=today";
    fetch(url, {
        method: 'POST'
    })
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        res=JSON.stringify(myJson);
        showinfo(res);
    }); 
}
}
function showinfo(take)
{   document.getElementById("styleindeed0").style.display="block";
    const show=JSON.parse(take);
    console.log(show);
    document.getElementById("givedes").innerHTML = show.description;
    document.getElementById("givecolor").innerHTML ="Lucky Color : "+show.color;
    document.getElementById("giveno").innerHTML = "Lucky no. : "+show.lucky_number;
    document.getElementById("givetime").innerHTML = "Lucky time : "+show.lucky_time;
    document.getElementById("givemood").innerHTML = "Mood : "+show.mood;
}
//console.log(a);
//for date picker
$(function() {
    $( "#datepicker-13" ).datepicker();
 });


 document.getElementById("styleindeed0").style.display="none";
 document.getElementById("styleindeed").style.display="none";


function myfun(){
$(function() {
    $( "#datepicker-13" ).datepicker();
    var datevar=$("#datepicker-13").val();
    var res = datevar.split("/");    
    var sign;
    if(((res[1]>=21)&&(res[0]==3))||((res[1]<=19)&&(res[0]==4)))
        sign="Aries"
    else if(((res[1]>=20)&&(res[0]==4))||((res[1]<=20)&&(res[0]==5)))
        sign="Taurus"
    else if(((res[1]>=21)&&(res[0]==5))||((res[1]<=21)&&(res[0]==6)))
        sign="Gemini"
    else if(((res[1]>=22)&&(res[0]==6))||((res[1]<=22)&&(res[0]==7)))
        sign="Cancer"
    else if(((res[1]>=23)&&(res[0]==7))||((res[1]<=22)&&(res[0]==8)))
        sign="Leo"
    else if(((res[1]>=23)&&(res[0]==8))||((res[1]<=22)&&(res[0]==9)))
        sign="Vigro"
    else if(((res[1]>=23)&&(res[0]==9))||((res[1]<=22)&&(res[0]==10)))
        sign="Libra"
    else if(((res[1]>=23)&&(res[0]==10))||((res[1]<=21)&&(res[0]==11)))
        sign="Scorpio"
    else if(((res[1]>=22)&&(res[0]==11))||((res[1]<=21)&&(res[0]==12)))
        sign="Sagittarius"
    else if(((res[1]>=22)&&(res[0]==12))||((res[1]<=19)&&(res[0]==1)))
        sign="Capricorn"
    else if(((res[1]>=20)&&(res[0]==1))||((res[1]<=18)&&(res[0]==2)))
        sign="Aquaris"
    else if(((res[1]>=19)&&(res[0]==2))||((res[1]<=20)&&(res[0]==3)))
        sign="Pisces"
    else 
        sign="enter your correct birthday"  
        document.getElementById("styleindeed").style.display="block";
    document.getElementById("givesign").innerHTML = "Your zodaic sign is : "+sign;
 });
}
//name field 
function getname()
{
   var name=document.getElementById('formGroupExampleInput').value
   if(name=="")
   {}
   else 
    {
        document.getElementById("changename").innerHTML = "Hello ! "+name;
    }
}

  
  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 3000
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 6783,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 15000
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  