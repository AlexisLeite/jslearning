import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const styles = {
  display: 'flex',
  gap: 3,
  flexDirection: 'row',
  width: '500px',
  mx: 'auto',

  button: {
    flexShrink: 0,
    width: '150px',
  },
};

export const Timer = () => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [ms, setMs] = useState('00');
  const [isRunning, setIsRunning] = useState(false);

  return (
    <Box sx={styles}>
      <form
        action=""
        onSubmit={ev => {
          ev.preventDefault();

          setIsRunning(true);

          const numberHours = Number.parseInt(hours);
          const numberMinutes = Number.parseInt(minutes);
          const numberSeconds = Number.parseInt(seconds);
          const numberMs = Number.parseInt(ms);

          const totalTimeMs =
            numberMs +
            numberSeconds * 1000 +
            numberMinutes * 60 * 1000 +
            numberHours * 60 * 60 * 1000;

          const startTime = Date.now();

          let interval = setInterval(() => {
            const ellapsed = Date.now() - startTime;
            const timeLeft = totalTimeMs - ellapsed;
          }, 50);
        }}
      >
        <Input
          name="hours"
          value={hours}
          onChange={ev => {
            setHours(ev.target.value);
          }}
        />
        :
        <Input
          name="minutes"
          value={minutes}
          onChange={ev => {
            setMinutes(ev.target.value);
          }}
        />
        :
        <Input
          name="seconds"
          value={seconds}
          onChange={ev => {
            setSeconds(ev.target.value);
          }}
        />
        :
        <Input
          name="ms"
          value={ms}
          onChange={ev => {
            setMs(ev.target.value);
          }}
        />
        <Button disabled={isRunning} type="submit">
          Start
        </Button>
      </form>
    </Box>
  );
};
