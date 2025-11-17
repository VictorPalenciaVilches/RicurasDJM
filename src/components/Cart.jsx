import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import CartItem from './CartItem';

function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onSendWhatsApp
}) {
  // Estado para los datos del cliente
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryType: 'Domicilio',
    paymentMethod: '',
    observations: ''
  });

  const [errors, setErrors] = useState({});

  // Función para formatear el precio en pesos colombianos
  const formatPrice = (price) => {
    return `$ ${price.toLocaleString('es-CO')}`;
  };

  // Calcular el total del pedido
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  const total = calculateTotal();

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }

    if (formData.deliveryType === 'Domicilio' && !formData.address.trim()) {
      newErrors.address = 'La dirección es requerida para domicilio';
    }

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Selecciona un método de pago';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del pedido
  const handleSubmit = () => {
    // Validar que el carrito no esté vacío
    if (cartItems.length === 0) {
      alert('Tu carrito está vacío. Agrega productos antes de enviar el pedido.');
      return;
    }

    // Validar que todos los campos requeridos estén llenos
    if (!validateForm()) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    // Llamar a onSendWhatsApp pasando los datos del cliente
    onSendWhatsApp(formData);
  };

  // Si el carrito no está abierto, no renderizar nada
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Panel lateral */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-md
          bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header del carrito */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-red-600 to-orange-500">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Tu Pedido
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white"
            aria-label="Cerrar carrito"
          >
            <X className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>

        {/* Lista de productos con scroll */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-xl md:text-2xl font-bold text-gray-700 mb-3">
                Tu carrito está vacío
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                ¡Agrega algo delicioso del menú para comenzar tu pedido!
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-600 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Ver Menú
              </button>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemoveItem}
                />
              ))}

              {/* Formulario de datos del cliente */}
              <div className="border-t border-gray-200 p-4 md:p-6 bg-white">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                  Completa tus datos
                </h3>

                <div className="space-y-4">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ej: Juan Pérez"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm md:text-base ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ej: 305 2890338"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm md:text-base ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* Tipo de entrega */}
                  <div>
                    <label htmlFor="deliveryType" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de entrega
                    </label>
                    <select
                      id="deliveryType"
                      name="deliveryType"
                      value={formData.deliveryType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm md:text-base"
                    >
                      <option value="Domicilio">Domicilio</option>
                      <option value="Recoger en tienda">Recoger en tienda</option>
                    </select>
                  </div>

                  {/* Dirección (solo si es domicilio) */}
                  {formData.deliveryType === 'Domicilio' && (
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Dirección
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Ej: Calle 123 #45-67, Barrio Centro"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm md:text-base ${
                          errors.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.address && (
                        <p className="mt-1 text-xs text-red-500">{errors.address}</p>
                      )}
                    </div>
                  )}

                  {/* Método de pago */}
                  <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                      Método de pago
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm md:text-base ${
                        errors.paymentMethod ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona un método</option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Transferencia">Transferencia</option>
                      <option value="Nequi">Nequi</option>
                      <option value="Daviplata">Daviplata</option>
                    </select>
                    {errors.paymentMethod && (
                      <p className="mt-1 text-xs text-red-500">{errors.paymentMethod}</p>
                    )}
                  </div>

                  {/* Observaciones */}
                  <div>
                    <label htmlFor="observations" className="block text-sm font-medium text-gray-700 mb-1">
                      Observaciones (opcional)
                    </label>
                    <textarea
                      id="observations"
                      name="observations"
                      value={formData.observations}
                      onChange={handleInputChange}
                      placeholder="Instrucciones especiales, comentarios adicionales..."
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm md:text-base resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer con total y botón de WhatsApp */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
            {/* Total */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <span className="text-lg md:text-xl font-semibold text-gray-900">
                Total:
              </span>
              <span className="text-2xl md:text-3xl font-bold text-red-600">
                {formatPrice(total)}
              </span>
            </div>

            {/* Botón Enviar por WhatsApp */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 md:py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base md:text-lg"
              aria-label="Enviar pedido por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>Enviar Pedido por WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
