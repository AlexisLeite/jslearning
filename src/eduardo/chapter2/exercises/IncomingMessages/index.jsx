import { messagesStore } from '../../../common/storage/messagesStore';
import { Box, Button, Heading } from '@chakra-ui/react';
import { incomingMessagesStyles } from './styles';
import { Message } from './Message';
import { useState } from 'react';

function find5Emitters(messages) {
  const emitters = [];

  for (let i = messages.length - 1; i >= 0; i--) {
    if (!emitters.includes(messages[i].name)) {
      emitters.push(messages[i].name);
      if (emitters.length === 5) return emitters;
    }
  }

  return emitters;
}

export const IncomingMessages = () => {
  const [from, setFrom] = useState('Tuti');

  const messages = messagesStore.useList();
  const messagesFrom = messagesStore.useMessagesFrom(from);

  const emitters = find5Emitters(messages);

  return (
    <Box sx={incomingMessagesStyles}>
      <Heading as="h2">Messages</Heading>
      <table className="messagesList">
        <tbody>
          {messages.map(current => {
            return <Message key={current.id} message={current} />;
          })}
        </tbody>
      </table>
      <Heading as="h2">Last 5 transmitters</Heading>
      <Box className="messagesList__lastTransmitters">
        {emitters.map(current => (
          <Button
            onClick={() => {
              setFrom(current);
            }}
            key={current}
          >
            {current}
          </Button>
        ))}
      </Box>
      <Heading as="h2">Messages from {from}</Heading>
      <table className="messagesList">
        <tbody>
          {messagesFrom.map(current => {
            return <Message key={current.id} message={current} />;
          })}
        </tbody>
      </table>
    </Box>
  );
};
