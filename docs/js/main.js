/**
 * Changes the content for div::#content.
 *
 * @param content_title The content to display.
 */
function switch_content(content_title) {

    // Define reference to the #content div and the iframe to contain the new content.
    var
        element = document.querySelector("#content"),
        iframe  = document.createElement("iframe")
    ;

    // Define the src for the iframe.
    iframe.src = "html/" + content_title + ".html";

    // Remove all current elements of #content.
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    // Add the iframe to #content.
    element.appendChild(iframe);

}