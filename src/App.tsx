import { Box } from '@chakra-ui/react';
import { type publicApiType, ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './App.css';
import Intro from './components/intro';
import Menu from './components/menu';
import { Provider } from './components/ui/provider';

function App() {
  const COMPONENTS = [
    {
      component: <Intro />,
      idx: 1
    },
    {
      component: <Menu />,
      idx: 2
    }
  ];

  const onWheel = (apiObj: publicApiType, ev: React.WheelEvent): void => {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollPrev();
    } else {
      apiObj.scrollNext();
    }
  };

  return (
    <Provider>
      <Box className="react-child-wrapper">
        <ScrollMenu onWheel={onWheel} transitionDuration={2500} transitionBehavior="smooth">
          {COMPONENTS.map((item) => {
            const { idx, component } = item;
            return (
              <div key={idx} itemID={`info-${idx}`}>
                {component}
              </div>
            );
          })}
        </ScrollMenu>
      </Box>
    </Provider>
  );
}

export default App;
