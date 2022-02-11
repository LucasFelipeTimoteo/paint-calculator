import { ChangeEvent } from "react";

export type WallsMeasurementsInputEventHandler = (
  event: ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement
  >
) => void