# Dmitry Imamov
------

## Contact information:
    mail: dmitriyimamov@gmail.com;
    telegram: @Dmitriy;
    phone: +7(996)*******;
---
## Briefly about yourself:
    I like to learn something new, so I decided to try to become a front-end developer
---
## Skills and Proficiency:
    HTML, CSS3
    BEM Nested
    JS Basics
    Git, GitHub
    Adobe Photoshop, Figma
---
## Code Example:

```
  function enableValidation(options) {
    const formList = document.querySelectorAll(options.formSelector);

    formList.forEach( (form) => {
      const inputList = [...form.querySelectorAll(options.inputSelector)];
      const buttonElement = form.querySelector(options.submitButtonSelector);

      inputList.forEach( (element) => {
        const formError = form.querySelector(`.${element.id}-error`);
        element.addEventListener('input', () => {
          isValid(element, formError, options.inputErrorClass, options.errorClass)
          toggleButtonState(inputList, buttonElement, options.inactiveButtonClass);
        });
      });
    });
  };
```
---
## Links to study projects:
* [Project link How to learn](https://dmitriyimamov.github.io/how-to-learn/)
* [Project link Russin travel](https://dmitriyimamov.github.io/russian-travel/index.html)

## Courses:
  RS Schools Course «JavaScript/Front-end. Stage 0» (in progress)

##### English language level: A1
