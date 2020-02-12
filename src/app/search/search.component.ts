import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Disc } from '../shared/disc';
import { DiscService } from '../services/disc.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  discsearchForm: FormGroup;
  disc: Disc;

  discs: Disc[];
  selectedDisc: Disc;

  // Current shared discs
  curDisc: Disc;
  curDiscs: Disc[];

  @ViewChild('fform', {static: false} ) feedbackFormDirective: any;

  constructor(private fb: FormBuilder,
              private discService: DiscService,
              private http: HttpClient,
              private router: Router,
              @Inject('BaseURL') public BaseURL) {
    this.createForm();
  }

  ngOnInit() {
    // Get Discs array from HTTP
    this.discService.getDiscs()
      .subscribe(discs => this.discs = discs);

  }

  createForm() {
    this.discsearchForm = this.fb.group({
      id: [0, Validators.required]
    });
  }

  onSubmit() {
    // Get disc ID from form
    this.disc = this.discsearchForm.value;

    const fld = 'ids';
    let obj = {};
    obj[fld] = this.disc.id;
    const formData = JSON.stringify(obj);

    // const formData = JSON.stringify({ ids: `this.disc.id` });
    console.log(formData);

    // const fd = this.disc.id.split('\n').map(x => ({ids: x}));
    // const formData = JSON.stringify(fd);
    // console.log(formData);

    // const formData = JSON.stringify({
    //   ids: 1234
    // });

    // const formData = JSON.stringify({
    //   ids: 1234
    // });

    // console.log(formData);

    // this.http.post<any>(this.BaseURL + 'postData', formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );

    this.discService.postData(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

    // Works!!
    // // Use ID to select disc
    // this.selectedDisc = this.discs[this.disc.id]

    // // Alter shared discs
    // this.discService.changeDisc(this.selectedDisc);
    // this.discService.changeDiscs(this.discs);

    // // Set local current discs
    // this.curDisc = this.selectedDisc;
    // this.curDiscs = this.discs;

    this.router.navigateByUrl('/albumdetail/' + this.disc.id);

    this.feedbackFormDirective.resetForm();
    this.discsearchForm.reset({
      id: 0
    });

  }

}
