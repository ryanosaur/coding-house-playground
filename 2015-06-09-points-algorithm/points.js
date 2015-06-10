// point calculator takes an array of objects
// with 3 keys:
// name - name of social media
// weight - between 0 and 1 (i.e, 0.6)
// points - daily points (0, 1, 2)
var SocialPointCalculator = function(socialMediums){
    this.socialMediums = socialMediums;
    
    this.calculatePoints = function(){
        return this.socialMediums.reduce(function(acc, medium){
            var currentPoints = parseFloat(medium.weight) * parseFloat(medium.points);
            console.log(medium.name + ": " + currentPoints);
            return acc+= currentPoints;
        }, 0) * 2;
    };
};

function assertEqual(actual, expected){
  return actual === expected ? "PASS" : "FAIL";
}

console.log(assertEqual(new SocialPointCalculator([
    {name: "github", weight: "0.5", points: "2"}
]).calculatePoints(), 2));

console.log(assertEqual(new SocialPointCalculator([
    {name: "github", weight: "0.5", points: "2"},
    {name: "linkedin", weight: "0.3", points: "0"},
    {name: "twitter", weight: "0.2", points: "1"}
]).calculatePoints(), 2.4));

console.log(assertEqual(new SocialPointCalculator([
    {name: "github", weight: "0.5", points: "1"},
    {name: "linkedin", weight: "0.3", points: "2"},
    {name: "twitter", weight: "0.2", points: "1"}
]).calculatePoints(), 2.6));

console.log(assertEqual(new SocialPointCalculator([
    {name: "github", weight: "0.5", points: "2"},
    {name: "linkedin", weight: "0.3", points: "2"},
    {name: "twitter", weight: "0.2", points: "2"}
]).calculatePoints(), 4));