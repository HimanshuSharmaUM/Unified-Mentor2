$(document).ready(function () {
  function setCounts(data) {
    var map = {
      '#patientcount': data.patient,
      '#doctorcount': data.doctor,
      '#appointmentcount': data.appointment,
      '#medicationcount': data.medication,
      '#departmentcount': data.department,
      '#nursecount': data.nurse,
      '#roomcount': data.room,
      '#proccount': data.procedure,
      '#prescribescount': data.prescribes,
      '#undergoescount': data.undergoes
    };
    // Animate the numbers in
    Object.keys(map).forEach(function (sel) {
      var target = parseInt(map[sel] || 0, 10);
      var $el = $(sel);
      $({ val: 0 }).animate({ val: target }, {
        duration: 600,
        easing: 'swing',
        step: function (now) { $el.text(Math.floor(now)); },
        complete: function () { $el.text(target); }
      });
    });
  }

  // If opened directly from the filesystem, load static mock data
  if (window.OFFLINE_MODE) {
    if (window.fetchMock) {
      window.fetchMock('common').done(function (data) {
        setCounts(data);
      }).fail(function () {
        setCounts({ patient: 0, doctor: 0, appointment: 0, medication: 0, department: 0, nurse: 0, room: 0, procedure: 0, prescribes: 0, undergoes: 0 });
      });
      return;
    }
  }

  // Default online behavior - query backend
  $.ajax({
    async: true,
    crossDomain: true,
    url: 'common',
    method: 'GET',
    headers: { 'cache-control': 'no-cache' }
  }).done(function (response) {
    setCounts(response || {});
  }).fail(function () {
    // Graceful fallback if backend not running
    setCounts({ patient: 0, doctor: 0, appointment: 0, medication: 0, department: 0, nurse: 0, room: 0, procedure: 0, prescribes: 0, undergoes: 0 });
  });
});
