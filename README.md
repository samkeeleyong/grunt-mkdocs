# grunt-mkdocs

> Grunt plugin for lazy people using [mkdocs](http://www.mkdocs.org/).

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install samkeeleyong/grunt-mkdocs --save-dev
```

It will install the plugin from the github repository. 

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mkdocs');
```
<br/><br/>

## The "mkdocs" task

### Features
>As I only wrote this for practice, boredom and laziness, the features might seem trivial.

* Adding a Page
* Deleting a Page (_to be added_)
* mkdocs build?
* Some other stuff i can think of. (_maybe compile files into a single markdown file?_)


### Overview
In your project's Gruntfile, add a section named `mkdocs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mkdocs: {
	options: {
		// Task-specific options go here.
		path: 'docs/'
	}
  }
});
```

Also in your `mkdocs.yml`, you will need to add a #mkdocs and #mkdocs-end under the pages section:

```
#mkdocs
- [index.md, Home]
- [nextpage.md, This is another page]
- [mypage,Default Title]
#mkdocs-end
```

This will let the plugin know where to change the list. Still trying to improving it. 
<br/><br/>

### Options

#### options.path
Type: `String`

A string value that specifies where markdown files should be placed
<br/><br/>


### Usage Examples

Enter this command: 
```shell
grunt mkdocs
```

This shows a prompt via `grunt-prompt`. Questions require no explanation.
<br/>
####Adding a page
As of now, only the add mode is available. Internally this just calls

`grunt mkdocs-addpage:mymdfile:"My Title"`

This creates a markdown file in `docs/` and adds an entry in mkdocs.yml, e.g.
```
- [mkdownfile.md, This is my Markdown File]
```

Screenshots to follow.

Notes: The title is optional. The title will default to `Default Title`
<br/><br/>

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
<br/><br/>

## Release History
_(Nothing yet)_
