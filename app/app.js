$(document).ready(function () {
  app.initialized()
    .then(function (_client) {
      var client = _client;
      client.events.on('app.activated',
        function () {
          client.interface.trigger("showModal", {
            title: "Sample Modal",
            template: "modal.html"
          }).then(function (data) {
            console.log(data)
          }).catch(function (error) {
            console.log(error)
          });
        });
    });
});