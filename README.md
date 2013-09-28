# technogallery
=============
_This is a little javascript/jQuery gallery that I built._<br/>
by <a href='https://plus.google.com/104536213394512642005?rel=author'>Chris Walker</a><br/>
(http://www.youtube.com/watch?v=Th6mGAwvQYU)<br/>

This is a <a href='http://www.youtube.com/watch?v=Th6mGAwvQYU' target='_blank'>jQuery gallery</a> I built for a client to display images on his webpage. It takes an unordered list alternating between listings of image locations and image descriptions. It requires a class of "technogallery" be applied to the UL HTML tag. The jQuery in the plugin will then find it and read the list items and build a bunch of little boxes for the individual images. It also builds one large box to show the first image. As the small boxes are clicked, the images comntained within them display in the large box. The image descriptions appear as alt and title text on the small boxes.

##How does this thing work?
The directions to use this plugin are pretty straight forward. This isn't a polished product. I'll admit it isn't great, but it works and that's all that matters.

1. Create a directory called technogallery.
2. Place technogallery.js and technogalleryStyle.css in that directory.
3. Link to it from the footer. (It won't work if you put it in the header because the HTML elements aren't built when referenced there.)
4. Create an unordered list on the page with the class of 'technogallery' (Though this will likely work with any nested HTML elelments.)
5. Create the list items by alternating between image location and image description like the following. The image locations and descriptions don't matter.
..* http://www.xxxxxx.com/images/01.jpg
..* This is a image of a dog.
..* http://www.xxxxxx.com/images/012.jpg
..* This is a image of a cat.
..* http://www.xxxxxx.com/images/03.jpg
..* This is a image of a fish.
..* http://www.xxxxxx.com/images/04.jpg
..* This is a image of a bird.
This even works when there are more than one gallery on each page.

##License
Copyright (c) 2013 Chris Walker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

###### Miscellaneous Stuff
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Th6mGAwvQYU" target="_blank"><img src="http://img.youtube.com/vi/Th6mGAwvQYU/0.jpg" 
alt="Here's the video where I built this!" width="240" height="180" border="10" /></a><br/>
The video is where I built this thing. If you've enjoyed this or used it, I'd enjoy a boost from some kind of social media. I'd prefer Google+, but I'll take a tweet if that's what you've got. (Brother, can you spare a Like?)