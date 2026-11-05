
/* ======================================================
   MIDNIGHT BISTRO
   Complete Restaurant Website Functionality

   Features:
   1. 16 food products with real photos
   2. Food category filtering
   3. Add to Cart
   4. Increase / Decrease quantity
   5. Remove cart items
   6. Dynamic cart total in INR
   7. Save cart using localStorage
   8. Responsive mobile navigation
   9. Login and Signup tabs
   10. Contact form validation
   11. Newsletter form validation
   12. Image fallback handling
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // 1. FOOD MENU - ALL 16 PRODUCTS
    // ==================================================

    const products = [

        // MIDNIGHT BISTRO SPECIALS

        {
            id: 1,
            name: "Momos",
            category: "Momos",
            price: 40,
            tag: "Bistro Special",
            description: "Soft steamed momos served with spicy chutney.",
            image: "https://images.pexels.com/photos/18803177/pexels-photo-18803177.jpeg?auto=compress&cs=tinysrgb&w=900",
            fallback: "https://images.pexels.com/photos/33384415/pexels-photo-33384415.jpeg?auto=compress&cs=tinysrgb&w=900"
        },

        {
            id: 2,
            name: "Noodles",
            category: "Noodles",
            price: 40,
            tag: "Popular",
            description: "Hot and delicious vegetable noodles.",
            image: "https://b.zmtcdn.com/data/dish_photos/af7/10ea2402264b7a53864d8c5b3f374af7.jpeg",
            fallback: "https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&w=900"
        },

        {
            id: 3,
            name: "Lemonade",
            category: "Drinks",
            price: 20,
            tag: "Refreshing",
            description: "Fresh lemonade with a refreshing citrus taste.",
            image: "https://b.zmtcdn.com/data/pictures/chains/8/18209498/e67dc328442a1b5f134d65656946ee5b.jpg",
            fallback: "https://cdnnew.foody.com.cy/cdn-cgi/image/f%3Dauto/shop/2000662996/cover?platform=web&t=1766493847"
        },

        {
            id: 4,
            name: "White Sauce Pasta",
            category: "Pasta",
            price: 49,
            tag: "Bistro Special",
            description: "Creamy white sauce pasta with a delicious flavour.",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600/FOOD_CATALOG/IMAGES/CMS/2025/11/14/ee6f12cd-7f5d-4582-896a-c3726a494c27_9f469afc-2f8e-4833-96d4-d2771a6999cf.jpg",
            fallback: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=900"
        },


        // PIZZA

        {
            id: 5,
            name: "Margherita Pizza",
            category: "Pizza",
            price: 249,
            tag: "Classic",
            description: "Classic pizza with melted cheese and fresh basil.",
            image: "https://static-content.owner.com/funnel/images/2196a170-ee5b-4288-aced-b68e93e2a0a0?auto=format&q=80&v=3608754236&w=1200",
            fallback: "https://deepakshi336-max.github.io/Restaurnt-menu.page/pizza.jpg"
        },

        {
            id: 6,
            name: "Veggie Supreme Pizza",
            category: "Pizza",
            price: 329,
            tag: "Popular",
            description: "Delicious pizza loaded with fresh vegetables.",
            image: "https://images.pexels.com/photos/15832884/pexels-photo-15832884.jpeg?auto=compress&cs=tinysrgb&w=900",
            fallback: "https://static-content.owner.com/funnel/images/2196a170-ee5b-4288-aced-b68e93e2a0a0?auto=format&q=80&v=3608754236&w=1200"
        },

        {
            id: 7,
            name: "Cheese Loaded Pizza",
            category: "Pizza",
            price: 399,
            tag: "Premium",
            description: "A delicious pizza packed with extra cheese.",
            image: "https://deepakshi336-max.github.io/Restaurnt-menu.page/pizza.jpg",
            fallback: "https://static-content.owner.com/funnel/images/2196a170-ee5b-4288-aced-b68e93e2a0a0?auto=format&q=80&v=3608754236&w=1200"
        },


        // BURGERS

        {
            id: 8,
            name: "Classic Cheese Burger",
            category: "Burger",
            price: 179,
            tag: "Favourite",
            description: "Cheesy vegetable burger with fresh lettuce.",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600/FOOD_CATALOG/IMAGES/CMS/2025/9/4/df456085-8335-45e4-8622-83a449e5373e_fc8cd6e4-f214-49b9-891e-cdbf53f21fd6.jpg",
            fallback: "https://images.pexels.com/photos/19709551/pexels-photo-19709551.jpeg?auto=compress&cs=tinysrgb&w=900"
        },

        {
            id: 9,
            name: "Crispy Veg Burger",
            category: "Burger",
            price: 149,
            tag: "Bestseller",
            description: "Crispy vegetable patty with our special sauce.",
            image: "https://images.pexels.com/photos/20722038/pexels-photo-20722038.jpeg?auto=compress&cs=tinysrgb&w=900",
            fallback: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600/FOOD_CATALOG/IMAGES/CMS/2025/9/4/df456085-8335-45e4-8622-83a449e5373e_fc8cd6e4-f214-49b9-891e-cdbf53f21fd6.jpg"
        },


        // PASTA

        {
            id: 10,
            name: "Creamy White Pasta",
            category: "Pasta",
            price: 229,
            tag: "Chef's Choice",
            description: "Creamy pasta prepared with herbs and vegetables.",
            image: "https://images.pexels.com/photos/5724556/pexels-photo-5724556.jpeg?auto=compress&cs=tinysrgb&w=900",
            fallback: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600/FOOD_CATALOG/IMAGES/CMS/2025/11/14/ee6f12cd-7f5d-4582-896a-c3726a494c27_9f469afc-2f8e-4833-96d4-d2771a6999cf.jpg"
        },

        {
            id: 11,
            name: "Italian Red Pasta",
            category: "Pasta",
            price: 199,
            tag: "Italian Special",
            description: "Italian pasta tossed in rich tomato sauce.",
            image: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=900",
            fallback: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600/FOOD_CATALOG/IMAGES/CMS/2025/11/14/ee6f12cd-7f5d-4582-896a-c3726a494c27_9f469afc-2f8e-4833-96d4-d2771a6999cf.jpg"
        },


        // DESSERTS

        {
            id: 12,
            name: "Chocolate Cake",
            category: "Dessert",
            price: 149,
            tag: "Sweet Treat",
            description: "Rich chocolate cake with delicious frosting.",
            image: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VPD57SVU6MI6ZA2YECVBMNK7WQ.jpg",
            fallback: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=900"
        },

        {
            id: 13,
            name: "Fresh Cream Donut",
            category: "Dessert",
            price: 99,
            tag: "Fresh",
            description: "Soft and delicious donut with sweet topping.",
            image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/chocolate_iced_cake_donut.jpg",
            fallback: "https://images.pexels.com/photos/306801/pexels-photo-306801.jpeg?auto=compress&cs=tinysrgb&w=900"
        },


        // DRINKS

        {
            id: 14,
            name: "Fresh Orange Juice",
            category: "Drinks",
            price: 89,
            tag: "Refreshing",
            description: "Fresh orange juice served chilled.",
            image: "https://b.zmtcdn.com/data/pictures/chains/8/18209498/e67dc328442a1b5f134d65656946ee5b.jpg",
            fallback: "https://cdnnew.foody.com.cy/cdn-cgi/image/f%3Dauto/shop/2000662996/cover?platform=web&t=1766493847"
        },

        {
            id: 15,
            name: "Cold Coffee",
            category: "Drinks",
            price: 119,
            tag: "Favourite",
            description: "Smooth and creamy chilled coffee.",
            image: "https://cdnnew.foody.com.cy/cdn-cgi/image/f%3Dauto/shop/2000662996/cover?platform=web&t=1766493847",
            fallback: "https://b.zmtcdn.com/data/pictures/chains/8/18209498/e67dc328442a1b5f134d65656946ee5b.jpg"
        },

        {
            id: 16,
            name: "Strawberry Milkshake",
            category: "Drinks",
            price: 139,
            tag: "Special",
            description: "A creamy and refreshing milkshake.",
            image: "https://offerengine.theentertainerme.com/joy-general-cafe-x23955018/merchant_profile_%22hero%22_image_slide.4_%28retina%29202508201702.jpg",
            fallback: "https://cdnnew.foody.com.cy/cdn-cgi/image/f%3Dauto/shop/2000662996/cover?platform=web&t=1766493847"
        }

    ];


    // ==================================================
    // 2. GET HTML ELEMENTS
    // ==================================================

    const productList = document.getElementById("productList");
    const menuFilters = document.getElementById("menuFilters");

    const cartBtn = document.getElementById("cartBtn");
    const cartPanel = document.getElementById("cartPanel");
    const cartOverlay = document.getElementById("cartOverlay");
    const closeCartBtn = document.getElementById("closeCart");
    const cartItems = document.getElementById("cartItems");
    const checkoutBtn = document.getElementById("checkoutBtn");

    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.getElementById("menuToggle");

    const loginBtn = document.getElementById("loginBtn");
    const loginOverlay = document.getElementById("loginOverlay");
    const closeLogin = document.getElementById("closeLogin");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const contactForm = document.getElementById("contactForm");
    const newsletterForm = document.getElementById("newsletterForm");


    // ==================================================
    // 3. PRICE FORMATTER - INDIAN RUPEES
    // ==================================================

    function formatPrice(price) {

        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(price);

    }


    // ==================================================
    // 4. IMAGE FALLBACKS
    // ==================================================

    const heroFallback =
        "https://www.555cafe.co.uk/assets/food-spread-Dlf6Hpr8.jpg";

    const aboutFallback =
        "https://www.fuddo.in/assets/images/data/Hungry_Nest.png";


    // Use a remote photo if the local hero/about photo is missing.

    const heroImage = document.querySelector(".hero-main-image");
    const aboutImage = document.querySelector(".about-art img");

    if (heroImage) {
        heroImage.dataset.fallback = heroFallback;
    }

    if (aboutImage) {
        aboutImage.dataset.fallback = aboutFallback;
    }


    // Handle broken images without showing the browser's broken-image icon.

    document.addEventListener("error", event => {

        const img = event.target;

        if (!(img instanceof HTMLImageElement)) return;
        if (!img.dataset.fallback) return;

        const fallback = img.dataset.fallback;

        // Try the alternative photograph one time.

        if (
            img.dataset.fallbackUsed !== "true" &&
            img.src !== fallback
        ) {

            img.dataset.fallbackUsed = "true";
            img.src = fallback;

            return;

        }

        // If both image links fail, show a clean placeholder.

        const placeholder = document.createElement("div");

        placeholder.className = "photo-placeholder";
        placeholder.textContent = "Photo unavailable";

        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            min-height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            background: linear-gradient(135deg, #eee7d8, #d8cbb7);
            color: #594333;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
        `;

        img.replaceWith(placeholder);

    }, true);


    // ==================================================
    // 5. CART STORAGE
    // ==================================================

    const STORAGE_KEY = "midnightBistroCart";

    function loadCart() {

        try {

            const savedCart = JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "[]"
            );

            if (!Array.isArray(savedCart)) return [];

            return savedCart
                .filter(item => {

                    return (
                        products.some(product => product.id === item.id) &&
                        Number.isInteger(item.quantity) &&
                        item.quantity > 0
                    );

                })
                .map(item => ({
                    id: item.id,
                    quantity: item.quantity
                }));

        } catch (error) {

            console.warn("Could not restore shopping cart:", error);

            return [];

        }

    }


    let cart = loadCart();


    function saveCart() {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(cart)
            );

        } catch (error) {

            console.warn("Could not save shopping cart:", error);

            showToast("Your cart could not be saved on this browser.");

        }

    }


    // ==================================================
    // 6. DISPLAY FOOD PRODUCTS
    // ==================================================

    function displayProducts(category = "All") {

        if (!productList) return;

        const filteredProducts = category === "All"
            ? products
            : products.filter(
                product => product.category === category
            );


        productList.innerHTML = filteredProducts.map(product => `

            <article class="product-card">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        data-fallback="${product.fallback}"
                        alt="${product.name}"
                        loading="lazy"
                        decoding="async"
                    >

                    <span class="product-tag">
                        ${product.tag}
                    </span>

                </div>


                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>


                    <div class="product-meta">

                        <span class="product-price">
                            ${formatPrice(product.price)}
                        </span>


                        <button
                            type="button"
                            class="add-cart-btn"
                            data-add="${product.id}"
                            aria-label="Add ${product.name} to cart"
                        >

                            <i class="fa-solid fa-plus"></i>
                            Add to Cart

                        </button>

                    </div>

                </div>

            </article>

        `).join("");

    }


    // ==================================================
    // 7. ADD PRODUCT TO CART
    // ==================================================

    function addToCart(productId) {

        const product = products.find(
            item => item.id === productId
        );

        if (!product) return;


        const existingItem = cart.find(
            item => item.id === productId
        );


        if (existingItem) {

            existingItem.quantity++;

        } else {

            cart.push({
                id: productId,
                quantity: 1
            });

        }


        saveCart();
        updateCart();

        showToast(`${product.name} added to your cart!`);

    }


    // ==================================================
    // 8. CHANGE PRODUCT QUANTITY
    // ==================================================

    function changeQuantity(productId, amount) {

        const item = cart.find(
            product => product.id === productId
        );

        if (!item) return;


        item.quantity += amount;


        if (item.quantity <= 0) {

            cart = cart.filter(
                product => product.id !== productId
            );

        }


        saveCart();
        updateCart();

    }


    // ==================================================
    // 9. REMOVE PRODUCT
    // ==================================================

    function removeFromCart(productId) {

        const product = products.find(
            item => item.id === productId
        );

        cart = cart.filter(
            item => item.id !== productId
        );


        saveCart();
        updateCart();

        showToast(
            product
                ? `${product.name} removed from cart.`
                : "Item removed from cart."
        );

    }


    // ==================================================
    // 10. UPDATE CART AND TOTAL
    // ==================================================

    function updateCart() {

        if (!cartItems) return;

        let totalAmount = 0;
        let totalQuantity = 0;


        const validCart = cart.filter(item => {

            return products.some(
                product => product.id === item.id
            );

        });


        if (validCart.length !== cart.length) {

            cart = validCart;
            saveCart();

        }


        if (cart.length === 0) {

            cartItems.innerHTML = `

                <p class="empty-cart">
                    Your cart is currently empty.
                    <br>
                    Add something delicious!
                </p>

            `;

        } else {

            cartItems.innerHTML = cart.map(item => {

                const product = products.find(
                    product => product.id === item.id
                );

                if (!product) return "";


                const subtotal = product.price * item.quantity;

                totalAmount += subtotal;
                totalQuantity += item.quantity;


                return `

                    <div class="cart-item">

                        <div class="cart-item-photo">

                            <img
                                src="${product.image}"
                                data-fallback="${product.fallback}"
                                alt="${product.name}"
                                loading="lazy"
                            >

                        </div>


                        <div class="cart-item-details">

                            <h4>${product.name}</h4>

                            <p>${formatPrice(subtotal)}</p>


                            <div class="quantity-controls">

                                <button
                                    type="button"
                                    data-action="decrease"
                                    data-id="${product.id}"
                                    aria-label="Decrease quantity"
                                >

                                    <i class="fa-solid fa-minus"></i>

                                </button>


                                <span>${item.quantity}</span>


                                <button
                                    type="button"
                                    data-action="increase"
                                    data-id="${product.id}"
                                    aria-label="Increase quantity"
                                >

                                    <i class="fa-solid fa-plus"></i>

                                </button>

                            </div>

                        </div>


                        <button
                            type="button"
                            class="remove-item"
                            data-action="remove"
                            data-id="${product.id}"
                            aria-label="Remove ${product.name}"
                        >

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                `;

            }).join("");

        }


        // Update every cart count.

        document.querySelectorAll(".quantity").forEach(element => {

            element.textContent = totalQuantity;

        });


        // Update cart price.

        document.querySelectorAll(".total").forEach(element => {

            element.textContent = formatPrice(totalAmount);

        });


        // Disable checkout if the cart is empty.

        if (checkoutBtn) {

            checkoutBtn.disabled = cart.length === 0;

        }

    }


    // ==================================================
    // 11. PRODUCT CLICK EVENTS
    // ==================================================

    productList?.addEventListener("click", event => {

        const button = event.target.closest("[data-add]");

        if (!button) return;


        const productId = Number(button.dataset.add);

        if (Number.isInteger(productId)) {

            addToCart(productId);

        }

    });


    // ==================================================
    // 12. CART CLICK EVENTS
    // ==================================================

    cartItems?.addEventListener("click", event => {

        const button = event.target.closest("[data-action]");

        if (!button) return;


        const productId = Number(button.dataset.id);
        const action = button.dataset.action;


        if (!Number.isInteger(productId)) return;


        if (action === "increase") {

            changeQuantity(productId, 1);

        } else if (action === "decrease") {

            changeQuantity(productId, -1);

        } else if (action === "remove") {

            removeFromCart(productId);

        }

    });


    // ==================================================
    // 13. CATEGORY FILTERS
    // ==================================================

    menuFilters?.addEventListener("click", event => {

        const button = event.target.closest("[data-category]");

        if (!button) return;


        menuFilters.querySelectorAll(".filter-btn").forEach(item => {

            item.classList.remove("active");

        });


        button.classList.add("active");

        displayProducts(button.dataset.category);

    });


    // ==================================================
    // 14. OPEN AND CLOSE SHOPPING CART
    // ==================================================

    function openCart() {

        cartPanel?.classList.add("open");
        cartOverlay?.classList.add("show");

        document.body.classList.add("cart-open");

    }


    function closeCart() {

        cartPanel?.classList.remove("open");
        cartOverlay?.classList.remove("show");

        document.body.classList.remove("cart-open");

    }


    cartBtn?.addEventListener("click", openCart);

    closeCartBtn?.addEventListener("click", closeCart);

    cartOverlay?.addEventListener("click", closeCart);


    // ==================================================
    // 15. RESPONSIVE MOBILE NAVIGATION
    // ==================================================

    menuToggle?.addEventListener("click", () => {

        const isOpen = navLinks?.classList.toggle("show");

        menuToggle.setAttribute(
            "aria-expanded",
            String(Boolean(isOpen))
        );


        const icon = menuToggle.querySelector("i");

        if (icon) {

            icon.classList.toggle("fa-bars", !isOpen);
            icon.classList.toggle("fa-xmark", Boolean(isOpen));

        }

    });


    navLinks?.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle?.setAttribute("aria-expanded", "false");


            const icon = menuToggle?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });


    // ==================================================
    // 16. ACTIVE NAVIGATION ON SCROLL
    // ==================================================

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navigationLinks = document.querySelectorAll(
        ".nav-links a"
    );


    function updateActiveNavigation() {

        let currentSection = "home";


        sections.forEach(section => {

            const top = section.offsetTop - 140;

            const bottom = top + section.offsetHeight;


            if (
                window.scrollY >= top &&
                window.scrollY < bottom
            ) {

                currentSection = section.id;

            }

        });


        navigationLinks.forEach(link => {

            link.classList.toggle(

                "active",

                link.getAttribute("href") === `#${currentSection}`

            );

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    // ==================================================
    // 17. LOGIN AND SIGNUP MODAL
    // ==================================================

    function openLogin() {

        loginOverlay?.classList.add("show");

        document.body.classList.add("modal-open");

    }


    function closeLoginModal() {

        loginOverlay?.classList.remove("show");

        document.body.classList.remove("modal-open");

    }


    loginBtn?.addEventListener("click", openLogin);

    closeLogin?.addEventListener("click", closeLoginModal);


    loginOverlay?.addEventListener("click", event => {

        if (event.target === loginOverlay) {

            closeLoginModal();

        }

    });


    // ==================================================
    // 18. LOGIN / SIGNUP TAB SWITCHING
    // ==================================================

    const authTabs = document.querySelectorAll(".auth-tab");


    function switchAuthTab(mode) {

        const isLogin = mode === "login";


        authTabs.forEach(tab => {

            tab.classList.toggle(
                "active",
                tab.dataset.auth === mode
            );

        });


        if (loginForm) {

            loginForm.hidden = !isLogin;

        }


        if (signupForm) {

            signupForm.hidden = isLogin;

        }

    }


    authTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            switchAuthTab(tab.dataset.auth);

        });

    });


    // ==================================================
    // 19. LOGIN FORM
    // ==================================================

    loginForm?.addEventListener("submit", event => {

        event.preventDefault();


        if (!loginForm.checkValidity()) {

            loginForm.reportValidity();
            return;

        }


        showToast(
            "Demo login only. Connect a secure backend to enable real login."
        );


        loginForm.reset();

        closeLoginModal();

    });


    // ==================================================
    // 20. SIGNUP FORM
    // ==================================================

    signupForm?.addEventListener("submit", event => {

        event.preventDefault();


        if (!signupForm.checkValidity()) {

            signupForm.reportValidity();
            return;

        }


        showToast(
            "Signup demo completed. Real account creation needs a backend."
        );


        signupForm.reset();

        switchAuthTab("login");

        closeLoginModal();

    });


    // ==================================================
    // 21. CONTACT FORM
    // ==================================================

    contactForm?.addEventListener("submit", event => {

        event.preventDefault();


        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();
            return;

        }


        showToast(
            "Thank you! Contact form demo submitted successfully."
        );


        contactForm.reset();

    });


    // ==================================================
    // 22. NEWSLETTER FORM
    // ==================================================

    newsletterForm?.addEventListener("submit", event => {

        event.preventDefault();


        if (!newsletterForm.checkValidity()) {

            newsletterForm.reportValidity();
            return;

        }


        showToast(
            "Thank you for your interest in Midnight Bistro!"
        );


        newsletterForm.reset();

    });


    // ==================================================
    // 23. CHECKOUT BUTTON
    // ==================================================

    checkoutBtn?.addEventListener("click", () => {

        if (cart.length === 0) {

            showToast("Your shopping cart is empty.");

            return;

        }


        showToast(
            "Demo checkout only. Online payment and order processing are not connected."
        );

    });


    // ==================================================
    // 24. KEYBOARD ESCAPE
    // ==================================================

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeCart();

            closeLoginModal();

            navLinks?.classList.remove("show");

            menuToggle?.setAttribute("aria-expanded", "false");


            const icon = menuToggle?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    // ==================================================
    // 25. TOAST NOTIFICATIONS
    // ==================================================

    const toast = document.querySelector(".toast-message");

    let toastTimer;


    function showToast(message) {

        if (!toast) return;


        toast.textContent = message;

        toast.classList.add("show");


        clearTimeout(toastTimer);


        toastTimer = setTimeout(() => {

            toast.classList.remove("show");

        }, 2800);

    }


    // ==================================================
    // 26. INITIALIZE WEBSITE
    // ==================================================

    displayProducts();

    updateCart();

    switchAuthTab("login");


    console.log(
        "Midnight Bistro website initialized successfully!"
    );

});
