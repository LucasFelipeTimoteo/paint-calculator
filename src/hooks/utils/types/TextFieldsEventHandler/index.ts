import { ChangeEvent } from "react";

export type ITextFieldsEventHandler = ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>