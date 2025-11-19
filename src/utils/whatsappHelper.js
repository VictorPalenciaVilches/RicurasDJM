// Función auxiliar para formatear precios en pesos colombianos
export function formatPrice(price) {
  return `$ ${price.toLocaleString('es-CO')}`;
}

// Función para generar el mensaje de WhatsApp con el pedido
export function generateWhatsAppMessage(cartItems, customerData) {
  // Validar que haya items en el carrito
  if (!cartItems || cartItems.length === 0) {
    return '';
  }

  // Construir el mensaje línea por línea
  let message = '¡Hola! 👋 Quiero hacer un pedido en RICURAS DJM:\n\n';

  // Agregar sección de productos
  message += '*PRODUCTOS:*\n';
  cartItems.forEach((item) => {
    const { product, quantity } = item;
    const subtotal = product.price * quantity;
    message += `🍔 ${product.name} x${quantity} - ${formatPrice(subtotal)}\n`;
  });

  // Calcular el total
  const total = cartItems.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  // Agregar el total
  message += `\n💰 *TOTAL: ${formatPrice(total)}*\n\n`;

  // Agregar sección de datos del cliente
  message += '*DATOS DEL CLIENTE:*\n';
  message += `Nombre: ${customerData.name || ''}\n`;
  message += `Teléfono: ${customerData.phone || ''}\n`;
  message += `Tipo de entrega: ${customerData.deliveryType || ''}\n`;
  
  // Incluir dirección solo si es domicilio
  if (customerData.deliveryType === 'Domicilio') {
    message += `Dirección: ${customerData.address || ''}\n`;
  }
  
  message += `Método de pago: ${customerData.paymentMethod || ''}\n`;
  
  // Incluir observaciones solo si no está vacío
  if (customerData.observations && customerData.observations.trim() !== '') {
    message += `Observaciones: ${customerData.observations}\n`;
  }

  // Número de teléfono de WhatsApp (formato internacional sin +)
  const phoneNumber = '573052890338';

  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message);

  // Generar URL completa de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return whatsappUrl;
}

