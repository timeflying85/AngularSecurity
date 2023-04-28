import { FormControl, FormGroup, Validators } from "@angular/forms";


export function fLogin(): FormGroup {
  return new FormGroup({
    id: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })
}
