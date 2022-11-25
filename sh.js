function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "https://www.finnkino.fi/xml/TheatreAreas/", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<input list='theatres' id='theatre' onchange='etsiNautos()'>" +"<datalist id='theatres'>";
    
    var x = xmlDoc.getElementsByTagName("TheatreArea");
    for (i = 0; i <x.length; i++) { 
      table +=  "<option class='p' value='"+x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue+"' id='"+x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +"'>"
      x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
      "  " +
      x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +
      "</option>"+"</datalist>";
    }
    document.getElementById("demo").innerHTML = table;

/*     $(function() {
      $('#theatre').change(function() {
          localStorage.setItem('Area', this.value);
      });
      if(localStorage.getItem('Area')){
      $('#theatre').val(localStorage.getItem('Area'));
      }
  });
 */

}

function etsiNautos(){

var x = document.getElementById('theatre').value;

if(x == 'Valitse alue/teatteri'){
loadDoc();
      }
      
if(x == 'Pääkaupunkiseutu'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1014", true);
      xhttp.send();
}
      
if(x == 'Espoo'){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        miFunction(this);
      }
    }; 
 xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1012", true);
    xhttp.send();
   }
    
  if(x == 'Espoo: OMENA'){
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
    xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039", true);
       xhttp.send();
      }

   if(x == 'Espoo: SELLO'){
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038", true);
        xhttp.send();
      }
      
    if(x == 'Helsinki'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
        xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1002", true);
           xhttp.send();
      }
     
    if(x == 'Helsinki: ITIS'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
       xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045", true);
        xhttp.send();
      }

   if(x == 'Helsinki: KINOPALATSI'){
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
    xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031", true);
       xhttp.send();
      }

    if(x == 'Helsinki: MAXIM'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
        xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032", true);
         xhttp.send();
      }

    if(x == 'Helsinki: TENNISPALATSI'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033", true);
      xhttp.send();
    }

    if(x == 'Vantaa: FLAMINGO'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013", true);
       xhttp.send();
    }

    if(x == 'Jyväskylä: FANTASIA'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1015", true);
       xhttp.send();
    }

    if(x == 'Kuopio: SCALA'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1016", true);
       xhttp.send();
    }

    if(x == 'Lahti: KUVAPALATSI'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1017", true);
       xhttp.send();
    }

    if(x == 'Lappeenranta: STRAND'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1041", true);
       xhttp.send();
    }

    if(x == 'Oulu: PLAZA'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1018", true);
       xhttp.send();
    }

    if(x == 'Pori: PROMENADI'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1019", true);
       xhttp.send();
    }

    if(x == 'Tampere'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1021", true);
       xhttp.send();
    }

    if(x == 'Tampere: CINE ATLAS'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1034", true);
       xhttp.send();
    }

    if(x == 'Tampere: PLEVNA'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1035", true);
       xhttp.send();
    }

    if(x == 'Turku ja Raisio'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1047", true);
       xhttp.send();
    }

    if(x == 'Turku: KINOPALATSI'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1022", true);
       xhttp.send();
    }

    if(x == 'Raisio: LUXE MYLLY'){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      miFunction(this);
    }
    }; 
      xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1046", true);
       xhttp.send();
    } 
    
else{
 return false; 
}

}  

function miFunction(xml){
    let i;
    var xmlDoc = xml.responseXML;
    let drop =  "<div class='dropdown'>";
    var x = xmlDoc.getElementsByTagName("Show");
    for(i = 0; i< x.length; i++){
        drop += "<div class ='card'>"+"<a class='dropdown-item' id=" + x[i].getElementsByTagName("TheatreID")
        [0].childNodes[0].nodeValue  + " href="+ x[i].getElementsByTagName("EventURL")
            [0].childNodes[0].nodeValue +">" +
            "<div class='card-body'>"+"<h5 class='card-title'>"+ 
            x[i].getElementsByTagName("Title")
            [0].childNodes[0].nodeValue + "</h5>"+ "<p>"+
            x[i].getElementsByTagName("Theatre")
            [0].childNodes[0].nodeValue + "</p>" +
            "<p id='f' style='display: none'>"+
            x[i].getElementsByTagName("TheatreID")
            [0].childNodes[0].nodeValue + "</p>" +
            "<p>"+
            x[i].getElementsByTagName("dttmShowStart")
            [0].childNodes[0].nodeValue + "</p>" +
             "<img src=" + x[i].getElementsByTagName("EventSmallImagePortrait")
            [0].childNodes[0].nodeValue + ">"+"</a>"+"</div>"+"</div>";
    }
    document.getElementById("demo1").innerHTML = drop;
  }