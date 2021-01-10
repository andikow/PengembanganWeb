import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/custom.css';
import './index.css';

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $(".closeModal").on('click', function() {
        $('.modal').modal('hide');
    });
  $('#modalCart').on('show.bs.modal', function () {
    $('#modalCart').css("margin-left", $(window).width() - $('.modal-content').width() - 6/8*$(window).width());
    });
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
