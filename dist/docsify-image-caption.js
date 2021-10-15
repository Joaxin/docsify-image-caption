// config options
const imgCaptionOptions = {
  encode: false,
  ignore: ['img'],
}
function imgCaption(hook, vm) {
  hook.beforeEach(function (content) {
    // image markdown to figure
    let mark_imgReg = /!\[(?<alt>[^\]]*)\]\((?<filename>.*?)(?=\"|\))(?<title>\".*\")?\)\s/g;
    let mark_img = content.match(mark_imgReg);
    if (mark_img) {
      mark_img.forEach(function (item, idx) {
        let match = mark_imgReg.exec(item);
        mark_imgReg.lastIndex = 0;
        if (match) {
          let flname = match.groups.filename.trim();
          let flalt = match.groups.alt;
          let img_sizeReg = /^w(?<width>\d+)\s/
          let img_size = img_sizeReg.exec(flalt);
          if (img_size) {
            flalt = flalt.replace(img_size[0], "");
            img_size = img_size.groups.width + "%";
          } else {
            img_size = "100%"
          }
          if (imgCaptionOptions.encode) {
            flname = flname.replaceAll(" ", "%20");
          }
          console.log(match.groups.title);
          if (flalt && !(flalt in imgCaptionOptions.ignore)) {
            content = content.replace(item, `<figure style="zoom:${img_size};">
<img src="${flname}" width="100%" alt="${flalt}" title = ${match.groups.title}>
    <figcaption>${flalt}</figcaption>
</figure>`)
          } else {
            content = content.replace(item, `<figure style="zoom:${img_size};">
<img src="${flname}" width="100%" alt="${flalt}" title = ${match.groups.title}>
</figure>`)
          }
        }
        // console.log(idx,match.groups.filename);
      })
    }
    return content;
  });
}

// imgCaption plugin options
window.$docsify.imgCaption = Object.assign(
  imgCaptionOptions,
  window.$docsify.imgCaption
);


window.$docsify.plugins = [].concat(imgCaption, window.$docsify.plugins)
