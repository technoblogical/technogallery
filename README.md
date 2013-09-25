# technogallery
=============

## _This is a little javascript/jQuery gallery that I built._

If you wish to download the plugin, just download the sub folder called "technogallery." It will contain two files that you need called "technogallery.js" and "technogalleryStyle.css." Then you need to build an unordered list. Each list item should have text only! the first (or zeroth item in zero-based counting) should have the URL of the image. The second list item should have a description of the photo for SEO and UI purposes. Then just repeat the pattern alternating between image URL and image description. Continue as needed.

The HTML UL tag needs to have the class of "technogallery" and the script should be called sometime before the closing of the body tag, but after the gallery itself. (**Do not link from the header!** The list does not exist at that point and the plugin will just ignore everything that comes after it is called. Besides, saving your JavaScript for the end makes for a faster load time, anyway.)

You'll probably want to modify technogalleryStyle.css to fit your needs. Hopefully, you are good enough to figure out what is going on. I made this plugin for educational purposes. (There's a video of this somewhere on http://www.youtube.com/technoblogical if you really want to know how this stuff works.) This plugin comes with no support or warranty either explicit or implied. You break it, you buy it. Your mileage may vary. Offer may be void in your local area. If you suffer watery eyes, runny nose, or ringing ears, please discontinue use immediately and consult your physician.

This javascript gallery will load all your photos as little boxes on the left and one large box on the right. The little boxes will wrap around the large box if there are enough photos listed. When the page loads, the big box will show the first image. This prevents right clicking on the page, but even if it didn't, you couldn't right click on the images to download them. They only exist in CSS, not HTML. This is also written to allow several galleries on one page. If you've found any part of this experience helpful, I'd appreciate it if you would find me on social media and give me a like/+1/thumbs up. (Or you want to be really generous, you can post this to your blog, I guess.)

Anyway, thanks for reading this far/watching the video.