import { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Menu from './components/Menu';
import LocationSection from './components/LocationSection';
import Cart from './components/Cart';
import menuItems from './data/menuItems';
import { generateWhatsAppMessage } from './utils/whatsappHelper';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calcular el total de items en el carrito
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (existingItem) {
        // Si existe, aumentar quantity en 1
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, agregar nuevo item con quantity: 1
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
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <HeroBanner
        onOrderClick={() => setIsCartOpen(true)}
      />

      <main className="container mx-auto px-4 py-8">
        <Menu products={menuItems} onAddToCart={addToCart} />
      </main>

      <LocationSection />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onSendWhatsApp={(customerData) => handleSendWhatsApp(customerData)}
      />
    </div>
  );
}

export default App;
