#ts-uri-generator

A simple uri generator

#Example

```
<div id="app">
    <label for="title">Title</label>
    <input id="title" type="text">

    <label for="uri">uri</label>
    <input id="uri" type="text">
</div>

<script>
    let titleInput = <HTMLInputElement> document.querySelector("#title")
    let uriInput = <HTMLInputElement> document.querySelector("#uri")
    let uriGenerator = new UriGenerator(titleInput, uriInput)
</script>
```
Based on the value of the first input, the uri will be generated on the second input
