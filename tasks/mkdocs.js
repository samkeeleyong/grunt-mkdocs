/*
 * grunt-mkdocs
 * https://github.com/sam-ong/grunt-mkdocs
 *
 * Copyright (c) 2015 Sam Keeley Ong
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
	var fs = require('fs');
	var path = require('path');
	var config = grunt.config.get('mkdocs');

	/*
	 * Create the Markdown file
	 *
	 * @param filename:string - e.g. mypage.md
	*/
	var createMkFile = function(filename){
		filename = filename + ".md";
		var docs_directory = config.default_options.options.path;
		var filepath = path.join(docs_directory, filename);
		
		fs.writeFileSync(filepath, '');
		grunt.log.ok(filename + " has been created");
	};

	/*
	 * Register markdown file to mkdocs.yml
	 *
	 * @param filename:string - e.g. mypage.md
	 * @param title:string - e.g. "This is my page"
	*/
	var add_mk_entry = function(args){
		var new_entry = '- [' + args.filename + ',' + args.title +']';
			
		// old 
		var old_contents = String(fs.readFileSync('mkdocs.yml'));
		var old_entry_section = old_contents.match('#mkdocs[\\s\\S]*#mkdocs-end')[0];

		// new 
		var new_entry_section = old_entry_section.replace('#mkdocs-end', new_entry.concat('\n#mkdocs-end'));
		var new_contents = old_contents.replace(old_entry_section, new_entry_section);

		fs.writeFileSync('mkdocs.yml', new_contents);
	};

	/*
	 * Register the task
	 *
	 * Add a page in mkdocs
	*/
    grunt.registerTask("mkdocs", "Adds a Markdown page", function(filename, title){
		var options = {
			filename: filename,
			title: title || "Default Title"
		};
		// create markdown file
		createMkFile(options.filename);
		
		// add listing in mkdocs.yml
		add_mk_entry(options);
	});
};
