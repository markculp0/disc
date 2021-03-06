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
  discIds: string;


  discs: Disc[];
  selectedDisc: Disc;

  // Current shared discs
  curDisc: Disc;
  curDiscs: Disc[];

  token: string;

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
    // Get disc IDs from form
    this.discIds = this.discsearchForm.value.id;

    // Get token from session storage
    this.token = sessionStorage.getItem('token');

    // Create token object
    const token_obj = {};
    token_obj['id'] = this.token;

    // Create array of object ids
    const obj = {};
    obj['ids'] = this.discIds.split('\n').map( id => ({id}));

    // Add token object to front of id object array
    obj['ids'].unshift(token_obj);
    
    //  Stringify object
    const formData = JSON.stringify(obj);

    console.log(formData);

    // this.discService.postIdNumbers(formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );

    this.discService.postIdNumbers(formData)
      .subscribe(discs => {this.discs = discs;
                           this.discService.changeDiscs(discs);
    });


    this.router.navigateByUrl('/albumlist');

    this.discsearchForm.reset({
      id: 0
    });
    this.feedbackFormDirective.resetForm();

  }

}
