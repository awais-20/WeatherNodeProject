const express = require('express');
const app = express();

 function Showindex(req, resp){
   resp.render('index');
  }
 
  function ShowWeather(req, resp){
    resp.render('weather');
  }
  function Showabout(req,resp){
    resp.render('about');
  }
  function Error404(req,resp){
    resp.render('404error');
  }
  function post(req, resp){
    resp.render('post');
  }

  module.exports ={
    Showindex,
    ShowWeather,
    Showabout,
    Error404,
    post
  }
