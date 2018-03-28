import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorApi } from './doctor-search.js';

const searchDoctors = response => {
  for (var i = 0; i < 10; i++) {
    let name = response.data[i].profile.first_name + ' ' + response.data[i].last_name;
    let address = response.data[i].practices[0].visit_address.street + ' ' + response.data[i].visit_address.city + ' ' + response.data[i].visit_address.state;
    let acceptPatients;
    if (response.accepts_new_patients == true) {
      acceptPatients = "Yes";
    } else {
      acceptPatients = "No";
    }
  }
};

$(document).ready(() => {
    let DoctorApi = new DoctorApi();
    $('#doctorSearch').click(function() {
      event.preventDefault();
      $('.showDoctor').empty();
      let doctor = $('#doctor').val();
      $('#showDoctor').text(doctor);
      DoctorApi.prototype.getDoctor(doctor, searchDoctors);
    })

  });
