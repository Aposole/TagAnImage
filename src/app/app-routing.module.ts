import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ImagesComponent } from "./images/images.component";
import { UploaderComponent } from "./uploader/uploader.component";

const appRoutes:Routes =[
  {
    path:'',component:ImagesComponent,
    children:[
      {path:'images',component:ImagesComponent,
  },]
  },
]

@NgModule

({
    declarations:[],
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
    
})
export class AppRoutingModule{}