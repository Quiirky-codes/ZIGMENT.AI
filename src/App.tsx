import React, { useState } from 'react';
import Layout from './components/Layout';
import JSONEditor from './components/JSONEditor';
import GeneratedForm from './components/GeneratedForm';
import { JSONSchema } from './types/schema';

const initialSchema: JSONSchema = {
  formTitle: 'Dynamic Form',
  formDescription: 'Fill out this form below:',
  fields: [
    {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
    },
  ],
};

const App: React.FC = () => {
  const [schema, setSchema] = useState<JSONSchema>(initialSchema);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-gray-background dark:bg-gray-dark text-gray-text dark:text-gray-textDark`}>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 px-6 py-2 bg-yellow text-purple rounded-md hover:bg-yellow-dark transition"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Layout>
        <JSONEditor value={schema} onChange={setSchema} />
        <GeneratedForm schema={schema} />
      </Layout>
    </div>
  );
};

export default App;

