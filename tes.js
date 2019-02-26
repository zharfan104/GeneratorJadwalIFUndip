var job_data = {
    "application_id": "49l119FyB166_ZbKSJwjNuA",
    "src": "http://www.google.com/logos/2011/yokoyama11-hp.jpg",
    "functions": [{
        "name": "blur",
        "save": {
            "image_identifier": "MY_CLIENT_ID"
        }
    }]
};

sendHttpPostToBlitline(job_data);


// Function to send data to Blitline
function sendHttpPostToBlitline(job_data) {
    var http = require('http');

    var options = {
        host: 'api.blitline.com',
        port: 80,
        method: "POST",
        path: '/job'
    };

    var req = http.request(options, function (res) {
        res.on("data", function (chunk) {
            console.log("Data=" + chunk);
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });

    req.write("json=" + JSON.stringify(job_data));
    req.end();
}