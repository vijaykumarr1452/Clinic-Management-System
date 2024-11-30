import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openAV() {
    const url = '../../assets/referenceValues/Av1.pdf'
    window.open(url)
  }
  openLVF() {
    const url = '../../assets/referenceValues/lv1.pdf'
    window.open(url)
  }
  openLVD() {
    const url = '../../assets/referenceValues/lv2.pdf'
    window.open(url)
  }
  openLVV() {
    const url = '../../assets/referenceValues/lv3.pdf'
    window.open(url)
  }
  openLVM() {
    const url = '../../assets/referenceValues/lv4.pdf'
    window.open(url)
  }
  openLVS() {
    const url = '../../assets/referenceValues/lv5.pdf'
    window.open(url)
  }
  openRV1() {
    const url = '../../assets/referenceValues/RV1.pdf'
    window.open(url)
  }
  openLA1() {
    const url = '../../assets/referenceValues/LA1.pdf'
    window.open(url)
  }
  openLA2() {
    const url = '../../assets/referenceValues/LA2.pdf'
    window.open(url)
  }
  openMV1() {
    const url = '../../assets/referenceValues/Mv1.pdf'
    window.open(url)
  }
  openTV1() {
    const url = '../../assets/referenceValues/Tv1.pdf'
    window.open(url)
  }
  openPV1() {
    const url = '../../assets/referenceValues/pv1.pdf'
    window.open(url)
  }
  openIVC() {
    const url = '../../assets/referenceValues/Ivc1.pdf'
    window.open(url)
  }
  openReference() {
    const url = '../../assets/referenceValues/reference_values.pdf'
    window.open(url)
  }
}
