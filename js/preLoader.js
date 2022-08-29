const preLoader = () =>{
    loader = setTimeout(showPage, 3000);
}

const showPage = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }