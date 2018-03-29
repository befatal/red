import $ from 'jquery';
// import dotenv from 'dotenv';
// dotenv.load()


export class DoctorApi {
 //
 //  getDoctorIssue(issue) {
 //    $.ajax({
 //      url: "https://api.betterdoctor.com/2016-03-01/practices?name=${issue}&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=${this.apiKey}",
 //      type: 'GET',
 //      data: {
 //        format: 'json'
 //      },
 //      success: function(response) {
 //        searchDoctors(response);
 //      },
 //        error: function() {
 //          $('#errors').text("Sorry, no results found");
 //        }
 //      })
 // }
 getDoctor(doctor,searchDoctors) {
   $.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=53655e2582ea8e82e621ce1990e85a45')
     .then(response => {
       alert(response)
       searchDoctors(response);
        // $('.showDoctor').append(response.profile.first_name);
     })
     .fail(() => 'Sorry, no results found');
   }
}
