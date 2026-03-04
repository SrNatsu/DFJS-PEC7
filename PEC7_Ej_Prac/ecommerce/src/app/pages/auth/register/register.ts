import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { UserService } from '../../../core/services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  private userService: UserService = inject(UserService);
  private router: Router = inject(Router);

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  hide = signal<boolean>(true);
  serverError = signal<string | null>(null);

  hidePassword(event: MouseEvent) {
    this.hide.update((v) => !v);
    event.stopPropagation();
    event.preventDefault();
  }

  register() {
    if (this.form.valid) {
      this.serverError.set(null);

      const { username, password } = this.form.getRawValue();

      this.userService.register(username, password).subscribe({
        next: (response) => {
          this.router.navigate(['/login']);
        },
        error: (e) => {
          const errorMsg = e.error?.msg || 'Server connection error';
          this.serverError.set(errorMsg);
        },
      });
    }
  }
}
