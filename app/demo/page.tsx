"use client";

import { useEffect, useRef, useState } from "react";

export default function DemoPage() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const lastSpeechTime = useRef(0);
  const lastDirection = useRef("");

  const [object, setObject] = useState("Waiting...");
  const [direction, setDirection] = useState("--");
  const [distance, setDistance] = useState("--");

  const [detections, setDetections] = useState<any[]>([]);
  const [message, setMessage] = useState("");



  useEffect(() => {
    startCamera();
  }, []);




  // Draw bounding boxes
  useEffect(() => {

    const overlay =
      document.getElementById("overlay") as HTMLCanvasElement;

    const video = videoRef.current;


    if (!overlay || !video) return;

    if (video.videoWidth === 0) return;


    overlay.width = video.videoWidth;
    overlay.height = video.videoHeight;


    const ctx = overlay.getContext("2d");

    if (!ctx) return;


    ctx.clearRect(
      0,
      0,
      overlay.width,
      overlay.height
    );



    detections.forEach((obj) => {

      const [x1, y1, x2, y2] = obj.box;


      ctx.strokeStyle = "lime";
      ctx.lineWidth = 3;


      ctx.strokeRect(
        x1,
        y1,
        x2 - x1,
        y2 - y1
      );


      ctx.fillStyle = "lime";
      ctx.font = "20px Arial";


      ctx.fillText(
        obj.label,
        x1,
        y1 - 10
      );


    });


  }, [detections]);






  async function startCamera() {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video:true
        });


      if(videoRef.current){

        videoRef.current.srcObject = stream;

      }


      setInterval(
        sendFrame,
        1000
      );


    }
    catch(error){

      console.error(error);

    }

  }







  function speak(text:string){

    if("speechSynthesis" in window){

      const speech =
        new SpeechSynthesisUtterance(text);


      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;


      window.speechSynthesis.cancel();

      window.speechSynthesis.speak(
        speech
      );

    }

  }








  async function sendFrame(){

    if(
      !videoRef.current ||
      !canvasRef.current
    )
    return;



    const video =
      videoRef.current;


    const canvas =
      canvasRef.current;


    canvas.width =
      video.videoWidth;


    canvas.height =
      video.videoHeight;



    const ctx =
      canvas.getContext("2d");


    if(!ctx)
      return;



    ctx.drawImage(
      video,
      0,
      0
    );




    canvas.toBlob(
      async(blob)=>{


        if(!blob)
          return;



        const formData =
          new FormData();


        formData.append(
          "image",
          blob,
          "frame.jpg"
        );



        try{


          const response =
            await fetch(
              "http://127.0.0.1:5000/detect",
              {
                method:"POST",
                body:formData
              }
            );



          const data =
            await response.json();


          console.log(data);



          setDetections(data);




          if(data.length > 0){


            const obj =
              data[0];


            setObject(
              obj.label
            );


            setDirection(
              obj.direction
            );


            setDistance(
              obj.distance + " m"
            );



            let voiceMessage = "";


            const distanceValue =
              Number(obj.distance);



            // Direction changed

            if(
              lastDirection.current !== obj.direction
            ){

              voiceMessage =
              `${obj.label} on ${obj.direction}`;


              lastDirection.current =
              obj.direction;

            }



            // Very close object

            if(distanceValue < 1.5){

              voiceMessage =
              `Caution. ${obj.label} is very close`;

            }



            // Object nearby

            else if(distanceValue < 3){

              voiceMessage =
              `${obj.label} ahead`;

            }




            setMessage(
              voiceMessage
            );



            const now =
              Date.now();



            if(
              voiceMessage &&
              now - lastSpeechTime.current > 5000
            ){

              speak(
                voiceMessage
              );


              lastSpeechTime.current =
              now;

            }



          }
          else{


            setObject(
              "No Object"
            );


            setDirection(
              "--"
            );


            setDistance(
              "--"
            );


          }



        }
        catch(error){

          console.error(error);

        }



      },
      "image/jpeg"
    );


  }






  return (

    <div className="
      min-h-screen
      bg-black
      text-white
      flex
      flex-col
      items-center
      p-8
    ">


      <h1 className="
        text-3xl
        font-bold
        mb-6
      ">
        VisionAssist Live Demo
      </h1>




      <div className="
        relative
        w-full
        max-w-4xl
      ">


        <video

          ref={videoRef}

          autoPlay

          playsInline

          muted

          className="
            rounded-xl
            border
            border-cyan-500
            w-full
          "

        />



        <canvas

          id="overlay"

          className="
            absolute
            top-0
            left-0
            w-full
            h-full
          "

        />



        <canvas

          ref={canvasRef}

          hidden

        />


      </div>






      <div className="
        mt-8
        space-y-3
        text-xl
      ">


        <p>
          <b>Current Object:</b> {object}
        </p>


        <p>
          <b>Direction:</b> {direction}
        </p>


        <p>
          <b>Distance:</b> {distance}
        </p>


        <p className="
          text-cyan-400
        ">
          {message}
        </p>


      </div>



    </div>

  );

}
