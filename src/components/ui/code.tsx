import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
//import prism from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-sea';
import { vscDarkPlus, duotoneSea,oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface CodeProps {
  language: string
  code: string
  style: React.CSSProperties
  textStyle?: ThemeType
}

type ThemeType = 'dark-plus' | 'duotonesea' | 'onedark'

export const getTheme = (theme: ThemeType) => {
  switch (theme) {
    case 'dark-plus':
      return vscDarkPlus
      case 'duotonesea':
        return duotoneSea
        case 'onedark':
          return oneDark
    default: duotoneSea;
  }

}

const Code: React.FC<CodeProps> = ({ language, code, textStyle, style }) => {
  return (
    <SyntaxHighlighter language={language} style={getTheme(textStyle ? textStyle : 'duotonesea')} wrapLongLines>
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;