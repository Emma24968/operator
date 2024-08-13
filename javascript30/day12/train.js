function welcomeUser(params) {
    var traintype = document.getElementById('traintype').value;
    var Origin = document.getElementById('origin').value;
    var date = document.getElementById('date').value;
    var destination= document.getElementById('destination').value;

    var welcomeMessge = 'Our dear customer, note that you selected' +  traintype + 'train departing from' + origin + 'travelling to' + destination + 'and your date of travel is' + date + '. Thank you for choosin us. Safe journey!.';
    document.getElementById('welcomeMessage').textContent=welcomeMessge;
}
