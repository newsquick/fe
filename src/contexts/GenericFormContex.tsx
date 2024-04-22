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

  return (
    <FormProvider {...methods}>
      <form className="h-[calc(100%-84px)]" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export const useGenericFormContext = () => {
  return useFormContext<AnswerData>();
};
