function comparison(element, move)
{
    let textarea01 = window.document.getElementById("textarea01")
    let textarea02 = window.document.getElementById("textarea02")

    if (element == 1)
    {
        move == 'next' ? textarea01.style.width = '95%' : textarea01.style.width = '5%'
    }
    else
    {
        move == 'next' ? textarea02.style.width = '95%' : textarea02.style.width = '5%'
    }
}
