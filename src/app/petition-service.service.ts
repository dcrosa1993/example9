import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Petition } from './petition';

@Injectable({
  providedIn: 'root'
})
export class PetitionServiceService {
  response:Petition[] =[
    {
      state:"Candidate",
      title:"Title_1",
      subtitle:"Subtitle_1",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem dolorem voluptate maxime in quae et placeat optio, ea molestiae pariatur, beatae est nam suscipit ipsam, doloremque quaerat dolor repudiandae!",
      now_signatures:"25000",
      total_signatures:"500000"
    },
    {
      state:"Candidate",
      title:"Title_2",
      subtitle:"Subtitle_2",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem dolorem voluptate maxime in quae et placeat optio, ea molestiae pariatur, beatae est nam suscipit ipsam, doloremque quaerat dolor repudiandae!",
      now_signatures:"25000",
      total_signatures:"500000"
    },
    {
      state:"Candidate",
      title:"Title_3",
      subtitle:"Subtitle_3",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem dolorem voluptate maxime in quae et placeat optio, ea molestiae pariatur, beatae est nam suscipit ipsam, doloremque quaerat dolor repudiandae!",
      now_signatures:"25000",
      total_signatures:"500000"
    },
    {
      state:"Candidate",
      title:"Title_4",
      subtitle:"Subtitle_4",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem dolorem voluptate maxime in quae et placeat optio, ea molestiae pariatur, beatae est nam suscipit ipsam, doloremque quaerat dolor repudiandae!",
      now_signatures:"25000",
      total_signatures:"500000"
    },
  ];

  response2:Petition[] =[
   
    {
      state:"Candidate",
      title:"Title_5",
      subtitle:"Subtitle_3",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem dolorem voluptate maxime in quae et placeat optio, ea molestiae pariatur, beatae est nam suscipit ipsam, doloremque quaerat dolor repudiandae!",
      now_signatures:"25000",
      total_signatures:"500000"
    },
    {
      state:"Candidate",
      title:"Title_6",
      subtitle:"Subtitle_4",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem dolorem voluptate maxime in quae et placeat optio, ea molestiae pariatur, beatae est nam suscipit ipsam, doloremque quaerat dolor repudiandae!",
      now_signatures:"25000",
      total_signatures:"500000"
    },
  ];
  private subject = new BehaviorSubject<Petition[]>([]);
  petitons$ = this.subject.asObservable();
  
  constructor() { 
    //en este momento hariamos un llamado a la API, pedimos la informacion y la nexeamos en el BehaviorSubject, de esta forma la podemos exponer
    this.subject.next(this.response);
  }
  showMore() {
    //pide una tanda nueva de peticiones
    this.subject.next(this.response2);
  }
}
