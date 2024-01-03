'use client';

import { css, Global } from '@emotion/react';
import { FontHurme } from '@xsite-ui/common.font-hurme';
import { cssReset } from '@xsite-ui/common.style/css-reset';
import globalCss from '@xsite-ui/common.style/normalize-css';

const pageCss = css`
  ${{ ...cssReset }}
  ${{ ...globalCss }}
  body {
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    letter-spacing: -0.1px;
    line-height: 1.5;
    font-family: hurmegeometricsans_no3_6, Arial, sans-serif;
    display: flex;
    flex-direction: column;
  }
`;

export const Head = () => {
  return (
    <>
      <Global styles={pageCss} />
      <FontHurme />
    </>
  );
};
