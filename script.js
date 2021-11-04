

function zapisz()
{

    value_select_1_1 = parseInt(document.getElementById("select_1_1").value)
    value_select_1_2 = parseInt(document.getElementById("select_1_2").value)
    value_select_1_3 = parseInt(document.getElementById("select_1_3").value)
    value_select_1_4 = parseInt(document.getElementById("select_1_4").value)
    value_select_1_5 = parseInt(document.getElementById("select_1_5").value)
    value_select_1_6 = parseInt(document.getElementById("select_1_6").value)
    value_select_1_7 = parseInt(document.getElementById("select_1_7").value)
    value_select_1_8 = parseInt(document.getElementById("select_1_8").value)

    if(value_select_1_1+value_select_1_2+value_select_1_3+value_select_1_4+
    value_select_1_5+value_select_1_6+value_select_1_7+value_select_1_8 != 10)
    {
      alert("Punkty muszą byc rozdzielone tak aby ich suma wyniosła 10")
    }
    else
    {
        alert("dobra suma punktów")
    }

}


// function checkselect1()
// {
//     value_select_1_1 = document.getElementById("select_1_1").value
//     value_select_1_2 = document.getElementById("select_1_2").value
//     value_select_1_3 = document.getElementById("select_1_3").value
//     value_select_1_4 = document.getElementById("select_1_4").value
//     value_select_1_5 = document.getElementById("select_1_5").value
//     value_select_1_6 = document.getElementById("select_1_6").value
//     value_select_1_7 = document.getElementById("select_1_7").value
//     value_select_1_8 = document.getElementById("select_1_8").value





//     option_o_0_0 = document.getElementById("o_0_0")
//     option_o_0_1 = document.getElementById("o_0_1")
//     option_o_0_2 = document.getElementById("o_0_2")
//     option_o_0_3 = document.getElementById("o_0_3")
//     option_o_0_4 = document.getElementById("o_0_4")
//     option_o_0_5 = document.getElementById("o_0_5")
//     option_o_0_6 = document.getElementById("o_0_6")
//     option_o_0_7 = document.getElementById("o_0_7")
//     option_o_0_8 = document.getElementById("o_0_8")
//     option_o_0_9 = document.getElementById("o_0_9")
//     option_o_0_10 = document.getElementById("o_0_10")

//     option_o_1_0 = document.getElementById("o_1_0")
//     option_o_1_1 = document.getElementById("o_1_1")
//     option_o_1_2 = document.getElementById("o_1_2")
//     option_o_1_3 = document.getElementById("o_1_3")
//     option_o_1_4 = document.getElementById("o_1_4")
//     option_o_1_5 = document.getElementById("o_1_5")
//     option_o_1_6 = document.getElementById("o_1_6")
//     option_o_1_7 = document.getElementById("o_1_7")
//     option_o_1_8 = document.getElementById("o_1_8")
//     option_o_1_9 = document.getElementById("o_1_9")
//     option_o_1_10 = document.getElementById("o_1_10")

//     option_o_2_0 = document.getElementById("o_2_0")
//     option_o_2_1 = document.getElementById("o_2_1")
//     option_o_2_2 = document.getElementById("o_2_2")
//     option_o_2_3 = document.getElementById("o_2_3")
//     option_o_2_4 = document.getElementById("o_2_4")
//     option_o_2_5 = document.getElementById("o_2_5")
//     option_o_2_6 = document.getElementById("o_2_6")
//     option_o_2_7 = document.getElementById("o_2_7")
//     option_o_2_8 = document.getElementById("o_2_8")
//     option_o_2_9 = document.getElementById("o_2_9")
//     option_o_2_10 = document.getElementById("o_2_10")

//     option_o_3_0 = document.getElementById("o_3_0")
//     option_o_3_1 = document.getElementById("o_3_1")
//     option_o_3_2 = document.getElementById("o_3_2")
//     option_o_3_3 = document.getElementById("o_3_3")
//     option_o_3_4 = document.getElementById("o_3_4")
//     option_o_3_5 = document.getElementById("o_3_5")
//     option_o_3_6 = document.getElementById("o_3_6")
//     option_o_3_7 = document.getElementById("o_3_7")
//     option_o_3_8 = document.getElementById("o_3_8")
//     option_o_3_9 = document.getElementById("o_3_9")
//     option_o_3_10 = document.getElementById("o_3_10")

//     option_o_4_0 = document.getElementById("o_4_0")
//     option_o_4_1 = document.getElementById("o_4_1")
//     option_o_4_2 = document.getElementById("o_4_2")
//     option_o_4_3 = document.getElementById("o_4_3")
//     option_o_4_4 = document.getElementById("o_4_4")
//     option_o_4_5 = document.getElementById("o_4_5")
//     option_o_4_6 = document.getElementById("o_4_6")
//     option_o_4_7 = document.getElementById("o_4_7")
//     option_o_4_8 = document.getElementById("o_4_8")
//     option_o_4_9 = document.getElementById("o_4_9")
//     option_o_4_10 = document.getElementById("o_4_10")

//     option_o_5_0 = document.getElementById("o_5_0")
//     option_o_5_1 = document.getElementById("o_5_1")
//     option_o_5_2 = document.getElementById("o_5_2")
//     option_o_5_3 = document.getElementById("o_5_3")
//     option_o_5_4 = document.getElementById("o_5_4")
//     option_o_5_5 = document.getElementById("o_5_5")
//     option_o_5_6 = document.getElementById("o_5_6")
//     option_o_5_7 = document.getElementById("o_5_7")
//     option_o_5_8 = document.getElementById("o_5_8")
//     option_o_5_9 = document.getElementById("o_5_9")
//     option_o_5_10 = document.getElementById("o_5_10")

//     option_o_6_0 = document.getElementById("o_6_0")
//     option_o_6_1 = document.getElementById("o_6_1")
//     option_o_6_2 = document.getElementById("o_6_2")
//     option_o_6_3 = document.getElementById("o_6_3")
//     option_o_6_4 = document.getElementById("o_6_4")
//     option_o_6_5 = document.getElementById("o_6_5")
//     option_o_6_6 = document.getElementById("o_6_6")
//     option_o_6_7 = document.getElementById("o_6_7")
//     option_o_6_8 = document.getElementById("o_6_8")
//     option_o_6_9 = document.getElementById("o_6_9")
//     option_o_6_10 = document.getElementById("o_6_10")

//     option_o_7_0 = document.getElementById("o_7_0")
//     option_o_7_1 = document.getElementById("o_7_1")
//     option_o_7_2 = document.getElementById("o_7_2")
//     option_o_7_3 = document.getElementById("o_7_3")
//     option_o_7_4 = document.getElementById("o_7_4")
//     option_o_7_5 = document.getElementById("o_7_5")
//     option_o_7_6 = document.getElementById("o_7_6")
//     option_o_7_7 = document.getElementById("o_7_7")
//     option_o_7_8 = document.getElementById("o_7_8")
//     option_o_7_9 = document.getElementById("o_7_9")
//     option_o_7_10 = document.getElementById("o_7_10")


    


//     if(value_select_1_1 == 10)
//     {
//         option_o_1_0.disabled =true
//         option_o_1_1.disabled =true
//         option_o_1_2.disabled =true
//         option_o_1_3.disabled =true
//         option_o_1_4.disabled =true
//         option_o_1_5.disabled =true
//         option_o_1_6.disabled =true
//         option_o_1_7.disabled =true
//         option_o_1_8.disabled =true
//         option_o_1_9.disabled =true
//         option_o_1_10.disabled =true
    
//         option_o_2_0.disabled =true
//         option_o_2_1.disabled =true
//         option_o_2_2.disabled =true
//         option_o_2_3.disabled =true
//         option_o_2_4.disabled =true
//         option_o_2_5.disabled =true
//         option_o_2_6.disabled =true
//         option_o_2_7.disabled =true
//         option_o_2_8.disabled =true
//         option_o_2_9.disabled =true
//         option_o_2_10.disabled =true
    
//         option_o_3_0.disabled =true
//         option_o_3_1.disabled =true
//         option_o_3_2.disabled =true
//         option_o_3_3.disabled =true
//         option_o_3_4.disabled =true
//         option_o_3_5.disabled =true
//         option_o_3_6.disabled =true
//         option_o_3_7.disabled =true
//         option_o_3_8.disabled =true
//         option_o_3_9.disabled =true
//         option_o_3_10.disabled =true
    
//         option_o_4_0.disabled =true
//         option_o_4_1.disabled =true
//         option_o_4_2.disabled =true
//         option_o_4_3.disabled =true
//         option_o_4_4.disabled =true
//         option_o_4_5.disabled =true
//         option_o_4_6.disabled =true
//         option_o_4_7.disabled =true
//         option_o_4_8.disabled =true
//         option_o_4_9.disabled =true
//         option_o_4_10.disabled =true
    
//         option_o_5_0.disabled =true
//         option_o_5_1.disabled =true
//         option_o_5_2.disabled =true
//         option_o_5_3.disabled =true
//         option_o_5_4.disabled =true
//         option_o_5_5.disabled =true
//         option_o_5_6.disabled =true
//         option_o_5_7.disabled =true
//         option_o_5_8.disabled =true
//         option_o_5_9.disabled =true
//         option_o_5_10.disabled =true
    
//         option_o_6_0.disabled =true
//         option_o_6_1.disabled =true
//         option_o_6_2.disabled =true
//         option_o_6_3.disabled =true
//         option_o_6_4.disabled =true
//         option_o_6_5.disabled =true
//         option_o_6_6.disabled =true
//         option_o_6_7.disabled =true
//         option_o_6_8.disabled =true
//         option_o_6_9.disabled =true
//         option_o_6_10.disabled =true
    
//         option_o_7_0.disabled =true
//         option_o_7_1.disabled =true 
//         option_o_7_2.disabled =true
//         option_o_7_3.disabled =true 
//         option_o_7_4.disabled =true
//         option_o_7_5.disabled =true 
//         option_o_7_6.disabled =true 
//         option_o_7_7.disabled =true 
//         option_o_7_8.disabled =true 
//         option_o_7_9.disabled =true 
//         option_o_7_10.disabled =true 
       

//     }
//     else if(value_select_1_1 == 0)
//     {



//       option_o_1_0.disabled =false
//       option_o_1_1.disabled =false
//       option_o_1_2.disabled =false
//       option_o_1_3.disabled =false
//       option_o_1_4.disabled =false
//       option_o_1_5.disabled =false
//       option_o_1_6.disabled =false
//       option_o_1_7.disabled =false
//       option_o_1_8.disabled =false
//       option_o_1_9.disabled =false
//       option_o_1_10.disabled =false
  
//       option_o_2_0.disabled =false
//       option_o_2_1.disabled =false
//       option_o_2_2.disabled =false
//       option_o_2_3.disabled =false
//       option_o_2_4.disabled =false
//       option_o_2_5.disabled =false
//       option_o_2_6.disabled =false
//       option_o_2_7.disabled =false
//       option_o_2_8.disabled =false
//       option_o_2_9.disabled =false
//       option_o_2_10.disabled =false
  
//       option_o_3_0.disabled =false
//       option_o_3_1.disabled =false
//       option_o_3_2.disabled =false
//       option_o_3_3.disabled =false
//       option_o_3_4.disabled =false
//       option_o_3_5.disabled =false
//       option_o_3_6.disabled =false
//       option_o_3_7.disabled =false
//       option_o_3_8.disabled =false
//       option_o_3_9.disabled =false
//       option_o_3_10.disabled =false
  
//       option_o_4_0.disabled =false
//       option_o_4_1.disabled =false
//       option_o_4_2.disabled =false
//       option_o_4_3.disabled =false
//       option_o_4_4.disabled =false
//       option_o_4_5.disabled =false
//       option_o_4_6.disabled =false
//       option_o_4_7.disabled =false
//       option_o_4_8.disabled =false
//       option_o_4_9.disabled =false
//       option_o_4_10.disabled =false
  
//       option_o_5_0.disabled =false
//       option_o_5_1.disabled =false
//       option_o_5_2.disabled =false
//       option_o_5_3.disabled =false
//       option_o_5_4.disabled =false
//       option_o_5_5.disabled =false
//       option_o_5_6.disabled =false
//       option_o_5_7.disabled =false
//       option_o_5_8.disabled =false
//       option_o_5_9.disabled =false
//       option_o_5_10.disabled =false
  
//       option_o_6_0.disabled =false
//       option_o_6_1.disabled =false
//       option_o_6_2.disabled =false
//       option_o_6_3.disabled =false
//       option_o_6_4.disabled =false
//       option_o_6_5.disabled =false
//       option_o_6_6.disabled =false
//       option_o_6_7.disabled =false
//       option_o_6_8.disabled =false
//       option_o_6_9.disabled =false
//       option_o_6_10.disabled =false
  
//       option_o_7_0.disabled =false
//       option_o_7_1.disabled =false 
//       option_o_7_2.disabled =false
//       option_o_7_3.disabled =false 
//       option_o_7_4.disabled =false
//       option_o_7_5.disabled =false 
//       option_o_7_6.disabled =false 
//       option_o_7_7.disabled =false 
//       option_o_7_8.disabled =false 
//       option_o_7_9.disabled =false 
//       option_o_7_10.disabled =false 
//     }
//     else if(value_select_1_1 == 1)
//     {
//       option_o_1_0.disabled =false
//       option_o_1_1.disabled =false
//       option_o_1_2.disabled =false
//       option_o_1_3.disabled =false
//       option_o_1_4.disabled =false
//       option_o_1_5.disabled =false
//       option_o_1_6.disabled =false
//       option_o_1_7.disabled =false
//       option_o_1_8.disabled =false
//       option_o_1_9.disabled =false
//       option_o_1_10.disabled =true
  
//       option_o_2_0.disabled =false
//       option_o_2_1.disabled =false
//       option_o_2_2.disabled =false
//       option_o_2_3.disabled =false
//       option_o_2_4.disabled =false
//       option_o_2_5.disabled =false
//       option_o_2_6.disabled =false
//       option_o_2_7.disabled =false
//       option_o_2_8.disabled =false
//       option_o_2_9.disabled =false
//       option_o_2_10.disabled =true
  
//       option_o_3_0.disabled =false
//       option_o_3_1.disabled =false
//       option_o_3_2.disabled =false
//       option_o_3_3.disabled =false
//       option_o_3_4.disabled =false
//       option_o_3_5.disabled =false
//       option_o_3_6.disabled =false
//       option_o_3_7.disabled =false
//       option_o_3_8.disabled =false
//       option_o_3_9.disabled =false
//       option_o_3_10.disabled =true
  
//       option_o_4_0.disabled =false
//       option_o_4_1.disabled =false
//       option_o_4_2.disabled =false
//       option_o_4_3.disabled =false
//       option_o_4_4.disabled =false
//       option_o_4_5.disabled =false
//       option_o_4_6.disabled =false
//       option_o_4_7.disabled =false
//       option_o_4_8.disabled =false
//       option_o_4_9.disabled =false
//       option_o_4_10.disabled =true
  
//       option_o_5_0.disabled =false
//       option_o_5_1.disabled =false
//       option_o_5_2.disabled =false
//       option_o_5_3.disabled =false
//       option_o_5_4.disabled =false
//       option_o_5_5.disabled =false
//       option_o_5_6.disabled =false
//       option_o_5_7.disabled =false
//       option_o_5_8.disabled =false
//       option_o_5_9.disabled =false
//       option_o_5_10.disabled =true
  
//       option_o_6_0.disabled =false
//       option_o_6_1.disabled =false
//       option_o_6_2.disabled =false
//       option_o_6_3.disabled =false
//       option_o_6_4.disabled =false
//       option_o_6_5.disabled =false
//       option_o_6_6.disabled =false
//       option_o_6_7.disabled =false
//       option_o_6_8.disabled =false
//       option_o_6_9.disabled =false
//       option_o_6_10.disabled =true
  
//       option_o_7_0.disabled =false
//       option_o_7_1.disabled =false 
//       option_o_7_2.disabled =false
//       option_o_7_3.disabled =false 
//       option_o_7_4.disabled =false
//       option_o_7_5.disabled =false 
//       option_o_7_6.disabled =false 
//       option_o_7_7.disabled =false 
//       option_o_7_8.disabled =false 
//       option_o_7_9.disabled =false 
//       option_o_7_10.disabled =true 
//     }
//     else if(value_select_1_1 == 2)
//     {
//       option_o_1_0.disabled =false
//       option_o_1_1.disabled =false
//       option_o_1_2.disabled =false
//       option_o_1_3.disabled =false
//       option_o_1_4.disabled =false
//       option_o_1_5.disabled =false
//       option_o_1_6.disabled =false
//       option_o_1_7.disabled =false
//       option_o_1_8.disabled =false
//       option_o_1_9.disabled =true
//       option_o_1_10.disabled =true
  
//       option_o_2_0.disabled =false
//       option_o_2_1.disabled =false
//       option_o_2_2.disabled =false
//       option_o_2_3.disabled =false
//       option_o_2_4.disabled =false
//       option_o_2_5.disabled =false
//       option_o_2_6.disabled =false
//       option_o_2_7.disabled =false
//       option_o_2_8.disabled =false
//       option_o_2_9.disabled =true
//       option_o_2_10.disabled =true
  
//       option_o_3_0.disabled =false
//       option_o_3_1.disabled =false
//       option_o_3_2.disabled =false
//       option_o_3_3.disabled =false
//       option_o_3_4.disabled =false
//       option_o_3_5.disabled =false
//       option_o_3_6.disabled =false
//       option_o_3_7.disabled =false
//       option_o_3_8.disabled =false
//       option_o_3_9.disabled =true
//       option_o_3_10.disabled =true
  
//       option_o_4_0.disabled =false
//       option_o_4_1.disabled =false
//       option_o_4_2.disabled =false
//       option_o_4_3.disabled =false
//       option_o_4_4.disabled =false
//       option_o_4_5.disabled =false
//       option_o_4_6.disabled =false
//       option_o_4_7.disabled =false
//       option_o_4_8.disabled =false
//       option_o_4_9.disabled =true
//       option_o_4_10.disabled =true
  
//       option_o_5_0.disabled =false
//       option_o_5_1.disabled =false
//       option_o_5_2.disabled =false
//       option_o_5_3.disabled =false
//       option_o_5_4.disabled =false
//       option_o_5_5.disabled =false
//       option_o_5_6.disabled =false
//       option_o_5_7.disabled =false
//       option_o_5_8.disabled =false
//       option_o_5_9.disabled =true
//       option_o_5_10.disabled =true
  
//       option_o_6_0.disabled =false
//       option_o_6_1.disabled =false
//       option_o_6_2.disabled =false
//       option_o_6_3.disabled =false
//       option_o_6_4.disabled =false
//       option_o_6_5.disabled =false
//       option_o_6_6.disabled =false
//       option_o_6_7.disabled =false
//       option_o_6_8.disabled =false
//       option_o_6_9.disabled =true
//       option_o_6_10.disabled =true
  
//       option_o_7_0.disabled =false
//       option_o_7_1.disabled =false 
//       option_o_7_2.disabled =false
//       option_o_7_3.disabled =false 
//       option_o_7_4.disabled =false
//       option_o_7_5.disabled =false 
//       option_o_7_6.disabled =false 
//       option_o_7_7.disabled =false 
//       option_o_7_8.disabled =false 
//       option_o_7_9.disabled =true 
//       option_o_7_10.disabled =true 
//     }
//     else if(value_select_1_1 == 3)
//     {
          
//       option_o_1_0.disabled =false
//       option_o_1_1.disabled =false
//       option_o_1_2.disabled =false
//       option_o_1_3.disabled =false
//       option_o_1_4.disabled =false
//       option_o_1_5.disabled =false
//       option_o_1_6.disabled =false
//       option_o_1_7.disabled =false
//       option_o_1_8.disabled =true
//       option_o_1_9.disabled =true
//       option_o_1_10.disabled =true
  
//       option_o_2_0.disabled =false
//       option_o_2_1.disabled =false
//       option_o_2_2.disabled =false
//       option_o_2_3.disabled =false
//       option_o_2_4.disabled =false
//       option_o_2_5.disabled =false
//       option_o_2_6.disabled =false
//       option_o_2_7.disabled =false
//       option_o_2_8.disabled =true
//       option_o_2_9.disabled =true
//       option_o_2_10.disabled =true
  
//       option_o_3_0.disabled =false
//       option_o_3_1.disabled =false
//       option_o_3_2.disabled =false
//       option_o_3_3.disabled =false
//       option_o_3_4.disabled =false
//       option_o_3_5.disabled =false
//       option_o_3_6.disabled =false
//       option_o_3_7.disabled =false
//       option_o_3_8.disabled =true
//       option_o_3_9.disabled =true
//       option_o_3_10.disabled =true
  
//       option_o_4_0.disabled =false
//       option_o_4_1.disabled =false
//       option_o_4_2.disabled =false
//       option_o_4_3.disabled =false
//       option_o_4_4.disabled =false
//       option_o_4_5.disabled =false
//       option_o_4_6.disabled =false
//       option_o_4_7.disabled =false
//       option_o_4_8.disabled =true
//       option_o_4_9.disabled =true
//       option_o_4_10.disabled =true
  
//       option_o_5_0.disabled =false
//       option_o_5_1.disabled =false
//       option_o_5_2.disabled =false
//       option_o_5_3.disabled =false
//       option_o_5_4.disabled =false
//       option_o_5_5.disabled =false
//       option_o_5_6.disabled =false
//       option_o_5_7.disabled =false
//       option_o_5_8.disabled =true
//       option_o_5_9.disabled =true
//       option_o_5_10.disabled =true
  
//       option_o_6_0.disabled =false
//       option_o_6_1.disabled =false
//       option_o_6_2.disabled =false
//       option_o_6_3.disabled =false
//       option_o_6_4.disabled =false
//       option_o_6_5.disabled =false
//       option_o_6_6.disabled =false
//       option_o_6_7.disabled =false
//       option_o_6_8.disabled =true
//       option_o_6_9.disabled =true
//       option_o_6_10.disabled =true
  
//       option_o_7_0.disabled =false
//       option_o_7_1.disabled =false 
//       option_o_7_2.disabled =false
//       option_o_7_3.disabled =false 
//       option_o_7_4.disabled =false
//       option_o_7_5.disabled =false 
//       option_o_7_6.disabled =false 
//       option_o_7_7.disabled =false 
//       option_o_7_8.disabled =true 
//       option_o_7_9.disabled =true 
//       option_o_7_10.disabled =true 
//     }
//     else if(value_select_1_1 == 4)
//     {

//       option_o_1_0.disabled =false
//       option_o_1_1.disabled =false
//       option_o_1_2.disabled =false
//       option_o_1_3.disabled =false
//       option_o_1_4.disabled =false
//       option_o_1_5.disabled =false
//       option_o_1_6.disabled =false
//       option_o_1_7.disabled =true
//       option_o_1_8.disabled =true
//       option_o_1_9.disabled =true
//       option_o_1_10.disabled =true
  
//       option_o_2_0.disabled =false
//       option_o_2_1.disabled =false
//       option_o_2_2.disabled =false
//       option_o_2_3.disabled =false
//       option_o_2_4.disabled =false
//       option_o_2_5.disabled =false
//       option_o_2_6.disabled =false
//       option_o_2_7.disabled =true
//       option_o_2_8.disabled =true
//       option_o_2_9.disabled =true
//       option_o_2_10.disabled =true
  
//       option_o_3_0.disabled =false
//       option_o_3_1.disabled =false
//       option_o_3_2.disabled =false
//       option_o_3_3.disabled =false
//       option_o_3_4.disabled =false
//       option_o_3_5.disabled =false
//       option_o_3_6.disabled =false
//       option_o_3_7.disabled =true
//       option_o_3_8.disabled =true
//       option_o_3_9.disabled =true
//       option_o_3_10.disabled =true
  
//       option_o_4_0.disabled =false
//       option_o_4_1.disabled =false
//       option_o_4_2.disabled =false
//       option_o_4_3.disabled =false
//       option_o_4_4.disabled =false
//       option_o_4_5.disabled =false
//       option_o_4_6.disabled =false
//       option_o_4_7.disabled =true
//       option_o_4_8.disabled =true
//       option_o_4_9.disabled =true
//       option_o_4_10.disabled =true
  
//       option_o_5_0.disabled =false
//       option_o_5_1.disabled =false
//       option_o_5_2.disabled =false
//       option_o_5_3.disabled =false
//       option_o_5_4.disabled =false
//       option_o_5_5.disabled =false
//       option_o_5_6.disabled =false
//       option_o_5_7.disabled =true
//       option_o_5_8.disabled =true
//       option_o_5_9.disabled =true
//       option_o_5_10.disabled =true
  
//       option_o_6_0.disabled =false
//       option_o_6_1.disabled =false
//       option_o_6_2.disabled =false
//       option_o_6_3.disabled =false
//       option_o_6_4.disabled =false
//       option_o_6_5.disabled =false
//       option_o_6_6.disabled =false
//       option_o_6_7.disabled =true
//       option_o_6_8.disabled =true
//       option_o_6_9.disabled =true
//       option_o_6_10.disabled =true
  
//       option_o_7_0.disabled =false
//       option_o_7_1.disabled =false 
//       option_o_7_2.disabled =false
//       option_o_7_3.disabled =false 
//       option_o_7_4.disabled =false
//       option_o_7_5.disabled =false 
//       option_o_7_6.disabled =false 
//       option_o_7_7.disabled =true 
//       option_o_7_8.disabled =true 
//       option_o_7_9.disabled =true 
//       option_o_7_10.disabled =true 


//     }
//     else if(value_select_1_1 == 5)
//     {
//       option_o_1_0.disabled =false
//       option_o_1_1.disabled =false
//       option_o_1_2.disabled =false
//       option_o_1_3.disabled =false
//       option_o_1_4.disabled =false
//       option_o_1_5.disabled =false
//       option_o_1_6.disabled =true
//       option_o_1_7.disabled =true
//       option_o_1_8.disabled =true
//       option_o_1_9.disabled =true
//       option_o_1_10.disabled =true
  
//       option_o_2_0.disabled =false
//       option_o_2_1.disabled =false
//       option_o_2_2.disabled =false
//       option_o_2_3.disabled =false
//       option_o_2_4.disabled =false
//       option_o_2_5.disabled =false
//       option_o_2_6.disabled =true
//       option_o_2_7.disabled =true
//       option_o_2_8.disabled =true
//       option_o_2_9.disabled =true
//       option_o_2_10.disabled =true
  
//       option_o_3_0.disabled =false
//       option_o_3_1.disabled =false
//       option_o_3_2.disabled =false
//       option_o_3_3.disabled =false
//       option_o_3_4.disabled =false
//       option_o_3_5.disabled =false
//       option_o_3_6.disabled =true
//       option_o_3_7.disabled =true
//       option_o_3_8.disabled =true
//       option_o_3_9.disabled =true
//       option_o_3_10.disabled =true
  
//       option_o_4_0.disabled =false
//       option_o_4_1.disabled =false
//       option_o_4_2.disabled =false
//       option_o_4_3.disabled =false
//       option_o_4_4.disabled =false
//       option_o_4_5.disabled =false
//       option_o_4_6.disabled =true
//       option_o_4_7.disabled =true
//       option_o_4_8.disabled =true
//       option_o_4_9.disabled =true
//       option_o_4_10.disabled =true
  
//       option_o_5_0.disabled =false
//       option_o_5_1.disabled =false
//       option_o_5_2.disabled =false
//       option_o_5_3.disabled =false
//       option_o_5_4.disabled =false
//       option_o_5_5.disabled =false
//       option_o_5_6.disabled =true
//       option_o_5_7.disabled =true
//       option_o_5_8.disabled =true
//       option_o_5_9.disabled =true
//       option_o_5_10.disabled =true
  
//       option_o_6_0.disabled =false
//       option_o_6_1.disabled =false
//       option_o_6_2.disabled =false
//       option_o_6_3.disabled =false
//       option_o_6_4.disabled =false
//       option_o_6_5.disabled =false
//       option_o_6_6.disabled =true
//       option_o_6_7.disabled =true
//       option_o_6_8.disabled =true
//       option_o_6_9.disabled =true
//       option_o_6_10.disabled =true
  
//       option_o_7_0.disabled =false
//       option_o_7_1.disabled =false 
//       option_o_7_2.disabled =false
//       option_o_7_3.disabled =false 
//       option_o_7_4.disabled =false
//       option_o_7_5.disabled =false 
//       option_o_7_6.disabled =true 
//       option_o_7_7.disabled =true 
//       option_o_7_8.disabled =true 
//       option_o_7_9.disabled =true 
//       option_o_7_10.disabled =true 
//     }
//     else if(value_select_1_1 == 6)
//     {
//       option_o_1_0.disabled =false
//       option_o_1_1.disabled =false
//       option_o_1_2.disabled =false
//       option_o_1_3.disabled =false
//       option_o_1_4.disabled =false
//       option_o_1_5.disabled =false
//       option_o_1_6.disabled =true
//       option_o_1_7.disabled =true
//       option_o_1_8.disabled =true
//       option_o_1_9.disabled =true
//       option_o_1_10.disabled =true
  
//       option_o_2_0.disabled =false
//       option_o_2_1.disabled =false
//       option_o_2_2.disabled =false
//       option_o_2_3.disabled =false
//       option_o_2_4.disabled =false
//       option_o_2_5.disabled =false
//       option_o_2_6.disabled =true
//       option_o_2_7.disabled =true
//       option_o_2_8.disabled =true
//       option_o_2_9.disabled =true
//       option_o_2_10.disabled =true
  
//       option_o_3_0.disabled =false
//       option_o_3_1.disabled =false
//       option_o_3_2.disabled =false
//       option_o_3_3.disabled =false
//       option_o_3_4.disabled =false
//       option_o_3_5.disabled =false
//       option_o_3_6.disabled =true
//       option_o_3_7.disabled =true
//       option_o_3_8.disabled =true
//       option_o_3_9.disabled =true
//       option_o_3_10.disabled =true
  
//       option_o_4_0.disabled =false
//       option_o_4_1.disabled =false
//       option_o_4_2.disabled =false
//       option_o_4_3.disabled =false
//       option_o_4_4.disabled =false
//       option_o_4_5.disabled =false
//       option_o_4_6.disabled =true
//       option_o_4_7.disabled =true
//       option_o_4_8.disabled =true
//       option_o_4_9.disabled =true
//       option_o_4_10.disabled =true
  
//       option_o_5_0.disabled =false
//       option_o_5_1.disabled =false
//       option_o_5_2.disabled =false
//       option_o_5_3.disabled =false
//       option_o_5_4.disabled =false
//       option_o_5_5.disabled =false
//       option_o_5_6.disabled =true
//       option_o_5_7.disabled =true
//       option_o_5_8.disabled =true
//       option_o_5_9.disabled =true
//       option_o_5_10.disabled =true
  
//       option_o_6_0.disabled =false
//       option_o_6_1.disabled =false
//       option_o_6_2.disabled =false
//       option_o_6_3.disabled =false
//       option_o_6_4.disabled =false
//       option_o_6_5.disabled =false
//       option_o_6_6.disabled =true
//       option_o_6_7.disabled =true
//       option_o_6_8.disabled =true
//       option_o_6_9.disabled =true
//       option_o_6_10.disabled =true
  
//       option_o_7_0.disabled =false
//       option_o_7_1.disabled =false 
//       option_o_7_2.disabled =false
//       option_o_7_3.disabled =false 
//       option_o_7_4.disabled =false
//       option_o_7_5.disabled =false 
//       option_o_7_6.disabled =true 
//       option_o_7_7.disabled =true 
//       option_o_7_8.disabled =true 
//       option_o_7_9.disabled =true 
//       option_o_7_10.disabled =true 
//     }
//     else if(value_select_1_1 == 7)
//     {
//       option_o_1_0.disabled =false
//       option_o_1_1.disabled =false
//       option_o_1_2.disabled =false
//       option_o_1_3.disabled =false
//       option_o_1_4.disabled =true
//       option_o_1_5.disabled =true
//       option_o_1_6.disabled =true
//       option_o_1_7.disabled =true
//       option_o_1_8.disabled =true
//       option_o_1_9.disabled =true
//       option_o_1_10.disabled =true
  
//       option_o_2_0.disabled =false
//       option_o_2_1.disabled =false
//       option_o_2_2.disabled =false
//       option_o_2_3.disabled =false
//       option_o_2_4.disabled =true
//       option_o_2_5.disabled =true
//       option_o_2_6.disabled =true
//       option_o_2_7.disabled =true
//       option_o_2_8.disabled =true
//       option_o_2_9.disabled =true
//       option_o_2_10.disabled =true
  
//       option_o_3_0.disabled =false
//       option_o_3_1.disabled =false
//       option_o_3_2.disabled =false
//       option_o_3_3.disabled =false
//       option_o_3_4.disabled =true
//       option_o_3_5.disabled =true
//       option_o_3_6.disabled =true
//       option_o_3_7.disabled =true
//       option_o_3_8.disabled =true
//       option_o_3_9.disabled =true
//       option_o_3_10.disabled =true
  
//       option_o_4_0.disabled =false
//       option_o_4_1.disabled =false
//       option_o_4_2.disabled =false
//       option_o_4_3.disabled =false
//       option_o_4_4.disabled =true
//       option_o_4_5.disabled =true
//       option_o_4_6.disabled =true
//       option_o_4_7.disabled =true
//       option_o_4_8.disabled =true
//       option_o_4_9.disabled =true
//       option_o_4_10.disabled =true
  
//       option_o_5_0.disabled =false
//       option_o_5_1.disabled =false
//       option_o_5_2.disabled =false
//       option_o_5_3.disabled =false
//       option_o_5_4.disabled =true
//       option_o_5_5.disabled =true
//       option_o_5_6.disabled =true
//       option_o_5_7.disabled =true
//       option_o_5_8.disabled =true
//       option_o_5_9.disabled =true
//       option_o_5_10.disabled =true
  
//       option_o_6_0.disabled =false
//       option_o_6_1.disabled =false
//       option_o_6_2.disabled =false
//       option_o_6_3.disabled =false
//       option_o_6_4.disabled =true
//       option_o_6_5.disabled =true
//       option_o_6_6.disabled =true
//       option_o_6_7.disabled =true
//       option_o_6_8.disabled =true
//       option_o_6_9.disabled =true
//       option_o_6_10.disabled =true
  
//       option_o_7_0.disabled =false
//       option_o_7_1.disabled =false 
//       option_o_7_2.disabled =false
//       option_o_7_3.disabled =false 
//       option_o_7_4.disabled =true
//       option_o_7_5.disabled =true 
//       option_o_7_6.disabled =true 
//       option_o_7_7.disabled =true 
//       option_o_7_8.disabled =true 
//       option_o_7_9.disabled =true 
//       option_o_7_10.disabled =true 
//     }
//     else if(value_select_1_1 == 8)
//     {

//         option_o_1_0.disabled =false
//         option_o_1_1.disabled =false
//         option_o_1_2.disabled =false
//         option_o_1_3.disabled =true
//         option_o_1_4.disabled =true
//         option_o_1_5.disabled =true
//         option_o_1_6.disabled =true
//         option_o_1_7.disabled =true
//         option_o_1_8.disabled =true
//         option_o_1_9.disabled =true
//         option_o_1_10.disabled =true
    
//         option_o_2_0.disabled =false
//         option_o_2_1.disabled =false
//         option_o_2_2.disabled =false
//         option_o_2_3.disabled =true
//         option_o_2_4.disabled =true
//         option_o_2_5.disabled =true
//         option_o_2_6.disabled =true
//         option_o_2_7.disabled =true
//         option_o_2_8.disabled =true
//         option_o_2_9.disabled =true
//         option_o_2_10.disabled =true
    
//         option_o_3_0.disabled =false
//         option_o_3_1.disabled =false
//         option_o_3_2.disabled =false
//         option_o_3_3.disabled =true
//         option_o_3_4.disabled =true
//         option_o_3_5.disabled =true
//         option_o_3_6.disabled =true
//         option_o_3_7.disabled =true
//         option_o_3_8.disabled =true
//         option_o_3_9.disabled =true
//         option_o_3_10.disabled =true
    
//         option_o_4_0.disabled =false
//         option_o_4_1.disabled =false
//         option_o_4_2.disabled =false
//         option_o_4_3.disabled =true
//         option_o_4_4.disabled =true
//         option_o_4_5.disabled =true
//         option_o_4_6.disabled =true
//         option_o_4_7.disabled =true
//         option_o_4_8.disabled =true
//         option_o_4_9.disabled =true
//         option_o_4_10.disabled =true
    
//         option_o_5_0.disabled =false
//         option_o_5_1.disabled =false
//         option_o_5_2.disabled =false
//         option_o_5_3.disabled =true
//         option_o_5_4.disabled =true
//         option_o_5_5.disabled =true
//         option_o_5_6.disabled =true
//         option_o_5_7.disabled =true
//         option_o_5_8.disabled =true
//         option_o_5_9.disabled =true
//         option_o_5_10.disabled =true
    
//         option_o_6_0.disabled =false
//         option_o_6_1.disabled =false
//         option_o_6_2.disabled =false
//         option_o_6_3.disabled =true
//         option_o_6_4.disabled =true
//         option_o_6_5.disabled =true
//         option_o_6_6.disabled =true
//         option_o_6_7.disabled =true
//         option_o_6_8.disabled =true
//         option_o_6_9.disabled =true
//         option_o_6_10.disabled =true
    
//         option_o_7_0.disabled =false
//         option_o_7_1.disabled =false 
//         option_o_7_2.disabled =false
//         option_o_7_3.disabled =true 
//         option_o_7_4.disabled =true
//         option_o_7_5.disabled =true 
//         option_o_7_6.disabled =true 
//         option_o_7_7.disabled =true 
//         option_o_7_8.disabled =true 
//         option_o_7_9.disabled =true 
//         option_o_7_10.disabled =true 


//     }
//     else if(value_select_1_1 == 9)
//     {

//         option_o_1_0.disabled =false
//         option_o_1_1.disabled =false
//         option_o_1_2.disabled =true
//         option_o_1_3.disabled =true
//         option_o_1_4.disabled =true
//         option_o_1_5.disabled =true
//         option_o_1_6.disabled =true
//         option_o_1_7.disabled =true
//         option_o_1_8.disabled =true
//         option_o_1_9.disabled =true
//         option_o_1_10.disabled =true
    
//         option_o_2_0.disabled =false
//         option_o_2_1.disabled =false
//         option_o_2_2.disabled =true
//         option_o_2_3.disabled =true
//         option_o_2_4.disabled =true
//         option_o_2_5.disabled =true
//         option_o_2_6.disabled =true
//         option_o_2_7.disabled =true
//         option_o_2_8.disabled =true
//         option_o_2_9.disabled =true
//         option_o_2_10.disabled =true
    
//         option_o_3_0.disabled =false
//         option_o_3_1.disabled =false
//         option_o_3_2.disabled =true
//         option_o_3_3.disabled =true
//         option_o_3_4.disabled =true
//         option_o_3_5.disabled =true
//         option_o_3_6.disabled =true
//         option_o_3_7.disabled =true
//         option_o_3_8.disabled =true
//         option_o_3_9.disabled =true
//         option_o_3_10.disabled =true
    
//         option_o_4_0.disabled =false
//         option_o_4_1.disabled =false
//         option_o_4_2.disabled =true
//         option_o_4_3.disabled =true
//         option_o_4_4.disabled =true
//         option_o_4_5.disabled =true
//         option_o_4_6.disabled =true
//         option_o_4_7.disabled =true
//         option_o_4_8.disabled =true
//         option_o_4_9.disabled =true
//         option_o_4_10.disabled =true
    
//         option_o_5_0.disabled =false
//         option_o_5_1.disabled =false
//         option_o_5_2.disabled =true
//         option_o_5_3.disabled =true
//         option_o_5_4.disabled =true
//         option_o_5_5.disabled =true
//         option_o_5_6.disabled =true
//         option_o_5_7.disabled =true
//         option_o_5_8.disabled =true
//         option_o_5_9.disabled =true
//         option_o_5_10.disabled =true
    
//         option_o_6_0.disabled =false
//         option_o_6_1.disabled =false
//         option_o_6_2.disabled =true
//         option_o_6_3.disabled =true
//         option_o_6_4.disabled =true
//         option_o_6_5.disabled =true
//         option_o_6_6.disabled =true
//         option_o_6_7.disabled =true
//         option_o_6_8.disabled =true
//         option_o_6_9.disabled =true
//         option_o_6_10.disabled =true
    
//         option_o_7_0.disabled =false
//         option_o_7_1.disabled =false 
//         option_o_7_2.disabled =true
//         option_o_7_3.disabled =true 
//         option_o_7_4.disabled =true
//         option_o_7_5.disabled =true 
//         option_o_7_6.disabled =true 
//         option_o_7_7.disabled =true 
//         option_o_7_8.disabled =true 
//         option_o_7_9.disabled =true 
//         option_o_7_10.disabled =true 


//     }





// }









function display(id) { 

  var checkRadio = document.querySelector('input[name="Question"]:checked');
      

  if(checkRadio != null) {
      
          
         var question=id.slice(0, 1);
          
        
          var number=id.slice(2, 3);
          var point=id.slice(4, 5);
         

        for(var m=1;m<4;m++){
          
          for(var n=1;n<4;n++){
          
            for(var k=1;k<4;k++){//czyszczenie
              

                if(  !(  document.getElementById(question + "_1_"+k.toString()   ).checked ||  document.getElementById(question + "_2_"+k.toString()  ).checked ||document.getElementById(question + "_3_"+k.toString()  ).checked)){
                  console.log("yay");
                 (document.getElementById(question + "_1_" +k ).disabled) = false;
                   (document.getElementById(question + "_2_" +k ).disabled) = false;
                   (document.getElementById(question+ "_3_" +k ).disabled )= false;
                }
                
              
            }

            


            for(var k=1;k<4;k++){//disabledowanie 
              for(var l=1;l<4;l++){
                if(k!=number && l==point)document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).disabled = true;
                
              }
            }
            

          }
        }
 
  }
  
  else {
      document.getElementById("disp").innerHTML
          = "No one selected";
  }
}


function done(){
  var mentor=0;
  var coach=0;
  var doradca=0;
  var ele = document.getElementsByTagName('input');
    

       


        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                 
                }
                    

            }
        


          }


  var p=Array.from(d);
 
  
coach=parseInt(p[2])+parseInt(p[4])+parseInt(p[7])+parseInt(p[9])+parseInt(p[14])+parseInt(p[15])+parseInt(p[18])+parseInt(p[22])+parseInt(p[25])+parseInt(p[28]);
mentor=parseInt(p[0])+parseInt(p[5])+parseInt(p[6])+parseInt(p[11])+parseInt(p[12])+parseInt(p[17])+parseInt(p[20])+parseInt(p[23])+parseInt(p[24])+parseInt(p[29]);
doradca=parseInt(p[1])+parseInt(p[3])+parseInt(p[8])+parseInt(p[10])+parseInt(p[13])+parseInt(p[16])+parseInt(p[19])+parseInt(p[21])+parseInt(p[26])+parseInt(p[27]);
console.log(mentor)

if(isNaN(coach) || isNaN(mentor) || isNaN(doradca))
{
  alert ("Wszystkie pola muszą być uzupełnione!");
}
else
{
  document.getElementById("disp").innerHTML
  +=  " Coach: "
  + coach + "<br>"
  
    + " Mentor: "
  + mentor + "<br>"
  
   + " Doradca: "
  + doradca + "<br>";
}



}


function reset(id) {

  for(var k=1;k<4;k++){//czyszczenie
    for(var l=1;l<4;l++){

      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).disabled = false;
      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).checked = false;
      //document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).checked = false;

      //document.getElementById("0_1_3").disabled = false;
    }
  }

} 