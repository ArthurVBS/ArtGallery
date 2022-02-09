function comparison(element)
{
    let range01 = window.document.getElementById("img01")
    let range02 = window.document.getElementById("img02")
    
    let textarea01 = window.document.getElementById("comp01")
    let textarea02 = window.document.getElementById("comp02")

    element == 1 ? textarea01.style.width = range01.value + "%" : textarea02.style.width = range02.value + "%"
}
