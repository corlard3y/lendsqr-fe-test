import React from 'react';

const SvgMock = React.forwardRef((props, ref) => (
  <svg ref={ref} {...props} data-testid="svg-mock">
    <title>SVG Mock</title>
  </svg>
));

SvgMock.displayName = 'SvgMock';

export default SvgMock;
export { SvgMock as ReactComponent };