export interface FieldOption {
    value: string;
    label: string;
  }
  
  export interface FieldValidation {
    required?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    message?: string;
  }
  
  export interface FormField {
    id: string;
    type: 'text' | 'email' | 'number' | 'password' | 'select' | 'radio' | 'textarea';
    label: string;
    placeholder?: string;
    required?: boolean;
    options?: FieldOption[];
    validation?: FieldValidation;
  }
  
  export interface JSONSchema {
    formTitle: string;
    formDescription: string;
    fields: FormField[];
  }
  