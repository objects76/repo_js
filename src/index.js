// tsc related 
// https://stackoverflow.com/questions/54014405/ts2585-promise-only-refers-to-a-type-but-is-being-used-as-a-value-here
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getVideoSize(v) {
    return new Promise((resolve, reject) => {
        v.addEventListener("loadedmetadata", function () {
            // send back result
            resolve({ width: this.videoWidth, height: this.videoHeight });
            //reject(new Error('failed'));
        }, false);
    });
}
function play_video() {
    return __awaiter(this, void 0, void 0, function* () {
        const v = document.querySelector('#video');
        console.dir(v);
        v.msHorizontalMirror = true;
        const m = v;
        m.src = 'ThroughTheNight.webm';
        m.controls = true;
        m.autoplay = true;
        m.load();
        const msg = yield getVideoSize(v);
        console.log('video size=', msg);
    });
}
play_video();
