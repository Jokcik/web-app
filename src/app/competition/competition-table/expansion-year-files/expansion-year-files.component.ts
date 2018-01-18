import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MultipartItem, ODMultipartSendService} from '../../../core/od-multipart-send.service';
import {CompetitionFiles} from '../../../admin/edit/shared/competition';

@Component({
  selector: 'od-expansion-year-files',
  templateUrl: './expansion-year-files.component.html'
})
export class ExpansionYearFilesComponent implements OnInit {
  @Input() title: string;
  @Input() shortDescription: string;

  @Input() competitionFile: CompetitionFiles[] = [];
  @Output() competitionFileChange: EventEmitter<CompetitionFiles[]> = new EventEmitter<CompetitionFiles[]>();

  public files: File[] = [];

  constructor(private multipart: ODMultipartSendService) {
  }

  ngOnInit() {
    this.competitionFile = this.competitionFile || [];

    if (!this.competitionFile[0]) this.competitionFile[0] = new CompetitionFiles();
    if (!this.competitionFile[1]) this.competitionFile[1] = new CompetitionFiles();
    if (!this.competitionFile[2]) this.competitionFile[2] = new CompetitionFiles();

    this.files.push(new File([], this.competitionFile[0].name));
    this.files.push(new File([], this.competitionFile[1].name));
    this.files.push(new File([], this.competitionFile[2].name));

    this.emitFiles();
  }

  public emitFiles() {
    this.competitionFileChange.emit(this.competitionFile)
  }

  public loadFile(file: File, name: string, idx: number) {
    let multipartItems: MultipartItem[] = [
      {name: 'logo', value: file},
      {name: 'type', value: 'files'}
    ];

    this.multipart.sendMultipart<{ url: string }>(`upload`, multipartItems).subscribe(data => {
      this.competitionFile[idx].url = data.url;
      this.competitionFile[idx].name = name;
      this.emitFiles();
    });
  }

  public changeTitle(idx, title) {
    this.competitionFile[idx].title = title;
    console.log('changeTitle', this.competitionFile);
    this.emitFiles();
  }
}
