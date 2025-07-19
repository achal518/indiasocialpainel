// Service packages data
const servicePackages = {
    youtube: [
        { name: "YouTube Channel Monetization", price: 17000, priceType: "fixed" },
        { name: "YouTube Subscribe", price: 400, priceType: "per_k" },
        { name: "YouTube Views", price: 250, priceType: "per_k" },
        { name: "YouTube Shorts Views", price: 200, priceType: "per_k" },
        { name: "YouTube Like", price: 170, priceType: "per_k" },
        { name: "YouTube Watchtime", price: 6000, priceType: "per_k", unit: "hours" },
        { name: "YouTube Live Stream Views", price: 250, priceType: "per_k" }
    ],
    instagram: [
        { name: "Instagram View", price: 25, priceType: "per_k" },
        { name: "Instagram Story View", price: 20, priceType: "per_k" },
        { name: "Instagram Story/Post Like", price: 20, priceType: "per_k" },
        { name: "Instagram Followers", price: 200, priceType: "per_k" },
        { name: "Instagram Reels Share", price: 15, priceType: "per_k" }
    ],
    facebook: [
        { name: "Facebook Monetization", price: 5000, priceType: "fixed" },
        { name: "Facebook Post Like", price: 200, priceType: "per_k" },
        { name: "Facebook Followers", price: 200, priceType: "per_k" },
        { name: "Facebook View", price: 15, priceType: "per_k" },
        { name: "Facebook Story View", price: 150, priceType: "per_k" }
    ],
    whatsapp: [
        { name: "WhatsApp Blue Tick", price: 40000, priceType: "fixed" },
        { name: "WhatsApp Channel Member", price: 300, priceType: "per_k" },
        { name: "WhatsApp Poll Votes", price: 500, priceType: "per_k" }
    ]
};

// Language content
const content = {
    hindi: {
        loginTitle: "India Social Panel",
        welcomeBack: "Welcome Back!",
        signInText: "Sign in to your account",
        signInButton: "Sign in with Google",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        menu: "Menu",
        newOrder: "New Order",
        orderHistory: "Order History",
        services: "Services",
        deposit: "Deposit",
        totalOrders: "TOTAL ORDERS AT INDIASOCIALPANEL.IN",
        experience: "3+ years experience providing SMM services!",
        lookingDeposit: "looking to Deposit?",
        depositNow: "DEPOSIT NOW",
        currentBalance: "CURRENT BALANCE",
        totalSpendings: "Your total spendings : ╤В╨ТтХг0.00",
        massOrder: "╨Б╨п╨б╨╡ Mass Order",
        importantUpdate: "Important Update ╨Б╨п╨д╨в",
        flagReview: "Turn off \"Flag for review\" before ordering Instagram followers.",
        flagReviewHindi: "рд╣рд┐рдВрджреА: Instagram Followers Order рдХрд░рдиреЗ рд╕реЗ рдкрд╣рд▓реЗ \"Flag for review\" рдСрдкреНрд╢рди рдХреЛ рдмрдВрдж рдХрд░рдирд╛ рд╣реЛрдЧрд╛ред",
        mustRead: "╨Б╨п╨г╨ЬMust Read ╨Б╨п╨г╨Ь",
        readDescription: "Read description before adding an order.",
        noSecondOrder: "Do not place a second order on the same link before completion.",
        wrongLink: "Wrong or non-working link? No refund.",
        startCount: "We work on start count + quantity = final quantity.",
        dontChange: "Don't change username if you ordered a refill service.",
        userGuide: "╨Б╨п╨г╨ж Read User Guide ╤В╨о╨м Click Here",
        otherServices: "╨Б╨п╨гтЦТ Check Other Services ╤В╨о╨м Click Here",
        searchService: "Search Service",
        service: "Service",
        selectService: "Select Service",
        package: "Package",
        selectPackage: "Select Package",
        order: "ORDER",
        price: "Price",
        description: "Description",
        pleaseRead: "╤В╨к╨░╤ПтХХ╨Я Please Read Before Ordering",
        linkLabel: "Link (Must be Public)",
        linkPlaceholder: "Account Must be Public",
        quantity: "Quantity",
        quantityInfo: "Min: 100 - Max: 1000000",
        youWillPay: "You will pay",
        balanceError: "ЁЯШн Houston we have problem! And its... Not enough funds on balance",
        termsText: "Yes, I have confirmed the Terms & Conditions",
        placeOrder: "PLACE ORDER",
        errorMessage: "Please ensure all required fields are filled correctly (Service, Package, Link, Quantity 100-1000000) and terms & conditions are accepted to place your order.",
        latestNews: "╨Б╨п╨гтЦС LATEST NEWS",
        congratulations: "╨Б╨п╨Ю╨Щ Congratulations ╨Б╨п╨Ю╨Щ",
        memberText: "Now You are a Member of India Social Panel.in",
        noOrders: "You haven't placed any orders yet.",
        startJourney: "Start your journey to social media success by placing your first order now!",
        placeFirstOrder: "Place Your First Order",
        allServices: "All Services",
        youtubeServices: "╨Б╨п╨гтХС YouTube Services",
        instagramServices: "╨Б╨п╨гтХХ Instagram Services",
        facebookServices: "╨Б╨п╨г╨и Facebook Services",
        whatsappServices: "╨Б╨п╨в╨╝ WhatsApp Services",
        depositFunds: "Deposit Funds",
        depositSoon: "Deposit functionality coming soon...",
        userGuidelines: "User Guidelines",
        guidelinesText: "Aap guidelines ka sahi se palan karen.",
        support: "Support",
        tickets: "Tickets",
        changeLanguage: "Change Language",
        contactUs: "Contact Us",
        footerText: "India Social Panel is a registered digital marketing agency specializing in Website Development, Social Media Marketing, Graphic Design, and Meta & Google Ads services. We are committed to delivering exceptional results to help your business grow online."
    },
    english: {
        loginTitle: "India Social Panel",
        welcomeBack: "Welcome Back!",
        signInText: "Sign in to your account",
        signInButton: "Sign in with Google",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        menu: "Menu",
        newOrder: "New Order",
        orderHistory: "Order History",
        services: "Services",
        deposit: "Deposit",
        totalOrders: "TOTAL ORDERS AT INDIASOCIALPANEL.IN",
        experience: "3+ years experience providing SMM services!",
        lookingDeposit: "looking to Deposit?",
        depositNow: "DEPOSIT NOW",
        currentBalance: "CURRENT BALANCE",
        totalSpendings: "Your total spendings : тВ╣0.00",
        massOrder: "ЁЯУж Mass Order",
        importantUpdate: "Important Update ЁЯЪи",
        flagReview: "Turn off \"Flag for review\" before ordering Instagram followers.",
        flagReviewHindi: "Hindi: Turn off \"Flag for review\" option before ordering Instagram Followers.",
        mustRead: "╨Б╨п╨г╨ЬMust Read ╨Б╨п╨г╨Ь",
        readDescription: "Read description before adding an order.",
        noSecondOrder: "Do not place a second order on the same link before completion.",
        wrongLink: "Wrong or non-working link? No refund.",
        startCount: "We work on start count + quantity = final quantity.",
        dontChange: "Don't change username if you ordered a refill service.",
        userGuide: "╨Б╨п╨г╨ж Read User Guide ╤В╨о╨м Click Here",
        otherServices: "╨Б╨п╨гтЦТ Check Other Services ╤В╨о╨м Click Here",
        searchService: "Search Service",
        service: "Service",
        selectService: "Select Service",
        package: "Package",
        selectPackage: "Select Package",
        order: "ORDER",
        price: "Price",
        description: "Description",
        pleaseRead: "╤В╨к╨░╤ПтХХ╨Я Please Read Before Ordering",
        linkLabel: "Link (Must be Public)",
        linkPlaceholder: "Account Must be Public",
        quantity: "Quantity",
        quantityInfo: "Min: 100 - Max: 1000000",
        youWillPay: "You will pay",
        balanceError: "ЁЯШн Houston we have problem! And its... Not enough funds on balance",
        termsText: "Yes, I have confirmed the Terms & Conditions",
        placeOrder: "PLACE ORDER",
        errorMessage: "Please ensure all required fields are filled correctly (Service, Package, Link, Quantity 100-1000000) and terms & conditions are accepted to place your order.",
        latestNews: "╨Б╨п╨гтЦС LATEST NEWS",
        congratulations: "╨Б╨п╨Ю╨Щ Congratulations ╨Б╨п╨Ю╨Щ",
        memberText: "Now You are a Member of India Social Panel.in",
        noOrders: "You haven't placed any orders yet.",
        startJourney: "Start your journey to social media success by placing your first order now!",
        placeFirstOrder: "Place Your First Order",
        allServices: "All Services",
        youtubeServices: "╨Б╨п╨гтХС YouTube Services",
        instagramServices: "╨Б╨п╨гтХХ Instagram Services",
        facebookServices: "╨Б╨п╨г╨и Facebook Services",
        whatsappServices: "╨Б╨п╨в╨╝ WhatsApp Services",
        depositFunds: "Deposit Funds",
        depositSoon: "Deposit functionality coming soon...",
        userGuidelines: "User Guidelines",
        guidelinesText: "Please follow the guidelines properly.",
        support: "Support",
        tickets: "Tickets",
        changeLanguage: "Change Language",
        contactUs: "Contact Us",
        footerText: "India Social Panel is a registered digital marketing agency specializing in Website Development, Social Media Marketing, Graphic Design, and Meta & Google Ads services. We are committed to delivering exceptional results to help your business grow online."
    }
};

let currentLanguage = 'hindi';
let selectedService = '';
let selectedPackage = null;
let isLoggedIn = false;

// DOM Elements
const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboard');
const googleSignIn = document.getElementById('googleSignIn');
const signUpLink = document.getElementById('signUpLink');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sideNav = document.getElementById('sideNav');
const navOverlay = document.getElementById('navOverlay');
const closeNav = document.getElementById('closeNav');
const userAvatar = document.getElementById('userAvatar');
const balanceBtn = document.getElementById('balanceBtn');
const serviceSelect = document.getElementById('serviceSelect');
const packageSelect = document.getElementById('packageSelect');
const searchService = document.getElementById('searchService');
const priceSection = document.getElementById('priceSection');
const priceDisplay = document.getElementById('priceDisplay');
const descriptionContent = document.getElementById('descriptionContent');
const linkInput = document.getElementById('linkInput');
const quantityInput = document.getElementById('quantityInput');
const totalAmount = document.getElementById('totalAmount');
const termsCheckbox = document.getElementById('termsCheckbox');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const errorMessage = document.getElementById('errorMessage');
const balanceError = document.getElementById('balanceError');
const orderBtn = document.getElementById('orderBtn');
const languageSelect = document.getElementById('languageSelect');
const contactUsButton = document.getElementById('contactUsButton'); // added for contact us button

// Navigation elements
const newOrderNav = document.getElementById('newOrderNav');
const orderHistoryNav = document.getElementById('orderHistoryNav');
const servicesNav = document.getElementById('servicesNav');
const depositNav = document.getElementById('depositNav');
const depositBtnMain = document.getElementById('depositBtnMain');
const userGuideLink = document.getElementById('userGuideLink');
const whatsappGroupLink = document.getElementById('whatsappGroupLink');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Show login page initially
    showLoginPage();

    // Event listeners
    googleSignIn.addEventListener('click', handleGoogleSignIn);
    signUpLink.addEventListener('click', handleGoogleSignIn);
    hamburgerMenu.addEventListener('click', toggleSideNav);
    closeNav.addEventListener('click', closeSideNav);
    navOverlay.addEventListener('click', closeSideNav);
    balanceBtn.addEventListener('click', () => showPage('depositPage'));
    depositBtnMain.addEventListener('click', () => showPage('depositPage'));

    // Navigation listeners
    newOrderNav.addEventListener('click', () => {
        showPage('dashboardHome');
        closeSideNav();
    });
    orderHistoryNav.addEventListener('click', () => {
        showPage('orderHistoryPage');
        closeSideNav();
    });
    servicesNav.addEventListener('click', () => {
        showPage('servicesPage');
        closeSideNav();
    });
    depositNav.addEventListener('click', () => {
        showPage('depositPage');
        closeSideNav();
    });

    // Service and package listeners
    serviceSelect.addEventListener('change', handleServiceChange);
    packageSelect.addEventListener('change', handlePackageChange);
    searchService.addEventListener('input', handleSearch);
    quantityInput.addEventListener('input', calculateTotal);
    placeOrderBtn.addEventListener('click', handlePlaceOrder);
    // contact us button listener added here
    if(contactUsButton){
      contactUsButton.addEventListener('click', openTelegramSupport);
    }

    // Other links
    userGuideLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('userGuidePage');
    });

    // Language selector
    languageSelect.addEventListener('change', handleLanguageChange);
});

function showLoginPage() {
    loginPage.classList.remove('hidden');
    dashboard.classList.add('hidden');
}

function showDashboard() {
    loginPage.classList.add('hidden');
    dashboard.classList.remove('hidden');

    // Set user avatar (simulate Google account first letter)
    const userName = "User"; // This would come from Google auth
    userAvatar.textContent = userName.charAt(0).toUpperCase();
}

function handleGoogleSignIn() {
    // Simulate Google sign in
    isLoggedIn = true;
    showDashboard();
}

function toggleSideNav() {
    sideNav.classList.add('active');
}

function closeSideNav() {
    sideNav.classList.remove('active');
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function handleServiceChange() {
    const selectedValue = serviceSelect.value;
    selectedService = selectedValue;

    // Clear package selection
    packageSelect.innerHTML = '<option value="">Select Package</option>';
    priceSection.classList.add('hidden');

    if (selectedValue) {
        populatePackages(selectedValue);
    }
}

function populatePackages(service) {
    let packages = [];

    if (service === 'new-offers') {
        // Show all packages
        packages = [
            ...servicePackages.youtube,
            ...servicePackages.instagram,
            ...servicePackages.facebook,
            ...servicePackages.whatsapp
        ];
    } else if (service === 'other') {
        // Show coming soon message
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Coming Soon...';
        packageSelect.appendChild(option);
        return;
    } else if (servicePackages[service]) {
        packages = servicePackages[service];
    }

    packages.forEach((pkg, index) => {
        const option = document.createElement('option');
        option.value = `${service}_${index}`;
        option.textContent = `${pkg.name} - тВ╣${pkg.price}${pkg.priceType === 'per_k' ? '/k' : ''}${pkg.unit ? ` ${pkg.unit}` : ''}`;
        option.dataset.package = JSON.stringify(pkg);
        packageSelect.appendChild(option);
    });
}

function handlePackageChange() {
    const selectedValue = packageSelect.value;

    if (selectedValue) {
        const packageData = JSON.parse(packageSelect.options[packageSelect.selectedIndex].dataset.package);
        selectedPackage = packageData;

        showPriceSection(packageData);
        calculateTotal();
    } else {
        priceSection.classList.add('hidden');
        selectedPackage = null;
    }
}

function showPriceSection(packageData) {
    priceSection.classList.remove('hidden');

    // Update price display
    if (packageData.priceType === 'per_k') {
        priceDisplay.textContent = `тВ╣${packageData.price} for 1000`;
    } else {
        priceDisplay.textContent = `тВ╣${packageData.price}`;
    }

    updateDynamicDescription();
}

function updateDynamicDescription() {
    if (!selectedPackage) return;

    const quantity = parseInt(quantityInput.value) || 0;
    let calculatedPrice = 0;

    if (selectedPackage.priceType === 'per_k' && quantity > 0) {
        calculatedPrice = (selectedPackage.price * quantity) / 1000;
    } else if (selectedPackage.priceType === 'fixed') {
        calculatedPrice = selectedPackage.price;
    }

    const dynamicDescription = `
        <p><strong>Your chosen ${selectedPackage.name} for ╤В╨ТтХг${calculatedPrice.toFixed(2)} will be delivered within 1 hour.</strong></p>
        <p>We ensure permanent results with no refills needed, guaranteeing seamless growth with India Social Panel!</p>
        <hr>
        <p>Start: 0-15 Minutes</p>
        <p>Speed: 100K per Day | Can Be Slow Sometimes</p>
        <p>Quality: Old Accounts</p>
        <p>Drop Rate: Low Drop ╨Б╨п╨в╨╖(UPTO 10%)</p>
        <p>Refill Time: 365 Days Only If Drop below 10%╤В╨йтХЧ╤ПтХХ╨Я</p>
        <p><strong>Notes:</strong></p>
        <p>Speed and start time may vary during high demand.</p>
        <p>Please do not place a second order on the same link before the first one is completed.</p>
    `;

    descriptionContent.innerHTML = dynamicDescription;
}

function calculateTotal() {
    if (!selectedPackage || !quantityInput.value) {
        totalAmount.textContent = '0.00';
        return;
    }

    const quantity = parseInt(quantityInput.value);
    let total = 0;

    if (selectedPackage.priceType === 'per_k') {
        total = (selectedPackage.price * quantity) / 1000;
    } else {
        total = selectedPackage.price;
    }

    totalAmount.textContent = total.toFixed(2);

    // Update dynamic description with new calculated price
    updateDynamicDescription();

    // Show balance error (simulate insufficient funds)
    if (total > 0) {
        balanceError.classList.remove('hidden');
    } else {
        balanceError.classList.add('hidden');
    }
}

function handlePlaceOrder() {
    // Check if all fields are filled
    const isServiceSelected = serviceSelect.value !== '';
    const isPackageSelected = packageSelect.value !== '';
    const isLinkFilled = linkInput.value.trim() !== '';
    const isQuantityFilled = quantityInput.value.trim() !== '';
    const quantity = parseInt(quantityInput.value.trim()) || 0;
    const isTermsAccepted = termsCheckbox.checked;

    if (!isServiceSelected || !isPackageSelected || !isLinkFilled || !isQuantityFilled || !isTermsAccepted || quantity < 100 || quantity > 1000000) {
        errorMessage.classList.remove('hidden');
        return;
    }

    // Hide error message
    errorMessage.classList.add('hidden');

    // Create and show confirmation page
    showOrderConfirmationPage();
}
// contact us button function added here
function openTelegramSupport() {
    window.open('https://t.me/Indiasocialpainel_support_bot?start=start', '_blank');
}

function showOrderConfirmationPage() {
    // Create confirmation page HTML with better design
    const confirmationHTML = `
        <!DOCTYPE html>
        <html lang="hi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation - India Social Panel</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Inter', sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }
                .confirmation-container {
                    background: white;
                    border-radius: 25px;
                    padding: 50px 40px;
                    text-align: center;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                    max-width: 600px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }
                .confirmation-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                .success-icon {
                    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 25px;
                    font-size: 40px;
                    color: white;
                    animation: bounce 1s ease-in-out;
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                }
                .logo {
                    color: #667eea;
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                .order-success {
                    color: #28a745;
                    font-size: 24px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                .confirmation-text {
                    font-size: 18px;
                    color: #333;
                    margin-bottom: 15px;
                    line-height: 1.6;
                }
                .hindi-text {
                    font-size: 16px;
                    color: #666;
                    margin-bottom: 35px;
                    font-style: italic;
                }
                .telegram-button {
                    display: inline-block;
                    background: linear-gradient(135deg, #0088cc 0%, #0066aa 100%);
                    color: white;
                    padding: 18px 40px;
                    border-radius: 15px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 18px;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 25px rgba(0, 136, 204, 0.3);
                    position: relative;
                    overflow: hidden;
                }
                .telegram-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }
                .telegram-button:hover::before {
                    left: 100%;
                }
                .telegram-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px rgba(0, 136, 204, 0.4);
                }
                .telegram-icon {
                    margin-right: 10px;
                    font-size: 20px;
                }
                .note-section {
                    background: #f8f9fa;
                    border-radius: 12px;
                    padding: 20px;
                    margin-top: 30px;
                    border-left: 4px solid #667eea;
                }
                .note-title {
                    color: #667eea;
                    font-weight: 600;
                    margin-bottom: 10px;
                    font-size: 16px;
                }
                .note-text {
                    color: #555;
                    font-size: 14px;
                    line-height: 1.5;
                }
                @media (max-width: 480px) {
                    .confirmation-container {
                        padding: 30px 20px;
                    }
                    .logo {
                        font-size: 24px;
                    }
                    .order-success {
                        font-size: 20px;
                    }
                    .confirmation-text {
                        font-size: 16px;
                    }
                    .telegram-button {
                        padding: 15px 30px;
                        font-size: 16px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="confirmation-container">
                <div class="success-icon">тЬУ</div>
                <div class="logo">ЁЯЗоЁЯЗ│ India Social Panel</div>
                <div class="order-success">Order Successfully Placed! ЁЯОЙ</div>
                <div class="confirmation-text">
                    рдЖрдкрдХрд╛ рдСрд░реНрдбрд░ рд╕рдлрд▓рддрд╛рдкреВрд░реНрд╡рдХ рдкреНрд░рд╛рдкреНрдд рд╣реЛ рдЧрдпрд╛ рд╣реИред
                </div>
                <div class="hindi-text">
                    рдХреГрдкрдпрд╛ рдЕрдкрдирд╛ рдСрд░реНрдбрд░ рдХрдиреНрдлрд░реНрдо рдХрд░рдиреЗ рдХреЗ рд▓рд┐рдП рдиреАрдЪреЗ рджрд┐рдП рдЧрдП рдмрдЯрди рдкрд░ рдХреНрд▓рд┐рдХ рдХрд░реЗрдВ:
                </div>
                <a href="http://t.me/Indiasocialpainel_support_bot" class="telegram-button" target="_blank">
                    <span class="telegram-icon">ЁЯУ▒</span>
                    Order Confirm рдХрд░рдиреЗ рдХреЗ рд▓рд┐рдП Click рдХрд░реЗрдВ
                </a>
                <div class="note-section">
                    <div class="note-title">ЁЯУЭ Important Note:</div>
                    <div class="note-text">
                        тАв рд╣рдорд╛рд░реА рдЯреАрдо 24/7 рдЖрдкрдХреА рд╕реЗрд╡рд╛ рдореЗрдВ рд╣реИ<br>
                        тАв рдСрд░реНрдбрд░ рдХреА рд╕реНрдерд┐рддрд┐ рдХреЗ рд▓рд┐рдП Telegram рдкрд░ рд╕рдВрдкрд░реНрдХ рдХрд░реЗрдВ<br>
                        тАв рдХреЛрдИ рднреА рд╕рдорд╕реНрдпрд╛ рд╣реЛ рддреЛ рд╣рдореЗрдВ рдмрддрд╛рдПрдВ
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    // Open new window with confirmation page
    const confirmationWindow = window.open('', '_blank', 'width=700,height=800,scrollbars=yes,resizable=yes');
    confirmationWindow.document.write(confirmationHTML);
    confirmationWindow.document.close();
}

function handleSearch() {
    const searchTerm = searchService.value.toLowerCase();

    if (searchTerm.length === 0) {
        return;
    }

    // Filter services based on search term
    const allPackages = [
        ...servicePackages.youtube,
        ...servicePackages.instagram,
        ...servicePackages.facebook,
        ...servicePackages.whatsapp
    ];

    const filteredPackages = allPackages.filter(pkg => 
        pkg.name.toLowerCase().includes(searchTerm)
    );

    // Update package dropdown with filtered results
    packageSelect.innerHTML = '<option value="">Select Package</option>';

    filteredPackages.forEach((pkg, index) => {
        const option = document.createElement('option');
        option.value = `search_${index}`;
        option.textContent = `${pkg.name} - тВ╣${pkg.price}${pkg.priceType === 'per_k' ? '/k' : ''}${pkg.unit ? ` ${pkg.unit}` : ''}`;
        option.dataset.package = JSON.stringify(pkg);
        packageSelect.appendChild(option);
    });
}

function handleLanguageChange() {
    const selectedLanguage = languageSelect.value;
    currentLanguage = selectedLanguage;

    // Update content based on language
    updateContentLanguage();
}

function updateContentLanguage() {
    const texts = content[currentLanguage];

    // Update specific text elements
    if (currentLanguage === 'english') {
        // Update guidelines text
        const guidelinesText = document.querySelector('#userGuidePage .guide-content p');
        if (guidelinesText) {
            guidelinesText.textContent = texts.guidelinesText;
        }

        // Update other key texts
        const whatsappGroupText = document.getElementById('whatsappGroupText');
        if (whatsappGroupText) {
            whatsappGroupText.textContent = "Check Other Services";
        }
    } else {
        // Revert to Hindi
        const guidelinesText = document.querySelector('#userGuidePage .guide-content p');
        if (guidelinesText) {
            guidelinesText.textContent = texts.guidelinesText;
        }
    }
}

// Set up workflow to start the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('India Social Panel application started successfully!');
});
