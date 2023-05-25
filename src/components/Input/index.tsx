import React from 'react'
import { Controller } from "react-hook-form";

import {InputContainer, InputText, IconContainer, ErrorText } from './styles'; 
import { IInput } from './types';

const Input = ({leftIcon, name, control, ErrorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer> {leftIcon}</IconContainer>) : null}
          <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field  }) => <InputText {...field} {...rest} />}
          />
      </InputContainer>
      {ErrorMessage ? <ErrorText>{ErrorMessage}</ErrorText> : null}
    </>
  ) 
}

export {Input}
