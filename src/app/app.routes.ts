import { Routes } from '@angular/router';
import { Viewport } from './viewport/viewport';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Testimonials } from './testimonials/testimonials';
import { PracticeArea } from './practice-area/practice-area';
import { Gallery } from './gallery/gallery';
import { Vision } from './vision/vision';
import { Rewards } from './rewards/rewards';

export const routes: Routes = [
    // {
    //     path: '', component: Viewport,
    //     children: [
    //         { path: '', component: Homepage },
    //         { path: 'about', component: About },
    //         { path: 'contact', component: Contact },
    //         { path: 'testimonials', component: Testimonials },
    //         { path: 'practice-area', component: PracticeArea },
    //         { path: 'gallery', component: Gallery },
    //         { path: 'vision', component: Vision },
    //         { path: 'rewards', component: Rewards }
    //     ]
    // }
    { path: '', component: Homepage }
];
