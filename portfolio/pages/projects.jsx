import { Box, Heading,Text } from '@chakra-ui/react'
import Link from "next/link"
import React, { useEffect, useState } from 'react'
const username = "1shubh"
const ProjectsFolder = () => {
    const [data,setData] = useState([])
    const getData = async() => {
        let res = await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`);
        let data = await res.json();
        setData(data.items)
    }
    console.log(data)
    useEffect(()=>{
        getData()
    },[])

  return (
    <>
    <Heading textAlign={"center"}>Projects</Heading>
    <Box display="grid" gridTemplateColumns={"repeat(3,1fr)"} gap="20px" marginTop={"10px"}>
      {data.map((ele)=>(
        <Link key={ele.id} href={ele.html_url}><Box backgroundColor={"orange"} border="0px solid black" padding={"20px"} borderRadius="10px">
            <Heading size={"md"}>{ele.name}</Heading>
            <Text>{ele.description}</Text>
            <Text>{ele.forks_count}</Text>
            <Text>{ele.language}</Text>
        </Box></Link>
      ))}
    </Box>
    </>
  )
}

// export async function getServerSideProps(){
//     let res = await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`);
//     let data = await res.json();
//     return {
//         props : {
//           projects : data.items
//         }
//     }
//   }

export default ProjectsFolder
