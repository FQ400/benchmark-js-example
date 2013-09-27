var suite = new Benchmark.Suite;

// add tests
suite.add('String#+', function() {
  var str = "hello World";
  for(var i = 0; i>=1000; i++){str +=i}
})
.add('String#concat', function() {
  var str= "hello World";
  for(var i = 0; i>=1000; i++){str =str.concat(i)}
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({
  'async': true,
  'minSamples': 100
});
