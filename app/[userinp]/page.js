import { Heading2, Heading3 } from 'lucide-react';
import React from 'react'

async function page({params}) {
// console.log(params);

const inp=params.userinp;

const getData=async()=>{
 
    
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)
    const data=await res.json();
    console.log(data.meals);
    return data.meals ? data.meals[0] : null;
 
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
 

  return (
  (mealdata!==null )?
  (
    <div className='flex flex-col justify-center items-center my-16 mx-10  '>
       <div className='text-center pb-4'>
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
           <p className='whitespace-pre-wrap md:max-w-4xl '>
              {mealdata.strInstructions}
          </p> 
       </div>
    </div>
  ):
  (
    <div className='flex flex-col justify-center items-center my-16 '>
        <h1 className='text-xl font-bold sm:2xl md:text-3xl text-center'>
            Meal not found
        </h1>
       
    </div>
  )
  )
}

export default page