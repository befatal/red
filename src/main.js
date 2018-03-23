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
    console.log(data)

  promise.then(function(response) {
    let body = JSON.parse(response);
    let doctorArray =[];
    body.data.forEach(function(element) {
      doctorArray.push(element.name + " " + element.specialties);
    },
    doctorArray.forEach(function(element) {
      $(".showDoctor").append("<p>" + element + "</p>");
    }),
      function(error) {
      $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });
})
