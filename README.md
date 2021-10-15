# docsify-image-caption

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-image-caption</code>
</p>

image caption plugin for docsify

1. 

## Usage

Add JS script

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-image-caption@latest/dist/docsify-image-caption.min.js"></script>
<!--<script src="https://cdn.jsdelivr.net/gh/Joaxin/docsify-image-caption/dist/docsify-image-caption.js"></script>-->
```

Add CSS style

```css
/* figure image */
figure {
  border: thin #c0c0c0 solid;
  padding: 5px;
  max-width: 800px;
  display: flex;
  flex-flow: column;
  margin: 5px auto !important;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic medium sans-serif;
  padding: 3px;
  text-align: center;
}
```

Add Docsify settings(default):

```json
window.$docsify = {
    imgCaption: {
        encode: false,
        ignore: ['img'],
    }
}
```

| Attribute | Type    | Description                              | Value         |
| --------- | ------- | ---------------------------------------- | ------------- |
| encode    | boolean | encode image path with blank space       | true or false |
| ignore    | list    | ignore image markdown with keywords list | list          |

## Example

Firstly, Check Markdown Image Syntax From : https://www.markdownguide.org/basic-syntax/

Now we write markdown syntax like:

```markdown
![w60 Set of 4 Alice in Wonderland Antique Book page Art Prints A4-Nursery - Childrens](../../../../_media/anime/Set of 4 Alice in Wonderland Antique Book page Art Prints A4-Nursery - Childrens.jpg "Alice in Wonderland")
```

this will be rendered as:

```html
<figure style="zoom:60%;">
<img src="../../../../_media/anime/Set of 4 Alice in Wonderland Antique Book page Art Prints A4-Nursery - Childrens.jpg" width="100%" alt="Set of 4 Alice in Wonderland Antique Book page Art Prints A4-Nursery - Childrens" title="Alice in Wonderland" class="medium-zoom-image">
    <figcaption>Set of 4 Alice in Wonderland Antique Book page Art Prints A4-Nursery - Childrens</figcaption>
</figure>
```


