import React from 'react'

async function page({params}) {
console.log(params);

const inp=params.userinp;

const getData=async()=>{
  const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)
  const data=await res.json();
  console.log(data.meals);
  const info=data.meals[0];
  return info;
  
}
 const mealdata=await getData();

 
  return (

    <div>
       <h1>{mealdata.strMeal}</h1>
       <img src={mealdata.strMealThumb} alt="" className='w-4/12 h-80'/>
    </div>
  )
}

export default page