import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-lostpass',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lostpass.component.html',
  styleUrl: './lostpass.component.scss'
})

export class LostpassComponent {
  constructor(private api: ApiService, private message:MessageService){}

  email: string = ""
  sendmail(){
    if(!this.email){
      this.message.showMessage('HIBA', "Nem adott meg email címet", "danger")
      return
    }

    if(this.email){
      
      this.api.read('users', 'email', 'eq', this.email).subscribe((res:any)=>{
        if(res.length == 0){
          this.message.showMessage('HIBA', "Az email címet nem regisztrálták", "danger")
          return
        }
        console.log(res)
        let data = {
          to: this.email,
          subject: "Jelszó bebúrása",
          content: {
              link: `http://localhost:3000/restorepass/${res[0].id}/${res[0].secret}`
          },
          template: "lostpass"
        }
  
        this.api.sendMail(data).subscribe(res=>{
          
        })

      })

      
    }
   
  }
}
