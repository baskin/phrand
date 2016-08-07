
module.controller('homeController', function($scope, $http, $localStorage, $sessionStorage) {

  var url = "https://api.producthunt.com/v1/posts";
  topicFilter = false;
  // 208 angel investing
  if (topicFilter) {
      url = url + "/all?search[topic]=" + 208; // TODO paging.
  }
  else {
      var daysAgo = Math.floor(Math.random() * 251);
      url = url + "?days_ago=" + daysAgo;
  }
  var headerOptions = {
    headers: {"Authorization":"Bearer fbf62059f1556488e5354cd3892095e35ac776e93769efc2a446df35db8b7e6c"}
  };

  $http.get(url, headerOptions).then(
    function(response) {
      console.log("Received success from url " + url);
        // First function handles success
        body = response.data['posts'];
        var ret = body[Math.floor(Math.random() * body.length)];
        $scope.randomhunt = ret;
        var hasAudio = ret.thumbnail.media_type == 'audio';
        if (hasAudio) {
            var audioUrl = ret.thumbnail.metadata.url;
            console.log("Audio meta detected " + audioUrl);
            if (audioUrl.startsWith("http:")) {
                audioUrl = audioUrl.replace("http", "https");
                console.log("Will try to use https instead of http " + audioUrl);
            }
        }
        $scope.randomhunt.hasAudio = hasAudio;
        $scope.randomhunt.audioUrl = audioUrl;
    },
    function(response) {
        //Second function handles error
        console.log("Received error from url " + url + " with error:" +  response.statustext);
    }
  );

  $scope.loadsr = function() {
    console.log("Swipe right detected");
    // nav.replacePage('home.html', {animation: 'slide'})
  }

  $scope.gotoHunt = function($hunt) {
      console.log("Navigating to hunt " + $hunt.redirect_url);
      $scope.randomhunt = $hunt;
      $scope.nav.pushPage('hunt.html');
  }

  ons.ready(function() {
    console.log("homeController ready");
  });

});
