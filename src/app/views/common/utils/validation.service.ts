import { Injectable } from '@angular/core';
import {BodyOutputType, Toast, ToasterService} from 'angular2-toaster';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private toasterService: ToasterService) { }

  showValidationsMessagesInToast(errorResponse) {
    if (errorResponse instanceof HttpErrorResponse) {
      //  if validation error:
      //  244 status means ==> la requête est incompréhensible ou incomplète.
      if (errorResponse.status === 422) {
        // 1 - Create empty array to store errors
        const errorsValidationMessages = [];
        const errorMessage = 'Veuillez corriger ces validations';
        // 2 - check if the error object is present in the response
        if (errorResponse.error) {
          // 3 - Check for Laravel form validation error messages object
          if (errorResponse.error.errors) {
            // 4 - For each error property (which is a form field)
            for (const property in errorResponse.error.errors) {
              if (errorResponse.error.errors.hasOwnProperty(property)) {

                // 5 - Extract it's array of errors
                const propertyErrors: Array<string> = errorResponse.error.errors[property];

                // 6 - Push all errors in the array to the errors array
                propertyErrors.forEach(error => errorsValidationMessages.push(error));
              }
            }
          }
        }
        if (errorsValidationMessages.length > 0) {
          const htmlUlList = errorsValidationMessages.map((validationMessage) => {
            return '<li>' + validationMessage + '</li>';
          });
          // show the validation errors
          const toast: Toast = {
            type: 'warning',
            title: errorMessage,
            body: '<ul>' + htmlUlList + '</ul>',
            bodyOutputType: BodyOutputType.TrustedHtml
          };
          this.toasterService.pop(toast);
        }
      }
    }
  }
}
