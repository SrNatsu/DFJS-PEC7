import { HttpInterceptorFn } from '@angular/common/http';
import { UserService } from '../services/user-service';
import { inject } from '@angular/core';

export const interceptorHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);
  const token = userService.getToken();

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(authReq);
  }
  return next(req);
};
