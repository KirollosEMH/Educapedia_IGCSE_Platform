function selectedVideo(self){
    var file = self.files[0];
    var reader = new FileReader();
    reader.onload = function(e){
        var src = e.target.result;
        var video = document.getElementById("video");
        var source = document.getElementById("source");
        source.setAttribute("src",src);
        video.load();
        video.play();
    }
    reader.readAsDataURL(file);
}