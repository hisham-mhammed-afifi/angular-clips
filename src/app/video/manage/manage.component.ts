import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import IClip from 'src/app/models/clip.model';
import { ClipService } from 'src/app/services/clip.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  sort$: BehaviorSubject<string>;
  videoOrder = '1';
  clips: IClip[] = [];
  activeClip: IClip | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clipService: ClipService,
    private modal: ModalService
  ) {
    this.sort$ = new BehaviorSubject(this.videoOrder);
    this.sort$.next(this.videoOrder);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.videoOrder = params.sort === '2' ? params.sort : '1';
    });

    // get all user clips
    this.clipService.getUserClips(this.sort$).subscribe((docs) => {
      this.clips = [];
      docs.forEach((d) => {
        this.clips.push({
          docID: d.id,
          ...d.data(),
        });
      });
    });
  }

  sort(e: Event) {
    const { value } = e.target as HTMLSelectElement;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sort: value },
    });
  }

  openModal(e: Event, clip: IClip) {
    e.preventDefault();
    this.activeClip = clip;
    this.modal.toggleModal('editClip');
  }

  update(e: IClip) {
    this.clips.forEach((el, i) => {
      if (el.docID == e.docID) {
        this.clips[i].title = e.title;
      }
    });
  }

  deleteClip(e: Event, clip: IClip) {
    e.preventDefault();
    this.clipService.deleteClip(clip);
    this.clips.forEach((el, i) => {
      if (el.docID == clip.docID) {
        this.clips.splice(i, 1);
      }
    });
  }

  async copyToClipboard(e: MouseEvent, docID: string | undefined) {
    e.preventDefault();
    if (!docID) return;
    const url = `${location.origin}/clip/${docID}`;
    await navigator.clipboard.writeText(url);
  }
}
