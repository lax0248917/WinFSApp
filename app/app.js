$(document).ready(function () {
  app.initialized()
    .then(function (_client) {
      window.client = _client;
      client.events.on('app.activated', function () {
        getRequester()
        modalSlideOut();
      });
    }).catch(function (error) {
      console.log(error);
    })
});

// function to activate Modal slide-out
function modalSlideOut() {

  client.interface.trigger("showModal", {
    title: "Sample Modal",
    template: "modal.html",
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.log(error);
  });
}

// Function to get Requester Data
function getRequester() {
  client.data.get('requester').then(function (data) {
    let requesterName = data.requester.name;
    document.getElementById('reqName').setAttribute('value', requesterName)
  }).catch(function (error) {
    console.log(error)
  })
}