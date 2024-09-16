

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["defeb1c8-9c32-4f40-bcc3-fb9c37b2522c","fa7edb39-7714-46bd-a08e-8d4498e1dafb","52559e59-7ff4-469c-a1b3-c67a7a4769a8","3ef4d174-077f-4dcd-83b3-597095027748","f9e01ff3-94c9-4834-854f-10ad58c0ed15","15585eb8-18e4-40d0-ac0d-6d9ff83428c7","96dadc9c-4888-4b13-99fc-752369e0905b","3e5b9ce9-8efd-479a-9ab0-ff46052a0698","3d85274d-5857-48a5-9d4b-b7401d06daf4","74ce12b9-d448-43c8-bc0e-6a9edab9d457","5ec86a93-8ee7-4eb8-a2cd-bd819bcdd4f4","afdbcd43-a35a-426d-931b-975e70ed84c9","e5b678cb-e961-403a-a800-6e921288098e","a7c01fb5-edef-474c-abe2-8be97cb30993","fb960d6e-5144-4e7b-b26e-2443317df4b0","8d9b78a0-9630-42aa-b7df-b6a80c0caa9b","047686ad-8ea2-437a-87bf-cff4cc2edcba","cd629ee7-9591-42a2-a713-1d481ec7f3aa","c95a944b-3444-4aea-9a1d-07915a53e358"],"propsByKey":{"defeb1c8-9c32-4f40-bcc3-fb9c37b2522c":{"name":"1ball","sourceUrl":null,"frameSize":{"x":101,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"1LUieoEuK6IN0M_cAYZQD9WtnS9ualB0","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":101},"rootRelativePath":"assets/defeb1c8-9c32-4f40-bcc3-fb9c37b2522c.png"},"fa7edb39-7714-46bd-a08e-8d4498e1dafb":{"name":"pmine","sourceUrl":null,"frameSize":{"x":101,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"7vkZuN3jNk6a3dmeJICNacEpcDrdIDD9","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":101},"rootRelativePath":"assets/fa7edb39-7714-46bd-a08e-8d4498e1dafb.png"},"52559e59-7ff4-469c-a1b3-c67a7a4769a8":{"name":"nmine","sourceUrl":null,"frameSize":{"x":101,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"XDdRiy_TfAaFXun4Sb6cr1aDK0Vg72qN","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":101},"rootRelativePath":"assets/52559e59-7ff4-469c-a1b3-c67a7a4769a8.png"},"3ef4d174-077f-4dcd-83b3-597095027748":{"name":"neutral","sourceUrl":null,"frameSize":{"x":101,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"gWtfAeXQw5FIqUedJdazojEOaMevSQSW","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":101},"rootRelativePath":"assets/3ef4d174-077f-4dcd-83b3-597095027748.png"},"f9e01ff3-94c9-4834-854f-10ad58c0ed15":{"name":"positives","sourceUrl":null,"frameSize":{"x":101,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"03jlaWLfh.KgwkiBBYbGkz7WcVjvdK4q","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":101},"rootRelativePath":"assets/f9e01ff3-94c9-4834-854f-10ad58c0ed15.png"},"15585eb8-18e4-40d0-ac0d-6d9ff83428c7":{"name":"negatives","sourceUrl":null,"frameSize":{"x":101,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"8eRnxUpK.MZQl0lOiVZyHF7.mfZ4UoLW","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":101},"rootRelativePath":"assets/15585eb8-18e4-40d0-ac0d-6d9ff83428c7.png"},"96dadc9c-4888-4b13-99fc-752369e0905b":{"name":"2ball","sourceUrl":null,"frameSize":{"x":101,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"5l5Xn2qLWLwu074eVX5Y6CvbS_OTjp_9","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":101},"rootRelativePath":"assets/96dadc9c-4888-4b13-99fc-752369e0905b.png"},"3e5b9ce9-8efd-479a-9ab0-ff46052a0698":{"name":"1bounce","sourceUrl":null,"frameSize":{"x":151,"y":201},"frameCount":3,"looping":true,"frameDelay":4,"version":"zzXh.Tyu8zyI7.AHcONgxQk5PnPdHYIY","loadedFromSource":true,"saved":true,"sourceSize":{"x":302,"y":402},"rootRelativePath":"assets/3e5b9ce9-8efd-479a-9ab0-ff46052a0698.png"},"3d85274d-5857-48a5-9d4b-b7401d06daf4":{"name":"2bounce","sourceUrl":null,"frameSize":{"x":151,"y":201},"frameCount":3,"looping":true,"frameDelay":12,"version":"ZvOGdcUJNv3oHt40crrRfTvEUfGeb6Ch","loadedFromSource":true,"saved":true,"sourceSize":{"x":302,"y":402},"rootRelativePath":"assets/3d85274d-5857-48a5-9d4b-b7401d06daf4.png"},"74ce12b9-d448-43c8-bc0e-6a9edab9d457":{"name":"bosslaser","sourceUrl":null,"frameSize":{"x":200,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"NKziL5KHOym5fGSsYyDnvejpQRpXmM.l","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":101},"rootRelativePath":"assets/74ce12b9-d448-43c8-bc0e-6a9edab9d457.png"},"5ec86a93-8ee7-4eb8-a2cd-bd819bcdd4f4":{"name":"arrowindicator","sourceUrl":null,"frameSize":{"x":200,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"anI0KgNeE2FegtOkpsr03PC4NlautXZg","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":101},"rootRelativePath":"assets/5ec86a93-8ee7-4eb8-a2cd-bd819bcdd4f4.png"},"afdbcd43-a35a-426d-931b-975e70ed84c9":{"name":"hammer","sourceUrl":null,"frameSize":{"x":300,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"i7ma4YPhYtEVRCPo8PrAEWBUl5smSHyh","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":101},"rootRelativePath":"assets/afdbcd43-a35a-426d-931b-975e70ed84c9.png"},"e5b678cb-e961-403a-a800-6e921288098e":{"name":"gunboss","sourceUrl":null,"frameSize":{"x":150,"y":155},"frameCount":1,"looping":true,"frameDelay":12,"version":"sIlDRgjEURnzmFrywEe3oNfJX3Jqy1gP","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":155},"rootRelativePath":"assets/e5b678cb-e961-403a-a800-6e921288098e.png"},"a7c01fb5-edef-474c-abe2-8be97cb30993":{"name":"nothing","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"fb960d6e-5144-4e7b-b26e-2443317df4b0":{"name":"p1wall","sourceUrl":null,"frameSize":{"x":20,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"2RZvNrwb9fM8QNA35ReTDIM5h._w1uWA","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":100},"rootRelativePath":"assets/fb960d6e-5144-4e7b-b26e-2443317df4b0.png"},"8d9b78a0-9630-42aa-b7df-b6a80c0caa9b":{"name":"p2wall","sourceUrl":null,"frameSize":{"x":20,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":".Ql0kQnNteFDOymvG4_qfQ6dEcodKA.B","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":100},"rootRelativePath":"assets/8d9b78a0-9630-42aa-b7df-b6a80c0caa9b.png"},"047686ad-8ea2-437a-87bf-cff4cc2edcba":{"name":"laser","sourceUrl":null,"frameSize":{"x":1000,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"LeiHUEF4EOZLcUW2BMRJRt4Jwl0m.JkJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":250},"rootRelativePath":"assets/047686ad-8ea2-437a-87bf-cff4cc2edcba.png"},"cd629ee7-9591-42a2-a713-1d481ec7f3aa":{"name":"blast","sourceUrl":null,"frameSize":{"x":151,"y":151},"frameCount":1,"looping":true,"frameDelay":12,"version":"EgNv7KGc_X_J8C0K2GKAs4jrIzt2hfzn","loadedFromSource":true,"saved":true,"sourceSize":{"x":151,"y":151},"rootRelativePath":"assets/cd629ee7-9591-42a2-a713-1d481ec7f3aa.png"},"c95a944b-3444-4aea-9a1d-07915a53e358":{"name":"pblast","sourceUrl":null,"frameSize":{"x":31,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"FL_BzJieod7bSL2KAryHrPktpL7aLOkp","loadedFromSource":true,"saved":true,"sourceSize":{"x":31,"y":13},"rootRelativePath":"assets/c95a944b-3444-4aea-9a1d-07915a53e358.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var p1=createSprite(5,200);
var p2=createSprite(395,200);
var ball=createSprite(200,200);
var ballcharge=0;
ball.setAnimation("neutral");
p1.setAnimation("p1wall");
p2.setAnimation("p2wall");
p1.scale=0.5;
  ball.setSpeedAndDirection(10,0);
p2.scale=0.5;
var positionlist=[200,200,200,200,200,200,200,200,200,200,200,200,200,200];
ball.scale=0.4;
var chargeorb=createSprite(20000,100);
var scharge=0;
var timecounter=0;
var occur=0;
var balltrace=createSprite(0,0);
var effectradius=createSprite(2000,20);
var trace1=createSprite(0,200);
trace1.setAnimation("nothing");
var trace2=createSprite(400,200);
trace2.setAnimation("nothing");
var bspin=0;
var mine=createSprite(200,2000);
mine.scale=0.4;
mine.setAnimation("pmine");

effectradius.setAnimation("nothing");
balltrace.setAnimation("nothing");
function draw() {
mine.setCollider("circle",0,0,27);
  trace1.x=p1.x;trace1.y=p1.y;
  trace2.x=p2.x;trace2.y=p2.y;
  trace1.pointTo(ball.x,ball.y);
  trace2.pointTo(ball.x,ball.y);
  effectradius.debug=true;
  effectradius.setCollider("circle",0,0,150);
  chargeorb.debug=true;
  chargeorb.setCollider("circle",0,0,25);
  ball.bounceOff(chargeorb);
  balltrace.x=ball.x;balltrace.y=ball.y;
  balltrace.pointTo(chargeorb.x,chargeorb.y);
  timecounter=timecounter+1;
  
  if(timecounter>150){occur=randomNumber(1,1);}
  if(occur==1){  effectradius.x=chargeorb.x;effectradius.y=chargeorb.y;
if(chargeorb.y>550){occur=0;timecounter=0;chargeorb.setSpeedAndDirection(0,0);chargeorb.y=-2000}if(timecounter==152){if(ballcharge==1){scharge=-1;chargeorb.setAnimation("negatives")}else{scharge=1;chargeorb.setAnimation("positives")}chargeorb.x=200;chargeorb.y=-100;chargeorb.setSpeedAndDirection(1,90+randomNumber(-10,10))}}
  if(ball.isTouching(effectradius)){
  if(ballcharge==1&&scharge==1){ball.addSpeed(0.5,balltrace.rotation)}
    if(ballcharge==1&&scharge==-1){ball.addSpeed(-0.25,balltrace.rotation)}
      if(ballcharge==-1&&scharge==1){ball.addSpeed(-0.25,balltrace.rotation)}
        if(ballcharge==-1&&scharge==-1){ball.addSpeed(0.5,balltrace.rotation)}}
  if(occur==2){  effectradius.x=mine.x;effectradius.y=mine.y;
  if(timecounter==152){if(ballcharge==1){scharge=-1}else{scharge=1}}
  if(scharge==-1){mine.setAnimation("nmine")}
  if(scharge==1){mine.setAnimation("pmine")}
  mine.pointTo(ball.x,ball.y);
   if(ball.isTouching(effectradius)){
  if(ballcharge==1&&scharge==1){mine.addSpeed(0.15,mine.rotation)}
    if(ballcharge==1&&scharge==-1){mine.addSpeed(-0.15,mine.rotation)}
      if(ballcharge==-1&&scharge==1){mine.addSpeed(-0.15,mine.rotation)}
        if(ballcharge==-1&&scharge==-1){mine.addSpeed(0.15,mine.rotation)}}
  
}
  p1.debug=true;
  p2.debug=true;
ball.setSpeed(ball.getSpeed(),ball.getDirection()+bspin);
bspin=bspin/1.1;
  if(keyDown("b")){ball.x=200,ball.y=200}
    background("black");
    if(ball.y>390){ball.velocityY=ball.velocityY*-1;ball.y=390}
    if(ball.y<10){ball.velocityY=ball.velocityY*-1;ball.y=10}
    if(ball.isTouching(p1)){if(keyDown("w")){bspin=5;if(keyDown("s")){bspin=0}}if(keyDown("s")){bspin=-5;if(keyDown("w")){bspin=0}}ball.setSpeedAndDirection(ball.getSpeed(),(ball.y-p1.y)*2);ballcharge=ballcharge-2}
    if(ball.isTouching(p2)){if(keyDown("up")){bspin=-5;if(keyDown("down")){bspin=0}}if(keyDown("down")){bspin=5;if(keyDown("up")){bspin=0}}ball.setSpeedAndDirection(ball.getSpeed(),180+(ball.y-p2.y)*-2);ballcharge=ballcharge+2}
if(ballcharge>1){ballcharge=1}
if(ballcharge<-1){ballcharge=-1}
ball.debug=true;
ball.setCollider("circle",0,0,27);
    stroke(rgb(0, 0, 0));
    strokeWeight(7);
    if(keyDown("n")){console.log(ball.getSpeed())}
line(ball.x,ball.y,positionlist[12],positionlist[13]);
  strokeWeight(6);
line(positionlist[12],positionlist[13],positionlist[10],positionlist[11]);
  strokeWeight(5);
line(positionlist[10],positionlist[11],positionlist[8],positionlist[9]);
  strokeWeight(4);
line(positionlist[8],positionlist[9],positionlist[6],positionlist[7]);
  strokeWeight(3);
line(positionlist[6],positionlist[7],positionlist[4],positionlist[5]);
  strokeWeight(2);
line(positionlist[4],positionlist[5],positionlist[2],positionlist[3]);
  strokeWeight(1);
line(positionlist[2],positionlist[3],positionlist[0],positionlist[1]);
  if(ballcharge==-1){stroke(rgb(0, 144, 256))}
  if(ballcharge==1){stroke(rgb(255, 0, 0))}
  if(ballcharge==0){stroke(rgb(144,0,144))}
  strokeWeight(6);
line(ball.x,ball.y,positionlist[12],positionlist[13]);
  strokeWeight(5);
line(positionlist[12],positionlist[13],positionlist[10],positionlist[11]);
  strokeWeight(4);
line(positionlist[10],positionlist[11],positionlist[8],positionlist[9]);
  strokeWeight(3);
line(positionlist[8],positionlist[9],positionlist[6],positionlist[7]);
  strokeWeight(2);
line(positionlist[6],positionlist[7],positionlist[4],positionlist[5]);
  strokeWeight(1);
line(positionlist[4],positionlist[5],positionlist[2],positionlist[3]);
 removeItem(positionlist,0);
 removeItem(positionlist,0);
 appendItem(positionlist,ball.x);
 appendItem(positionlist,ball.y);

  if(keyDown("w")){p1.y=p1.y-10}
  if(keyDown("s")){p1.y=p1.y+10}
  if(keyDown("up")){p2.y=p2.y-10}
  if(keyDown("down")){p2.y=p2.y+10}
  if(p1.y>380){p1.y=380}
  if(p1.y<20){p1.y=20}
  if(p2.y>380){p2.y=380}
  if(p2.y<20){p2.y=20}
  if(keyDown("v")){if(p2.y>ball.y){p2.y=p2.y-8}else{p2.y=p2.y+8}}
    p1.setCollider("rectangle",0,0,20,100,0);
  
  p2.setCollider("rectangle",0,0,20,100,0);
  
      if(ball.getSpeed()>15){ball.setSpeedAndDirection(15,ball.getDirection())}

  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
