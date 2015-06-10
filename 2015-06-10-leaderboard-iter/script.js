var data = [
    {name:'Stanley', points: 14},
    {name:'Colin', points: 7},
    {name:'Tania', points: 9},
    {name:'Mike', points: 21},
    {name:'Ryan', points: 12},
    {name:'Samer', points: 0}
];

$(document).ready(function(){
    var liArray = [];
    sortData().forEach(function(student, index){
        liArray.push(getLiForStudent(student.name, student.points, index));
    });
    $('#leaderboard').append(liArray);
    
    function getLiForStudent(name, points, index){
        return index > 1 ? liBuilder(name, points, 'danger') : liBuilder(name, points, 'success');
    }
    
    function liBuilder(name, points, color){
        var li = $('<li/>');
        li.append('<span class="pull-left">' + name + '</span>');
        li.append('<span>&nbsp;</span>');
        li.append('<span class="label label-' + color + ' pull-right">' + points + '</span>');
        li.addClass('lead');
        li.addClass('list-group-item');
        return li;
    }
    
    function sortData(){
      return data.sort(function(a, b){
        return b.points - a.points;
      });
    }
});
