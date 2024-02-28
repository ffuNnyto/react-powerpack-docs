import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, duotoneSea, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
  language: string;
  code: string;
  textStyle?: ThemeType;
  style?: React.CSSProperties;
}

type ThemeType = 'dark-plus' | 'duotonesea' | 'onedark';

const themesMap: Record<ThemeType, any> = {
  'dark-plus': vscDarkPlus,
  'duotonesea': duotoneSea,
  'onedark': oneDark
};

const getTheme = (theme: ThemeType) => themesMap[theme] || duotoneSea;

const Code: React.FC<CodeProps> = ({ language, code, textStyle = 'duotonesea', style }) => {
  return (
    <SyntaxHighlighter language={language} customStyle={style} style={getTheme(textStyle)} wrapLongLines>
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;