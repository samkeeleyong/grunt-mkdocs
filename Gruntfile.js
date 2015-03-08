/*
 * grunt-mkdocs
 * https://github.com/sam-ong/grunt-mkdocs
 *
 * Copyright (c) 2015 Sam Keeley Ong
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    mkdocs: {
        options: {
			path: '', 
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }, 

    // Grunt Prompt
    prompt: {
    	target:{
		options:{
			questions: [
				{
					config: "question_mode",
					type: "list",
					message: "Choose Mode",
					default: "add",
					choices: [
						{name: 'add', checked: true},
						{name: 'delete'}
					]
				},
				{
					config: "mkfilename",
					type: "input",
					message: "What is the name of the markdown file?",
					default: "mkfile",
					validate: function(value){ 	// ony accept 1 word answers
						var wordCount = String(value).split(" ").length;
						return wordCount === 1 ? true: 'Please limit filename to one word';
					},
					when: function(answers){
						return answers['question_mode'] === 'add';
					}
				},
				{
					config: "mktitle",
					type: "input",
					message: "What is the title of this page",
					default: "Default Title",
					when: function(answers){
						return answers['question_mode'] === 'add';
					}
				}
			], 
			then: function(results){
				var question_mode = results.question_mode;
				if(question_mode === 'add')
					grunt.task.run('mkdocs-addpage:' + results.mkfilename + ':"' + results.mktitle + '"');
				
				grunt.log.writeln('Mode(' + question_mode + ') has not been implemented');
				return false;
			}
		}
 
	}
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-prompt');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'mkdocs', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
