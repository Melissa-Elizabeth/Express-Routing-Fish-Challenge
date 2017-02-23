$(document).ready(function(){
  getFishData();
  function getFishData(){
    $.ajax({
      type:'GET',
      url: '/fish',
      success: function(response) {
        $('#fishTank').empty();
        console.log('response', response);
        for (var i = 0; i < response.length; i++) {
          $('#fishTank').append('<li>' + response[i].name + '</li>');
        }
      }
    });

    // $.ajax({
    //   type:'GET',
    //   url: '/fish/first/name',
    //   success: function(response) {
    //     console.log('response', response);
    //     $('#firstFishy').text(response);
    //   }

    // });
  }
  $('#newFishButton').on('click', function(){
    var newFishObject = {};
    newFishObject.name = $('#newFishName').val();
    $.ajax({
      type:'POST',
      url: '/fish/new',
      data: newFishObject,
      success: function(response){
        $('#errorMessage').text("");
        getFishData();
      },
      error: function(error){
        if(error) {
          $('#errorMessage').empty();
          $('#errorMessage').append("Please enter a fish, dummy!");
        } else {



        }

      }

    });
  });
});
