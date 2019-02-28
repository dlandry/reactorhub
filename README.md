# reactorhub.github.io
### Youtube Reactor web page :

**Purpose:** A javascript webpage that allows youtube reactors to react to videos without (significantly less?) fear of copyright strikes. Due to copyright claims on youtube, many video reactors have stopped presenting the video they are reacting to in their own video, and instead have started to provide the link to the target video in the description, asking the viewers to open a second windows and manually sync up the two videos on a 'count-down'. This tool does exactly the same thing, except the viewer only has to click on a link, and the reset is handled automatically. 

**Disclaimer** This webpage serves up javascript code that runs in your local browser. The code just 'automates' the process of opening two browser windows (in this case two iframes, which is a standard way to show two websites on the same page) locally on your computer and clicking play/pause on the videos in question. There is little to no difference between this and you doing this manually, other than bypassing the effort to open two browser windows and try to sync properly. All it does is make it convenient for your viewers to watch the two videos with one click, especially smartphone viewers, who until now (AFAIK) had no good option for doing this. This method should also allow mobile device users to participate in your reaction videos.

Definitions:
  **reactor:** the person creating a video reacting to a target video
  
  **talent:** the video being reacted to by the reactor


**How to use:**

The reactor records their reaction video without presenting the 'talent' video/audio in their reaction video.
The reactor can play the talent video 'off camera & with headphones' and react, if needed  the reactor can pause the talent video and comment on it in more detail then play some more, pause again and comment, play some more .... and so on.

When the reaction video is completed and uploaded to Youtube the reactor then provides in the video description a link similar to the following the their viewers can click on to watch both your reaction video and the talent video:

https://reactorhub.github.io/reactorhub/index.html?reactor=https://www.youtube.com/watch?v=ErCxPH7HQyI&t&YTtalent=https://www.youtube.com/watch?v=9TkHpvaO09c&reactorVOL=70&YTtalentVOL=30&Control=00:03:08,play&Start=00:02:35
(note: the link above should work, and shows an example of a video ment to be manually opened in two windows, then manually synced via spoken count down ... if you ckick the link about you do not have to worry about any of that, just click and watch.)

Let's break this link down to explain the components:
(note: ignore the '?' and '&' characters for now, they are needed, but for this purpose they just 'mark' where one command ends and the next command starts.

**https://reactorhub.github.io/reactorhub/index.html** : This is the url to this tool, and is the same all the time.

**reactor=https://www.youtube.com/watch?v=ErCxPH7HQyI** : this gives the browser the link to the reactor's video where they are providing a (copyright safe, because it contains no video or audio from the copyrighted work) reaction to a 'talent' video.

**YTtalent=https://www.youtube.com/watch?v=9TkHpvaO09c** : this gives the browser the link to the 'talent' video; The video the reactor is reacting to. (note: this can also be a Dailymotion video as well, just use the daily motion link and use **'DMtalent'** instead of **'YTtalent'** example: DMtalent=https://www.dailymotion.com/video/k17qXd23P6yWl5mM53V

**reactorVOL=70** : This sets the initial volume of the reactor's video to 70% of maximum (if not used, the volume defaults to 50%)

**YTtalentVOL=30** : This sets the initial volume of the 'talent' video to 30% of maximum. (again, if your talent video is from Dailmotion, use something like **DMtalentVOL=30** ie. **DM** instead of **YT** (If not used the volume defaults to 50%)

**Control=00:03:08,play** : This tells the 'talent' video to start playing when the 'reactor's' video reaches the 3 minute and 8 second mark. This should be the time the reactor presses 'play' on the talent video and starts their reaction. Note you can have multiple of these kinds of commands, so you can play, plause, play, as many times as needed during the review. An example of using multiple of these play/pause commands would be **Control=00:03:08,play;00:03:50,pause;00:04:25,play** which would be used in a video where the reactor started their reaction at 3:08 into their video, then paused at 3:50 to talk, then resumed the playing again at 4:25.

**Start=00:02:35** : This tells the tool that when starting the reactor's video, skip to the 2:35 mark and start playing from there. This might be useful if you give a long explaination on using this link, or how to do a normal 'link & sync' and want that part skipped by anyone using the 'reactorhub' link.

**Limitations** : 
  - you can pause the reactor video until the first cue-point (play) is reached, after that if you pause the reactor video the videos will be out of sync. (I will eventually get around to writing the code needed to keep both videos in sync all the times, even during unexpected stops and scrubbing of video times lines.)
  - Some videos have 'embedding disabled, this may not work with this tool (haven't run into any yet, but I suspect this might cause an issue.
  - If you find either video is muted, check the video controls (mouse over the video to bring up the normal video controls) and see if it got muted somehow, and unmute manually.
  - Right now there is no controlover the video placement, it should show the videos either side by side, or one above the other. Eventually I will be creating some selectable css styles that should be able to present the videos in a layout very similar to how reactors commonly lay our their videos (picture in picture style.)
  - in some cases content owners block unknown referrers (your web browser is suppose to send some infomration as to what 'domain'you are making the request, some security/ad blocking software blocks this information, and instead of getting a video you will see a warning that the owner has blocked you ... try using a different browser or disable ad blocking or 'tracking blockers' temporarily.
  
**Benefits** : Other than limiting the liklihood of the reactor being hit with copyright strikes for 'borrowing' a work of art and putting it their own video, other benefits are:
  - works with browsers in mobile devices.
  - Both the reactor and the talent get view counts (working on providing a way for the viewers to 'like' and comment as well
  - Open source, you can create your own free github account, steal this code and create your own version of the program, branded to your liking.
  
  




