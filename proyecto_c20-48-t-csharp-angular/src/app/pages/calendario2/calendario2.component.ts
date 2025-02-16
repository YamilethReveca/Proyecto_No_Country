import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-calendario2',
  templateUrl: './calendario2.component.html',
  styleUrls: ['./calendario2.component.css']
})
export class Calendario2Component implements OnInit {

    // selected: Date | null;

    week: any = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo"
    ];

    monthSelect: any[];
    dateSelect: any;
    dateValue: any;

    constructor() { }

    ngOnInit(): void {
        this.getDaysFromDate(9, 2024)
    }

    getDaysFromDate(month, year) {

        const startDate = moment(`${year}/${month}/01`)
        const endDate = startDate.clone().endOf('month')
        this.dateSelect = startDate;
    
        const diffDays = endDate.diff(startDate, 'days', true)
        const numberDays = Math.round(diffDays);
    
        const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
          a = parseInt(a) + 1;
          const dayObject = moment(`${year}-${month}-${a}`);
          return {
            name: dayObject.format("dddd"),
            value: a,
            indexWeek: dayObject.isoWeekday()
          };
        });
        this.monthSelect = arrayDays;
    }

    
  changeMonth(flag) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;

  }
}
