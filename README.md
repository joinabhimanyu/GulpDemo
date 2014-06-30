GulpDemo
========

This app describes how to use gulp with an express app.

Step 1:

npm install -g gulp

Step 2:

Create the project directory and go inside it.

npm init

npm install gulp express --save-dev

Step 3:

Create the Gulpfile.js and create the default task inside it.

Step 4:

Run the default task by typing 'gulp' from the console.

Step 5:

Install the gulp plugins for sass compilation, autoprefixer and minify as follows:

npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-rename --save-dev

Step 6:

require all the plugins in the Gulpfile.js and add the styles task accordingly.

Step 7:

add a sass file in the path 'sass/styles.scss' and write the sass for the style.

Step 8:

run the styles task by typing 'gulp styles' in the console.

Step 9:

add a watch to the sass folder inside the default task in Gulpfile.js as follows:

gulp.watch('sass/*.scss', ['styles']);

Step 10:

run the default task as 'gulp'.

Step 11:

change the style in styles.scss and see the corresponding css files getting generated and reload the page.


Codeship status image:

[ ![Codeship Status for joinabhimanyu/GulpDemo](https://www.codeship.io/projects/7696bc80-e246-0131-5932-1e7d1ef3bae4/status)](https://www.codeship.io/projects/25287)

