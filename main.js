// preloader
window.onload = function(){
  window.setTimeout(function(){
  document.body.classList.add('loaded')
  },1000) 
  
}




// FAQ вопросы
let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {

    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });

  
});




// API  random facts about dogs
function getFact(){
 
  let request;
  if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
  }
  else{
      request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  request.open("GET", "https://dog-facts2.p.rapidapi.com/facts");
  request.setRequestHeader("X-RapidAPI-Key", "fd02d53adcmsh0b111a9835d813fp10a80ejsn45de505f1138");
  request.setRequestHeader("X-RapidAPI-Host", "dog-facts2.p.rapidapi.com");

  request.onload = function(){
      if(request.status === 200){
        factsObj = JSON.parse(request.response)
        console.log(factsObj);
        let randomFactBlock =  document.getElementById("randomfact")
        randomFactBlock.innerHTML = factsObj.facts[0]
        
      }else if(request.status === 404){
          window.location.href = './404/404.html'
      }
  }

request.send();
}


// API  google translate
function transleteFact (){
  let translateInput =  document.getElementById("translateInput")
  const data = "source_language=en&target_language=ru&text=" + translateInput.value;

  let request2;
  if(window.XMLHttpRequest){
      request2 = new XMLHttpRequest();
  }
  else{
      request2 = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  request2.open("POST", "https://text-translator2.p.rapidapi.com/translate");
  request2.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  request2.setRequestHeader("X-RapidAPI-Key", "fd02d53adcmsh0b111a9835d813fp10a80ejsn45de505f1138");
  request2.setRequestHeader("X-RapidAPI-Host", "text-translator2.p.rapidapi.com");
  

  request2.onload = function(){
      if(request2.status === 200){
        translateObj = JSON.parse(request2.response)
        console.log(translateObj);
        let outBlock =  document.getElementById("outBlock")
        outBlock.innerHTML = translateObj.data.translatedText
 
        
      }else if(request2.status === 404){
          window.location.href = './404/404.html'
      }
  }

request2.send(data);

}


 
getFact()


// translateInput.innerHTML = response.data.translations[0]









