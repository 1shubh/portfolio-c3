import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {Box,Button,Grid,Heading,Image,Text} from "@chakra-ui/react"
import Link from "next/link"
import ProjectsFolder from './projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home({portfolio}) {
  console.log(portfolio)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
           <Box display={"flex"} marginTop="10px" justifyContent={"space-around"}>
             <Grid border="0px solid black" w={"25%"} gap="10px">
                <Box backgroundColor={"orange"} textAlign={"center"} border="0px solid black" borderRadius={"10px"} display="grid"  gap="10px" padding={"20px"}>
                   <Image margin={"auto"} w={"30%"} borderRadius="55%" src={portfolio.avatar_url} alt="avatar" />
                   <Heading size={"md"}>{portfolio.name}</Heading>
                   <Text>{portfolio.login}</Text>
                   <Text fontSize={"sm"}>{portfolio.bio}</Text>
                   <Box gap={"10px"} display="flex" justifyContent={"space-around"} margin={"auto"}>
                   <Link href={`../resume/resume.pdf`} download><Button backgroundColor={"yellow"}>Resume</Button></Link>
                    <Link href={portfolio.html_url}><Button backgroundColor={"blueviolet"} color="white">Follow</Button></Link>
                   </Box>
                </Box>  
                <Box backgroundColor={"orange"} display={"grid"} gap="10px" gridTemplateColumns={"repeat(3,1fr)"} padding={"50px"} borderRadius="10px">
                  <Text borderRadius={"10px"} background={"blueviolet"}  color="white" padding={"5px"} textAlign={"center"}>HTML</Text>
                  <Text  borderRadius={"10px"} background={"blueviolet"}  color="white" padding={"5px"} textAlign={"center"}>CSS</Text>
                  <Text  borderRadius={"10px"} background={"blueviolet"}  color="white" padding={"5px"} textAlign={"center"}>JavaScript</Text>
                  <Text borderRadius={"10px"}  background={"blueviolet"}  color="white" padding={"5px"} textAlign={"center"}>ReactJS</Text>
                  <Text  borderRadius={"10px"} background={"blueviolet"}  color="white" padding={"5px"} textAlign={"center"}>TypeScript</Text>
                </Box> 
                <Box backgroundColor={"orange"} padding={"50px"} borderRadius="10px">
                  <Heading size={"md"}>Education</Heading>
                  <Text>Masai School 2022 to Present</Text>
                  <Text>Btech (Electronics and Instrumentation) 2013-2017</Text>
                </Box> 
             </Grid> 
             <Box w={"70%"}>
             <ProjectsFolder/>
             </Box> 
           </Box>
      </main>
    </>
  )
}

export async function getServerSideProps(){
  let res = await fetch(`https://api.github.com/users/1shubh`);
  let data = await res.json();

  return {
      props : {
        portfolio : data
      }
  }
}