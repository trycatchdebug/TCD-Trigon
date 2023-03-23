const main = () => {
  let clickCount = 0;
  let degOfRotation = 0;
  const cssVars = document.querySelector(':root');
  const trigon = document.getElementById('trigon');

  const setDegOfRotation = (deg) => {
    cssVars.style.setProperty('--rotation', `${deg}deg`);
  };

  const addClass = (className) => {
    trigon.classList.add(className);
  };

  const removeClass = (className) => {
    trigon.classList.remove(className);
  };

  document
    .getElementById('trigon')
    .addEventListener('click', () => {
      degOfRotation += 120;
      setDegOfRotation(degOfRotation);
      switch (clickCount) {
        case 0:
          addClass('rotate120');
          break;
        case 1:
          removeClass('rotate120');
          addClass('rotate240');
          break;
        case 2:
          removeClass('rotate240');
          break;
      }

      clickCount = (clickCount + 1) % 3;
    });
};

window.onload = main;

