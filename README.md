# FreeCodeCamp Backend Project: URL Shortener Microservice

### User stories:
 I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

### User stories:
 I can paginate through the responses by adding a ?offset=2 parameter to the URL.

### User stories:
 I can get a list of the most recently submitted search strings.


### Example creation usage:
http://localhost:5000/api/imagesearch/flowers&offset=5
http://localhost:5000/api/latest/imagesearch


### Example creation output

```json

{
totalHits: 500,
hits: [
{
previewHeight: 100,
likes: 105,
favorites: 87,
tags: "flower, nature, flora",
webformatHeight: 427,
views: 7731,
webformatWidth: 640,
previewWidth: 150,
comments: 32,
downloads: 3959,
pageURL: "https://pixabay.com/en/flower-nature-flora-petal-summer-3140492/",
previewURL: "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_150.jpg",
webformatURL: "https://pixabay.com/get/ea34b50f2cfd033ed95c4518b7444696e374e1d404b014409df3c779aeeab2_640.jpg",
imageWidth: 5689,
user_id: 334088,
user: "jill111",
type: "photo",
id: 3140492,
userImageURL: "https://cdn.pixabay.com/user/2017/12/10/14-54-44-673_250x250.jpg",
imageHeight: 3803
},
{
previewHeight: 99,
likes: 54,
favorites: 28,
tags: "poppy, flower, nature",
webformatHeight: 426,
views: 6203,
webformatWidth: 640,
previewWidth: 150,
comments: 39,
downloads: 3700,
pageURL: "https://pixabay.com/en/poppy-flower-nature-fields-3137588/",
previewURL: "https://cdn.pixabay.com/photo/2018/02/07/17/53/poppy-3137588_150.jpg",
webformatURL: "https://pixabay.com/get/ea34b2082dfc093ed95c4518b7444696e374e1d404b014409df3c779aeeab2_640.jpg",
imageWidth: 2000,
user_id: 7097598,
user: "Candiix",
type: "photo",
id: 3137588,
userImageURL: "https://cdn.pixabay.com/user/2017/12/06/20-08-45-84_250x250.jpg",
imageHeight: 1333
},
{
previewHeight: 99,
likes: 189,
favorites: 125,
tags: "nature, flora, flower",
webformatHeight: 426,
views: 34783,
webformatWidth: 640,
previewWidth: 150,
comments: 48,
downloads: 18612,
pageURL: "https://pixabay.com/en/nature-flora-flower-leaf-sunflower-3113318/",
previewURL: "https://cdn.pixabay.com/photo/2018/01/28/11/24/nature-3113318_150.jpg",
webformatURL: "https://pixabay.com/get/ea34b00c2bf5093ed95c4518b7444696e374e1d404b014409df3c779aeeab2_640.jpg",
imageWidth: 2736,
user_id: 7410713,
user: "bichnguyenvo",
type: "photo",
id: 3113318,
userImageURL: "https://cdn.pixabay.com/user/2017/12/16/10-28-39-199_250x250.jpg",
imageHeight: 1824
}
],
total: 77116
}

```




```json
[
{
_id: "5a805738476ba9295c7d90de",
term: "burgers",
when: "Sun Feb 11 2018 19:46:16 GMT+0500 (Pakistan Standard Time)",
__v: 0
},
{
_id: "5a80573f476ba9295c7d90df",
term: "pasta",
when: "Sun Feb 11 2018 19:46:23 GMT+0500 (Pakistan Standard Time)",
__v: 0
},
{
_id: "5a80587c04f07035947a030a",
term: "mobile",
when: "Sun Feb 11 2018 19:51:40 GMT+0500 (Pakistan Standard Time)",
__v: 0
},
{
_id: "5a8058a504f07035947a030b",
term: "burgers",
when: "Sun Feb 11 2018 19:52:21 GMT+0500 (Pakistan Standard Time)",
__v: 0
},
{
_id: "5a8059925ee7fb0320f02d0d",
term: "flowers",
when: "Sun Feb 11 2018 19:56:18 GMT+0500 (Pakistan Standard Time)",
__v: 0
}
]

```


## Live Demo

```url
https://image-abstract-node.herokuapp.com
```
