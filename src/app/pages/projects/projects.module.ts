import { NgModule } from '@angular/core';
import { WhatWeDoComponent } from '../../pages/what-we-do/what-we-do.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { ServicesComponent } from '../../pages/services/services.component';
import { H1z1Component } from '../../pages/projects/h1z1/h1z1.component';
import { Planetside2Component } from '../../pages/projects/planetside2/planetside2.component';
import { LandmarkComponent } from '../../pages/projects/landmark/landmark.component';
import { CloneWarsComponent } from '../../pages/projects/clone-wars/clone-wars.component';
import { FreeRealmsComponent } from '../../pages/projects/free-realms/free-realms.component';
import { JudyalbrechtComponent } from '../../pages/projects/judyalbrecht/judyalbrecht.component';
import { FoodWithFrancesComponent } from '../../pages/projects/food-with-frances/food-with-frances.component';
import { AdventurehydroComponent } from '../../pages/projects/adventurehydro/adventurehydro.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
    {path:"what", component:WhatWeDoComponent },
    {path:"services", component:ServicesComponent},
    {path:"projects", component:ProjectsComponent},
    {path:"contact", component:ContactComponent},
    {path:"projects/h1z1", component:H1z1Component},
    {path:"projects/planetside2", component:Planetside2Component},
    {path:"projects/landmark", component:LandmarkComponent},
    {path:"projects/clonewars", component:CloneWarsComponent},
    {path:"projects/freerealms", component:FreeRealmsComponent},
    {path:"projects/judyalbrecht", component:JudyalbrechtComponent},
    {path:"projects/foodwithfrances", component:FoodWithFrancesComponent},
    {path:"projects/adventurehydro", component:AdventurehydroComponent},
]

@NgModule({
    declarations: [
        WhatWeDoComponent,
        ProjectsComponent,
        ContactComponent,
        ServicesComponent,
        H1z1Component,
        Planetside2Component,
        LandmarkComponent,
        CloneWarsComponent,
        FreeRealmsComponent,
        JudyalbrechtComponent,
        FoodWithFrancesComponent,
        AdventurehydroComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
    exports: [
        RouterModule
    ]
})


export class ProjectsModule {}