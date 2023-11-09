import { ChangeEvent, KeyboardEvent } from "react"

// simple date mask -> 99/99/9999
export function dateInputMask(event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 10
    let value = event.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{2})(\d)/, '$1/$2')
    value = value.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
    event.currentTarget.value = value
    return event
  }
  