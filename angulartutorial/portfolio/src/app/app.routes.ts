  import { Routes } from '@angular/router';
  import { Home } from './pages/home/home';
  import { Project } from './pages/project/project';
  import { Contact } from './pages/contact/contact';
  import { NotFound } from './pages/not-found/not-found';

  export const routes: Routes = [
    {
      path: '',
      redirectTo: 'about',
      pathMatch: 'full',
    },
    { path: 'about', component: Home },
    { path: 'project', component: Project },
    { path: 'contact', component: Contact },
    { path: '**', component: NotFound },
  ];
