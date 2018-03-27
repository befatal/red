export class DoctorApi {
  constructor() {
    this.apiKey = process.env.exports.apiKey;

  }


  getDoctor() {

   let request = new XMLHttpRequest();
   let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=0&limit=10&user_key=53655e2582ea8e82e621ce1990e85a45'
   return new Promise(function(resolve, reject) {
     request.onload = function() {
       if (this.status === 200) {
         resolve(request.response);
       } else {
         reject(Error(request.statusText));
       }
     };
     request.open("GET", url, true);
     request.send();
   });
   };
 }
