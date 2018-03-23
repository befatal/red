import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorApi } from './doctor-interface.js';

$(document).ready(function() {
  $('#doctorSearch').click(function() {
    event.preventDefault();
    let parameters = {'name':'', 'speciality':''};
    let data = new DoctorApi (parameters);
    let promise = data.getDoctor();

  promise.then(function(response) {
    let body = JSON.parse(response);
    let doctorArray =[];
    body.data.forEach(function() {
      doctorArray.push(body.data.name + " " + body.data.specialties);
    },
    doctorArray.forEach(function() {
      $(".showDoctor").append("<p>" + body.data.name + body.data.specialties + "</p>");
    }),
      function(error) {
      $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });
})
