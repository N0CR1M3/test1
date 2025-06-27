const products = {
            'basic': {
                title: 'Sécurité Basic',
                price: '19.99€/$',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452056.png',
                description: 'La solution de sécurité de base pour protéger votre serveur Discord contre les menaces courantes. Parfait pour les petits serveurs et les communautés débutantes.',
                features: [
                    'Protection contre les spams',
                    'Détection des liens malveillants',
                    'Filtrage de mots-clés',
                    'Rapports hebdomadaires',
                    'Support par email'
                ]
            },
            'medium': {
                title: 'Sécurité Medium',
                price: '39.99€/$',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452079.png',
                description: 'Une protection renforcée pour les serveurs en croissance avec des fonctionnalités avancées de modération automatique.',
                features: [
                    'Toutes les fonctionnalités Basic',
                    'Protection anti-raid basique',
                    'Détection des comptes suspects',
                    'Rapports quotidiens',
                    'Support prioritaire'
                ]
            },
            'advanced': {
                title: 'Sécurité Avancée',
                price: '79.99€/$',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452030.png',
                description: 'Solution complète pour les serveurs actifs avec une protection avancée contre toutes les formes d\'attaques et de perturbations.',
                features: [
                    'Toutes les fonctionnalités Medium',
                    'Protection anti-raid avancée',
                    'Analyse comportementale',
                    'Alertes en temps réel',
                    'Support chat 24/7'
                ]
            },
            'exceptional': {
                title: 'Sécurité Exceptionnelle',
                price: '149.99€/$',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452093.png',
                description: 'La solution ultime pour les serveurs professionnels et les grandes communautés nécessitant une protection maximale.',
                features: [
                    'Toutes les fonctionnalités Avancée',
                    'Protection contre les attaques DDoS',
                    'Analyse prédictive des menaces',
                    'Rapports personnalisés',
                    'Support dédié avec manager'
                ]
            },
            'anti-raid': {
                title: 'Protection Anti-Raid',
                price: '49.99€/$',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452059.png',
                description: 'Protection spécialisée contre les raids et les attaques coordonnées sur votre serveur Discord.',
                features: [
                    'Détection des raids en temps réel',
                    'Verrouillage automatique du serveur',
                    'Analyse des modèles d\'attaque',
                    'Rapports détaillés sur les raids',
                    'Support spécialisé anti-raid'
                ]
            },
            'auto-mod': {
                title: 'Modération Automatique',
                price: '59.99€/$',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452048.png',
                description: 'Système de modération automatique avancé pour maintenir votre serveur propre et sûr sans effort constant.',
                features: [
                    'Filtrage intelligent des messages',
                    'Détection des comportements toxiques',
                    'Système d\'avertissement automatique',
                    'Mise en quarantaine des utilisateurs problématiques',
                    'Tableau de bord de modération'
                ]
            },
            'monitoring': {
                title: 'Surveillance 24/7',
                price: '99.99€/$',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452077.png',
                description: 'Surveillance humaine et automatique permanente de votre serveur pour une protection maximale.',
                features: [
                    'Surveillance humaine 24h/24',
                    'Intervention immédiate en cas d\'attaque',
                    'Analyse continue des activités',
                    'Rapports horaires',
                    'Contact direct avec l\'équipe de surveillance'
                ]
            },
            'enterprise': {
                title: 'Solution Entreprise',
                price: '199.99€/$',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452085.png',
                description: 'Solution personnalisée pour les entreprises et les grandes organisations avec des besoins spécifiques en matière de sécurité Discord.',
                features: [
                    'Solution entièrement personnalisable',
                    'Intégration avec vos systèmes existants',
                    'Formation de votre équipe',
                    'Analyses de sécurité approfondies',
                    'Manager de compte dédié'
                ]
            }
        };

        // Données des avis
        const reviews = {
            'basic': [
                { id: 1, author: 'Jean D.', date: '2023-05-15', rating: 4, title: 'Très satisfait', content: 'Le bot fait exactement ce qu\'il promet. Ma communauté est maintenant bien protégée contre les spams.' },
                { id: 2, author: 'Marie L.', date: '2023-04-22', rating: 5, title: 'Excellent rapport qualité-prix', content: 'Pour le prix, c\'est incroyable tout ce qu\'il offre. Je recommande vivement!' },
                { id: 3, author: 'Pierre T.', date: '2023-03-10', rating: 3, title: 'Correct mais pourrait être amélioré', content: 'Fonctionne bien mais manque quelques fonctionnalités que j\'aurais aimé avoir.' }
            ],
            'medium': [
                { id: 1, author: 'Sophie M.', date: '2023-06-02', rating: 5, title: 'Parfait pour mon serveur en croissance', content: 'Depuis que j\'ai upgradé à cette version, plus de problèmes de raids. Le support est également très réactif.' },
                { id: 2, author: 'Thomas R.', date: '2023-05-28', rating: 4, title: 'Très bonne protection', content: 'Je suis content de mon achat. Le bot détecte bien les comptes suspects avant qu\'ils ne fassent des dégâts.' }
            ],
            'advanced': [
                { id: 1, author: 'Alexandre G.', date: '2023-06-10', rating: 5, title: 'Indispensable pour les serveurs actifs', content: 'Avec plus de 1000 membres, ce bot nous a sauvé plusieurs fois. L\'analyse comportementale est impressionnante.' },
                { id: 2, author: 'Élodie P.', date: '2023-05-30', rating: 5, title: 'Worth every penny', content: 'The advanced features are exactly what my community needed. The 24/7 support is also a lifesaver.' },
                { id: 3, author: 'Nicolas B.', date: '2023-04-15', rating: 4, title: 'Très complet', content: 'Presque parfait. J\'aimerais juste pouvoir personnaliser un peu plus certaines alertes.' }
            ]
        };

        // État de l'application
        let currentUser = null;
        let cart = [];
        let currentProductId = null;
        let currentPaymentMethod = 'credit-card';

        // Éléments du DOM
        const homePage = document.getElementById('home-page');
        const categoriesPage = document.getElementById('categories-page');
        const productPage = document.getElementById('product-page');
        const contactPage = document.getElementById('contact-page');
        const cartPage = document.getElementById('cart-page');
        
        const enterBtn = document.getElementById('enter-btn');
        const backBtn = document.getElementById('back-btn');
        const homeLink = document.getElementById('home-link');
        const productsLink = document.getElementById('products-link');
        const contactLink = document.getElementById('contact-link');
        const reviewsLink = document.getElementById('reviews-link');
        
        const loginBtnNav = document.getElementById('login-btn-nav');
        const registerBtnNav = document.getElementById('register-btn-nav');
        const authButtons = document.getElementById('auth-buttons');
        const userProfile = document.getElementById('user-profile');
        const userAvatar = document.getElementById('user-avatar');
        const userMenu = document.getElementById('user-menu');
        const logoutBtn = document.getElementById('logout-btn');
        const profileLink = document.getElementById('profile-link');
        const ordersLink = document.getElementById('orders-link');
        
        const cartIcon = document.getElementById('cart-icon');
        const cartCount = document.getElementById('cart-count');
        const productCartCount = document.getElementById('product-cart-count');
        
        const loginModal = document.getElementById('login-modal');
        const registerModal = document.getElementById('register-modal');
        const paymentModal = document.getElementById('payment-modal');
        const reviewModal = document.getElementById('review-modal');
        
        const closeLoginModal = document.getElementById('close-login-modal');
        const closeRegisterModal = document.getElementById('close-register-modal');
        const closePaymentModal = document.getElementById('close-payment-modal');
        const closeReviewModal = document.getElementById('close-review-modal');
        
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const contactForm = document.getElementById('contact-form');
        const reviewForm = document.getElementById('review-form');
        
        const switchToRegister = document.getElementById('switch-to-register');
        const switchToLogin = document.getElementById('switch-to-login');
        
        const loginAlert = document.getElementById('login-alert');
        const registerAlert = document.getElementById('register-alert');
        const paymentAlert = document.getElementById('payment-alert');
        
        const paymentMethods = document.querySelectorAll('.payment-method');
        const creditCardForm = document.getElementById('credit-card-form');
        const paypalForm = document.getElementById('paypal-form');
        const cryptoForm = document.getElementById('crypto-form');
        const confirmPaymentBtn = document.getElementById('confirm-payment-btn');
        
        const ratingStars = document.querySelectorAll('.rating-stars .fa-star');
        const reviewRatingInput = document.getElementById('review-rating');
        
        const addReviewBtn = document.getElementById('add-review-btn');
        
        const cartItemsContainer = document.getElementById('cart-items');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartTotal = document.getElementById('cart-total');
        const checkoutBtn = document.getElementById('checkout-btn');
        
        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            // Création des points flottants
            createFloatingDots();
            
            // Vérification de l'URL au chargement
            checkInitialUrl();
            
            // Charger le panier depuis le localStorage
            loadCartFromStorage();
            
            // Mettre à jour le compteur du panier
            updateCartCount();
        });

        // Fonctions utilitaires
        function createFloatingDots() {
            const floatingDots = document.getElementById('floating-dots');
            const dotCount = 30;
            
            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                
                const size = Math.random() * 3 + 1;
                dot.style.width = `${size}px`;
                dot.style.height = `${size}px`;
                
                dot.style.left = `${Math.random() * 100}%`;
                dot.style.top = `${Math.random() * 100}%`;
                
                const randomX = (Math.random() * 2 - 1).toFixed(2);
                const randomY = (Math.random() * 2 - 1).toFixed(2);
                dot.style.setProperty('--random-x', randomX);
                dot.style.setProperty('--random-y', randomY);
                
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                dot.style.animation = `float ${duration}s linear ${delay}s infinite`;
                
                floatingDots.appendChild(dot);
            }
        }

        function checkInitialUrl() {
            if (location.hash.includes('#product-')) {
                const productId = location.hash.replace('#product-', '');
                if (products[productId]) {
                    showProductPage(productId);
                    return;
                }
            }
            
            if (location.hash === '#categories') {
                showCategoriesPage();
                return;
            }
            
            if (location.hash === '#contact') {
                showContactPage();
                return;
            }
            
            if (location.hash === '#cart') {
                showCartPage();
                return;
            }
            
            // Par défaut, afficher la page d'accueil
            showHomePage();
        }

        function showHomePage() {
            hideAllPages();
            homePage.style.display = 'flex';
            
            // Animation
            setTimeout(() => {
                homePage.style.opacity = '1';
                homePage.style.transform = 'translateY(0)';
            }, 50);
        }

        function showCategoriesPage() {
            hideAllPages();
            categoriesPage.style.display = 'block';
            
            // Animation
            setTimeout(() => {
                categoriesPage.style.opacity = '1';
                categoriesPage.style.transform = 'translateY(0)';
                
                // Animation des cartes
                const cards = document.querySelectorAll('.category-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 50);
        }

        function showProductPage(productId) {
            currentProductId = productId;
            const product = products[productId];
            
            // Remplir les informations du produit
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-description').textContent = product.description;
            
            // Remplir les fonctionnalités
            const featuresList = document.getElementById('product-features');
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            // Remplir les avis
            const reviewsContainer = document.getElementById('reviews-container');
            reviewsContainer.innerHTML = '';
            
            if (reviews[productId]) {
                reviews[productId].forEach(review => {
                    const reviewCard = document.createElement('div');
                    reviewCard.className = 'review-card';
                    
                    let stars = '';
                    for (let i = 1; i <= 5; i++) {
                        stars += i <= review.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
                    }
                    
                    reviewCard.innerHTML = `
                        <div class="review-header">
                            <div class="review-avatar">${review.author.charAt(0)}</div>
                            <div>
                                <div class="review-author">${review.author}</div>
                                <div class="review-date">${review.date}</div>
                            </div>
                        </div>
                        <div class="review-rating">${stars}</div>
                        <h4>${review.title}</h4>
                        <div class="review-content">${review.content}</div>
                    `;
                    
                    reviewsContainer.appendChild(reviewCard);
                });
            } else {
                reviewsContainer.innerHTML = '<p>Aucun avis pour ce produit pour le moment.</p>';
            }
            
            // Afficher ou cacher le bouton d'ajout d'avis
            if (currentUser) {
                addReviewBtn.style.display = 'block';
            } else {
                addReviewBtn.style.display = 'none';
            }
            
            hideAllPages();
            productPage.style.display = 'block';
            
            // Animation
            setTimeout(() => {
                productPage.style.opacity = '1';
                productPage.style.transform = 'translateY(0)';
            }, 50);
        }

        function showContactPage() {
            hideAllPages();
            contactPage.style.display = 'block';
            
            // Animation
            setTimeout(() => {
                contactPage.style.opacity = '1';
                contactPage.style.transform = 'translateY(0)';
            }, 50);
        }

        function showCartPage() {
            renderCartItems();
            hideAllPages();
            cartPage.style.display = 'block';
            
            // Animation
            setTimeout(() => {
                cartPage.style.opacity = '1';
                cartPage.style.transform = 'translateY(0)';
            }, 50);
        }

        function hideAllPages() {
            homePage.style.display = 'none';
            categoriesPage.style.display = 'none';
            productPage.style.display = 'none';
            contactPage.style.display = 'none';
            cartPage.style.display = 'none';
        }

        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = count;
            productCartCount.textContent = count;
        }

        function renderCartItems() {
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div class="empty-cart-text">Votre panier est vide</div>
                        <button class="continue-shopping-btn" id="continue-shopping-btn">Continuer vos achats</button>
                    </div>
                `;
                
                document.getElementById('continue-shopping-btn').addEventListener('click', showCategoriesPage);
                
                cartSubtotal.textContent = '0.00€';
                cartTotal.textContent = '0.00€';
                return;
            }
            
            const table = document.createElement('table');
            table.className = 'cart-table';
            
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="cart-items-body"></tbody>
            `;
            
            const tbody = table.querySelector('#cart-items-body');
            
            cart.forEach((item, index) => {
                const product = products[item.id];
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <img src="${product.image}" alt="${product.title}" class="cart-item-img">
                            <div class="cart-item-title">${product.title}</div>
                        </div>
                    </td>
                    <td class="cart-item-price">${product.price}</td>
                    <td>
                        <div class="quantity-control">
                            <button class="quantity-btn decrease-btn" data-index="${index}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase-btn" data-index="${index}">+</button>
                        </div>
                    </td>
                    <td>${(parseFloat(product.price) * item.quantity).toFixed(2)}€</td>
                    <td><i class="fas fa-trash remove-item" data-index="${index}"></i></td>
                `;
                
                tbody.appendChild(row);
            });
            
            cartItemsContainer.appendChild(table);
            
            // Calculer les totaux
            const subtotal = cart.reduce((total, item) => {
                const price = parseFloat(products[item.id].price);
                return total + (price * item.quantity);
            }, 0);
            
            cartSubtotal.textContent = subtotal.toFixed(2) + '€';
            cartTotal.textContent = subtotal.toFixed(2) + '€';
            
            // Ajouter les événements
            document.querySelectorAll('.decrease-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    decreaseQuantity(index);
                });
            });
            
            document.querySelectorAll('.increase-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    increaseQuantity(index);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    removeFromCart(index);
                });
            });
        }

        function addToCart(productId, quantity = 1) {
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ id: productId, quantity });
            }
            
            saveCartToStorage();
            updateCartCount();
            
            // Afficher une notification
            showAlert('success', 'Produit ajouté au panier');
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            saveCartToStorage();
            updateCartCount();
            renderCartItems();
            
            showAlert('success', 'Produit retiré du panier');
        }

        function increaseQuantity(index) {
            cart[index].quantity += 1;
            saveCartToStorage();
            renderCartItems();
        }

        function decreaseQuantity(index) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                saveCartToStorage();
                renderCartItems();
            } else {
                removeFromCart(index);
            }
        }

        function saveCartToStorage() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        function loadCartFromStorage() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
        }

        function showModal(modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function hideModal(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function showAlert(type, message) {
            const alert = document.createElement('div');
            alert.className = `alert alert-${type}`;
            alert.innerHTML = `
                <span class="alert-icon">
                    ${type === 'success' ? '<i class="fas fa-check-circle"></i>' : 
                     type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' : 
                     '<i class="fas fa-exclamation-triangle"></i>'}
                </span>
                ${message}
            `;
            
            document.body.appendChild(alert);
            
            setTimeout(() => {
                alert.style.opacity = '0';
                setTimeout(() => {
                    alert.remove();
                }, 300);
            }, 3000);
        }

        function loginUser(email) {
            currentUser = {
                email,
                name: email.split('@')[0],
                avatar: email.charAt(0).toUpperCase()
            };
            
            authButtons.style.display = 'none';
            userProfile.style.display = 'flex';
            userAvatar.textContent = currentUser.avatar;
            
            // Afficher le bouton d'ajout d'avis si sur une page produit
            if (currentProductId) {
                addReviewBtn.style.display = 'block';
            }
            
            showAlert('success', 'Connexion réussie');
        }

        function logoutUser() {
            currentUser = null;
            authButtons.style.display = 'flex';
            userProfile.style.display = 'none';
            
            // Cacher le bouton d'ajout d'avis si sur une page produit
            if (currentProductId) {
                addReviewBtn.style.display = 'none';
            }
            
            showAlert('success', 'Déconnexion réussie');
        }

        // Événements
        enterBtn.addEventListener('click', showCategoriesPage);
        
        backBtn.addEventListener('click', function() {
            if (location.hash.includes('#product-')) {
                showCategoriesPage();
                history.replaceState(null, null, '#categories');
            } else {
                showHomePage();
                history.replaceState(null, null, ' ');
            }
        });
        
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            showHomePage();
            history.replaceState(null, null, ' ');
        });
        
        productsLink.addEventListener('click', function(e) {
            e.preventDefault();
            showCategoriesPage();
            history.replaceState(null, null, '#categories');
        });
        
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            showContactPage();
            history.replaceState(null, null, '#contact');
        });
        
        reviewsLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentProductId) {
                document.getElementById('reviews-section').scrollIntoView({ behavior: 'smooth' });
            } else {
                showCategoriesPage();
                history.replaceState(null, null, '#categories');
            }
        });
        
        // Boutons "Learn More"
        document.querySelectorAll('.learn-more-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.getAttribute('data-product');
                showProductPage(productId);
                history.replaceState(null, null, `#product-${productId}`);
            });
        });
        
        // Bouton "Ajouter au panier"
        document.getElementById('add-to-cart-btn').addEventListener('click', function() {
            addToCart(currentProductId);
        });
        
        // Bouton "Acheter maintenant"
        document.getElementById('buy-btn').addEventListener('click', function() {
            addToCart(currentProductId);
            showCartPage();
            history.replaceState(null, null, '#cart');
        });
        
        // Icône panier
        cartIcon.addEventListener('click', function() {
            showCartPage();
            history.replaceState(null, null, '#cart');
        });
        
        // Boutons de connexion/déconnexion
        loginBtnNav.addEventListener('click', function() {
            showModal(loginModal);
        });
        
        registerBtnNav.addEventListener('click', function() {
            showModal(registerModal);
        });
        
        logoutBtn.addEventListener('click', logoutUser);
        
        // Menu utilisateur
        userAvatar.addEventListener('click', function() {
            userMenu.classList.toggle('active');
        });
        
        // Fermer le menu utilisateur quand on clique ailleurs
        document.addEventListener('click', function(e) {
            if (!userProfile.contains(e.target)) {
                userMenu.classList.remove('active');
            }
        });
        
        // Modales
        closeLoginModal.addEventListener('click', function() {
            hideModal(loginModal);
        });
        
        closeRegisterModal.addEventListener('click', function() {
            hideModal(registerModal);
        });
        
        closePaymentModal.addEventListener('click', function() {
            hideModal(paymentModal);
        });
        
        closeReviewModal.addEventListener('click', function() {
            hideModal(reviewModal);
        });
        
        // Basculer entre les modales de connexion/inscription
        switchToRegister.addEventListener('click', function() {
            hideModal(loginModal);
            showModal(registerModal);
        });
        
        switchToLogin.addEventListener('click', function() {
            hideModal(registerModal);
            showModal(loginModal);
        });
        
        // Connexion
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Simulation de vérification
            if (email && password) {
                loginUser(email);
                hideModal(loginModal);
            } else {
                loginAlert.style.display = 'flex';
                loginAlert.className = 'alert alert-error';
                loginAlert.innerHTML = '<i class="fas fa-exclamation-circle alert-icon"></i> Veuillez remplir tous les champs';
            }
        });
        
        // Inscription
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            
            if (!name || !email || !password || !confirmPassword) {
                registerAlert.style.display = 'flex';
                registerAlert.className = 'alert alert-error';
                registerAlert.innerHTML = '<i class="fas fa-exclamation-circle alert-icon"></i> Veuillez remplir tous les champs';
                return;
            }
            
            if (password !== confirmPassword) {
                registerAlert.style.display = 'flex';
                registerAlert.className = 'alert alert-error';
                registerAlert.innerHTML = '<i class="fas fa-exclamation-circle alert-icon"></i> Les mots de passe ne correspondent pas';
                return;
            }
            
            // Simulation d'inscription réussie
            loginUser(email);
            hideModal(registerModal);
            showAlert('success', 'Inscription réussie! Bienvenue ' + name);
        });
        
        // Contact form
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Simulation d'envoi
            showAlert('success', 'Merci pour votre message, ' + name + '! Nous vous répondrons bientôt.');
            contactForm.reset();
        });
        
        // Méthodes de paiement
        paymentMethods.forEach(method => {
            method.addEventListener('click', function() {
                paymentMethods.forEach(m => m.classList.remove('selected'));
                this.classList.add('selected');
                
                currentPaymentMethod = this.getAttribute('data-method');
                
                creditCardForm.style.display = 'none';
                paypalForm.style.display = 'none';
                cryptoForm.style.display = 'none';
                
                if (currentPaymentMethod === 'credit-card') {
                    creditCardForm.style.display = 'block';
                } else if (currentPaymentMethod === 'paypal') {
                    paypalForm.style.display = 'block';
                } else if (currentPaymentMethod === 'crypto') {
                    cryptoForm.style.display = 'block';
                    document.getElementById('crypto-address-container').style.display = 'block';
                    document.getElementById('crypto-amount').textContent = '0.0054 BTC';
                }
            });
        });
        
        // Paiement
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showAlert('error', 'Votre panier est vide');
                return;
            }
            
            showModal(paymentModal);
        });
        
        confirmPaymentBtn.addEventListener('click', function() {
            // Simulation de paiement réussi
            hideModal(paymentModal);
            cart = [];
            saveCartToStorage();
            updateCartCount();
            renderCartItems();
            
            showAlert('success', 'Paiement réussi! Merci pour votre achat.');
        });
        
        // Évaluation
        ratingStars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                reviewRatingInput.value = rating;
                
                ratingStars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.remove('far');
                        s.classList.add('fas');
                    } else {
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });
        
        // Ajout d'un avis
        addReviewBtn.addEventListener('click', function() {
            if (!currentUser) return;
            
            // Réinitialiser le formulaire
            reviewForm.reset();
            reviewRatingInput.value = '0';
            ratingStars.forEach(star => {
                star.classList.remove('fas');
                star.classList.add('far');
            });
            
            showModal(reviewModal);
        });
        
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const rating = parseInt(reviewRatingInput.value);
            const title = document.getElementById('review-title').value;
            const content = document.getElementById('review-content').value;
            
            if (rating === 0 || !title || !content) {
                showAlert('error', 'Veuillez remplir tous les champs et attribuer une note');
                return;
            }
            
            // Ajouter l'avis (simulation)
            if (!reviews[currentProductId]) {
                reviews[currentProductId] = [];
            }
            
            const newReview = {
                id: reviews[currentProductId].length + 1,
                author: currentUser.name,
                date: new Date().toISOString().split('T')[0],
                rating,
                title,
                content
            };
            
            reviews[currentProductId].unshift(newReview);
            
            // Recharger les avis
            showProductPage(currentProductId);
            
            hideModal(reviewModal);
            showAlert('success', 'Merci pour votre avis!');
        });
        
        // Gestion de l'historique du navigateur
        window.addEventListener('popstate', function() {
            checkInitialUrl();
        });