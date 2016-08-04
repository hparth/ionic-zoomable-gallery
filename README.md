# ionic-zoomable-gallery

This plugin provides light weight ionic gallery with zooming, caption, swipe features.

- Ionic - v1.1.0
- angular-translate - v2.9.0


# Features

- Image gallery
- Pinch zoom on images
- Caption on images
- Swipe and navigation on images


# Usage

Load script and css on the html

```
<link href="src/ionic-zoomable-gallery.css" rel="stylesheet">
...
<script src="src/ionic-zoomable-gallery.js"></script>

```
Add zoomableImageGallery as dependency to your project
```
angular.module('zoomableImageGallery', ['ionic']);
```
Data source example :
```
 $scope.imagesData = [{
      url : 	"1.png",
      caption : "THis is caption 1"
    },{
      url : 	"2.png",
      caption : "THis is caption 2"
  }];
```

URL - Url of image and this is mandatory (String)

Caption - This property is optional. Blank value, absence of caption, set showCaption in custom options for not to show caption.


#Config

Default configuration for this plugin.
```
var _options =  {
	imagesData : new Array(),
	allowSwipe : false,
	showCaption : true,
	isZoomable : true,
	isContinue : true,
	showStrip : true,
	showNavigationArrow : true,
	startIndex : 1
};
```
Default values : 

- imagesData - Array containg image url and caption(optional)
- allowSwipe - Swipe on touch (Boolean)
- showCaption - Show image related caption (Boolean)
- isZoomable - Allow zooming in images (Boolean)
- showNavigationArrow - Show/Hide navigation arrow Which are used to manage navigation (boolean). 
- startIndex - Index of image from which you want to show at load time (int - 1 to n)
