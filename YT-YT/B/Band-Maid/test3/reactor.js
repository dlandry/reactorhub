      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      var videotime = 0;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'ErCxPH7HQyI',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        function storeReactorTime() {
          if (typeof(Storage) !== "undefined") {
            if (localStorage.timer) {
              localStorage.timer = videotime;
              localStorage.setItem('reactorPlayer', JSON.stringify(player));
              //console.log("local storage is: " + localStorage.timer);
            } else {
              localStorage.timer = 0;
            }
          }
        }
        // event.target.playVideo();
        function updateTime() {
          var oldTime = videotime;
          if(player && player.getCurrentTime) {
            videotime = player.getCurrentTime();

            // console.log(videotime);
            document.getElementById("time").innerHTML = videotime;
          }
          if(videotime !== oldTime) {
            onProgress(videotime);
          }
        }
        timeupdater = setInterval(updateTime, 100);
        reactortimeupdater = setInterval(storeReactorTime,100)
      }


      // when the time changes, this will be called.
      function onProgress(currentTime) {
        if(currentTime > 20) {
          // console.log("the video reached 20 seconds!");
        }
      }



      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
//           setTimeout(stopVideo, 30000);
          done = true;
        }
      }



      function stopVideo() {
        player.stopVideo();
      }
