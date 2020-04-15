var gulp = require('gulp');
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const base64 = require('gulp-base64')
const through2 = require('through2')
const clean = require('gulp-clean')
const gutil = require('gulp-util')

const babelOpt = {
  "presets": ["@babel/preset-env", "@babel/preset-react"], // babel 转换规则
  "plugins": [
    ["import", {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": "css" // `style: true` 会加载 less 文件
  }],
  [ "@babel/plugin-proposal-decorators", // 修饰器
      { "legacy": true }],
    '@babel/plugin-proposal-export-default-from',
    "@babel/plugin-proposal-class-properties", // es6 class 类
    "@babel/plugin-transform-async-to-generator", // es7 async await
    "@babel/plugin-transform-runtime", // 可重新使用Babel注入的帮助程序代码以节省代码大小，也可转义迭代器。
  ]
}
function indexBabelify () {
  return gulp.src('src/index.js')  
          // 路径问题：gulpfile.js为路径的起点。此路径表示js文件下的所有js文件。
        .pipe(babel(babelOpt))
        .pipe(through2.obj(function z (file, encoding, next) {
          this.push(file.clone())
          file.contents = Buffer.from(file.contents.toString().replace(/\.\/components/g, './lib'))
          this.push(file)
          next()
        }))      //压缩
        .pipe(gulp.dest('dist'));    //打包压缩在build目录下。
}
function babelify () {
  return gulp.src(['src/lib/**/*.js', 'src/components/**/*.jsx', 'src/components/**/*.js'])
    .pipe(babel(babelOpt))
    .pipe(through2.obj(function z (file, encoding, next) {
      this.push(file.clone())
      
      file.contents = Buffer.from(file.contents.toString().replace(/\.scss/g, '.css'))
      // console.log(file.contents.toString())
      this.push(file)
      next()
    }))
    .pipe(gulp.dest('dist/lib'))
}

function style () {
  return gulp.src('src/components/**/*.scss')
    .pipe(base64())
    .pipe(sass())
    .pipe(gulp.dest('dist/lib'))
}
function cleanDist () {
  return gulp.src('dist', {read: false, allowEmpty: true})
    .pipe(clean())
}
exports.default = gulp.series(cleanDist, indexBabelify, babelify, style)