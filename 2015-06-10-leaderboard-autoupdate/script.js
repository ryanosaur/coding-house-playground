var $$ = {
  storeData: function(){
    localStorage['karma.data'] = JSON.stringify(this.data);
  },
  readData: function(){
    this.data = JSON.parse(localStorage['karma.data']);
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
    var value = $(this).text();
    var input = $(this).parent('li').find('.input');
    input.attr('value', value);
    input.show();
    $(this).hide();
  },
  updateValues: function(event){
    var key = event.which;
    if(key === 13){
      var span = $(this).parent('li').find('.points');
      var value = $(this).val();
      span.text(value);
      span.show();
      $$.modifyPointsFor($(this).parent('li').attr('id'), value);
      $(this).hide();
      $('.person:not(#template)').remove();
      $$.loadTable();
    }
  },
  data:[]
}

$(document).ready(function() {
  $$.loadTable();
});

