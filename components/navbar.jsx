import React from 'react'
import { Box, Text,Image } from '@chakra-ui/react'
import Link from "next/link"

const Navbar = () => {
  return (
    <Box display={"flex"} borderBottom={"0px solid black"} justifyContent={"space-between"} alignItems="center" backgroundColor={"orange"}>
      <Box display={"flex"} gap="20px" marginLeft={"70px"}>
      <Link href={"/"}><Text>Shubham Kumar</Text></Link>
      <Link href={"/projects"}><Text>Projects</Text></Link>
      <Link href={"/experience"}><Text>Education</Text></Link>
      </Box>
      <Box>
        <Image w={"15%"} borderRadius="55%" src="https://avatars.githubusercontent.com/u/84219043?v=4" alt="avatar"/>
      </Box>
    </Box>
  )
}

export default Navbar
