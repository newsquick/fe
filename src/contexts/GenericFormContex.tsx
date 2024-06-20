import React from 'react';
import { FormProvider, SubmitHandler, useForm, useFormContext } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<AnswerData>;
};

const defaultValues: AnswerData = {
  userName: '',
  targetName: '',
  targetType: '',
  relationship: '',
  minute: '',
  speechType: '',
  concept: '',
  story: '',
  lastComment: '',
  isRenew: false,
};

export const GenericFormProvider = ({ children, onSubmit }: Props) => {
  const methods = useForm<AnswerData>({
    defaultValues: defaultValues,
    mode: 'onBlur',
    shouldFocusError: false,
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
      event.preventDefault();
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="h-[calc(100%-84px)]"
        onSubmit={methods.handleSubmit(onSubmit)}
        onKeyDown={handleKeyDown}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export const useGenericFormContext = () => {
  return useFormContext<AnswerData>();
};
