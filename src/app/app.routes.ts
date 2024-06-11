import { Routes } from '@angular/router';
import { PublicModule } from './Public/public/public.module';

export const routes: Routes = [

    {path:'',
    loadChildren: () => import('./Public/public/public.module').then(module => module.PublicModule),
    title:'Main',
    },

];
