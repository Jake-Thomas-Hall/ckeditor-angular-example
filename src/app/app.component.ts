import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  editor!: ClassicEditor;
  savedContent: string = '';
  @ViewChild('editor') editorElement!: ElementRef;

  ngAfterViewInit(): void {
    ClassicEditor.create(this.editorElement.nativeElement).then((editor: ClassicEditor) => {
      this.editor = editor;
      this.editor.model.document.on('change:data', () => this.saveContent());
    });
  }

  saveContent(): void {
    this.savedContent = this.editor.getData();
  }

  setContent(): void {
    this.editor.setData('<p>Imagine you pulled this string from your database :)</p>');
  }
}
