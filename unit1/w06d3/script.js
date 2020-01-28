const list = [];

const render = () =>{
  $("#todo").empty();
  list.forEach((item)=>{
    $("#todo").append("<li>" + item + "</li>")
  })
  
}


const handleSubmit = (event) => {
    const inputBoxValue = $("#input-box").val()
    
    list.push($("#input-box").val())
    
    event.preventDefault();
    $(event.currentTarget).trigger("reset")
    
    render();
  }






$ (()=>{
    
  $("form").on("submit", handleSubmit)
  
})