var $$ = {
  storeData: function(){
    localStorage['karma.data'] = JSON.stringify(this.data);
  },
  readData: function(){
    if(localStorage['karma.data']){
      this.data = JSON.parse(localStorage['karma.data']);
    }
    else{
      $$.loadData();
    }
  },
  loadData: function(){
    $.ajax({
      url:"./data.json",
      dataType: "JSON",
      success: function(data){
        $$.data = data;
        $$.storeData();
      }
    });
  },
  leaderboard: function() {
    return this.data.sort(this.compare);
  },
  compare: function(a, b){
    return b.points - a.points;
  },
  modifyPointsFor: function(indexInArray, newPoints){
    this.data[indexInArray].points = newPoints;
    this.storeData();
  },
  loadTable: function(){
    this.readData();
    var sorted = this.leaderboard();
    var liArray = [];
    for (var i = 0; i < sorted.length; i++) {
      var oneOfYou = sorted[i];
      var $oneOfYou = $('ul li:first').clone().show();
      $oneOfYou.find('.name').text(oneOfYou.name);

      var points = $oneOfYou.find('.points')
      points.text(oneOfYou.points);
      points.bind('dblclick', this.showInput);

      var input = $oneOfYou.find('.input')
      input.bind('keypress', this.updateValues);
      input.hide();

      $oneOfYou.attr('id', i);
      liArray.push($oneOfYou);
    }
    $('ul').append(liArray);
  },
  showInput: function(){
    var $points = $(this).text();
    var value = $points.text();
    var input = $points.parent('li').find('.input');
    input.attr('value', value);
    input.show();
    $points.hide();
  },
  updateValues: function(event){
    var key = event.which;
    var $input = $(this);
    if(key === 13){
      var span = $points.parent('li').find('.points');
      var value = $points.val();
      span.text(value);
      span.show();
      $$.modifyPointsFor($points.parent('li').attr('id'), value);
      $points.hide();
      $('.person:not(#template)').remove();
      $$.loadTable();
    }
  },
  data:[]
}

$(document).ready(function() {
  $$.loadTable();
});

