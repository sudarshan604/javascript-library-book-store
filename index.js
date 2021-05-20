   function Display()
    {
   
    } 

   var display=new Display;  

 
  function Book(name,author,type)  
   {
    this.name = name;
    this.author = author;
    this.type = type;
  }
 
 
  
 
   Display.prototype.add = function()
   {

     // console.log(book.name);
      let tablebody=document.getElementById('tablebody');
         
      let library=localStorage.getItem('library');

      if(library==null)
      {
         libObj=[];
      }
    else
     libObj=JSON.parse(library);  
  
     let addString="";   
   libObj.forEach(function(element,index) {
     

    addString+=`<tr>
  <td>${element.name}</td>
  <td>${element.author}</td>
  <td>${element.type}</td>
  <td> <button type="button" id="${index}"  onclick="deleteRow(this.id)" style="background-color: #0d6efd;" class="btn btn-primary">Delete</button>
   </td>
  </tr>`;
  
  }); 
  
  tablebody.innerHTML=addString;
  }
Display.prototype.clear =function()
{
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();

}

Display.prototype.validate =function(book)
{
    if(book.name.length<2||book.author.length<2)
    {
        return false;
    }
 else
   return true;
}

Display.prototype.show=function(type,me)
{

 let message = document.getElementById('message');
   
        message.innerHTML= `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <h4 class="alert-heading">Message:${me}</h4>
        <hr>
        </div>`;
   setTimeout(()=>{
       message.innerHTML=''
   },2000);
 
    }  



Display.prototype.clear =function()
{
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();

}

display.add();


let libraryform = document.getElementById('libraryform');

libraryform.addEventListener('submit', libraryFormSubmit);


  function libraryFormSubmit(e) {

         let name = document.getElementById('formname').value;
         let author = document.getElementById('formauthor').value;

         let type;

         let fiction = document.getElementById('fiction');
         let story = document.getElementById('story');
        let self = document.getElementById('self');

  if (fiction.checked) {
       
        type = fiction.value;
    }
    else if (story.checked) 
    {
        type = story.value;
    }

    else if (self.checked) 
    {
        type = self.value;
    }

    let book = new Book(name, author, type);

   

   
   
    let library=localStorage.getItem('library');

       if(library==null)
       {
          libObj=[];
       }
     else
      libObj=JSON.parse(library);  
   
  

       libObj.push(book);

   localStorage.setItem('library',JSON.stringify(libObj));







    if(display.validate(book))
    {
    display.add();
  
    display.clear();   
    display.show('success','your book added succefully')  
 }
    else
      display.show('danger','you cannot add this book');

      
    e.preventDefault() 
}

function deleteRow(index)
{

   libObj.splice(index,1);
  localStorage.setItem('library',JSON.stringify(libObj)); 
   display.show();
  display.add();


}












