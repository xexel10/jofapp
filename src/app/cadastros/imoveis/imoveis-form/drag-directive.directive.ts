import { DomSanitizer } from '@angular/platform-browser';
import { Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { FileHandle } from './../../../models/file-handle';


@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Output() files: EventEmitter<FileHandle> = new EventEmitter();
  
  @HostBinding("style.background") private backGround = "#eee";
  

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent){
      evt.preventDefault();
      evt.stopPropagation();
      this.backGround = "#999";
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.backGround = "#eee";
  }

  @HostListener("drop", ["$event"])
  public onDrop(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.backGround = "#eee";

    let fileHandle = {} as FileHandle;
    
    const file = evt.dataTransfer?.files[0];
    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file!));

    fileHandle = {file, url};
    this.files.emit(fileHandle);


  }

}
