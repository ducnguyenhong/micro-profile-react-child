import { Box, Flex } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { type publicApiType, ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './App.css';
import Experience from './components/experience';
import Intro from './components/intro';
import Skill from './components/skill';
import { Provider } from './components/ui/provider';

const FooterScroll: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const visibility = useContext<publicApiType>(VisibilityContext);

  const onGoToItem = (index: number) => {
    const { scrollToItem, getItemByIndex } = visibility;
    scrollToItem(getItemByIndex(index));
  };

  return (
    <Flex align="center" justify="center" pos="relative" top={6} className="scroll-footer">
      <Flex align="center" justify="center" gap={1.5} px={12}>
        {[1, 2, 3].map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <Box
              w="8px"
              h="8px"
              pos="relative"
              top="5px"
              key={item}
              bgGradient="to-r"
              gradientFrom={isActive ? '#56b617' : '#767676'}
              gradientTo={isActive ? '#068414' : '#767676'}
              borderRadius="full"
              cursor="pointer"
              onClick={() => onGoToItem(index)}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

function App() {
  const [activeComponent, setActiveComponent] = useState<number>(0); // index

  const COMPONENTS = [
    {
      component: <Intro />,
      idx: 1
    },
    {
      component: <Skill />,
      idx: 2
    },
    {
      component: <Experience />,
      idx: 3
    }
  ];

  const onWheel = (apiObj: publicApiType, ev: React.WheelEvent): void => {
    const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isTouchpad) {
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
        <ScrollMenu
          onWheel={onWheel}
          onUpdate={(apiObj) => {
            const { visible, index } = apiObj.items.getVisible()?.[0]?.[1] || {};
            if (visible) {
              setActiveComponent(Number(index));
            }
          }}
          transitionDuration={2500}
          transitionBehavior="smooth"
          Footer={() => <FooterScroll activeIndex={activeComponent} />}
        >
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
