
// tsc related 
// https://stackoverflow.com/questions/54014405/ts2585-promise-only-refers-to-a-type-but-is-being-used-as-a-value-here

type VideoSize = {
  width:number;
  height:number;
}

function getVideoSize(v:HTMLVideoElement) {
  return new Promise<VideoSize>((resolve, reject) => {
    v.addEventListener( "loadedmetadata", function () {
			// send back result
			resolve({width:this.videoWidth, height: this.videoHeight});
      //reject(new Error('failed'));
		}, false );
  });
}

async function play_video()
{
  const v = document.querySelector('#video') as HTMLVideoElement;

  console.dir(v);
  v.msHorizontalMirror = true;

  const m = v as HTMLMediaElement;
  m.src = 'ThroughTheNight.webm';
  m.controls = true;
  m.autoplay = true;
  m.load();
  const vsize = await getVideoSize(v);
  console.log('video size=', vsize);
}

play_video();