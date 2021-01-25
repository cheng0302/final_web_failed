<template>
  <div class="container">
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas: null,
    }
  },
  created() {
    const sketch = p5 => {
        let w = 720;
        let h = 500;

        // let w = window.innerWidth;
        // let h = window.innerHeight;

        p5.setup = () => {
            p5.createCanvas(w,h);
          }

          // the parameter at which x and y depends is usually taken as either t or symbol of theta
        
        p5.draw = () => {
            p5.background('#fff');
            p5.translate(p5.width/2,p5.height/2);
            p5.stroke('#0f0f0f');
            p5.strokeWeight(1.5);
          
            for(let i = 0;i<100;i++){
              p5.line(x1(p5.t+i),y1(p5.t+i),x2(p5.t+i)+20,y2(p5.t+i)+20);
            }
            p5.t+=0.15;
          }

            // function to change initial x co-ordinate of the line
            function x1(t){
              return p5.sin(t/10)*125+p5.sin(t/20)*125+p5.sin(t/30)*125;
          }

            // function to change initial y co-ordinate of the line
            function y1(t){
              return p5.cos(t/10)*125+p5.cos(t/20)*125+p5.cos(t/30)*125;
            }

            // function to change final x co-ordinate of the line
            function x2(t){
              return p5.sin(t/15)*125+p5.sin(t/25)*125+p5.sin(t/35)*125;
            }

            // function to change final y co-ordinate of the line
            function y2(t){
              return p5.cos(t/15)*125+p5.cos(t/25)*125+p5.cos(t/35)*125;
            }
        }

    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  unmounted () {
    this.p5Canvas = null;
  },
}
</script>