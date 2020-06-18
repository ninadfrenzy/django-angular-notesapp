import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private router: Router) {

  }
  title = 'frontend-CRUD';
  noteText = '';
  noteId = 0;
  saveNote() {
    this.http.post('//127.0.0.1:8000/crudapp/save', { note_text: this.noteText, note_id: this.noteId},
    ).subscribe(data => {
      console.log(data);
    });
  }
  showAllNotes() {
    this.router.navigateByUrl('notes')
  }
}
