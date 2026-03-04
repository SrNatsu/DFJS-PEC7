import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user-service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authenticationTokenGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const token = userService.getToken();
  const router = inject(Router);

  if (token) {
    return true;
  } else {
    alert('You must be logged in to access this route');
    router.navigate(['/article/list']);
    return false;
  }
};
