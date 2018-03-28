import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorApi } from './doctor-search.js';

function searchDoctors(response){
  for (var i = 0; i < 10; i++) {
    let name = response.data[i].profile.first_name + ' ' + response.data[i].last_name;
    let address = response.data[i].practices[0].visit_address.street + ' ' + response.data[i].visit_address.city + ' ' + response.data[i].visit_address.state;
    let acceptPatients;
    if reponse.accepts_new_patients == true) {
      acceptPatients = "Yes";
    } else {
      acceptPatients = "No";
    }

  function searchDoctorsIssue(response){
    for (var i = 0; i < 10; i++) {
      let name = response.data[i].profile.first_name + ' ' + response.data[i].last_name;
      let address = response.data[i].practices[0].visit_address.street + ' ' + response.data[i].visit_address.city + ' ' + response.data[i].visit_address.state;
      let acceptPatients;
      if reponse.accepts_new_patients == true) {
        acceptPatients = "Yes";
      } else {
        acceptPatients = "No";
        }
   }
  }


$(document).ready(function() {
    let search = newDoctor.getDoctor();
    $('#doctorSearch').click(function() {

    });

  });
