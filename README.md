Hexo-Theme-Docsets
===

Turn your Hexo into a docsets

* [Demo](http://ccrsky.github.io/hexo-theme-docsets/)


## Requirements ##

* Hexo >= 3.0

## Features ##

* **Simple** - keep it simple and stupid
* **Bootstrap** - get the power of Twitter Bootstrap
* **Category Tree** - auto generate multilevel catogory tree by using Front-Matter in the post
* **External Link** － redirect to external link by using redirect variable in the post



## Install ##

``` sh
$ git clone https://github.com/ccrsky/hexo-theme-docsets.git themes/docsets
```


## Enable ##

Modify `theme` setting in your `_config.yml` to `docsets `.

## Update ##

``` sh
$ cd themes/docsets
$ git pull
```

## Configuration ##

```
rss: atom.xml
favicon: favicon.png
inverse_sort: false
```

* **rss** - RSS link
* **inverse_sort** - whether to sort all documents inversely. By default docsets will sort all documents chronologically.


## Front-Matter ##

* **toc** - renders a table of contents
* **redirect** - auto redirect to external link

For example:

```
title: category tree demo
date: 2014-03-16 10:17:16
categories:
- web
- front end
- javascript

toc: true
---
```


```
title: redirect to external link demo
date: 2014-03-16 10:17:16
categories:
- web
- javascript

redirect: http://ccrsky.github.io
---
```


## License ##

This theme is provided under [MIT License](http://opensource.org/licenses/MIT).

