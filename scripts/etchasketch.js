function pixelsVerify(pixelinput) {
  return pixelinput >= 1 && pixelinput <= 100;
}

function hexCodeVerify(hexCodeInput) {
  if (hexCodeInput.length != 7) {
    console.log(`first`);
    return false;
  } else {
    const hexCodeArray = hexCodeInput.toLowerCase().split(``);
    for (i = 0; i < hexCodeArray.length; i++) {
      if (hexCodeArray[0] != `#`) {
        return false;
      } else {
        continue;
      }

      if (
        (hexCodeArray[i] >= `0` && hexCodeArray[i] <= `9`) ||
        (hexCodeArray[i] >= `a` && hexCodeArray[i] <= `f`)
      ) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }
}

// Changing the canvas
input_pixels.addEventListener(`keydown`, (e) => {
  let pixelInput = input_pixels.value;
  if (e.key === `Enter`) {
    if (!pixelsVerify(pixelInput)) {
      alert(`Please enter a value from 1 to 100.`);
      input_pixels.value = ``;
    } else {
      let pixel = canvas.querySelectorAll(`.pixel`);
      pixel.forEach((deletePixel) => {
        canvas.removeChild(deletePixel);
      });

      root.setAttribute(`style`, `--pixel: ${pixelInput}`);

      let newPixel;
      for (i = 0; i < pixelInput * pixelInput; i++) {
        newPixel = document.createElement(`div`);
        newPixel.classList.add(`pixel`);
        canvas.appendChild(newPixel);
      }

      input_pixels.value = ``;
    }
  }
});

// Using random(rainbow) colors to paint
btn_rainbow.addEventListener(`click`, () => {
  let pixel = canvas.querySelectorAll(`.pixel`);

  pixel.forEach((square) => {
    square.addEventListener(`mouseenter`, () => {
      let randomColor = Math.round(Math.random() * 6);
      switch (randomColor) {
        case 0:
          randomColor = `red`;
          break;
        case 1:
          randomColor = `orange`;
          break;
        case 2:
          randomColor = `yellow`;
          break;
        case 3:
          randomColor = `green`;
          break;
        case 4:
          randomColor = `blue`;
          break;
        case 5:
          randomColor = `indigo`;
          break;
        case 6:
          randomColor = `violet`;
          break;
      }
      square.setAttribute(`style`, `background-color: ${randomColor}`);
    });
  });
});

// Using initial colors to paint
btn_initialColors.forEach((initialColors) => {
  initialColors.addEventListener(`click`, () => {
    let pixel = canvas.querySelectorAll(`.pixel`);
    pixel.forEach((square) => {
      square.addEventListener(`mouseenter`, () => {
        square.setAttribute(`style`, `background-color: ${initialColors.id}`);
      });
    });
  });
});

// Using player provided color from input
input_hexCode.addEventListener(`keydown`, (e) => {
  let customColor = input_hexCode.value;

  if (e.key === `Enter`) {
    if (!hexCodeVerify(customColor)) {
      alert(`Please enter a valid hexcode.`);
      input_hexCode.value = ``;
      customColorPreview.setAttribute(
        `style`,
        `background-color: #2e2e2e`
      );
      return;
    } else {
      customColorPreview.setAttribute(
        `style`,
        `background-color: ${customColor}`
      );
      let pixel = canvas.querySelectorAll(`.pixel`);
      pixel.forEach((square) => {
        square.addEventListener(`mouseenter`, () => {
          square.setAttribute(`style`, `background-color: ${customColor}`);
        });
      });
    }
  }
});

// Using player provided color from preview

// Erase paint
btn_erase.addEventListener(`click`, () => {
  let pixel = canvas.querySelectorAll(`.pixel`);
  pixel.forEach((square) => {
    square.addEventListener(`mouseenter`, () => {
      square.setAttribute(`style`, `background-color: #fff`);
    });
  });
});

// Clear paint
btn_clear.addEventListener(`click`, () => {
  let pixel = canvas.querySelectorAll(`.pixel`);
  pixel.forEach((square) => {
    square.setAttribute(`style`, `background-color: #fff`);
    square.addEventListener(`mouseenter`, () => {
        square.setAttribute(`style`, `background-color: #fff`);
      });
  });
});
