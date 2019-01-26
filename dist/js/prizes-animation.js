$(document).ready(function() {

      $("#red-1").mouseover(function() {
        console.log("Starting hover function");
          $("#red-rect-1").animate({
            width: "500px"
          }, 1000, function() {
          });
      });

      $("#red-1").mouseout(function() {
        console.log("Starting mouseout function");
          $("#red-rect-1").animate({
            width: "170px"
          }, 1000, function() {
          });
      });

      $("#red-2").mouseover(function() {
        console.log("Starting hover function");
          $("#red-rect-2").animate({
            width: "500px"
          }, 1000, function() {
          });
      });

      $("#red-2").mouseout(function() {
        console.log("Starting mouseout function");
          $("#red-rect-2").animate({
            width: "170px"
          }, 1000, function() {
          });
      });

      $("#red-3").mouseover(function() {
        console.log("Starting hover function");
          $("#red-rect-3").animate({
            width: "400px"
          }, 1000, function() {
          });
      });

      $("#red-3").mouseout(function() {
        console.log("Starting mouseout function");
          $("#red-rect-3").animate({
            width: "170px"
          }, 1000, function() {
          });
      });

})
