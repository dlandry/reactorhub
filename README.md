# reactorhub.github.io
Youtube Reactor web page :

Purpose: A javascript webpage that allows youtube reactors to react to videos without (significantly less?) fear of a copyright strikes.

Definitions:
  reactor: the person creating a video reacting to a target videos
  talent: the subject of the video being reacted to by the reactor

The workflow provided is for reactors to react to videos, so it supports control and timing of the target 'talent' video as determined by the current location of the 'reactor's' video. It supports videos recorded in the following fashion:

1 - reactor introduces the video; Talent video starts playing when the reactor video reaches a specified timecode
2 - reactor can provide the timecodes where the talent video should pause/play/pause/play where the reactor has paused the video to talk, then resumed the talent video to continue their reaction.

The two videos are loaded into separate 'frames' (iframes) in your local browser. The viewer starts the reactor video, and thereafter the talent video plays and pauses where appropriate (as specified by the reactor in the url they provide to their viewers)

 https://reactorhub.github.io/reactorhub/index.html?reactor:<url of reactor's video>&YTtalent:<url of the video being reacted to>&reactorVOL=<0-100>&YTtalentVOL=<0-100>&Control=<hh:mm:ss.xxx>,<play/pause/stop>;<hh:mm:ss.xxx>,<play/pause/stop>...&Start=<hh:mm:ss.xxx>

Here's an example of a video with multiple pauses (note: it's not an actual 'link & sync' type video, I just use it as an example as it has a lot of pausing, so shows how to use this tools .. I've also muted the volume on the 'talent' video, just to avoid the confusion in the slightly out of sync audio, that would not normally be a problem on a real 'link & sync' type video)

paste this url into your video to see how it works (don't pause or skip around in the videos, this is not supported at this time. )
 https://reactorhub.github.io/reactorhub/index.html?reactor=https://www.youtube.com/watch?v=uuAEz1dKsBE&YTtalent=https://www.youtube.com/watch?v=K_xTet06SUo&reactorVOL=70&YTtalentVOL=00&Control=00:03:55.5,play;00:04:12,pause;00:04:42,play;00:04:47,pause;00:05:13.75,play;00:06:46,pause;00:07:30,play;00:09:18,pause;00:09:34,play&Start00:03:43&Start=00:03:40

 https://reactorhub.github.io/reactorhub/index.html : URL of this tool

 reactor=https://www.youtube.com/watch?v=uuAEz1dKsBE : URL of reactors videos

 YTtalent=https://www.youtube.com/watch?v=K_xTet06SUo : URL of the video being reacted to

 reactorVOL=70 : set the reactor video volume to 70%

 YTtalentVOL=00 : set the 'talent' video to 0% (muted)

Control=00:03:55.5,play;00:04:12,pause;00:04:42,play;00:04:47,pause;00:05:13.75,play;00:06:46,pause;00:07:30,play;00:09:18,pause;00:09:34,play  : <time>,<command>; list of times to play or pause the talent video.

Start00:03:43&Start=00:03:40 : Skip to 3:40 in the reactor's video when it starts (the reactor may have given a long explaination of how to 'link & sync' the videos, which this tool should eliminate, so the reactor can specify that when using this tool, all that now useless explanation will be skipped.)

What it is not designed to support:
  videos that have the target video chopped up with pieces missing to avoid copyright strikes.
  videos that have been sped up or slowed down in order to avoid copyright strikes
  (Presumably, this tool will eliminate the need to cut out parts and/or speed/slow videos)

  Existing video's with the talent video and audio included, will still work, but at this point the viewer will need to adjust the sound manually in each video (not always possible on smartphones)


TODO

[x] - provide initial volume settings on start (ie. reactor at 75% full vol, talent at 50%) (ie &StartVol:75/50)

[ ] - provide dailytmotion support

[ ] - provide vimieo support

[ ] - provide 'scrubbing' support while keeping videos in sync.

[ ] - provide ability to adjust vol at timecodes (ie. &ReactorVol0;2:02;TalentVol8;2:02,ReactorVol8;2:30,TalentVol4;2:30) (ie. mute the reactor until they start to comment on something at 2:30, when you up the reactor's vol and reduce the talen's vol so you can make out what the reactor is saying)

[ ] - Provide several layouts for the two videos.
  * reactor to the left, talent to the right
  * talent to the left, reactor to the copyright
  * one video full screen with other video taking 1/9th or 1/4 size position in any of the 9/4 blocks
  * switch what video is full screen and which video is overlayed on top the full screen videos

[ ] - eventually provide a tool for building the url and coding (ie. a GUI where they can enter the two video's urls, select what they want done, and enter the time in the reactor's video where that should get done, and the tool will provide the url to provide the viewers.)

[ ] - long term: some kind of database of reactor videos where viewers can search for videos by the same reactor, or same talent, or category (this will probably need a part of the command line that provides info like 'reactor's name, channel, talent's name, channel, a list of reactor provided category tags.)


History: Feb 28, 2019 - release the first beta version that support YouTube reactor and YouTube talent videos.
