import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { JSONSchema } from '../types/schema';
import { downloadJSON } from '../utils/downloadJSON';

interface GeneratedFormProps {
  schema: JSONSchema;
}

const GeneratedForm: React.FC<GeneratedFormProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('Form Submitted:', data);
    downloadJSON(data, 'form-submission');
    alert('Form Submitted Successfully');
  };

  return (
    <div className="p-8 bg-yellow-light dark:bg-purple-dark text-gray-text dark:text-purple-light shadow-lg rounded-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-purple dark:text-yellow mb-4">{schema.formTitle}</h2>
      <p className="text-sm text-gray-text dark:text-purple-light mb-6">{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {schema.fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <label className="block text-sm font-semibold text-purple dark:text-yellow mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="block w-full px-4 py-3 text-sm border border-gray-300 dark:border-purple-light rounded-md focus:ring-2 focus:ring-purple dark:focus:ring-yellow focus:outline-none bg-white dark:bg-purple placeholder-white"
            />
            {errors[field.id] && (
              <span className="text-red-500 text-xs mt-1">
                {errors[field.id] && (
  <span className="flex items-center text-red-500 text-xs mt-1">
    <>
      <svg
        className="h-4 w-4 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-12.728 12.728m12.728 0L5.636 5.636m12.728 12.728l-12.728-12.728"
        />
      </svg>
      {errors[field.id]?.message || 'This field is required'}
    </>
  </span>
)}

              </span>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-purple text-white dark:bg-yellow dark:text-purple font-semibold py-3 rounded-md hover:bg-purple-dark dark:hover:bg-yellow-dark transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default GeneratedForm;
