const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const path = require('path');

gulp.task('server', () => nodemon({
  script: './bin/www',
  watch: ['./src'],
  env: {
    DEBUG: 'server:server',
    NODE_PATH: path.resolve(__dirname, 'server'),
    NODE_ENV: 'development',
  },
}));

gulp.task('run:dev', ['server']);
