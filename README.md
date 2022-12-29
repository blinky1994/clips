# Clipz
Video sharing platform built with Angular, TailwindCSS and Firebase. Used FFMPEG to generate screenshot thumbnails.

![clipz](https://user-images.githubusercontent.com/56903269/209942519-05798022-ebca-44fb-94af-0aa75a41f626.png)

# User authentication
For user authentication, the user and password authentication from the Firebase API is used. The login form uses the `ReactiveFormsModule` to provide more controls when dealing with input invalidation.

# Storing Videos
Firebase is used to store the video files. Rules are set for a 20MB max video size and only in .mp4 format. For uploading videos, I used `AngularFireStorage` to easily upload and store the content in my own defined clip path. This also returns the storage URL which I stored in my list of clips object to be used for the other parts of the app.

# Playing Videos
`Video.js` is used to play the videos and only requires initializing the player and editing styling settings.

# Generating Thumbnails
`FFmpeg` is used for processing the videos and generating 3 screenshot thumbnails at video positions 00:00:00 to 00:00:02. 



