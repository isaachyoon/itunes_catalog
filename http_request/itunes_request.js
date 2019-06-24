var request = require("request");

const options = {
  host: 'https://itunes.apple.com',
  port: 443,
  path: '/search?term=love',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

function sortData(results) {
  let sortObj = {};
  results.forEach((data) => {
    if (data.kind) {
      const item = {
        id: data.trackId,
        name: data.trackName,
        artwork: data.artworkUrl100,
        genre: data.primaryGenreName,
        url: data.trackViewUrl
      }
      if (sortObj[data.kind]) {
        sortObj[data.kind].push(item)
      } else {
        sortObj[data.kind] = [item];
      }
    }
  })
  return sortObj;
}

module.exports.request = function(url, res) {
  request({
    uri: `${options.host}/search?term=${url}`,
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
  }, function(error, response, body) {

    res.send(sortData(JSON.parse(body).results));
  });
}
