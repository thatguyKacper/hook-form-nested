import { useForm, FormProvider, useFormContext } from 'react-hook-form'

import './NestedForm.css'

interface FormData {
  name: string
}

const NestedInput = () => {
  const {
    register,

    formState: { errors },
  } = useFormContext<FormData>()

  return (
    <div>
      <input
        {...register('name', { required: 'Name is required' })}
        type="text"
        placeholder="Name"
      />

      <p className="error">{errors.name?.message}</p>
    </div>
  )
}

export default function NestedForm() {
  const form = useForm<FormData>()

  const { handleSubmit } = form

  const onSubmit = () => {}

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NestedInput />

        <button type="submit">Signup</button>
      </form>
    </FormProvider>
  )
}
