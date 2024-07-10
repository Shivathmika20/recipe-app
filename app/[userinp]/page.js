import { Heading2, Heading3 } from 'lucide-react';
import React from 'react'

async function page({params}) {
// console.log(params);

const inp=params.userinp;

const getData=async()=>{
 
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)
    const data=await res.json();
    console.log(data.meals);
    // if (data.meals === null) {
    //   console.log("Dish Not Found");
    //   return "Dish Not Found"; // Handle this in your UI
    // }
   
    const info=data.meals[0];
    return info;
  
 
  // if (data.meals && Array.isArray(data.meals) && data.meals.length > 0) {
  //   const info = data.meals[0];
    
  //   return info;
  // }
  
}
 const mealdata=await getData();

 let c=1;
 const a=[];
 for(const i in mealdata){
  if(i.startsWith('strIngredient') && mealdata[i]!==''){
    const ingre=mealdata[i];
    const quan=mealdata[`strMeasure${c}`];
    a.push({ingre,quan});
    c=c+1;
  }
 }
//  console.log(a);  



 
  return (

    <div className='flex flex-col justify-center items-center my-16 mx-16 space-y-3 '>
       <div className='text-center'>
       <h1 className='text-xl font-bold sm:2xl md:text-3xl'>{mealdata.strMeal}</h1>
       <h4 className='text-lg sm:xl '>{mealdata.strArea}</h4>
       </div>
       <img src={mealdata.strMealThumb} alt="" className='w-full sm:h-80 sm:w-7/12'/>


       <div className='flex flex-col items-center pt-10'>
        <h1 className='text-xl font-bold sm:text-2xl md:text-3xl text-center'>
          Ingredients
        </h1>
        <ul className='mt-4 mb-8 pl-8 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:place-content-center'>
          {a.map((i)=>{
            return <li className='text-lg list-disc' key={i}>{i.ingre} : {i.quan}</li>
          })}
        </ul>
        
       </div>


       <div className='space-y-4'>
          <h1 className='text-xl font-bold sm:text-2xl md:text-3xl text-center'>
              Procedure
            </h1>
           <p className='whitespace-pre-wrap px-1 max-w-4xl '>
              {mealdata.strInstructions}
          </p> 
       </div>
    </div>
  )
}

export default page