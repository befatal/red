import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorApi } from './doctor-interface.js';

$(document).ready(function() {
  $('#doctorLocation').click(function() {
    event.preventDefault();
    let parameters = {'name' , 'issue'};
    let doctor = new DoctorApi (parameters);
  })
