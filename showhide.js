var a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById('sucursales-list').style.display="inline";
        return a=0;
    }
    else
    {
        document.getElementsById('sucursales-list').style.display="none";
        return a=1;
    }
}