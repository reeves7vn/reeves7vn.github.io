const typingText = new TextScramble(".text-3", {
    text: ["And I'm a Developer.", "And I'm a Web Designer.", "And I'm a Problem Solver."],
    speed: 80,
  });
  typingText.start();
  
  // Add a blinking cursor
  const cursor = document.querySelector(".cursor");
  const cursorAnimation = setInterval(() => {
    if (cursor.style.visibility === "hidden") {
      cursor.style.visibility = "visible";
    } else {
      cursor.style.visibility = "hidden";
    }
  }, 500);
  