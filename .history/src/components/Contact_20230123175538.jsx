import React from 'react'
import { useEffect } from 'react'
import { db } from '../firebase'

export default function Contact({userRef, listing}) {
    useEffect(()=> {
        async function getLandlord(){
            const docRef = <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                
            </body>
            </html>(db, 'users')
        }
    }, [])
  return (
    <div>Contact</div>
  )
}
