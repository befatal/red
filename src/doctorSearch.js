import $ from 'jquery';

export function searchDoctors(response){
  for (var i = 0; i < 10; i++) {
    let name = response.data[i].profile.first_name + ' ' + response.data[i].last_name;
    let address = response.data[i].practices[0].visit_address.street + ' ' + response.data[i].visit_address.city + ' ' + response.data[i].visit_address.state;
    let acceptPatients;
    if reponse.accepts_new_patients == true) {
      acceptPatients = "Yes";
    } else {
      acceptPatients = "No";
    }
   $('#showDoctor').append;
     <h2>${name}</h2>
     <br>
     <h2>${address}</h2>
     <br>
     <h2>Accepting New Patients - </h2>
     <h2>${acceptPatients}</h2>
   }
  }
