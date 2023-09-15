/* Store the valueement in value */
let tilts = document.getElementsByClassName("tilt")

for (var i = 0; i < tilts.length; i++) {
  run(tilts[i], 10)
}

function run(value, multiplier) {
  /* Get the height and width of the valueement */
  const height = value.clientHeight
  const width = value.clientWidth

  /*
   * Add a listener for mousemove event
   * Which will trigger function 'handleMove'
   * On mousemove
   */
  value.addEventListener("mousemove", handleMove)

  /* Define function a */
  function handleMove(e) {
    /*
     * Get position of mouse cursor
     * With respect to the valueement
     * On mouseover
     */
    /* Store the x position */
    const xVal = e.layerX
    /* Store the y position */
    const yVal = e.layerY

    /*
     * Calculate rotation valuee along the Y-axis
     * Here the multiplier 20 is to
     * Control the rotation
     * You can change the value and see the results
     */
    const yRotation = multiplier * ((xVal - width / 2) / width)

    /* Calculate the rotation along the X-axis */
    const xRotation = -multiplier * ((yVal - height / 2) / height)

    /* Generate string for CSS transform property */
    const string =
      "perspective(500px) scale(1.05) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)"

    /* Apply the calculated transformation */
    value.style.transform = string
  }

  /* Add listener for mouseout event, remove the rotation */
  value.addEventListener("mouseout", function () {
    value.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)"
  })
}
