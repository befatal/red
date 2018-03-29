import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorApi } from './doctor-search.js';

const searchDoctors = response => {
  response.doctor.forEach(doctor => {
    alert("TEST");
    let name = response.doctor.profile.first_name + ' ' + response.doctor.last_name;
    // let address = response.doctor.practices[0].visit_address.street + ' ' + response.data[i].visit_address.city + ' ' + response.data[i].visit_address.state;
    let acceptPatients;
    if (response.accepts_new_patients == true) {
      acceptPatients = "Yes";
    } else {
      acceptPatients = "No";
    }
      $('.showDoctor').append('<li>' + 'Name:' + name + 'Accepting Patients?' + acceptPatients)
  })
};

$(document).ready(() => {
    let DoctorFinder = new DoctorApi();
    $('#doctorSearch').click(function() {
      event.preventDefault();
      $('.showDoctor').empty();
      let doctor = $('#doctor').val();
      $('#showDoctor').text(doctor);
      DoctorApi.prototype.getDoctor(doctor,searchDoctors);
    })

  });
