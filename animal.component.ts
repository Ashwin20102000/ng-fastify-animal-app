import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal, ZooService } from '../zoo.service';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  animals:Animal[]=[];
  showForm = false;
  formGroup:FormGroup;
  
  constructor(public zooService:ZooService,public fb:FormBuilder) {
    this.zooService
    .getAnimals()
    .subscribe(reply => (this.animals = reply.animals));

    this.formGroup = this.fb.group
    ({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      count: ['', [Validators.required]]
    });
   }
  ngOnInit(): void { }
  save() {
    // event preventDefault pev
    if (!this.formGroup.valid) {
      console.log(this.formGroup);

      alert('form is not valid');
      return;
    } else {
      if (this.animals.findIndex(a => a.id === this.formGroup.value.id) > -1) {
        this.zooService.patchAnimal(this.formGroup.value).subscribe(reply => {
          this.animals = reply.animals;
        console.log(this.formGroup);

          this.formGroup.reset();
          this.showForm = false;
        });
      } else {
        this.zooService.postAnimals(this.formGroup.value).subscribe(reply => {
          this.animals = reply.animals;
          this.formGroup.reset();
          this.showForm = false;
        });
      }
    }
  }

  edit(a: Animal) {
    this.formGroup.patchValue(a);
    this.showForm = true;
  }

  delete(a: Animal) {
    this.zooService
      .deleteAnimal(a)
      .subscribe(reply => (this.animals = reply.animals));
  }
}
