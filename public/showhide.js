var a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById("power").style.display="inline";
        return a=0;
    }
    else
    {
        document.getElementsById("power").style.display="none";
        return a=1;
    }
}