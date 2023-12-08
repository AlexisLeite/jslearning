import { Button } from '@chakra-ui/react';
import { messagesStore } from '../../../common/storage/messagesStore';

export const Message = ({ message }) => {
  return (
    <>
      <tr>
        <th>From</th>
        <td>{message.name}</td>
        <th>Email</th>
        <td>{message.email}</td>
        <th>Age</th>
        <td>{message.age}</td>
        <td>
          <Button
            onClick={() => {
              messagesStore.removeById(message.id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
      <tr>
        <td colSpan={7}>{message.message}</td>
      </tr>
    </>
  );
};
