import { useEffect, useState } from 'react';

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

  persist = () => {
    localStorage.setItem('messagesStore', JSON.stringify(this.messages));
  };
  restore = () => {
    this.messages = JSON.parse(localStorage.getItem('messagesStore') ?? '[]');
  };

  constructor() {
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
