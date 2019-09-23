import { ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

export abstract class AppComponentBase {
  @ViewChild('toasttype')
  public toastObj: ToastComponent;
  public position: object = { X: 'Right' };
  public toasts: { [key: string]: Object }[] = [
    {
      title: 'Warning!',
      content: 'There was a problem with your network connection.',
      cssClass: 'e-toast-warning',
      icon: 'e-warning toast-icons'
    },
    {
      title: 'Success!',
      content: 'Your message has been sent successfully.',
      cssClass: 'e-toast-success',
      icon: 'e-success toast-icons'
    },
    {
      title: 'Error!',
      content: 'A problem has been occurred while submitting your data.',
      cssClass: 'e-toast-danger',
      icon: 'e-error toast-icons'
    },
    {
      title: 'Information!',
      content: 'Please read the comments carefully.',
      cssClass: 'e-toast-info',
      icon: 'e-info toast-icons'
    }
  ];
  constructor() {}
  public warningClick(e: Object): void {
    this.toastObj.show(this.toasts[0]);
  }
}
