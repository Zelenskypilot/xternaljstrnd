      const dynamicText = document.querySelector("h1 span");
      const words = ["Badili currency iwe kwenye (Tsh)", "Lipa kuanzia 1000 nakuendelea"];
      
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const typeEffect = () => {
          const currentWord = words[wordIndex];
          const currentChar = currentWord.substring(0, charIndex);
          dynamicText.textContent = currentChar;
          dynamicText.classList.add("stop-blinking");

          if (!isDeleting && charIndex < currentWord.length) {
              // Type the next character
              charIndex++;
              setTimeout(typeEffect, 150);
          } else if (isDeleting && charIndex > 0) {
              // Delete the previous character
              charIndex--;
              setTimeout(typeEffect, 20);
          } else {
              // Toggle delete state or switch to the next word
              isDeleting = !isDeleting;
              dynamicText.classList.remove("stop-blinking");
              if (!isDeleting) {
                  wordIndex = (wordIndex + 1) % words.length;
              }
              setTimeout(typeEffect, 1200);
          }
      };

      typeEffect();
    
