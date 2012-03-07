module.exports = function(app){
    var sys = require('sys'),
    http = require('http');

    var connection = http.createClient(80, 'http://www.google.com'),
        request = connection.request('/finance/info?q=NASDAQ:THQI,NASDAQ:AAPL');
    
    connection.addListener('error', function(connectionException){
        sys.log(connectionException);
    });
    
    request.addListener('response', function(response){
        var data = '';
    
        response.addListener('data', function(chunk){ 
            data += chunk; 
        });
        response.addListener('end', function(){
            // Do something with data.
            console.log(data);
        });
    });
    
    request.end();
}