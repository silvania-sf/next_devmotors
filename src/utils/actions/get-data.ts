import { redirect } from "next/navigation"
import { json } from "stream/consumers"

export async function getDataHome(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/682cc858c60b6921b0201ef1?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
            {next: {revalidate: 120}}
        )
        
        if(!res.ok){
            throw new Error('Falha ao carregar dados')
        }

        return res.json()
    }catch(err){
        throw new Error('Falha ao carregar dados')
    }
}

export async function getSubMenu(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
            {next: {revalidate: 120}}
        )
        
        if(!res.ok){
            throw new Error('Falha ao carregar dados')
        }

        return res.json()   
    }catch(err){
        throw new Error('Falha ao carregar dados')
    }
}

export async function getItemBySlug(itemSlug: string){
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    //Definindo o objeto de consulta pelo slug
    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }),
        props: 'slug, title, content, metadata',
        read_key: process.env.READ_KEY as string
    })

    const url = `${baseUrl}?${queryParams.toString()}`

    try{
        const res = await fetch(url, {next: {revalidate: 120}})
        
        if(!res.ok){
            throw new Error('Falha ao obter item por slug')
        }

        return res.json()  
    } catch(err){
        //console.log(err)
        redirect('/')
    }
}