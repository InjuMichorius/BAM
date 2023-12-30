const percentage = document.getElementById("percentage");

window.addEventListener(
  "load",
  function (event) {
    if (isInViewport(percentage)) {
    }
  },
  false
);

let count = true;

function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();

  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    something();
    console.log("In the viewport! :)");
    return true;
  } else {
    console.log("Not in the viewport. :(");
    return false;
  }
}

var something = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;
      //Count effect
      let valueDisplays = document.querySelectorAll(".num");
      let interval = 300;

      valueDisplays.forEach((valueDisplay) => {
        let startValue = 20;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
    }
  };
})();
