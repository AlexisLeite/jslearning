import { messagesStore } from '../../../common/storage/messagesStore';
import { Box } from '@chakra-ui/react';
import { incomingMessagesStyles } from './styles';
import { Message } from './Message';

export const IncomingMessages = () => {
  const messages = messagesStore.useList();

  return (
    <Box sx={incomingMessagesStyles}>
      <table className="messagesList">
        <tbody>
          {messages.map(current => {
            return <Message key={current.id} message={current} />;
          })}
        </tbody>
      </table>
    </Box>
  );
};
