import React, {useState,  useEffect} from 'react'
const apiUrl = 'https://api.mercadolibre.com/sites/MLA/'


const ApiData = () => {

  const [list, setList] = useState('')

  useEffect(() => {
    fetch(`${apiUrl}categories`).then(res => res.json()).then(data => 
    {  setList(data)
      console.log(data)
}      )

   
  }, [])
  
  // const listOfCategories = (
  //   <ul>
  //     {(list).map((post) =>
  //      ( <li key={post.id}>
  //           {post.name}
  //       </li>
  //     )
  //     )}
  //   </ul>
  // );

  return (
  <>
    {/* {listOfCategories} */}
  </>
  )
}

export default ApiData;