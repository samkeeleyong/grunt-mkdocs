# grunt-mkdocs

> Grunt plugin for lazy people using [mkdocs](http://www.mkdocs.org/).

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mkdocs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mkdocs');
```

## The "mkdocs" task

### Overview
In your project's Gruntfile, add a section named `mkdocs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mkdocs: {
	default_options: {
		options: {
			// Task-specific options go here.
			path: 'docs/'
		}
	}
  }
});
```

### Options

#### options.path
Type: `String`

A string value that specifies where markdown files should be placed

### Usage Examples

#### Adding a page

Adding a markdown page:

```shell
grunt mkdocs mymdfile:"My Title"
```

This creates a markdown file in `docs/` and adds an entry in mkdocs.yml, e.g.
```
- [mkdownfile.md, This is my Markdown File]
```

Screenshots to follow.

Notes: The title is optional. The title will default to `Default Title`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
