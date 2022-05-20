import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-student-marks-table',
  templateUrl: './student-marks-table.component.html',
  styleUrls: ['./student-marks-table.component.css'],
})
export class StudentMarksTableComponent implements OnInit {
  constructor(private studentService: StudentsService) {}
  sub1Clicks = 0;
  sub2Clicks = 0;
  sub3Clicks = 0;
  studentsData = [];
  studentsDataCopy = [];

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.studentsData = data;
      this.studentsDataCopy = data;
    });
  }

  sortData(sort: Sort) {
    const data = this.studentsData.slice();
    if (!sort.active || sort.direction === '') {
      this.studentsDataCopy = data;
      return;
    }

    this.studentsDataCopy = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'class':
          return compare(a.class, b.class, isAsc);
        case 'section':
          return compare(a.section, b.section, isAsc);
        case 'sub1':
          return compare(a.sub1, b.sub1, isAsc);
        case 'sub2':
          return compare(a.sub2, b.sub2, isAsc);
        case 'sub3':
          return compare(a.sub3, b.sub3, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
