import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MultipartItem, ODMultipartSendService} from '../../../core/od-multipart-send.service';
import {CompetitionFiles} from '../../../admin/edit/shared/competition';

@ Component({
  selector: 'od-expansion-year-files',
  templateUrl: './expansion-year-files.component.html'
})
export class ExpansionYearFilesComponent implements OnInit {
  @Input() title: string;
  @Input() shortDescription: string;

  @Input() competitionFile: CompetitionFiles[] = [];
  @Output() competitionFileChange: EventEmitter<CompetitionFiles[]> = new EventEmitter<CompetitionFiles[]>();

  constructor(private multipart: ODMultipartSendService) {
  }

  ngOnInit() {
    this.competitionFile = this.competitionFile || [];
    this.emitFiles();
    if (!(this.competitionFile.length && !this.competitionFile[this.competitionFile.length - 1].title)) {
      this.competitionFile.push(new CompetitionFiles());
    }
  }

  public emitFiles() {
    this.competitionFileChange.emit(this.competitionFile)
  }

  public loadFile(file: File, idx: number) {
    let multipartItems: MultipartItem[] = [
      {name: 'logo', value: file},
      {name: 'type', value: 'files'}
    ];

    this.multipart.sendMultipart<{ url: string }>(`upload`, multipartItems).subscribe(data => {
      this.competitionFile[idx].url = data.url;
      this.competitionFile[idx].name = file.name;
      this.emitFiles();
    });
  }

  public removeCompetitionFile(idx: number) {
    if (idx == this.competitionFile.length - 1) return;
    this.competitionFile = this.competitionFile.filter((value, index) => idx != index);
    this.emitFiles();
  }

  public changeTitle(idx, title) {
    this.competitionFile[idx].title = title;
    this.emitFiles();

    if (title && idx == this.competitionFile.length - 1) {
      this.competitionFile.push(new CompetitionFiles());
    }
  }
}
