function selectedVideo(self){
    var file = self.files[0];
    var reader = new FileReader();
    reader.onload = function(e){
        var src = e.target.result;
        var video = document.getElementById("video");
        var source = document.getElementById("source");
        source.setAttribute("src",src);
        video.load();
        //video.play();
    }
    document.getElementById("video").value = "It is not undefined"
    reader.readAsDataURL(file);
}

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', function(event) {

  const file = event.target.files[0];

  const allowedExtensions = /(\.mp4|\.mov|\.avi|\.wmv)$/i;
  if (!allowedExtensions.exec(file.name)) {
    alert('Please select a video file with .mp4, .mov, .avi, or .wmv extension.');
    fileInput.value = '';
    return;
  }
  submitForms();
});
