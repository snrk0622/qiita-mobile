import { useRef, useCallback } from 'react';

const useScroll = ({ onScrollUp, onScrollDown, onScrollToTop }) => {
  const offset = useRef({ x: 0, y: 0 });

  const onScroll = useCallback(
    (event) => {
      const { nativeEvent } = event;
      const diffY = nativeEvent.contentOffset.y - offset.current.y;

      if (onScrollDown && diffY > 0) {
        onScrollDown(diffY);
      }

      if (onScrollUp && diffY < 0) {
        onScrollUp(diffY);
      }

      // eslint-disable-next-line
      if (onScrollToTop && nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y <= 0) {
        onScrollToTop();
      }
    },
    [onScrollDown, onScrollUp, onScrollToTop],
  );

  const onScrollBeginDrag = useCallback(
    (event) => {
      const { nativeEvent } = event;
      offset.current = nativeEvent.contentOffset;
    },
    [],
  );

  return {
    onScroll,
    onScrollBeginDrag,
  };
};

export default useScroll;
