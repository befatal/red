import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorApi } from './doctor-interface.js';

$(document).ready(function() {
  $('#doctorSearch').click(function() {
    event.preventDefault();
    let parameters = {'name' , 'issue'};
    let doctor = new DoctorApi (parameters);
    doctor.getDoctor().then(function(response) {
      let body = JSON.parse(response);
    }, function(error) {
      $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });
