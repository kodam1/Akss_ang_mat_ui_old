import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
              provideHttpClient(),provideToastr({closeButton:true,preventDuplicates:true}),
              {
                provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
                // useValue :{
                //     appearance : 'fill',
                //     hideRequiredMarker : false,
                //     errorStateMatcher : null,
                //     showOnDirtyOrSubmit : true,
                //     updateOn : 'blur',
                //     validators : null,
                //     errorMessages : null,
                //     suffix : null,
                //     prefix : null,
                //     disabled : false,
                //     required : false,
                //     requiredTrueValue : true,
                //     requiredFalseValue : false,
                //     type : null,
                //     placeholder : null,
                //     label : null,
                //     labelPosition : 'above',
                //     appearance : 'legacy',
                //     floatLabel : 'auto',
                //     validators : null,
                //     asyncValidators : null,
                //     control : null,
                //     parent : null,
                //     value : null,
                //     valueChanges : null,
                //     touched : false,
                //     dirty : false,
                //     pending : false,
                //     errors : null,
                //     asyncErrors : null,
                //     status : null,
                //     disabled : false,
                //     readonly : false,
                //     tabIndex : null,
                // }

                useValue :{
                  appearance : 'fill', // fill is default value
                  subscriptSizing : 'dynamic', // static is default options

              }
              }
  ]
};
