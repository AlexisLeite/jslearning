import { useEffect, useRef, useState } from 'react';

/**
 * El messagesStore es un objeto que permite almacenar los mensajes del usuario.
 *
 * El método **persist** guardará los mensajes en el localStorage.
 *
 * Los métodos de uso son:
 *
 * addMessage: Agrega un mensaje al store.
 * getMessageById: Obtiene un mensaje.
 * removeById: Elimina un mensaje.
 * useList: Permite conocer en tiempo real la lista de mensajes que hay en el store.
 */
export const messagesStore = new (class {
  maxId = 0;
  messages = [];
  onUpdateCbs = [];

  mock = () => {
    const names = ['Tuti', 'Ale', 'Mónica', 'Chirola', 'Pita'];
    const messages = [
      'Hola, ¿tienen disponibles esos jeans negros en talla 30? Estuve buscándolos por todas partes y me encantaría comprarlos si están disponibles.',
      'Buenas tardes, ¿tienen algún descuento especial para estudiantes? Estoy interesado en renovar mi guardarropa y sería genial aprovechar alguna oferta.',
      'Hola, ¿podrían indicarme si van a recibir más unidades de esa camisa a rayas? La vi en su sitio web y me encantaría comprarla en tienda.',
      'Buen día, ¿cuál es su política de devoluciones? Compré un par de zapatos y lamentablemente no me quedaron bien, ¿puedo cambiarlos por otro modelo?',
      'Hola, ¿tienen servicio de reserva en tienda? Me gustaría apartar un vestido que vi en línea para probarlo antes de comprarlo.',
      'Buenas tardes, ¿hacen ajustes a la ropa? Compré un abrigo que me encanta pero necesita un arreglo en el dobladillo, ¿sería posible?',
      'Hola, ¿tienen disponibilidad de esa bufanda en color gris? La vi en la ventana hace unos días y me gustaría adquirirla si está en stock.',
      'Buen día, ¿tienen alguna promoción especial para la temporada de fiestas? Estoy buscando regalos y sería fantástico aprovechar alguna oferta.',
      'Hola, ¿hacen envíos a domicilio? Me interesa comprar un par de suéteres pero no puedo pasar por la tienda, ¿cuál es el proceso?',
      'Buenas tardes, ¿tienen alguna recomendación de estilo para combinar esta falda? Me encanta pero estoy buscando ideas para armar un atuendo.',
    ];
    for (let i = 0; i < 15; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      this.addMessage({
        name,
        message: messages[Math.floor(Math.random() * messages.length)],
        age: Math.floor(Math.random() * 25) + 15,
        email: `${name}@${name}.com`,
      });
    }
  };
  persist = () => {
    localStorage.setItem('messagesStore', JSON.stringify(this.messages));
  };
  restore = () => {
    this.messages = JSON.parse(localStorage.getItem('messagesStore') ?? '[]');
  };

  constructor() {
    if (!localStorage.getItem('messagesStore')) {
      this.mock();
    }

    this.restore();
  }

  addMessage(message) {
    const id = `${Date.now()}${this.maxId++}`;

    this.messages.push({ ...message, id });

    this.persist();

    this.onUpdateCbs.forEach(current => current());
  }

  getMessageById(id) {
    return this.messages.find(current => current.id === id);
  }

  removeById(id) {
    this.messages = this.messages.filter(current => current.id !== id);

    this.persist();

    this.onUpdateCbs.forEach(current => current());
  }

  useMessagesFrom = from => {
    const list = this.useList();

    const previousFrom = useRef(from);
    if (previousFrom.current !== from) {
      previousFrom.current = from;
      this.onUpdateCbs.forEach(cb => cb());
    }

    return list.filter(
      current => current.name.toLowerCase() === from.toLowerCase()
    );
  };

  useList = () => {
    const [messages, setMessages] = useState(this.messages);

    useEffect(() => {
      setMessages([...this.messages]);

      const cb = () => {
        setMessages([...this.messages]);
      };

      this.onUpdateCbs.push(cb);

      return () => {
        this.onUpdateCbs = this.onUpdateCbs.filter(current => current !== cb);
      };
    }, []);

    return messages;
  };
})();
