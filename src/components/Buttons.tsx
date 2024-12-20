import {
    Button
  } from '@chakra-ui/react'

  type ButtonProps = {
    input: string;
    event: (info: string) => void;
    info: string;
  };
  
  const Buttons: React.FC<ButtonProps> = ({ input, event, info }) => {
    return <Button colorScheme='blue' color='white' onClick={() => event(info)}>{input}</Button>;
  };

export default Buttons