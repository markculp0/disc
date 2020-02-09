import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

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

  constructor(private fb: FormBuilder, private discService: DiscService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {

    this.discService.getDiscs()
    .subscribe(discs => this.discs = discs);
  }

  createForm() {
    this.discsearchForm = this.fb.group({
      id: [0, Validators.required]
    });
  }

  onSubmit() {
    this.disc = this.discsearchForm.value;
    console.log(this.disc.id);

    this.selectedDisc = this.discs[this.disc.id]
    
    // Alter shared discs
    this.discService.changeDisc(this.selectedDisc);
    this.discService.changeDiscs(this.discs);

    // Set local current discs
    this.curDisc = this.selectedDisc;
    this.curDiscs = this.discs;

    this.router.navigateByUrl('/albumdetail/' + this.disc.id);

    this.feedbackFormDirective.resetForm();
    this.discsearchForm.reset({
      id: 0
    });

  }

}
