import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-cards-filter',
  templateUrl: './request-cards-filter.component.html',
  styleUrls: ['./request-cards-filter.component.scss'],
})
export class RequestCardsFilterComponent {
  @Output() formValue: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() clearFilters: EventEmitter<void> = new EventEmitter<void>();
  hasOneFilter = true;

  form: FormGroup = this.fb.group({
    name: [''],
    type: [''],
  });

  errorMessages = {
    isRequired: 'Este campo es requerido',
    minLength: 'Este campo debe tener al menos 3 caracteres',
    invalidForm: 'El formulario debe tener al menos un filtro'
  };

  constructor(private fb: FormBuilder) {}

  onSubmit(e: Event) {
    e.preventDefault();

    this.hasOneFilter = this.form.value.name || this.form.value.type;

    if (this.form.valid && this.hasOneFilter) {
      this.formValue.emit(this.form);
    }
  }

  onClearFilters() {
    this.form.reset();
    this.clearFilters.emit();
  }
}
