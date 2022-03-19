import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
    ClassicEditor.create(this.editorElement.nativeElement, {
      // Remove items that aren't useable without additional implementation
      toolbar: {
        removeItems: ['mediaEmbed', 'uploadImage']
      }
    }).then((editor: ClassicEditor) => {
      // Set the editor into component for later use
      this.editor = editor;
      // listen to changes and run the saveContent method when there are changes.
      this.editor.model.document.on('change:data', () => this.saveContent());
      // Set the initial content into the savedContent property
      this.savedContent = this.editor.getData();
    });
  }

  saveContent(): void {
    this.savedContent = this.editor.getData();
  }

  setContent(): void {
    this.editor.setData('<p>Imagine you pulled this string from your database :)</p>');
  }
}
