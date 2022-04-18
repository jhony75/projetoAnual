import { useSpeechSynthesis } from 'react-speech-kit';
import { useState } from 'react';
import {
  Input,
  Button,
  Heading,
  VStack,
  Spacer,
  Select,
  Center,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import {
  FaHospital,
  FaSchool,
  FaBath,
  FaCar,
  FaBed,
  FaHome,
} from 'react-icons/fa';

export default function Speak() {
  const [text, setText] = useState('Text');
  const [voiceIndex, setVoiceIndex] = useState('');

  const { speak, voices } = useSpeechSynthesis();

  const voice = voices[voiceIndex] || null;

  return (
    <Center>
      <VStack w="100%">
        <Select
          p={4}
          w="80%"
          id="voice"
          name="voice"
          value={voiceIndex || ''}
          onChange={(event) => {
            setVoiceIndex(event.target.value);
          }}
        >
          <option value="">Default</option>
          {voices.map((option: any, index: any) => (
            <option
              key={option.voiceURI}
              value={index}
            >{`${option.lang} - ${option.name}`}</option>
          ))}
        </Select>
        <Spacer />
        <HStack>
          <IconButton
            icon={<FaHospital />}
            isRound
            size="lg"
            alignSelf="flex-end"
            aria-label="Hospital Icon"
            onClick={() => speak({ text: 'Hospital', voice })}
          />
          <IconButton
            icon={<FaSchool />}
            isRound
            size="lg"
            alignSelf="flex-end"
            aria-label="School Icon"
            onClick={() => speak({ text: 'Escola', voice })}
          />
          <IconButton
            icon={<FaBath />}
            isRound
            size="lg"
            alignSelf="flex-end"
            aria-label="Bath Icon"
            onClick={() => speak({ text: 'Banho', voice })}
          />
          <IconButton
            icon={<FaCar />}
            isRound
            size="lg"
            alignSelf="flex-end"
            aria-label="Car Icon"
            onClick={() => speak({ text: 'Carro', voice })}
          />
          <IconButton
            icon={<FaHome />}
            isRound
            size="lg"
            alignSelf="flex-end"
            aria-label="Home Icon"
            onClick={() => speak({ text: 'Casa', voice })}
          />
          <IconButton
            icon={<FaBed />}
            isRound
            size="lg"
            alignSelf="flex-end"
            aria-label="Hospital Icon"
            onClick={() => speak({ text: 'Cama', voice })}
          />
        </HStack>
        <Spacer />
        <VStack p={4} w="80%">
          <Heading>Escreva o que gostaria de dizer</Heading>
          <Spacer />
          <Input
            variant="filled"
            placeholder="Estou com sede"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <Button
            colorScheme="orange"
            px="4"
            type="button"
            onClick={() => speak({ text, voice })}
          >
            Fale!
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
}
