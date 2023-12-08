import { AtSignIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { validateForm } from '../../../common/validationLibrary/validateForm';
import { FieldError } from '../../../common/FieldError';

const demoForm1Styles = {
  '.chakra-modal__body': {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,

    textarea: {
      height: '120px',
    },
  },
};

export const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Button onClick={onOpen}>Contact us</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Box
          sx={demoForm1Styles}
          as="form"
          id="ContactForm"
          onSubmit={ev => {
            ev.preventDefault();

            const result = validateForm(ev.target, {
              name: { required: true },
              age: { required: true },
              email: {
                required: true,
                regExp: /\w+@\w+\.\w{2,3}/,
                regExpMessage: 'The field must be a valid email',
              },
              message: {
                required: true,
                maxLength: 100,
              },
            });

            if (result !== true) {
              setErrors(result);
            } else {
              setErrors({});
              ev.target.reset();
              setSuccess(true);
            }
          }}
        >
          <ModalContent>
            <ModalHeader>Contáctanos</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              {success ? (
                <>
                  <Heading as="h3" color="green.600">
                    Message sent!
                  </Heading>
                </>
              ) : (
                <>
                  <label>
                    Nombre: <Input name="name" />{' '}
                    <FieldError error={errors.name} />
                  </label>
                  <label>
                    Edad: <Input name="age" type="number" />
                    <FieldError error={errors.age} />
                  </label>
                  <label>
                    Email:{' '}
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <AtSignIcon color="gray.300" />
                      </InputLeftElement>
                      <Input name="email" placeholder="Email" />
                    </InputGroup>
                    <FieldError error={errors.email} />
                  </label>
                  <label>
                    Message:
                    <Textarea name="message" />
                    <FieldError error={errors.message} />
                  </label>
                </>
              )}
            </ModalBody>

            <ModalFooter>
              {!success && <Button type="submit">Contact</Button>}
            </ModalFooter>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
};
