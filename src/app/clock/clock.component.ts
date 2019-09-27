import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class Clock2 {
  private readonly ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    window.requestAnimationFrame(() => this.draw());
  }

  draw() {
    this.ctx.save();
    this.ctx.clearRect(0, 0, 500, 500);
    this.ctx.translate(250, 250);
    this.ctx.scale(1.5, 1.5);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.strokeStyle = 'black';
    this.ctx.fillStyle = 'white';
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = 'round';
    let x = 0;
    let y = 0;

    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    let hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    this.ctx.fillStyle = 'black';

   // Hour marks
   this.ctx.save();
   for (var i = 0; i < 12; i++) {
     this.ctx.beginPath();
     this.ctx.rotate(Math.PI / 6);
     this.ctx.lineWidth = 15;
     this.ctx.moveTo(140, 0);
     this.ctx.lineTo(150, 0);
     this.ctx.stroke();
   }
   this.ctx.restore();

     // Minute marks
     this.ctx.save();
     this.ctx.lineWidth = 5;
     for (i = 0; i < 60; i++) {
       if (i % 5 != 0) {
         this.ctx.beginPath();
         this.ctx.moveTo(143, 0);
         this.ctx.lineTo(147, 0);
         this.ctx.stroke();
       }
       this.ctx.rotate(Math.PI / 30);
     }
     this.ctx.restore();

    //seconds 
    this.ctx.save();
    let angelSec = (sec * Math.PI) / 30;
    this.ctx.strokeStyle = '#4242f5';
    this.ctx.fillStyle = '#4242f5';
    this.ctx.restore();
    this.ctx.beginPath();
    this.ctx.lineWidth = 14;
    this.ctx.strokeStyle = '#4242f5';
    this.ctx.arc(x, y, 100 , angelSec, 0, true);
    this.ctx.stroke();

    //minute
    this.ctx.save();
    let angelmin = (Math.PI / 30) * min + (Math.PI / 1800) * sec;
    this.ctx.strokeStyle = '#42f55d';
    this.ctx.fillStyle = '#42f55d';
    this.ctx.restore();
    this.ctx.beginPath();
    this.ctx.lineWidth = 14;
    this.ctx.strokeStyle = '#42f55d';
    this.ctx.arc(x, y, 75 , angelmin, 0, true);
    this.ctx.stroke();


   //hour
   this.ctx.save();
   let angelh =  hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec;
   this.ctx.strokeStyle = '#f5e942';
   this.ctx.fillStyle = '#f5e942';
   this.ctx.restore();
   this.ctx.beginPath();
   this.ctx.lineWidth = 14;
   this.ctx.strokeStyle = '#f5e942';
   this.ctx.arc(x, y, 50 , angelh, 0, true);
   this.ctx.stroke();
   this.ctx.restore();

   this.ctx.beginPath();
   this.ctx.lineWidth = 14;
   this.ctx.strokeStyle = '#325FA2';
   this.ctx.arc(250, 250, 240, 0, Math.PI * 2, true);
   this.ctx.stroke();

   window.requestAnimationFrame(() => this.draw());
  }
}