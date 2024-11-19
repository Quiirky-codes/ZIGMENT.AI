declare module 'react-json-editor-ajrm' {
    import { Component } from 'react';
  
    interface Locale {
      name: string;
      code: string;
    }
  
    interface JSONEditorProps {
      placeholder: object;
      locale: Locale;
      height?: string;
      width?: string;
      onChange: (input: any) => void;
    }
  
    export default class JSONInput extends Component<JSONEditorProps, any> {}
  }
  
  declare module 'react-json-editor-ajrm/locale/en' {
    const locale: any;
    export default locale;
  }
  