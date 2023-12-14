import { Box, Button, Checkbox, Input } from '@chakra-ui/react';
import { useState } from 'react';

let maxId = 0;

const styles = {
  '.checked label': {
    textDecoration: 'line-through',
  },

  '.todo__new': {
    form: {
      display: 'flex',
      gap: 3,
    },
  },

  '.todo__item, .todo__item label': {
    display: 'flex',
    gap: 3,
    alignItems: 'center',
  },
};

function makeTodo(text) {
  return {
    id: maxId++,
    text,
    checked: false,
  };
}

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Box sx={styles}>
      <Box className="todo__new">
        <form
          onSubmit={ev => {
            ev.preventDefault();

            const textInput = document.getElementsByName('NewTodo')[0];
            const text = textInput.value;

            textInput.focus();

            if (!text) return;
            ev.target.reset();

            setTodos(current => [...current, makeTodo(text)]);
          }}
        >
          <Input name="NewTodo" />
          <Button type="submit">Agregar</Button>
        </form>
      </Box>

      <Box as="ul">
        {todos.map(currentTodo => (
          <Box
            as="li"
            key={currentTodo.id}
            className={
              currentTodo.checked ? 'checked todo__item' : ' todo__item'
            }
          >
            <label>
              <Checkbox
                onChange={() => {
                  setTodos(currentList =>
                    currentList.map(mappingTodo => {
                      if (mappingTodo.id === currentTodo.id) {
                        return {
                          ...mappingTodo,
                          checked: !mappingTodo.checked,
                        };
                      }
                      return mappingTodo;
                    })
                  );
                }}
                checked={currentTodo.checked}
              />{' '}
              {currentTodo.text}
            </label>
            <Button
              onClick={() => {
                setTodos(currentList =>
                  currentList.filter(search => search.id !== currentTodo.id)
                );
              }}
            >
              Eliminar
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
