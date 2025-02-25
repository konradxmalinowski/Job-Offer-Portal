function returnApplyHTML(offersData, idx = 0) {
  return `
       <div class="exit"><img src="images/exit.png" alt="exit icon" id="exit"></div>
        <h1 class="job-title">${offersData[idx].name}</h1>
        <div class="basic-info">
            <span class="days">
                <img src="images/calendar-icon.png" alt="calendar icon"> ${
                  offersData[idx]?.daysOfWork
                }
            </span>
            <span class="location">
                <img src="images/location-icon.png" alt="location icon"> ${
                  offersData[idx]?.place
                }
            </span>
            <span class="people">
                <img src="images/people-icon.png" alt="people icon"> ${
                  offersData[idx]?.salary
                }
            </span>
        </div>  
    
       <div class="fill-data-section">
            ${
              browserDefaultLanguage.includes('pl')
                ? '<span>Wypełnij poniższe informacje</span>'
                : '<span>Fill out the information below</span>'
            }

            <form action="" method="post" class="apply-form">
                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<label for="full-name-input" class="grey bold">Pełne imię <span class="star">*</span></label>'
                    : '<label for="full-name-input" class="grey bold">Full name <span class="star">*</span></label>'
                }
            
                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<input type="text" name="full-name-input" id="full-name-input" placeholder="Wpisz pełne imię">'
                    : '<input type="text" name="full-name-input" id="full-name-input" placeholder="Enter full name">'
                }

                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<label for="email-input" class="grey bold">Adres email <span class="star">*</span></label>'
                    : '<label for="email-input" class="grey bold">Email address <span class="star">*</span></label>'
                }
                    
                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<input type="email" name="email-input" id="email-input" placeholder="Wpisz adres email">'
                    : '<input type="email" name="email-input" id="email-input" placeholder="Enter email address">'
                }

                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<label for="phone-number-input" class="grey bold">Numer telefonu <span class="star">*</span></label>'
                    : '<label for="phone-number-input" class="grey bold">Phone number <span class="star">*</span></label>'
                }
                
                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<input type="tel" name="phone-number-input" id="phone-number-input" placeholder="Wpisz numer telefonu">'
                    : '<input type="tel" name="phone-number-input" id="phone-number-input" placeholder="Enter phone number">'
                }

                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<label for="cv-upload" class="grey bold">Prześlij CV <span class="star">*</span></label>'
                    : '<label for="cv-upload" class="grey bold">Upload CV <span class="star">*</span></label>'
                }
                
                <input type="file" name="cv-upload" id="cv-upload">

                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<label for="linkedin" class="grey bold">Profil LinkedIn</label>'
                    : '<label for="linkedin" class="grey bold">LinkedIn profile</label>'
                }
                
                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<input type="url" name="linkedin" id="linkedin" placeholder="Wpisz link do profilu LinkedIn">'
                    : '<input type="url" name="linkedin" id="linkedin" placeholder="Enter LinkedIn profile link">'
                }

                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<label for="portfolio" class="grey bold">Link do portfolio</label>'
                    : '<label for="portfolio" class="grey bold">Portfolio link</label>'
                }
                
                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<input type="url" name="portfolio" id="portfolio" placeholder="Wpisz link do portfolio">'
                    : '<input type="url" name="portfolio" id="portfolio" placeholder="Enter portfolio link">'
                }

                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<label for="cover-letter" class="grey bold">List motywacyjny</label>'
                    : '<label for="cover-letter" class="grey bold">Cover letter</label>'
                }
                
                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<textarea name="cover-letter" id="cover-letter" placeholder="Napisz krótki list motywacyjny"></textarea>'
                    : '<textarea name="cover-letter" id="cover-letter" placeholder="Write a short cover letter"></textarea>'
                }

                ${
                  browserDefaultLanguage.includes('pl')
                    ? '<button type="submit" class="apply-submit">Aplikuj teraz</button>'
                    : '<button type="submit" class="apply-submit">Apply now</button>'
                }
            </form>
        </div>
    `;
}

function createApplySection(idx) {
  const section = document.createElement('section');
  section.className = 'apply-section';
  section.innerHTML = returnApplyHTML(offersData, idx);

  document.body.appendChild(section);
  createdApplySections[idx] = section;
  document
    .querySelectorAll('body > *:not(.apply-section, script')
    .forEach((el) => {
      el.style.filter = 'blur(7px)';
    });
}

function hideApplySection(idx) {
  if (createdApplySections[idx]) {
    createdApplySections[idx].remove();
  }
  document.querySelectorAll('body > *:not(.apply-section').forEach((el) => {
    el.style.filter = 'none';
  });
}

function handleClickApplyButton() {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('apply-button-created')) {
      const button = event.target;
      const idx = Array.from(
        document.querySelectorAll('.apply-button-created')
      ).indexOf(button);

      if (createdApplySections[idx]) {
        createdApplySections[idx].style.display = 'flex';
      } else {
        createApplySection(idx);
      }

      let hideApplySectionButtons = document.querySelectorAll('.exit');
      hideApplySectionButtons.forEach((exitButton) => {
        exitButton.addEventListener('click', () => {
          hideApplySection(idx);
        });
      });

      window.document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          hideApplySection(idx);
          button.blur();
        }
      });
    }
  });
}
