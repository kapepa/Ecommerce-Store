import { FC, InputHTMLAttributes, LegacyRef, ReactNode } from "react";

import { Input } from "./input";
import MaskedInput, { MaskedInputProps } from 'react-text-mask';

interface InputPhoneProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputPhone: FC<InputPhoneProps> = (props) => {
  const { placeholder, ...rest } = props 

  return (
    <MaskedInput
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      placeholder={placeholder}
      guide={false}
      {...rest}
      render={(ref, props) => (
        <Input ref={ref as LegacyRef<HTMLInputElement> | undefined} {...props} />
      )}
    />
  )
}

export { InputPhone }