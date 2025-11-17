import { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Menu from './components/Menu';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Toast from './components/Toast';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import BackToTop from './components/BackToTop';
import ScrollReveal from './components/ScrollReveal';
import menuItems from './data/menuItems';
import { generateWhatsAppMessage } from './utils/whatsappHelper';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '' });
  const [cartAnimation, setCartAnimation] = useState(false);

  // Calcular el total de items en el carrito
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (existingItem) {
        // Si existe, aumentar quantity en 1
        const updatedCart = prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        // Mostrar toast y animación
        setToast({
          isVisible: true,
          message: `✓ ${product.name} agregado al carrito (Cantidad: ${existingItem.quantity + 1})`
        });
        setCartAnimation(true);
        setTimeout(() => setCartAnimation(false), 600);
        
        return updatedCart;
      } else {
        // Si no existe, agregar nuevo item con quantity: 1
        // Mostrar toast y animación
        setToast({
          isVisible: true,
          message: `✓ ${product.name} agregado al carrito`
        });
        setCartAnimation(true);
        setTimeout(() => setCartAnimation(false), 600);
        
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Actualizar cantidad de un producto en el carrito
  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Si la cantidad es 0 o menor, eliminar del carrito
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Manejar envío por WhatsApp
  const handleSendWhatsApp = (customerData) => {
    // Generar URL con el mensaje formateado
    const whatsappUrl = generateWhatsAppMessage(cart, customerData);

    if (whatsappUrl) {
      // Abrir WhatsApp en nueva ventana
      window.open(whatsappUrl, '_blank');
      
      // Cerrar el carrito después de enviar
      setIsCartOpen(false);
      
      // Limpiar el carrito después de enviar
      setCart([]);
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        animate={cartAnimation}
      />

      <HeroBanner
        onOrderClick={() => setIsCartOpen(true)}
        backgroundImage="/images/DJM.jpg"
      />

      {/* Separador visual sutil */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Sección de Menú con fondo blanco y padding generoso */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Título de la sección del menú con animación */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestro Menú
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra variedad de deliciosas comidas rápidas preparadas con los mejores ingredientes
              </p>
            </div>
          </ScrollReveal>
          
          <Menu 
            products={menuItems}
            onAddToCart={addToCart}
          />
        </div>
      </section>

      {/* Sección de ubicación con animación */}
      <ScrollReveal animation="fade-up">
        <LocationSection />
      </ScrollReveal>

      {/* Footer con animación */}
      <ScrollReveal animation="fade-up">
        <Footer />
      </ScrollReveal>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onSendWhatsApp={(customerData) => handleSendWhatsApp(customerData)}
      />

      <WhatsAppFloatingButton />

      <BackToTop />

      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast({ isVisible: false, message: '' })}
      />
    </div>
  );
}

export default App;
