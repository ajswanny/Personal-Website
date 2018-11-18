/**
 *
 * @param content_title
 */
function switch_content(content_title) {

    //
    var
        element = document.querySelector("#content"),
        iframe  = document.createElement("iframe")
    ;

    //
    iframe.src = "html/" + content_title + ".html";

    //
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    //
    element.appendChild(iframe);

}