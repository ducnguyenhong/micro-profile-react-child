import { Text } from '@chakra-ui/react';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
      <Text color="red" h="34px">
        React - Information
      </Text>
    </Provider>
  );
}

export default App;
