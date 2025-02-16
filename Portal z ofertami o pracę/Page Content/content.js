/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function fillAboutPage(data) {
    const aboutHeaderText = document.querySelector('.header-text');
    const aboutCardsSection = document.querySelector('.cards-section');
    const aboutServicesWrapper = document.querySelector('.services-wrapper');
    const aboutServicesTitle = aboutServicesWrapper.querySelector('h2');
    const aboutServices = aboutServicesWrapper.querySelectorAll('.service');
    const aboutServiceButtons = aboutServicesWrapper.querySelectorAll('.service-button');

    const aboutData = data.find(page => page.name === "About");
    if (aboutData) {
        aboutHeaderText.textContent = aboutData.content.main["header-text"];

        const cards = aboutData.content.main["cards-section"];
        cards.forEach((card, index) => {
            const cardElement = aboutCardsSection.children[index];
            if (cardElement) {
                cardElement.querySelector('.name').textContent = card.name;
                cardElement.querySelector('.job-name').textContent = card["job-name"];
            }
        });

        aboutServicesTitle.textContent = aboutData.content.main["services-wrapper"].title;

        const services = aboutData.content.main["services-wrapper"].services;
        const serviceElements = aboutServicesWrapper.querySelectorAll('.service');
        services.forEach((service, index) => {
            const serviceElement = serviceElements[index - 1];
            if (serviceElement) {
                serviceElement.querySelector('h2').textContent = service.title;
                serviceElement.querySelector('p').textContent = service.description;
                serviceElement.querySelector('.service-button').textContent = services[0].button;

            }
        });
    }
}

function fillCreatorPage(data) {
    const creatorData = data.find(page => page.name === "Creator");
    if (creatorData) {
        const mainContent = creatorData.content.main;
        const leftWrapper = mainContent["form-wrapper"]["left-wrapper"];
        const rightWrapper = mainContent["form-wrapper"]["right-wrapper"];

        document.querySelector('.main-wrapper main h1').textContent = mainContent.title;
        document.querySelector('.name-wrapper label').textContent = leftWrapper["name-wrapper"]["label"];
        document.querySelector('.name-wrapper input').placeholder = leftWrapper["name-wrapper"]["input-placeholder"];
        document.querySelector('.surname-wrapper label').textContent = leftWrapper["surname-wrapper"]["label"];
        document.querySelector('.surname-wrapper input').placeholder = leftWrapper["surname-wrapper"]["input-placeholder"];
        document.querySelector('.skills-wrapper label').textContent = leftWrapper["skills-wrapper"]["label"];
        document.querySelector('.birth-wrapper label').textContent = rightWrapper["birth-wrapper"]["label"];
        document.querySelector('.email-wrapper label').textContent = rightWrapper["email-wrapper"]["label"];
        document.querySelector('.email-wrapper input').placeholder = rightWrapper["email-wrapper"]["input-placeholder"];
        document.querySelector('.telephone-wrapper label').textContent = rightWrapper["telephone-wrapper"]["label"];
        document.querySelector('.telephone-wrapper input').placeholder = rightWrapper["telephone-wrapper"]["input-placeholder"];
        document.querySelector('.submit-wrapper button').textContent = rightWrapper["submit-wrapper"]["button"];

        const colorTitle = leftWrapper["color-wrapper"]["title"];
        document.querySelector('.color-wrapper span').textContent = colorTitle;
    }
}

function fillHomePage(data) {
    const homeData = data.find(page => page.name === "Home Page");
    if (homeData) {
        const mainContent = homeData.content.main;

        document.querySelector('.welcome-section h1').textContent = mainContent["welcome-section"].title;
        document.querySelector('.welcome-section h3').textContent = mainContent["welcome-section"].subtitle;
        document.querySelector('.welcome-section .offers-button a').textContent = mainContent["welcome-section"].button;

        document.querySelector('.search-section .header-text').textContent = mainContent["search-section"]["header-text"];
        document.querySelector('.search-inputs1 .options').textContent = mainContent["search-section"]["searching-bar"]["form"]["search-inputs1"]["options"];
        document.querySelectorAll('.custom-list1 .select').forEach((item, index) => {
            item.textContent = mainContent["search-section"]["searching-bar"]["form"]["search-inputs1"]["custom-list1"][index];
        });
        document.querySelector('.search-inputs2 .options').textContent = mainContent["search-section"]["searching-bar"]["form"]["search-inputs2"]["options"];
        document.querySelectorAll('.custom-list2 .select').forEach((item, index) => {
            item.textContent = mainContent["search-section"]["searching-bar"]["form"]["search-inputs2"]["custom-list2"][index];
        });
        document.querySelector('.search-inputs3 .options').textContent = mainContent["search-section"]["searching-bar"]["form"]["search-inputs3"]["options"];
        document.querySelectorAll('.custom-list3 .select').forEach((item, index) => {
            item.textContent = mainContent["search-section"]["searching-bar"]["form"]["search-inputs3"]["custom-list3"][index];
        });
        document.querySelector('.search-button').textContent = mainContent["search-section"]["offers-buttons"]["search-button"];
        document.querySelector('.clear-button').textContent = mainContent["search-section"]["offers-buttons"]["clear-button"];

        document.querySelector('.offers-zone-wrapper h1').textContent = mainContent["offers-zone-wrapper"].title;
        document.querySelector('.load-more-button').textContent = mainContent["offers-zone-wrapper"]["load-more-button"];

        document.querySelector('.offers-section .header-text').textContent = mainContent["offers-section"]["header-text"];
        document.querySelectorAll('.daily-offers .day-offer-card').forEach((offer, index) => {
            const offerData = mainContent["offers-section"]["daily-offers-wrapper"]["daily-offers"][0];
            if (offerData) {
                offer.querySelectorAll('li').forEach((li, liIndex) => {
                    li.textContent = offerData["day-offer-list"][liIndex];
                });
                offer.querySelector('.apply-button').textContent = offerData["apply-button"];
            }
        });

        clearInputs();

        document.querySelector('.median-earnings h2').textContent = mainContent["median-earnings"].title;
        document.querySelectorAll('.median-box p').forEach((box, index) => {
            const boxData = mainContent["median-earnings"]["median-box"][index];
            if (boxData) {
                box.querySelector('.job-title').textContent = boxData["job-title"];
                box.querySelector('.salary').textContent = boxData["salary"];
            }
        });

        const medianResult = mainContent["median-earnings"]["median-box"].find(box => box["median-result"]);
        if (medianResult) {
            const medianBox = document.querySelector('.median-result');
            medianBox.querySelector('.job-title').textContent = medianResult["median-result"]["job-title"];
            medianBox.querySelector('.salary').textContent = medianResult["median-result"]["salary"];
        }

        document.querySelector('.partners-section .header-text').textContent = mainContent["partners-section"]["header-text"];
        document.querySelectorAll('.partners-cards-section .partner-card').forEach((card, index) => {
            const cardData = mainContent["partners-section"]["partners-cards-section"][index];
            if (cardData) {
                card.querySelector('img').alt = cardData["partner-card"];
                card.querySelector('.company-name-partner').textContent = cardData["partner-card"];
            }
        });

        document.querySelector('.reviews-section .header-text').textContent = mainContent["reviews-section"]["header-text"];
        document.querySelectorAll('.review-cards-section .review-card').forEach((card, index) => {
            const reviewData = mainContent["reviews-section"]["review-cards-section"][0]["reviews-column"][index]["review-card"];
            if (reviewData) {
                card.querySelector('.reviewer-name').textContent = reviewData["reviewer-name"];
                card.querySelector('.review').textContent = reviewData["review"];
            }
        });

        // Fill FAQ section
        const faqSection = document.querySelector('.faq-section');
        const faqWrapper = document.querySelector('.faq-wrapper');
        faqWrapper.querySelector('.header-text').textContent = mainContent["faq-section"]["header-text"];
        const faqQuestions = mainContent["faq-section"]["questions"];
        faqSection.querySelectorAll('.faq-question').forEach((questionElement, index) => {
            questionElement.textContent = faqQuestions[index].question;
        });
        faqSection.querySelectorAll('.faq-answer').forEach((answerElement, index) => {
            answerElement.textContent = faqQuestions[index].answer;
        });
    }
}

function fillLoginPage(data) {
    const loginTitle = document.querySelector('main h1');
    const loginEmailInput = document.querySelector('input[name="email"]');
    const loginPasswordInput = document.querySelector('input[name="password"]');
    const loginButtonForm = document.querySelector('#login-button');
    const agreeLoginCheckbox = document.querySelector('#agree');
    const labelAgree = document.querySelector('.label-agree');
    const continueWithGoogleLoginButton = document.querySelector('.continue-button1');
    const continueWithFacebookLoginButton = document.querySelector('.continue-button2');

    const loginData = data.find(page => page.name === "Login & signUp page").data.find(page => page.name === "Login");
    if (loginData) {
        loginTitle.textContent = loginData.content.main.title;
        loginEmailInput.placeholder = loginData.content.main.form.email.placeholder;
        loginPasswordInput.placeholder = loginData.content.main.form.password.placeholder;
        loginButtonForm.textContent = loginData.content.main.form["login-button"];
        agreeLoginCheckbox.nextSibling.textContent = loginData.content.main.form.agree;
        continueWithGoogleLoginButton.textContent = loginData.content.main.form["continue-with-google"];
        continueWithFacebookLoginButton.textContent = loginData.content.main.form["continue-with-facebook"];
    }
}

function fillSignUpPage(data) {
    const signUpTitle = document.querySelector('.create-account1 h1');
    const signUpEmailInput = document.querySelector('.create-account1 input[name="email"]');
    const continueButton = document.querySelector('#continue-button');
    const continueWithGoogleButton = document.querySelector('.continue-button1');
    const continueWithFacebookButton = document.querySelector('.continue-button2');
    const createPasswordTitle = document.querySelector('.create-account2 h1');
    const createPasswordInput = document.querySelector('.create-account2 input[name="password"]');
    const createAccountButton = document.querySelector('#create-account-button');
    const agreeCheckbox = document.querySelector('#agree');
    const signUpData = data.find(page => page.name === "Login & signUp page").data.find(page => page.name === "SignUp");
    if (signUpData) {
        signUpTitle.textContent = signUpData.content.main["create-account1"].title;
        signUpEmailInput.placeholder = signUpData.content.main["create-account1"].form.email.placeholder;
        continueButton.textContent = signUpData.content.main["create-account1"].form["continue-button"];
        continueWithGoogleButton.textContent = signUpData.content.main["create-account1"].form["continue-with-google"];
        continueWithFacebookButton.textContent = signUpData.content.main["create-account1"].form["continue-with-facebook"];

        createPasswordTitle.textContent = signUpData.content.main["create-account2"].title;
        createPasswordInput.placeholder = signUpData.content.main["create-account2"].form.password.placeholder;
        createAccountButton.textContent = signUpData.content.main["create-account2"].form["create-account-button"];
        agreeCheckbox.nextSibling.textContent = signUpData.content.main["create-account2"].form.agree;
    }
}

function fillPage404(data) {
    const stars = document.querySelector('.stars');
    const oopsText = document.querySelector('.oops-text');
    const notFoundText = document.querySelectorAll('.not-found-text');
    const backToHomepageLink = document.querySelector('.back-to-homepage-link > a');
    const page404Data = data.find(page => page.name === "Page 404");
    if (page404Data) {
        oopsText.textContent = page404Data.content.main["page-not-found-section"]["oops-text"];
        notFoundText[0].textContent = page404Data.content.main["page-not-found-section"]["not-found-text"][0];
        notFoundText[1].textContent = page404Data.content.main["page-not-found-section"]["not-found-text"][1];
        backToHomepageLink.textContent = page404Data.content.main["page-not-found-section"]["back-to-homepage-link"];
    }
}

function fillPartnersPage(data) {
    // For the Partners page
    const partnersHeaderText = document.querySelector('.header-text');
    const partnersCardsSection = document.querySelector('.cards-section');

    const partnersData = data.find(page => page.name === "Partners");
    if (partnersData) {
        partnersHeaderText.textContent = partnersData.content.main["header-text"];

        const cards = partnersData.content.main["cards-section"];
        cards.forEach((card, index) => {
            const cardElement = partnersCardsSection.children[index];
            cardElement.querySelector('.company-name').textContent = card["company-name"];
            cardElement.querySelector('.description').textContent = card.description;
        });
    }
}

function fillCommonElements(data) {
    // Header elements
    const langSet = document.querySelector('.lang-set');
    const langList = document.querySelector('.lang-list');
    const navHorizontalList = document.querySelector('.nav-horizontal-list');
    const loginButtonHeader = document.querySelector('.login-button');
    const registerButton = document.querySelector('.register-button');
    const navbarButton = document.querySelector('.navbar-button');
    const navbar = document.querySelector('.navbar');

    // Footer elements
    const footerUpperSection = document.querySelector('.upper-section');
    const footerNavHorizontalList = footerUpperSection.querySelector('.nav-horizontal-list');
    const footerBottomSection = document.querySelector('.bottom-section');
    const footerBottomNavHorizontalList = footerBottomSection.querySelector('.nav-horizontal-list');
    const commonData = data.find(page => page.name === "Common");
    if (commonData) {
        // Header
        const headerData = commonData.content.header;
        navHorizontalList.querySelectorAll('li a').forEach((link, index) => {
            link.textContent = headerData["wide-section"].nav["nav-horizontal-list"][index];
        });
        loginButtonHeader.textContent = headerData["narrow-section-login"]["login-button"];
        registerButton.textContent = headerData["narrow-section-login"]["register-button"];
        navbarButton.querySelector('img').alt = headerData["navbar-button"]["menu-bar-icon"];
        navbar.querySelectorAll('li a').forEach((link, index) => {
            link.textContent = headerData.navbar["nav-list"][index];
        });

        // Footer
        const footerData = commonData.content.footer;
        footerBottomNavHorizontalList.querySelectorAll('li a').forEach((link, index) => {
            link.textContent = footerData["bottom-section"]["nav-horizontal-list"][index];
        });
    }
}


async function fetchLanguage(lang) {
    const response = await fetch(`../Page Content/content-${lang}.json`);
    if (!response.ok) {
        throw new Error("Error while fetching website content");
    }

    const data = await response.json();

    if (document.title != 'Page not found') fillCommonElements(data);

    switch (document.title) {
        case 'About developers':
            fillAboutPage(data);
            break;
        case 'CV Creator':
            fillCreatorPage(data);
            break;
        case 'Home page':
            fillHomePage(data);
            break;
        case 'Login page':
            fillLoginPage(data);
            break;
        case 'Signup page':
            fillSignUpPage(data);
            break;
        case 'Page not found':
            fillPage404(data);
            break;
        case 'Partners':
            fillPartnersPage(data);
            break;
    }
}

function changeFlag() {
    const langImage = document.querySelector('.lang-set img');
    if (browserDefaultLanguage.includes('pl')) {
        langImage.setAttribute('src', '../Common images/poland.png');
        return;
    }

    langImage.setAttribute('src', '../Common images/english.png');
}

function changeHTMLAttribute() {
    if (browserDefaultLanguage.includes('pl')) {
        document.querySelector('html').setAttribute('lang', 'pl');
        return;
    }

    document.querySelector('html').setAttribute('lang', 'en');
}

function changeLanguage(idx) {
    if (idx === 0) {
        if (browserDefaultLanguage.includes('pl')) {
            return;
        }

        browserDefaultLanguage = 'pl';
        fetchLanguage('pl');
        changeFlag();
        changeHTMLAttribute();

    }
    if (idx === 1) {
        if (browserDefaultLanguage.includes('en')) {
            return;
        }

        browserDefaultLanguage = 'en';
        fetchLanguage('en');
        changeFlag();
        changeHTMLAttribute();
    }
}

function loadDefaultLanguage() {
    if (browserDefaultLanguage.includes('pl')) {
        fetchLanguage('pl');
        return;
    }

    fetchLanguage('en');
}

loadDefaultLanguage();
changeHTMLAttribute();
if (document.title != 'Page not found') changeFlag();