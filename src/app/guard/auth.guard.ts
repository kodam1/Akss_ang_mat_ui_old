import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../services/master.service';

export const authGuard: CanActivateFn = (route, state) => {



  let router = inject(Router);
  let service = inject(MasterService)


  // if(route.url.length > 0) {
  //   let menu = route.url[0].path;
  //   if(menu === 'customer'){
  //     alert('You don\'t have permission !');
  //     // router.navigate(['about']);
  //     router.navigateByUrl('/about');
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }else{
  //   return true
  // }

  if(service.IsLoggedIn()){
    return true;
  }else{
    alert('unathorise access');

    router.navigate(['login']);
    return false;
  }


  return true
};
