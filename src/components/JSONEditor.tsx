import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import { JSONSchema } from '../types/schema';

interface JSONEditorProps {
  value: JSONSchema;
  onChange: (value: JSONSchema) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ value, onChange }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(value, null, 2));
    alert('Form JSON copied to clipboard!');
  };

  const handleChange = (input: any) => {
    if (input.jsObject) {
      onChange(input.jsObject);
    }
  };

  return (
    <div className="p-8 bg-gray-background dark:bg-purple-dark text-gray-text dark:text-gray-textDark shadow-lg rounded-lg w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-4 text-purple dark:text-yellow">JSON Editor</h2>
      <JSONInput
        placeholder={value}
        locale={locale}
        height="400px"
        width="100%"
        onChange={handleChange}
      />
      <button
        onClick={handleCopy}
        className="mt-4 bg-yellow text-purple rounded-md px-6 py-2 hover:bg-yellow-dark transition w-full bg-center font-bold"
      >
        Copy Form JSON
      </button>
    </div>
  );
};


export default JSONEditor;
