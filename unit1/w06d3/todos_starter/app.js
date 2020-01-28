const list = []

const render = () =>{
    
    $("ul").empty();
    list.forEach((item)=>{
      $("ul").append("<li>" + item + "</li>")
      
    })
  }


  const handleSubmit = (event) => {
    const inputBoxValue = $("#input-box").val()
    
    list.push(inputBoxValue)
    
    event.preventDefault();
    // $(event.currentTarget).trigger("reset")
    
    render();
  }



  $(() => {

    $("#submit").on("click", handleSubmit)

  })