$(document).ready(function () {
  app.initialized()
    .then(function (_client) {
      window.client = _client;
      client.events.on('app.activated', modalSlideOut);

      // function to activate Modal slide-out
      function modalSlideOut() {
        client.data.get('requester').then(function (data) {
          console.log(data);

          client.interface.trigger("showModal", {
            title: "Sample Modal",
            template: "modal.html",
            data: {
              name: data.requester.name,
              email: data.requester.email
            }
          }).then(function (data) {
            console.log(data);
          }).catch(function (error) {
            console.log(error);
          });
        });

      }
    }).catch(function (error) {
      console.log(error);
    })
});



// Function to get Requester Data
// function getRequester() {
//   client.data.get('requester').then(function (data) {
//     let requesterName = data.requester.name;
//     document.getElementById('reqName').setAttribute('value', requesterName)
//   }).catch(function (error) {
//     console.log(error)
//   })
// }