document.addEventListener("DOMContentLoaded", function() {

  var candidateList = document.querySelector('#candidates');

  $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: "GET",
    dataType: "json"
  }).done(function(responseData){
    for (var i = 0; i < responseData.candidates.length; i++) {
      var candidates = document.createElement('li');
      candidates.innerText = responseData.candidates[i].name + ': ' + responseData.candidates[i].votes;
      candidateList.append(candidates);

      var form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://bb-election-api.herokuapp.com/vote';
    }

  }).fail(function() {
    console.log("Request failed.");
    var apology = document.createElement('p');
    apology.innerText = ('Sorry, something go wrongo. Me try coding harder next time.');
    candidateList.append(apology);
  });

  $.ajax({


  });

});
